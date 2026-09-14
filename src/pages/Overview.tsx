import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu, FileCheck, Calendar, BookOpen, Volume2, ShieldCheck, ArrowRight, Activity, Radio, Layers, Database } from 'lucide-react';
import { prototypesData } from '../data/prototypes';
import { patentsData } from '../data/patents';
import { logsData } from '../data/logs';
import { papersData } from '../data/papers';
import { audioApparatus } from '../lib/audioEngine';
import { AudioVisualizer } from '../components/AudioVisualizer';

export const Overview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<string | null>(null);

  const featuredPrototype = prototypesData.find(p => p.id === 'ZIAA-PROTO-084') || prototypesData[0];
  const recentLogs = logsData.slice(0, 4);
  const featuredPapers = papersData.slice(0, 3);
  const featuredPatents = patentsData.slice(0, 3);

  const toggleAudio = (preset: string) => {
    if (isPlaying && currentPreset === preset) {
      audioApparatus.stop();
      setIsPlaying(false);
      setCurrentPreset(null);
    } else {
      audioApparatus.playPreset(preset, 0.6);
      setIsPlaying(true);
      setCurrentPreset(preset);
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Institutional Monograph Header */}
      <section className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 sm:p-10 relative overflow-hidden bg-tech-dots">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] font-mono-tech text-xs text-[var(--accent-green-bright)] uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5" />
            <span>Independent R&amp;D Division of Zazie Productions LLC</span>
          </div>

          <h1 className="font-serif-editorial font-bold text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)] leading-tight">
            Zazie Institute of Applied Anomalies
          </h1>

          <p className="font-serif-editorial text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
            Laboratory archive for experimental audio technologies, creative tools, speculative patents, perceptual interfaces, signal archaeology, material research, generative composition systems, and public listening infrastructure.
          </p>

          <p className="font-mono-tech text-xs text-[var(--text-dim)] leading-relaxed max-w-3xl">
            Established in 2021 as a five-year non-commercial speculative inquiry. Operating across 5 research divisions with 120+ material prototype records, 75+ speculative patent dossiers, 250+ lab logs, and longform technical monographs.
          </p>

          {/* Key Archive Statistics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--border-color)] font-mono-tech text-xs">
            <div className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-dim)] text-[10px] uppercase">Prototypes Cataloged</div>
              <div className="font-bold text-xl text-[var(--text-primary)] mt-0.5">120 Records</div>
              <div className="text-[10px] text-[var(--accent-green-bright)] mt-1">5 Divisions Active</div>
            </div>

            <div className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-dim)] text-[10px] uppercase">Speculative Patents</div>
              <div className="font-bold text-xl text-[var(--text-primary)] mt-0.5">75 Dossiers</div>
              <div className="text-[10px] text-[var(--accent-burgundy-bright)] mt-1">Defensive Filings</div>
            </div>

            <div className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-dim)] text-[10px] uppercase">Laboratory Logs</div>
              <div className="font-bold text-xl text-[var(--text-primary)] mt-0.5">250+ Entries</div>
              <div className="text-[10px] text-[var(--accent-amber)] mt-1">2021–2026 Telemetry</div>
            </div>

            <div className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-dim)] text-[10px] uppercase">Technical Papers</div>
              <div className="font-bold text-xl text-[var(--text-primary)] mt-0.5">12 Monographs</div>
              <div className="text-[10px] text-[var(--text-muted)] mt-1">BibTeX Exporter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prototype Spotlight & Live Audio Engine */}
      <section className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 font-mono-tech space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--accent-green-bright)] font-semibold flex items-center">
              <Activity className="w-4 h-4 mr-2" /> Featured Hardware Prototype &bull; {featuredPrototype.id}
            </div>
            <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)] mt-1">
              {featuredPrototype.title}
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{featuredPrototype.subtitle}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleAudio(featuredPrototype.audioPreset || 'ferrofluid')}
              className={`px-4 py-2 rounded text-xs uppercase font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-[var(--accent-burgundy)] text-white animate-pulse'
                  : 'bg-[var(--accent-green)] text-white hover:bg-[var(--accent-green-bright)]'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlaying ? 'Halt Audio Engine' : 'Listen Live Demo'}</span>
            </button>
            <NavLink
              to={`/prototypes/${featuredPrototype.id}`}
              className="px-3 py-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--accent-green)] text-xs uppercase"
            >
              Full Dossier &rarr;
            </NavLink>
          </div>
        </div>

        {/* Live Audio Visualizer Canvas */}
        <AudioVisualizer isPlaying={isPlaying} preset={currentPreset} />

        {/* Abstract & Question Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
          <div>
            <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider mb-1 font-bold">Research Question</div>
            <p className="font-serif-editorial italic text-sm text-[var(--text-primary)] leading-relaxed">
              "{featuredPrototype.researchQuestion}"
            </p>
          </div>
          <div>
            <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider mb-1 font-bold">Material Composition</div>
            <ul className="list-disc list-inside text-[var(--text-muted)] space-y-0.5">
              {featuredPrototype.materials.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research Divisions Grid */}
      <section className="space-y-4 font-mono-tech">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
            Research Divisions
          </h2>
          <NavLink to="/prototypes" className="text-xs text-[var(--accent-green-bright)] hover:underline flex items-center">
            View All 120 Prototypes <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: 'Signal Archaeology',
              desc: 'Physical magnetic tape erosion, oxide hysteresis, natural VLF radio, and historical audio media reclamation.',
              count: '24 Records'
            },
            {
              name: 'Perceptual Interfaces',
              desc: 'Parametric ultrasonic difference tones, bone conduction, psychoacoustic masking, and phantom auditory phenomena.',
              count: '25 Records'
            },
            {
              name: 'Material Acoustics',
              desc: 'Magnetorheological ferrofluid resonators, timber piezo contact arrays, and sub-wavelength metamaterial traps.',
              count: '24 Records'
            },
            {
              name: 'Generative Systems',
              desc: 'Robotic tape re-splicing, micro-granular memory buffers, and physical jog-wheel hardware algorithms.',
              count: '24 Records'
            },
            {
              name: 'Spatial Infrastructures',
              desc: 'Subterranean bedrock waveguides, dark-sky soundscape post monitoring, and geophonic impedance arrays.',
              count: '23 Records'
            }
          ].map((div) => (
            <NavLink
              key={div.name}
              to={`/prototypes?division=${encodeURIComponent(div.name)}`}
              className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-green-bright)]">
                    {div.name}
                  </span>
                  <span className="text-[10px] text-[var(--accent-amber)] font-mono">{div.count}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  {div.desc}
                </p>
              </div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider group-hover:text-[var(--text-primary)] flex items-center">
                Explore Division Index &rarr;
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Latest Laboratory Logs & Field Telemetry */}
      <section className="space-y-4 font-mono-tech">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-[var(--accent-amber)]" />
            Recent Laboratory Telemetry Dispatches
          </h2>
          <NavLink to="/logs" className="text-xs text-[var(--accent-amber)] hover:underline flex items-center">
            View All 250+ Lab Logs <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                <span className="px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-amber)] font-bold">
                  {log.category}
                </span>
                <span>{log.date} &bull; {log.id}</span>
              </div>
              <h3 className="font-bold text-sm text-[var(--text-primary)] leading-tight">
                {log.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                {log.summary}
              </p>
              <div className="pt-2 flex items-center justify-between text-[10px] text-[var(--text-dim)] border-t border-[var(--border-color)]">
                <span>Researcher: {log.author}</span>
                <NavLink to={`/logs?id=${log.id}`} className="text-[var(--accent-green-bright)] hover:underline">
                  Read Log Record &rarr;
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speculative Patents & Technical Papers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono-tech">
        {/* Speculative Patents */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] flex items-center">
              <FileCheck className="w-5 h-5 mr-2 text-[var(--accent-burgundy-bright)]" />
              Speculative Patent Office
            </h2>
            <NavLink to="/patents" className="text-xs text-[var(--accent-burgundy-bright)] hover:underline">
              All 75 Dossiers &rarr;
            </NavLink>
          </div>
          <div className="space-y-3">
            {featuredPatents.map((pat) => (
              <NavLink
                key={pat.id}
                to={`/patents?id=${pat.id}`}
                className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-burgundy)] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="text-[var(--accent-burgundy-bright)] font-bold">{pat.id}</span>
                  <span>Status: {pat.status}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{pat.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-2">{pat.abstract}</p>
              </NavLink>
            ))}
          </div>
        </section>

        {/* Technical Papers */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-[var(--accent-green-bright)]" />
              Zazie Technical Papers
            </h2>
            <NavLink to="/papers" className="text-xs text-[var(--accent-green-bright)] hover:underline">
              All Monographs &rarr;
            </NavLink>
          </div>
          <div className="space-y-3">
            {featuredPapers.map((paper) => (
              <NavLink
                key={paper.id}
                to={`/papers?id=${paper.id}`}
                className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="text-[var(--accent-green-bright)] font-bold">{paper.id}</span>
                  <span>{paper.publishedDate}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{paper.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-2">{paper.abstract}</p>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
