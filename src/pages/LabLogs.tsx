import React, { useState, useMemo } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { Calendar, Search, Filter, Tag, MapPin, Activity, User, FileText } from 'lucide-react';
import { logsData } from '../data/logs';
import { LabLog } from '../types/archive';

export const LabLogs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get('id');

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [yearFilter, setYearFilter] = useState<string>('All');

  const categories = [
    'All',
    'Laboratory Log',
    'Field Measurement',
    'Transducer Stress',
    'Signal Scan',
    'Protocol Failure',
    'Listening Post'
  ];

  const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021'];

  const filteredLogs = useMemo(() => {
    return logsData.filter((log) => {
      const matchesCategory = categoryFilter === 'All' || log.category === categoryFilter;
      const matchesYear = yearFilter === 'All' || log.date.startsWith(yearFilter);
      const matchesSearch =
        !search ||
        log.id.toLowerCase().includes(search.toLowerCase()) ||
        log.title.toLowerCase().includes(search.toLowerCase()) ||
        log.summary.toLowerCase().includes(search.toLowerCase()) ||
        log.author.toLowerCase().includes(search.toLowerCase()) ||
        log.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [categoryFilter, yearFilter, search]);

  const selectedLog: LabLog =
    logsData.find((l) => l.id === activeId) || filteredLogs[0] || logsData[0];

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Header Bar */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-amber)] uppercase tracking-widest font-bold">
          <Calendar className="w-4 h-4" />
          <span>Laboratory Logs &amp; Field Reports &bull; 250+ Telemetry Entries</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Raw Telemetry &amp; Field Measurement Archive
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Chronological laboratory transcripts, decibel spectral readouts, transducer breakdown audits, dark-sky VLF radio observations, and subterranean seismic waveguide measurements recorded from 2021 through 2026.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[var(--text-dim)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs, authors, decibels, tags..."
              className="w-full pl-9 pr-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 text-xs w-full md:w-auto">
            <span className="text-[var(--text-dim)] uppercase text-[10px]">Year:</span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className={`px-2 py-0.5 rounded text-[10px] ${
                  yearFilter === y
                    ? 'bg-[var(--accent-amber)] text-black font-bold'
                    : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-color)] text-xs">
          <span className="text-[var(--text-dim)] uppercase text-[10px] font-bold">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${
                categoryFilter === cat
                  ? 'bg-[var(--accent-amber)] text-black font-bold'
                  : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split View: Left Log List (250+ entries), Right Selected Log Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Searchable Log List */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-1 scrollbar-thin">
          <div className="text-[10px] text-[var(--text-dim)] uppercase font-bold mb-2">
            Showing {filteredLogs.length} Log Records
          </div>

          {filteredLogs.map((log) => (
            <div
              key={log.id}
              onClick={() => setSearchParams({ id: log.id })}
              className={`p-3.5 rounded border transition-all cursor-pointer space-y-1.5 ${
                selectedLog.id === log.id
                  ? 'border-[var(--accent-amber)] bg-[var(--bg-tertiary)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-accent)]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                <span className="font-bold text-[var(--accent-amber)]">{log.id}</span>
                <span>{log.date}</span>
              </div>
              <div className="font-bold text-xs text-[var(--text-primary)] leading-tight">{log.title}</div>
              <p className="text-[11px] text-[var(--text-muted)] line-clamp-2">{log.summary}</p>
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)] pt-1">
                <span>By: {log.author}</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)]">{log.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right 7 Cols: Selected Log Detail Monograph */}
        {selectedLog && (
          <div className="lg:col-span-7 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-6">
            <div className="border-b border-[var(--border-color)] pb-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sm text-[var(--accent-amber)]">{selectedLog.id}</span>
                <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] uppercase text-[10px]">
                  {selectedLog.category}
                </span>
              </div>

              <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)]">
                {selectedLog.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-dim)] pt-1">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {selectedLog.date}</span>
                <span>&bull;</span>
                <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> {selectedLog.author}</span>
                <span>&bull;</span>
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {selectedLog.location}</span>
              </div>
            </div>

            {/* Log Transcript Body */}
            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase text-[var(--accent-amber)]">Laboratory Transcript</div>
              <div className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] font-serif-editorial text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line">
                {selectedLog.content}
              </div>
            </div>

            {/* Decibel & Spectral Readings */}
            {(selectedLog.decibelReadings || selectedLog.spectralData) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {selectedLog.decibelReadings && (
                  <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)]">
                    <div className="text-[10px] font-bold uppercase text-[var(--accent-green-bright)] mb-1">Decibel &amp; SPL Telemetry</div>
                    <div className="text-[11px] text-[var(--text-muted)]">{selectedLog.decibelReadings}</div>
                  </div>
                )}

                {selectedLog.spectralData && (
                  <div className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)]">
                    <div className="text-[10px] font-bold uppercase text-[var(--accent-amber)] mb-1">Spectral FFT Breakdown</div>
                    <div className="text-[11px] text-[var(--text-muted)]">{selectedLog.spectralData}</div>
                  </div>
                )}
              </div>
            )}

            {/* Tags & Related Prototypes */}
            <div className="pt-2 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <Tag className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                {selectedLog.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-[10px]">
                    #{t}
                  </span>
                ))}
              </div>

              {selectedLog.relatedPrototypes && selectedLog.relatedPrototypes.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-[var(--text-dim)] text-[10px]">Linked Prototype:</span>
                  {selectedLog.relatedPrototypes.map(pId => (
                    <NavLink
                      key={pId}
                      to={`/prototypes/${pId}`}
                      className="text-[var(--accent-green-bright)] hover:underline text-[11px] font-bold"
                    >
                      {pId} &rarr;
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
