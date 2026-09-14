import React, { useState } from 'react';
import { Layers, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

interface SchematicViewerProps {
  type: string;
  catalogId: string;
  title: string;
  materials?: string[];
}

export const SchematicViewer: React.FC<SchematicViewerProps> = ({ type, catalogId, title, materials }) => {
  const [activeLayer, setActiveLayer] = useState<'schematic' | 'signal' | 'materials'>('schematic');
  const [zoom, setZoom] = useState(1);

  return (
    <div className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-4 font-mono-tech">
      {/* Schematic Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--border-color)] text-xs">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-[var(--accent-green-bright)]" />
          <span className="font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Technical Schematic &bull; {catalogId}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveLayer('schematic')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
              activeLayer === 'schematic' ? 'bg-[var(--accent-green)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
            }`}
          >
            Blueprint
          </button>
          <button
            onClick={() => setActiveLayer('signal')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
              activeLayer === 'signal' ? 'bg-[var(--accent-green)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
            }`}
          >
            Signal Flow
          </button>
          <button
            onClick={() => setActiveLayer('materials')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
              activeLayer === 'materials' ? 'bg-[var(--accent-green)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
            }`}
          >
            Material Bill
          </button>

          <div className="flex items-center space-x-1 pl-2 border-l border-[var(--border-color)]">
            <button
              onClick={() => setZoom(z => Math.min(1.5, z + 0.1))}
              className="p-1 hover:text-[var(--text-primary)] text-[var(--text-muted)]"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(z => Math.max(0.8, z - 0.1))}
              className="p-1 hover:text-[var(--text-primary)] text-[var(--text-muted)]"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="p-1 hover:text-[var(--text-primary)] text-[var(--text-muted)]"
              title="Reset Zoom"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Canvas Frame */}
      <div className="relative border border-[var(--border-color)] bg-[var(--bg-primary)] bg-tech-grid p-6 rounded overflow-hidden flex items-center justify-center min-h-[260px]">
        <div style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease' }} className="w-full max-w-lg">
          {activeLayer === 'schematic' && (
            <svg viewBox="0 0 500 220" className="w-full h-auto text-[var(--text-primary)]">
              {/* Technical Drawing Border */}
              <rect x="5" y="5" width="490" height="210" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />

              {/* Central Chamber / Transducer Diagram */}
              <circle cx="250" cy="110" r="65" fill="none" stroke="var(--accent-green)" strokeWidth="2" />
              <circle cx="250" cy="110" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="250" cy="110" r="15" fill="var(--accent-burgundy)" opacity="0.6" />

              {/* Electromagnetic Coils */}
              <path d="M120 110 H185" stroke="currentColor" strokeWidth="1.5" />
              <path d="M315 110 H380" stroke="currentColor" strokeWidth="1.5" />

              <rect x="90" y="90" width="30" height="40" fill="none" stroke="var(--accent-amber)" strokeWidth="1.5" />
              <rect x="380" y="90" width="30" height="40" fill="none" stroke="var(--accent-amber)" strokeWidth="1.5" />

              {/* Component Callouts */}
              <line x1="250" y1="45" x2="250" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <text x="250" y="10" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">
                [A1] CAVITY CHAMBER
              </text>

              <line x1="105" y1="90" x2="105" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <text x="105" y="32" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">
                [B2] BIAS COIL
              </text>

              <line x1="395" y1="130" x2="395" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <text x="395" y="192" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">
                [C3] PIEZO SENSOR
              </text>

              {/* Grid Measurements */}
              <path d="M40 180 H460" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <text x="50" y="195" fill="var(--text-dim)" fontSize="8" fontFamily="monospace">SCALE: 1:2.5 METRIC</text>
              <text x="450" y="195" fill="var(--text-dim)" fontSize="8" fontFamily="monospace" textAnchor="end">ZIAA-CAD-REV4</text>
            </svg>
          )}

          {activeLayer === 'signal' && (
            <div className="space-y-4 py-4 font-mono-tech text-xs">
              <div className="text-[11px] font-bold text-[var(--accent-green-bright)] mb-2 uppercase tracking-wider">
                Signal Processing &amp; Transduction Path
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 border border-[var(--border-color)] p-3 rounded bg-[var(--bg-secondary)]">
                <div className="p-2 border border-[var(--border-accent)] rounded bg-[var(--bg-tertiary)] text-center w-full">
                  <div className="text-[10px] text-[var(--text-dim)]">STAGE 1</div>
                  <div className="font-semibold text-[var(--text-primary)]">EXCITATION INPUT</div>
                  <div className="text-[10px] text-[var(--accent-amber)]">0.1 Hz – 20 Hz</div>
                </div>
                <div className="text-[var(--accent-green)] font-bold">&rarr;</div>
                <div className="p-2 border border-[var(--border-accent)] rounded bg-[var(--bg-tertiary)] text-center w-full">
                  <div className="text-[10px] text-[var(--text-dim)]">STAGE 2</div>
                  <div className="font-semibold text-[var(--text-primary)]">FLUID MATRIX</div>
                  <div className="text-[10px] text-[var(--accent-burgundy-bright)]">Magnetic Bias 0.8T</div>
                </div>
                <div className="text-[var(--accent-green)] font-bold">&rarr;</div>
                <div className="p-2 border border-[var(--border-accent)] rounded bg-[var(--bg-tertiary)] text-center w-full">
                  <div className="text-[10px] text-[var(--text-dim)]">STAGE 3</div>
                  <div className="font-semibold text-[var(--text-primary)]">AUDIBLE OUTPUT</div>
                  <div className="text-[10px] text-[var(--accent-green-bright)]">Microtonal Harmonics</div>
                </div>
              </div>
            </div>
          )}

          {activeLayer === 'materials' && (
            <div className="py-2 text-xs font-mono-tech">
              <div className="text-[11px] font-bold text-[var(--accent-amber)] mb-2 uppercase tracking-wider">
                Material Specifications &amp; Chemical Tolerances
              </div>
              <ul className="space-y-1.5 divide-y divide-[var(--border-color)]">
                {(materials || ['Borosilicate Glass 3.3', 'Fe3O4 Nanoparticle Fluid', 'PZT-8 Piezo Disk', 'Copper Magnet Wire 0.8mm']).map((mat, idx) => (
                  <li key={idx} className="pt-1.5 flex items-center justify-between text-[11px]">
                    <span className="text-[var(--text-primary)]">{mat}</span>
                    <span className="text-[10px] text-[var(--text-dim)] font-mono">SPEC-MAT-{idx + 101}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
