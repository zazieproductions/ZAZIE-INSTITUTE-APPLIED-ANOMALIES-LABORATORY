import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Database, Cpu, FileCheck, Calendar, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { prototypesData } from '../data/prototypes';
import { patentsData } from '../data/patents';
import { logsData } from '../data/logs';
import { papersData } from '../data/papers';

export const ArchiveSearch: React.FC = () => {
  const [query, setQuery] = useState('');

  const q = query.toLowerCase().trim();

  const matchingPrototypes = prototypesData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q)
  );

  const matchingPatents = patentsData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q)
  );

  const matchingLogs = logsData.filter(l =>
    !q || l.id.toLowerCase().includes(q) || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q)
  );

  const matchingPapers = papersData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q)
  );

  return (
    <div className="space-y-8 font-mono-tech">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <Database className="w-4 h-4" />
          <span>ZIAA Master Cross-Reference Signal Graph</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Archive Search &amp; Relational Discovery
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Cross-reference search engine linking hardware prototypes to defensive patents, laboratory telemetry logs, longform technical monographs, and resident research fellows.
        </p>
      </div>

      {/* Global Query Bar */}
      <div className="p-6 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-[var(--text-dim)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any keyword (e.g. ferrofluid, tape, infrasound, ultrasonic, piezoelectric, ZIAA-PROTO-084)..."
            className="w-full pl-12 pr-4 py-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-green)]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] pt-2">
          <span>Search Results: {matchingPrototypes.length} Prototypes &bull; {matchingPatents.length} Patents &bull; {matchingLogs.length} Logs &bull; {matchingPapers.length} Papers</span>
          {query && (
            <button onClick={() => setQuery('')} className="text-[var(--accent-burgundy-bright)] hover:underline uppercase text-[10px]">
              Reset Search Filter
            </button>
          )}
        </div>
      </div>

      {/* Relational Cross-Link Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prototypes */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-4">
          <div className="font-bold text-sm text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
            <span className="flex items-center"><Cpu className="w-4 h-4 mr-2 text-[var(--accent-green-bright)]" /> Prototypes ({matchingPrototypes.length})</span>
            <NavLink to="/prototypes" className="text-[10px] text-[var(--accent-green-bright)] hover:underline">Full Index &rarr;</NavLink>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {matchingPrototypes.slice(0, 8).map(p => (
              <NavLink key={p.id} to={`/prototypes/${p.id}`} className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors">
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="font-bold text-[var(--accent-burgundy-bright)]">{p.id}</span>
                  <span>{p.division}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{p.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{p.abstract}</p>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Patents */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-4">
          <div className="font-bold text-sm text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
            <span className="flex items-center"><FileCheck className="w-4 h-4 mr-2 text-[var(--accent-burgundy-bright)]" /> Speculative Patents ({matchingPatents.length})</span>
            <NavLink to="/patents" className="text-[10px] text-[var(--accent-burgundy-bright)] hover:underline">Full Office &rarr;</NavLink>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {matchingPatents.slice(0, 8).map(pat => (
              <NavLink key={pat.id} to={`/patents?id=${pat.id}`} className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-burgundy)] transition-colors">
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="font-bold text-[var(--accent-burgundy-bright)]">{pat.id}</span>
                  <span>{pat.filedDate}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{pat.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{pat.abstract}</p>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logs */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-4">
          <div className="font-bold text-sm text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[var(--accent-amber)]" /> Lab Telemetry Logs ({matchingLogs.length})</span>
            <NavLink to="/logs" className="text-[10px] text-[var(--accent-amber)] hover:underline">All 250+ Logs &rarr;</NavLink>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {matchingLogs.slice(0, 8).map(log => (
              <NavLink key={log.id} to={`/logs?id=${log.id}`} className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-amber)] transition-colors">
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="font-bold text-[var(--accent-amber)]">{log.id}</span>
                  <span>{log.date}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{log.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{log.summary}</p>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Papers */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-4">
          <div className="font-bold text-sm text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
            <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-[var(--accent-green-bright)]" /> Technical Papers ({matchingPapers.length})</span>
            <NavLink to="/papers" className="text-[10px] text-[var(--accent-green-bright)] hover:underline">All Monographs &rarr;</NavLink>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {matchingPapers.slice(0, 8).map(paper => (
              <NavLink key={paper.id} to={`/papers?id=${paper.id}`} className="block p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors">
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="font-bold text-[var(--accent-green-bright)]">{paper.id}</span>
                  <span>{paper.publishedDate}</span>
                </div>
                <div className="font-bold text-xs text-[var(--text-primary)] mt-1">{paper.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">{paper.abstract}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
