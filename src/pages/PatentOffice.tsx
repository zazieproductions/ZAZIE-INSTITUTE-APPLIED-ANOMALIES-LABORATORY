import React, { useState } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { FileCheck, Search, ShieldCheck, Layers, FileText, ChevronRight } from 'lucide-react';
import { patentsData } from '../data/patents';
import { PatentStatus, SpeculativePatent } from '../types/archive';

export const PatentOffice: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get('id');

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | PatentStatus>('All');

  const filteredPatents = patentsData.filter((pat) => {
    const matchesStatus = statusFilter === 'All' || pat.status === statusFilter;
    const matchesSearch =
      !search ||
      pat.title.toLowerCase().includes(search.toLowerCase()) ||
      pat.id.toLowerCase().includes(search.toLowerCase()) ||
      pat.abstract.toLowerCase().includes(search.toLowerCase()) ||
      pat.leadInventor.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const selectedPatent: SpeculativePatent =
    patentsData.find((p) => p.id === activeId) || filteredPatents[0] || patentsData[0];

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Header Monograph */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-burgundy-bright)] uppercase tracking-widest font-bold">
          <FileCheck className="w-4 h-4" />
          <span>Speculative Patent Office &bull; 75 Defensive Disclosures</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Patent-Study Dossier Archive
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Open disclosures published as non-commercial defensive prior art. These dossiers prevent private commercial enclosure of physical acoustic discoveries, magnetorheological fluid controls, and parametric ultrasonic interfaces.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[var(--text-dim)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search patents, claims, inventors..."
            className="w-full pl-9 pr-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 text-xs w-full md:w-auto">
          <span className="text-[var(--text-dim)] uppercase text-[10px]">Filing Status:</span>
          {(['All', 'Public Speculation', 'Defensive Filing', 'Closed Prototype', 'Expired Inquiry'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${
                statusFilter === st
                  ? 'bg-[var(--accent-burgundy)] text-white font-bold'
                  : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Layout: Left List, Right Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 4 Cols: Dossier Index List */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1 scrollbar-thin">
          <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider mb-2 font-bold">
            Showing {filteredPatents.length} Patents
          </div>
          {filteredPatents.map((pat) => (
            <div
              key={pat.id}
              onClick={() => setSearchParams({ id: pat.id })}
              className={`p-3 rounded border transition-all cursor-pointer space-y-1 ${
                selectedPatent.id === pat.id
                  ? 'border-[var(--accent-burgundy)] bg-[var(--bg-tertiary)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-accent)]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                <span className="font-bold text-[var(--accent-burgundy-bright)]">{pat.id}</span>
                <span>{pat.filedDate}</span>
              </div>
              <div className="font-bold text-xs text-[var(--text-primary)] leading-tight">{pat.title}</div>
              <div className="text-[10px] text-[var(--text-muted)] line-clamp-1">Inventor: {pat.leadInventor}</div>
            </div>
          ))}
        </div>

        {/* Right 8 Cols: Selected Patent Dossier Detail */}
        {selectedPatent && (
          <div className="lg:col-span-8 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-6">
            {/* Patent Header */}
            <div className="border-b border-[var(--border-color)] pb-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-base text-[var(--accent-burgundy-bright)]">{selectedPatent.id}</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] uppercase text-[10px]">
                  Status: {selectedPatent.status}
                </span>
              </div>

              <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)]">
                {selectedPatent.title}
              </h2>

              <div className="flex items-center space-x-4 text-xs text-[var(--text-dim)]">
                <span>Filed: {selectedPatent.filedDate}</span>
                <span>&bull;</span>
                <span>Lead Disclosure: {selectedPatent.leadInventor}</span>
              </div>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase text-[var(--accent-green-bright)]">Technical Abstract</div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)]">
                {selectedPatent.abstract}
              </p>
            </div>

            {/* Claims */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold uppercase text-[var(--accent-amber)]">Defensive Prior Art Claims</div>
              <ul className="space-y-2 text-xs">
                {selectedPatent.claims.map((claim, idx) => (
                  <li key={idx} className="p-2.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] font-serif-editorial">
                    {claim}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prior Art & Constraints Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="border border-[var(--border-color)] p-3 rounded bg-[var(--bg-primary)]">
                <div className="text-[10px] font-bold uppercase text-[var(--text-dim)] mb-1">Prior Art References</div>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                  {selectedPatent.priorArt.map((pa, idx) => (
                    <li key={idx}>{pa}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-[var(--border-color)] p-3 rounded bg-[var(--bg-primary)]">
                <div className="text-[10px] font-bold uppercase text-[var(--accent-burgundy-bright)] mb-1">Failure Modes &amp; Constraints</div>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                  {selectedPatent.knownFailureModes.map((fm, idx) => (
                    <li key={idx}>{fm}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Prototype Link */}
            {selectedPatent.relatedPrototypeId && (
              <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                <span className="text-[var(--text-dim)]">Linked Hardware Prototype:</span>
                <NavLink
                  to={`/prototypes/${selectedPatent.relatedPrototypeId}`}
                  className="text-[var(--accent-green-bright)] hover:underline flex items-center"
                >
                  View {selectedPatent.relatedPrototypeId} Dossier <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
