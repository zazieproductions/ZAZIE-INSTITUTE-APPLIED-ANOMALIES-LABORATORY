import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Sun, Moon, Volume2, ShieldCheck, FileText, Database, Radio } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'paper';
  toggleTheme: () => void;
  openSearch: () => void;
  isAudioActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, openSearch, isAudioActive }) => {
  const navItems = [
    { label: 'Prototypes', path: '/prototypes' },
    { label: 'Patents', path: '/patents' },
    { label: 'Instruments', path: '/instruments' },
    { label: 'Lab Logs', path: '/logs' },
    { label: 'Papers', path: '/papers' },
    { label: 'People', path: '/people' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'Timeline', path: '/timeline' },
    { label: 'Search & Graph', path: '/search' },
    { label: 'Policies', path: '/policies' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-md">
      {/* Top Disclaimer Header Strip */}
      <div className="bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-[11px] font-mono-tech px-4 py-1 flex items-center justify-between border-b border-[var(--border-color)]">
        <div className="flex items-center space-x-3 overflow-hidden whitespace-nowrap">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[var(--accent-burgundy)]/20 text-[var(--accent-burgundy-bright)] font-semibold uppercase tracking-wider text-[10px]">
            Speculative Research
          </span>
          <span className="truncate">
            Zazie Institute of Applied Anomalies (ZIAA) &bull; R&amp;D Division of Zazie Productions LLC &bull; Est. 2021
          </span>
        </div>
        <div className="flex items-center space-x-4 shrink-0">
          {isAudioActive && (
            <span className="inline-flex items-center text-[var(--accent-green-bright)] text-[11px] animate-pulse">
              <Volume2 className="w-3 h-3 mr-1" /> AUDIO APPARATUS ACTIVE
            </span>
          )}
          <span className="hidden md:inline text-[var(--text-dim)]">5-YEAR ARCHIVE (2021–2026)</span>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded border border-[var(--border-accent)] bg-[var(--bg-secondary)] flex items-center justify-center transition-colors group-hover:border-[var(--accent-green)]">
              <svg className="w-6 h-6 text-[var(--text-primary)]" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="32" cy="32" r="18" stroke="var(--accent-green)" strokeWidth="2" />
                <path d="M16 32 H48" stroke="currentColor" strokeWidth="1.5" />
                <path d="M32 16 V48" stroke="currentColor" strokeWidth="1.5" />
                <path d="M22 28 Q 27 20, 32 32 T 42 36" stroke="var(--accent-burgundy)" strokeWidth="2" />
                <circle cx="32" cy="32" r="3" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="font-serif-editorial font-bold text-lg md:text-xl tracking-wide leading-none text-[var(--text-primary)]">
                ZAZIE INSTITUTE
              </div>
              <div className="font-mono-tech text-[10px] text-[var(--text-muted)] tracking-widest uppercase mt-0.5">
                Applied Anomalies Laboratory
              </div>
            </div>
          </NavLink>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={openSearch}
            className="flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-mono-tech border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-all cursor-pointer"
            title="Search Archive (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[var(--accent-green)]" />
            <span className="hidden sm:inline">Search Archive</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-[var(--text-dim)]">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-all cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Archive Paper Mode' : 'Dark Terminal Mode'}`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--accent-amber)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-burgundy)]" />
            )}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 sm:space-x-2 py-1 min-w-max">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded text-xs font-mono-tech tracking-wide transition-colors uppercase ${
                  isActive
                    ? 'bg-[var(--accent-green)] text-[#f4f1ea] font-medium'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};
