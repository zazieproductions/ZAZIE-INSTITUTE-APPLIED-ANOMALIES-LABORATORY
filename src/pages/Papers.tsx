import React, { useState } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { BookOpen, Search, Download, Copy, Check, ExternalLink, Calendar, User } from 'lucide-react';
import { papersData } from '../data/papers';
import { TechnicalPaper } from '../types/archive';

export const Papers: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get('id');

  const [copiedBib, setCopiedBib] = useState(false);
  const [search, setSearch] = useState('');

  const filteredPapers = papersData.filter(p =>
    !search ||
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.abstract.toLowerCase().includes(search.toLowerCase()) ||
    p.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedPaper: TechnicalPaper =
    papersData.find(p => p.id === activeId) || filteredPapers[0] || papersData[0];

  const handleCopyBibtex = () => {
    if (!selectedPaper) return;
    navigator.clipboard.writeText(selectedPaper.bibtex);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Zazie Technical Monograph Series &bull; Peer-Reviewed Standards</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Longform Technical Papers &amp; Essays
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Rigorous monographs detailing physical hysteresis in magnetic media, magnetorheological fluid cavity dynamics, subterranean impedance matching, and parametric ultrasonic difference tone localization.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md flex items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[var(--text-dim)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search papers, keywords, authors..."
            className="w-full pl-9 pr-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none"
          />
        </div>
        <div className="text-xs text-[var(--text-muted)] hidden sm:block">
          {filteredPapers.length} Published Monographs
        </div>
      </div>

      {/* Split Layout: Left Paper List, Right Monograph Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 4 Cols: Paper List */}
        <div className="lg:col-span-4 space-y-3">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              onClick={() => setSearchParams({ id: paper.id })}
              className={`p-4 rounded border transition-all cursor-pointer space-y-2 ${
                selectedPaper.id === paper.id
                  ? 'border-[var(--accent-green)] bg-[var(--bg-tertiary)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-accent)]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                <span className="font-bold text-[var(--accent-green-bright)]">{paper.id}</span>
                <span>{paper.publishedDate}</span>
              </div>
              <div className="font-bold text-xs text-[var(--text-primary)] leading-tight">{paper.title}</div>
              <div className="text-[10px] text-[var(--text-muted)] line-clamp-1">By: {paper.authors.join(', ')}</div>
            </div>
          ))}
        </div>

        {/* Right 8 Cols: Selected Paper Reader */}
        {selectedPaper && (
          <div className="lg:col-span-8 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-6">
            <div className="border-b border-[var(--border-color)] pb-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sm text-[var(--accent-green-bright)]">{selectedPaper.id}</span>
                <span className="text-[var(--text-dim)] text-[10px]">DOI: {selectedPaper.doi}</span>
              </div>

              <h2 className="font-serif-editorial font-bold text-2xl sm:text-3xl text-[var(--text-primary)] leading-tight">
                {selectedPaper.title}
              </h2>

              <p className="font-serif-editorial italic text-sm text-[var(--text-muted)]">{selectedPaper.subtitle}</p>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-dim)] pt-2">
                <div className="flex items-center space-x-2">
                  <User className="w-3.5 h-3.5 text-[var(--accent-green-bright)]" />
                  <span className="font-bold text-[var(--text-primary)]">{selectedPaper.authors.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                  <span>{selectedPaper.publishedDate}</span>
                </div>
              </div>
            </div>

            {/* Abstract Box */}
            <div className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
              <div className="text-[10px] font-bold uppercase text-[var(--accent-green-bright)]">Executive Monograph Abstract</div>
              <p className="font-serif-editorial text-sm text-[var(--text-primary)] leading-relaxed">
                {selectedPaper.abstract}
              </p>
            </div>

            {/* Essay Sections */}
            <div className="space-y-6">
              {selectedPaper.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-serif-editorial font-bold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1">
                    {sec.title}
                  </h3>
                  <p className="font-serif-editorial text-sm text-[var(--text-muted)] leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* BibTeX Exporter Card */}
            <div className="border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 rounded space-y-2 text-xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-[var(--text-primary)]">
                <span>Citation Metadata (BibTeX Format)</span>
                <button
                  onClick={handleCopyBibtex}
                  className="flex items-center space-x-1 text-[var(--accent-green-bright)] hover:underline cursor-pointer"
                >
                  {copiedBib ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBib ? 'Copied to Clipboard' : 'Copy BibTeX'}</span>
                </button>
              </div>
              <pre className="p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-[10px] text-[var(--text-muted)] font-mono overflow-x-auto">
                {selectedPaper.bibtex}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
