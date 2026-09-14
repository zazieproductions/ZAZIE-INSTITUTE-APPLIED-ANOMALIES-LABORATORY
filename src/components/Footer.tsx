import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, FileText, Rss, Lock, Award, Server } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] text-xs font-mono-tech">
      {/* Speculative Notice Banner */}
      <div className="bg-[var(--bg-tertiary)] border-b border-[var(--border-color)] px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-[var(--accent-burgundy-bright)] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold uppercase tracking-wider text-[11px] text-[var(--text-primary)]">
                Speculative Research &amp; Non-Commercial Project Disclaimer
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed max-w-4xl">
                ZIAA is an independent speculative research archive and non-commercial laboratory project operated by Zazie Productions LLC. All patents, dossiers, prototypes, schematics, logs, and essays are transparently speculative artistic creations and experimental audio research. They do not represent real government patents, commercial medical products, surveillance systems, or certified industrial safety gear.
              </p>
            </div>
          </div>
          <NavLink
            to="/policies"
            className="shrink-0 px-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--accent-green)] transition-colors text-[11px] uppercase tracking-wider font-mono-tech"
          >
            Read Institutional Policies &rarr;
          </NavLink>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-serif-editorial font-bold text-base text-[var(--text-primary)] mb-2">
            ZAZIE INSTITUTE (ZIAA)
          </div>
          <p className="text-[11px] text-[var(--text-dim)] leading-relaxed mb-4">
            Independent laboratory for experimental audio technologies, creative tools, speculative patents, perceptual interfaces, signal archaeology, and public listening infrastructure.
          </p>
          <div className="text-[10px] text-[var(--text-dim)]">
            Catalog Release: v5.2.0 (2026 Edition)<br />
            Archive Records: 120 Prototypes &bull; 75 Patents &bull; 250+ Logs
          </div>
        </div>

        <div>
          <div className="font-semibold uppercase tracking-widest text-[11px] text-[var(--text-primary)] mb-3 border-b border-[var(--border-color)] pb-1">
            Research Divisions
          </div>
          <ul className="space-y-2 text-[11px]">
            <li><NavLink to="/prototypes?division=Signal+Archaeology" className="hover:text-[var(--accent-green)] transition-colors">Signal Archaeology</NavLink></li>
            <li><NavLink to="/prototypes?division=Perceptual+Interfaces" className="hover:text-[var(--accent-green)] transition-colors">Perceptual Interfaces</NavLink></li>
            <li><NavLink to="/prototypes?division=Material+Acoustics" className="hover:text-[var(--accent-green)] transition-colors">Material Acoustics</NavLink></li>
            <li><NavLink to="/prototypes?division=Generative+Systems" className="hover:text-[var(--accent-green)] transition-colors">Generative Systems</NavLink></li>
            <li><NavLink to="/prototypes?division=Spatial+Infrastructures" className="hover:text-[var(--accent-green)] transition-colors">Spatial Infrastructures</NavLink></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold uppercase tracking-widest text-[11px] text-[var(--text-primary)] mb-3 border-b border-[var(--border-color)] pb-1">
            Archive Resources
          </div>
          <ul className="space-y-2 text-[11px]">
            <li><NavLink to="/patents" className="hover:text-[var(--accent-green)] transition-colors">Speculative Patent Office</NavLink></li>
            <li><NavLink to="/instruments" className="hover:text-[var(--accent-green)] transition-colors">Live Sound Experiments</NavLink></li>
            <li><NavLink to="/papers" className="hover:text-[var(--accent-green)] transition-colors">Technical Papers (Zazie Monographs)</NavLink></li>
            <li><NavLink to="/timeline" className="hover:text-[var(--accent-green)] transition-colors">5-Year Institutional Timeline</NavLink></li>
            <li><NavLink to="/search" className="hover:text-[var(--accent-green)] transition-colors">Cross-Reference Signal Graph</NavLink></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold uppercase tracking-widest text-[11px] text-[var(--text-primary)] mb-3 border-b border-[var(--border-color)] pb-1">
            Institutional Verification
          </div>
          <p className="text-[11px] text-[var(--text-dim)] mb-3">
            Open Documentation Charter &bull; Public Defensive Prior Art &bull; ZIAA Commons License
          </p>
          <div className="space-y-2">
            <a
              href="mailto:archive@zazie-inst.org"
              className="inline-flex items-center text-[11px] text-[var(--accent-green-bright)] hover:underline"
            >
              archive@zazie-inst.org
            </a>
            <div className="flex items-center space-x-2 text-[10px] text-[var(--text-dim)] pt-2">
              <Server className="w-3 h-3 text-[var(--accent-green)]" />
              <span>Host Node: ZIAA Vault B (Hudson Valley)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[var(--border-color)] px-4 py-4 text-center text-[10px] text-[var(--text-dim)]">
        &copy; 2021–2026 Zazie Institute of Applied Anomalies (ZIAA) &bull; Division of Zazie Productions LLC &bull; All Rights Reserved for Non-Commercial Speculative License.
      </div>
    </footer>
  );
};
