import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Cpu, FileCheck, BookOpen, User, Calendar, Tag } from 'lucide-react';
import { prototypesData } from '../data/prototypes';
import { patentsData } from '../data/patents';
import { logsData } from '../data/logs';
import { papersData } from '../data/papers';
import { peopleData } from '../data/people';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'prototypes' | 'patents' | 'logs' | 'papers' | 'people'>('all');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent, or toggle
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredPrototypes = prototypesData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.division.toLowerCase().includes(q) || p.materials.some(m => m.toLowerCase().includes(q))
  ).slice(0, 5);

  const filteredPatents = patentsData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.leadInventor.toLowerCase().includes(q)
  ).slice(0, 5);

  const filteredLogs = logsData.filter(l =>
    !q || l.id.toLowerCase().includes(q) || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q) || l.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 5);

  const filteredPapers = papersData.filter(p =>
    !q || p.id.toLowerCase().includes(q) || p.title.toLowerCase().includes(q) || p.keywords.some(k => k.toLowerCase().includes(q))
  ).slice(0, 5);

  const filteredPeople = peopleData.filter(p =>
    !q || p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.researchFocus.some(f => f.toLowerCase().includes(q))
  ).slice(0, 5);

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-3xl bg-[var(--bg-secondary)] border border-[var(--border-accent)] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] font-mono-tech">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[var(--border-color)] flex items-center space-x-3 bg-[var(--bg-tertiary)]">
          <Search className="w-5 h-5 text-[var(--accent-green-bright)] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search catalog IDs (e.g. ZIAA-PROTO-084, ZIAA-PAT-031), keywords, materials..."
            className="w-full bg-transparent border-none text-[var(--text-primary)] placeholder-[var(--text-dim)] focus:outline-none text-sm"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tab Row */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-[var(--bg-primary)] border-b border-[var(--border-color)] text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${activeTab === 'all' ? 'bg-[var(--accent-green)] text-white font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
          >
            All Results
          </button>
          <button
            onClick={() => setActiveTab('prototypes')}
            className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${activeTab === 'prototypes' ? 'bg-[var(--accent-green)] text-white font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
          >
            Prototypes ({filteredPrototypes.length})
          </button>
          <button
            onClick={() => setActiveTab('patents')}
            className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${activeTab === 'patents' ? 'bg-[var(--accent-green)] text-white font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
          >
            Patents ({filteredPatents.length})
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${activeTab === 'logs' ? 'bg-[var(--accent-green)] text-white font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
          >
            Logs ({filteredLogs.length})
          </button>

          <button
            onClick={() => setActiveTab('papers')}
            className={`px-2.5 py-1 rounded uppercase tracking-wider text-[10px] ${activeTab === 'papers' ? 'bg-[var(--accent-green)] text-white font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
          >
            Papers ({filteredPapers.length})
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 text-xs divide-y divide-[var(--border-color)]">
          {/* Prototypes section */}
          {(activeTab === 'all' || activeTab === 'prototypes') && filteredPrototypes.length > 0 && (
            <div>
              <div className="font-semibold text-[11px] uppercase text-[var(--accent-green-bright)] tracking-wider mb-2 flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1.5" /> Prototypes ({filteredPrototypes.length})
              </div>
              <div className="space-y-2">
                {filteredPrototypes.map(p => (
                  <div
                    key={p.id}
                    onClick={() => handleSelect(`/prototypes/${p.id}`)}
                    className="p-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                      <span>{p.title}</span>
                      <span className="text-[10px] text-[var(--accent-burgundy-bright)]">{p.id}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-1">{p.abstract}</p>
                    <div className="mt-2 flex items-center space-x-2 text-[10px] text-[var(--text-dim)]">
                      <span>Division: {p.division}</span>
                      <span>&bull;</span>
                      <span>Status: {p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patents Section */}
          {(activeTab === 'all' || activeTab === 'patents') && filteredPatents.length > 0 && (
            <div className="pt-4">
              <div className="font-semibold text-[11px] uppercase text-[var(--accent-burgundy-bright)] tracking-wider mb-2 flex items-center">
                <FileCheck className="w-3.5 h-3.5 mr-1.5" /> Speculative Patents ({filteredPatents.length})
              </div>
              <div className="space-y-2">
                {filteredPatents.map(pat => (
                  <div
                    key={pat.id}
                    onClick={() => handleSelect(`/patents?id=${pat.id}`)}
                    className="p-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-burgundy)] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                      <span>{pat.title}</span>
                      <span className="text-[10px] text-[var(--text-muted)]">{pat.id}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-1">{pat.abstract}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logs Section */}
          {(activeTab === 'all' || activeTab === 'logs') && filteredLogs.length > 0 && (
            <div className="pt-4">
              <div className="font-semibold text-[11px] uppercase text-[var(--accent-amber)] tracking-wider mb-2 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5" /> Laboratory Logs ({filteredLogs.length})
              </div>
              <div className="space-y-2">
                {filteredLogs.map(log => (
                  <div
                    key={log.id}
                    onClick={() => handleSelect(`/logs?id=${log.id}`)}
                    className="p-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-amber)] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                      <span>{log.title}</span>
                      <span className="text-[10px] text-[var(--text-dim)]">{log.date}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-1">{log.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Papers Section */}
          {(activeTab === 'all' || activeTab === 'papers') && filteredPapers.length > 0 && (
            <div className="pt-4">
              <div className="font-semibold text-[11px] uppercase text-[var(--text-primary)] tracking-wider mb-2 flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Zazie Technical Papers ({filteredPapers.length})
              </div>
              <div className="space-y-2">
                {filteredPapers.map(paper => (
                  <div
                    key={paper.id}
                    onClick={() => handleSelect(`/papers?id=${paper.id}`)}
                    className="p-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                      <span>{paper.title}</span>
                      <span className="text-[10px] text-[var(--text-dim)]">{paper.id}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-1">{paper.abstract}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-[var(--bg-tertiary)] border-t border-[var(--border-color)] text-[10px] text-[var(--text-dim)] flex items-center justify-between">
          <span>Press ESC to exit</span>
          <span>ZIAA Full Archive Search Engine</span>
        </div>
      </div>
    </div>
  );
};
