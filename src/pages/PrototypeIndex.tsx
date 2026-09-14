import React, { useState, useMemo } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { Search, Filter, Cpu, ArrowUpDown, Grid, List, Layers, Volume2 } from 'lucide-react';
import { prototypesData } from '../data/prototypes';
import { Division, PrototypeStatus } from '../types/archive';

export const PrototypeIndex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const divisionQuery = searchParams.get('division') || 'All';
  const statusQuery = searchParams.get('status') || 'All';

  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'id' | 'year' | 'title'>('id');

  const divisions: (Division | 'All')[] = [
    'All',
    'Signal Archaeology',
    'Perceptual Interfaces',
    'Material Acoustics',
    'Generative Systems',
    'Spatial Infrastructures'
  ];

  const statuses: (PrototypeStatus | 'All')[] = [
    'All',
    'Active',
    'Archived',
    'Failed',
    'Decommissioned',
    'Public Beta'
  ];

  const filteredPrototypes = useMemo(() => {
    return prototypesData.filter((p) => {
      const matchesDivision = divisionQuery === 'All' || p.division === divisionQuery;
      const matchesStatus = statusQuery === 'All' || p.status === statusQuery;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase()) ||
        p.abstract.toLowerCase().includes(search.toLowerCase()) ||
        p.materials.some(m => m.toLowerCase().includes(search.toLowerCase()));

      return matchesDivision && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return a.id.localeCompare(b.id);
    });
  }, [divisionQuery, statusQuery, search, sortBy]);

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Header Monograph Bar */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <Cpu className="w-4 h-4" />
          <span>ZIAA Master Hardware Index &bull; 120+ Inventions</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Prototype Catalog Archive
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Comprehensive inventory of experimental audio hardware, physical modeling resonators, subterranean waveguides, parametric ultrasonic emitters, and generative tape mechanisms developed between 2021 and 2026.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[var(--text-dim)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search IDs, materials, titles..."
              className="w-full pl-9 pr-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-green)]"
            />
          </div>

          {/* View Mode & Sort Controls */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center space-x-1 border border-[var(--border-color)] p-1 rounded bg-[var(--bg-primary)]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-[var(--accent-green)] text-white' : 'text-[var(--text-dim)]'}`}
                title="Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1 rounded ${viewMode === 'list' ? 'bg-[var(--accent-green)] text-white' : 'text-[var(--text-dim)]'}`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <span className="text-[var(--text-dim)]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none text-xs"
              >
                <option value="id">Catalog ID</option>
                <option value="year">Year (Newest)</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Division Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-color)] text-xs">
          <span className="text-[var(--text-dim)] uppercase text-[10px] font-bold mr-1">Division:</span>
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => {
                if (div === 'All') searchParams.delete('division');
                else searchParams.set('division', div);
                setSearchParams(searchParams);
              }}
              className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] transition-colors ${
                divisionQuery === div
                  ? 'bg-[var(--accent-green)] text-white font-bold'
                  : 'bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {div}
            </button>
          ))}
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-[var(--text-dim)] uppercase text-[10px] font-bold mr-1">Status:</span>
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => {
                if (st === 'All') searchParams.delete('status');
                else searchParams.set('status', st);
                setSearchParams(searchParams);
              }}
              className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] transition-colors ${
                statusQuery === st
                  ? 'bg-[var(--accent-burgundy)] text-white font-bold'
                  : 'bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>Showing {filteredPrototypes.length} of {prototypesData.length} Cataloged Prototypes</span>
        {(divisionQuery !== 'All' || statusQuery !== 'All' || search) && (
          <button
            onClick={() => {
              setSearchParams({});
              setSearch('');
            }}
            className="text-[var(--accent-burgundy-bright)] hover:underline uppercase text-[10px]"
          >
            Clear Active Filters
          </button>
        )}
      </div>

      {/* Grid or List Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrototypes.map((p) => (
            <NavLink
              key={p.id}
              to={`/prototypes/${p.id}`}
              className="p-5 rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-all flex flex-col justify-between group space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)] border-b border-[var(--border-color)] pb-2 mb-2">
                  <span className="font-bold text-[var(--accent-burgundy-bright)]">{p.id}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    {p.status}
                  </span>
                </div>

                <div className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-green-bright)] leading-tight">
                  {p.title}
                </div>
                <div className="text-[11px] text-[var(--text-dim)] mt-0.5 line-clamp-1">{p.subtitle}</div>

                <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-3 leading-relaxed">
                  {p.abstract}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] space-y-2">
                <div className="text-[10px] text-[var(--text-dim)] line-clamp-1">
                  Materials: {p.materials.join(', ')}
                </div>
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span>Div: {p.division}</span>
                  <span className="text-[var(--accent-green-bright)] font-semibold group-hover:underline">
                    Read Dossier &rarr;
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredPrototypes.map((p) => (
            <NavLink
              key={p.id}
              to={`/prototypes/${p.id}`}
              className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <span className="font-bold text-xs text-[var(--accent-burgundy-bright)] shrink-0 w-32">{p.id}</span>
                <div>
                  <div className="font-bold text-xs text-[var(--text-primary)]">{p.title}</div>
                  <div className="text-[10px] text-[var(--text-dim)] line-clamp-1">{p.abstract}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 shrink-0 text-[10px] text-[var(--text-dim)]">
                <span>Year: {p.year}</span>
                <span>Div: {p.division}</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)]">{p.status}</span>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
