import React, { useEffect, useRef } from 'react';
import { audioApparatus } from '../lib/audioEngine';

interface AudioVisualizerProps {
  isPlaying: boolean;
  preset: string | null;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isPlaying, preset }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      animId = requestAnimationFrame(render);
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = 'rgba(18, 20, 21, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Fine grid background overlay
      ctx.strokeStyle = 'rgba(61, 96, 81, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const analyser = audioApparatus.getAnalyser();

      if (isPlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#4e7a67';
        ctx.beginPath();

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);

          x += sliceWidth;
        }

        ctx.lineTo(width, height / 2);
        ctx.stroke();

        // Secondary spectral bars
        const freqArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqArray);
        const barWidth = (width / 32) - 2;
        for (let i = 0; i < 32; i++) {
          const barHeight = (freqArray[i * 4] / 255) * (height / 2);
          ctx.fillStyle = 'rgba(128, 53, 68, 0.4)';
          ctx.fillRect(i * (barWidth + 2), height - barHeight, barWidth, barHeight);
        }
      } else {
        // Idle ambient scanline waveform simulation
        const time = Date.now() * 0.002;
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#3d454a';
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.04 + time) * 8 + Math.sin(x * 0.1 - time * 0.5) * 4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying, preset]);

  return (
    <div className="relative border border-[var(--border-color)] bg-[var(--bg-primary)] p-2 rounded">
      <div className="flex items-center justify-between text-[10px] font-mono-tech text-[var(--text-dim)] mb-1 uppercase tracking-wider">
        <span>Signal Oscilloscope &bull; FFT Analysis</span>
        <span>{isPlaying ? `Preset: ${preset}` : 'Apparatus Standby'}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={480}
        height={100}
        className="w-full h-24 bg-[var(--bg-primary)] rounded border border-[var(--border-accent)]"
      />
    </div>
  );
};
