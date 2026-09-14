import React, { useState } from 'react';
import { Volume2, Play, Square, Sliders, Activity, Radio, Info } from 'lucide-react';
import { audioApparatus } from '../lib/audioEngine';
import { AudioVisualizer } from '../components/AudioVisualizer';

export const Instruments: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>('ferrofluid');
  const [paramVal, setParamVal] = useState<number>(0.5);
  const [masterVol, setMasterVol] = useState<number>(0.3);

  const presets = [
    {
      id: 'ferrofluid',
      name: '01. Ferrofluid Microtonal Cavity',
      desc: 'Dual microtonal sine wave oscillators passing through a non-linear wave-shaping distortion curve simulating magnetorheological fluid saturation.',
      paramLabel: 'Magnetic Flux Density (Tesla)'
    },
    {
      id: 'infrasonic',
      name: '02. Infrasonic Sub-Acoustic Resonator',
      desc: '35 Hz to 60 Hz deep binaural sub-bass pulse inducing tactile cranial beats.',
      paramLabel: 'Core Resonance Frequency (Hz)'
    },
    {
      id: 'tape_decay',
      name: '03. Magnetic Tape Loop Hysteresis',
      desc: 'Analogue tape drone with wow/flutter pitch modulation and bandpass iron-oxide noise floor.',
      paramLabel: 'Abrasion & Friction Wear Level'
    },
    {
      id: 'granular',
      name: '04. Granular Memory Buffer Scrubber',
      desc: 'Micro-granular audio chopper sweeping grain density from 4 Hz up to 20 Hz bursts.',
      paramLabel: 'Grain Frame Density (Hz)'
    },
    {
      id: 'psychoacoustic',
      name: '05. Parametric Difference-Tone Emitter',
      desc: 'Stereo carrier tones creating an auditioned phantom difference tone inside the ear canal.',
      paramLabel: 'Difference Offset Frequency'
    },
    {
      id: 'piezo',
      name: '06. Spruce Timber Structural Transducer',
      desc: 'Physical modeling inharmonic resonance simulator reproducing acoustic energy propagation in reclaimed spruce timber.',
      paramLabel: 'Grain Density Damping'
    }
  ];

  const handleStart = (presetId: string) => {
    setSelectedPreset(presetId);
    audioApparatus.playPreset(presetId, paramVal);
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioApparatus.stop();
    setIsPlaying(false);
  };

  const handleParamChange = (val: number) => {
    setParamVal(val);
    if (isPlaying) {
      audioApparatus.playPreset(selectedPreset, val);
    }
  };

  const handleVolumeChange = (vol: number) => {
    setMasterVol(vol);
    audioApparatus.setMasterVolume(vol);
  };

  const currentPresetObj = presets.find(p => p.id === selectedPreset) || presets[0];

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Header Bar */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <Activity className="w-4 h-4" />
          <span>Live Listening Laboratory &bull; Web Audio Synthesis Engine</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Instruments &amp; Perceptual Audio Experiments
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Interactive browser-based audio apparatus models reproducing ZIAA hardware inventions. Listen to, modulate, and analyze psychoacoustic difference tones, tape degradation, microtonal ferrofluids, and infrasonic sub-bass in real time.
        </p>
      </div>

      {/* Main Interactive Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Apparatus Selector */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-bold mb-2">
            Select Experimental Apparatus (6 Presets)
          </div>

          {presets.map((p) => (
            <div
              key={p.id}
              onClick={() => handleStart(p.id)}
              className={`p-4 rounded border transition-all cursor-pointer space-y-2 ${
                selectedPreset === p.id && isPlaying
                  ? 'border-[var(--accent-green)] bg-[var(--bg-tertiary)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-accent)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[var(--text-primary)]">{p.name}</span>
                {selectedPreset === p.id && isPlaying && (
                  <span className="flex items-center text-[10px] text-[var(--accent-green-bright)] font-bold animate-pulse">
                    <Radio className="w-3 h-3 mr-1" /> RUNNING
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Right 7 Cols: Controls & Oscilloscope */}
        <div className="lg:col-span-7 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
            <div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase font-bold">Active Sound Model</div>
              <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] mt-0.5">
                {currentPresetObj.name}
              </h2>
            </div>

            <button
              onClick={() => (isPlaying ? handleStop() : handleStart(selectedPreset))}
              className={`px-5 py-2.5 rounded text-xs uppercase font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-[var(--accent-burgundy)] text-white'
                  : 'bg-[var(--accent-green)] text-white hover:bg-[var(--accent-green-bright)]'
              }`}
            >
              {isPlaying ? (
                <>
                  <Square className="w-4 h-4" />
                  <span>Halt Output</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Engage Apparatus</span>
                </>
              )}
            </button>
          </div>

          {/* Real-Time FFT & Oscilloscope */}
          <AudioVisualizer isPlaying={isPlaying} preset={selectedPreset} />

          {/* Control Sliders */}
          <div className="space-y-4 bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)] text-xs">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-primary)] font-semibold">{currentPresetObj.paramLabel}</span>
                <span className="text-[var(--accent-amber)] font-bold">{(paramVal * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={paramVal}
                onChange={(e) => handleParamChange(parseFloat(e.target.value))}
                className="w-full accent-[var(--accent-green)] cursor-pointer"
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-primary)] font-semibold">Master Signal Amplitude (Volume)</span>
                <span className="text-[var(--accent-green-bright)] font-bold">{(masterVol * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={masterVol}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full accent-[var(--accent-green)] cursor-pointer"
              />
            </div>
          </div>

          {/* Acoustic Safety Notice */}
          <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] flex items-start space-x-2 text-[10px] text-[var(--text-muted)]">
            <Info className="w-4 h-4 text-[var(--accent-amber)] shrink-0 mt-0.5" />
            <p>
              Acoustic Safety Protocol: All audio synthesis models generate pure sine wave beat frequencies and sub-bass harmonics. Keep headphone volume at comfortable levels to avoid auditory fatigue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
