// ZIAA Live Web Audio Experimental Synthesis Engine
// Allows live listening to real psychoacoustic, ferrofluid, tape-decay, and infrasonic sound models

class ZIAAAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentPreset: string | null = null;
  private masterGain: GainNode | null = null;
  private activeNodes: (OscillatorNode | BiquadFilterNode | GainNode | WaveShaperNode | AudioNode)[] = [];
  private analyser: AnalyserNode | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 2048;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3; // Default safe level
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public stop() {
    if (this.ctx) {
      this.activeNodes.forEach(node => {
        try {
          if ('stop' in node && typeof (node as OscillatorNode).stop === 'function') {
            (node as OscillatorNode).stop();
          }
          node.disconnect();
        } catch (e) {
          // Ignore clean disconnect errors
        }
      });
      this.activeNodes = [];
    }
    this.isPlaying = false;
    this.currentPreset = null;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentPreset(): string | null {
    return this.currentPreset;
  }

  public playPreset(preset: string, paramVal = 0.5) {
    this.stop();
    this.initCtx();
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    this.currentPreset = preset;

    switch (preset) {
      case 'infrasonic':
        this.startInfrasonic(paramVal);
        break;
      case 'tape_decay':
        this.startTapeDecay(paramVal);
        break;
      case 'ferrofluid':
        this.startFerrofluid(paramVal);
        break;
      case 'granular':
        this.startGranular(paramVal);
        break;
      case 'psychoacoustic':
        this.startPsychoacoustic(paramVal);
        break;
      case 'piezo':
        this.startPiezo(paramVal);
        break;
      default:
        this.startFerrofluid(paramVal);
        break;
    }
  }

  public setMasterVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime, 0.05);
    }
  }

  private startInfrasonic(intensity: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Deep sub bass pulse (35 Hz + 41 Hz binaural beat)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc2.type = 'sine';

    const baseFreq = 35 + intensity * 25; // 35-60Hz
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc2.frequency.setValueAtTime(baseFreq + 6, now); // 6Hz beat frequency

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);

    osc1.connect(filter);
    osc2.connect(filter);

    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    this.activeNodes.push(osc1, osc2, filter, gain);
  }

  private startTapeDecay(decayRate: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Warm tape drone with lfo wow/flutter and bandpass noise floor
    const drone = this.ctx.createOscillator();
    drone.type = 'sawtooth';
    drone.frequency.setValueAtTime(110, now); // A2 chord

    // LFO for wow/flutter
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.8 + decayRate * 2.0, now);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(4.0, now);
    lfo.connect(drone.frequency);

    // Filter with lowpass degradation
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    const cutoff = Math.max(200, 2500 - decayRate * 1800);
    filter.frequency.setValueAtTime(cutoff, now);

    // Hiss generator (white noise)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1400, now);
    noiseFilter.Q.setValueAtTime(1.5, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.04 + decayRate * 0.08, now);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    drone.connect(filter);
    filter.connect(this.masterGain);

    drone.start(now);
    lfo.start(now);
    whiteNoise.start(now);

    this.activeNodes.push(drone, lfo, lfoGain, filter, whiteNoise, noiseFilter, noiseGain);
  }

  private startFerrofluid(biasFlux: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Dual microtonal sine oscillators passing through non-linear wave shaper distortion
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc2.type = 'sine';

    const f1 = 146.83; // D3
    const f2 = 146.83 * Math.pow(2, (15 + biasFlux * 35) / 1200); // Microtonal pitch offset
    osc1.frequency.setValueAtTime(f1, now);
    osc2.frequency.setValueAtTime(f2, now);

    // Non-linear wave shaper curve for ferrofluid saturation
    const shaper = this.ctx.createWaveShaper();
    const curve = new Float32Array(256);
    const amount = 5 + biasFlux * 40;
    for (let i = 0; i < 256; ++i) {
      const x = (i * 2) / 256 - 1;
      curve[i] = ((3 + amount) * x * 20 * (Math.PI / 180)) / (Math.PI + amount * Math.abs(x));
    }
    shaper.curve = curve;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    osc1.connect(shaper);
    osc2.connect(shaper);
    shaper.connect(filter);
    filter.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    this.activeNodes.push(osc1, osc2, shaper, filter);
  }

  private startGranular(grainDensity: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Granular burst simulator using modulating frequency sweeps and rhythmic micro-grains
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);

    const lfo = this.ctx.createOscillator();
    lfo.type = 'square';
    lfo.frequency.setValueAtTime(4 + grainDensity * 16, now); // Grain rate 4Hz to 20Hz

    const grainGain = this.ctx.createGain();
    grainGain.gain.setValueAtTime(0.0, now);
    lfo.connect(grainGain.gain);

    osc.connect(grainGain);
    grainGain.connect(this.masterGain);

    osc.start(now);
    lfo.start(now);

    this.activeNodes.push(osc, lfo, grainGain);
  }

  private startPsychoacoustic(differenceOffset: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Pure carrier sine wave + slightly offset second tone generating phantom difference frequency
    const carrier = 440; // 440 Hz
    const diff = 4 + differenceOffset * 16; // 4Hz to 20Hz phantom difference

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(carrier, now);
    osc2.frequency.setValueAtTime(carrier + diff, now);

    osc1.connect(this.masterGain);
    osc2.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    this.activeNodes.push(osc1, osc2);
  }

  private startPiezo(damping: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Resonant metallic timber bar simulation (multiple inharmonic sine partials)
    const partials = [196, 392 * 1.02, 588 * 1.05, 882 * 1.09]; // Inharmonic spruce timber resonance
    partials.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const amp = 0.3 / (idx + 1);
      gain.gain.setValueAtTime(amp, now);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      this.activeNodes.push(osc, gain);
    });
  }
}

export const audioApparatus = new ZIAAAudioEngine();
