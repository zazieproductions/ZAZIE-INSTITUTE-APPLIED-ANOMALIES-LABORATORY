import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Award, AlertTriangle, Cpu, Radio, Shield, ChevronRight } from 'lucide-react';
import { timelineData } from '../data/timeline';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Breakthrough', 'Institutional', 'Decommission', 'Symposium'];

  const filteredTimeline = timelineData.filter(m =>
    filter === 'All' || m.category === filter
  );

  return (
    <div className="space-y-8 font-mono-tech">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-amber)] uppercase tracking-widest font-bold">
          <Calendar className="w-4 h-4" />
          <span>Institutional Retrospective &bull; 2021–2026 History</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          5-Year Historical Timeline
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Chronological milestone log documenting ZIAA’s establishment, key physical acoustic breakthroughs, hardware decommissions, defensive patent filings, and public symposia over five years of operation.
        </p>
      </div>

      {/* Filter Category Bar */}
      <div className="p-3 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md flex items-center space-x-2 text-xs">
        <span className="text-[var(--text-dim)] uppercase text-[10px] font-bold mr-2">Filter Category:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded uppercase tracking-wider text-[10px] ${
              filter === cat
                ? 'bg-[var(--accent-amber)] text-black font-bold'
                : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chronological Timeline Stream */}
      <div className="relative border-l-2 border-[var(--border-accent)] ml-4 space-y-8 pl-6 py-2">
        {filteredTimeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Bullet Node */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] transition-colors" />

            <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--accent-amber)] text-sm">{item.date} ({item.year})</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] text-[10px] uppercase">
                  {item.category}
                </span>
              </div>

              <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
                {item.title}
              </h2>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>

              {item.catalogRef && (
                <div className="pt-2 flex items-center justify-end text-xs">
                  <NavLink
                    to={`/prototypes/${item.catalogRef}`}
                    className="text-[var(--accent-green-bright)] hover:underline flex items-center text-[11px] font-bold"
                  >
                    View Associated Catalog Item ({item.catalogRef}) <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
