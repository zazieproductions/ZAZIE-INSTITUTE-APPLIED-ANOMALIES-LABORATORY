import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, Users, Calendar, BookOpen, Cpu, FileCheck } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { ABOUT_METADATA } from '../seo/metadata';
import { organizationSchema, aboutPageSchema, zazieProductionsSchema, personSchema } from '../seo/schema';
import { ZIAA, ZAZIE_PRODUCTIONS, FOUNDER } from '../seo/entities';
import { ABOUT_STATEMENT, ARCHIVE_STATISTICS, RESEARCH_DIVISIONS } from '../seo/canonicalFacts';

export const About: React.FC = () => {
  return (
    <div className="space-y-10 font-mono-tech">
      <Seo
        title={ABOUT_METADATA.title}
        description={ABOUT_METADATA.description}
        path={ABOUT_METADATA.path}
        schemas={[
          organizationSchema(),
          aboutPageSchema(),
          zazieProductionsSchema(),
          personSchema(),
        ]}
      />

      {/* Hero Section — Institutional Identity */}
      <section className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 sm:p-10 relative overflow-hidden">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] font-mono-tech text-xs text-[var(--accent-green-bright)] uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About the Institute</span>
          </div>

          <h1 className="font-serif-editorial font-bold text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)] leading-tight">
            {ZIAA.name}
          </h1>

          <p className="font-serif-editorial text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
            {ABOUT_STATEMENT.primary}
          </p>

          <p className="font-serif-editorial text-base text-[var(--text-muted)] leading-relaxed">
            {ABOUT_STATEMENT.mission}
          </p>
        </div>
      </section>

      {/* Founding & Governance */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-[var(--accent-burgundy-bright)] uppercase tracking-widest font-bold">
            <Users className="w-4 h-4" />
            <span>Founder &amp; Director</span>
          </div>
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
            {FOUNDER.name}
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            The Institute was founded by{' '}
            <NavLink to="/founder" className="text-[var(--accent-green-bright)] hover:underline">
              {FOUNDER.name}
            </NavLink>
            , who serves as its director and oversees all research divisions. {FOUNDER.givenName} is also the founder and owner of{' '}
            <span className="text-[var(--text-primary)] font-semibold">{ZAZIE_PRODUCTIONS.name}</span>, the parent organization that operates the Institute.
          </p>
        </div>

        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
            <Building2 className="w-4 h-4" />
            <span>Parent Organization</span>
          </div>
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
            {ZAZIE_PRODUCTIONS.name}
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {ZAZIE_PRODUCTIONS.name} is an independent production company founded by{' '}
            <NavLink to="/founder" className="text-[var(--accent-green-bright)] hover:underline">
              {FOUNDER.name}
            </NavLink>
            . The Institute operates as its non-commercial research and development division, maintaining the speculative research archive and public listening infrastructure.
          </p>
        </div>
      </section>

      {/* Archive Statistics */}
      <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-4">
        <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Archive Scope
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl">
          The Institute maintains a comprehensive archive documenting five years of speculative inquiry ({ARCHIVE_STATISTICS.years.start}–{ARCHIVE_STATISTICS.years.end}). The archive includes material prototype records, speculative patent dossiers, laboratory logs, and longform technical monographs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="p-4 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
            <div className="text-[var(--text-dim)] text-[10px] uppercase">Prototypes</div>
            <div className="font-bold text-2xl text-[var(--text-primary)] mt-1">{ARCHIVE_STATISTICS.prototypes.count}+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">{ARCHIVE_STATISTICS.prototypes.label}</div>
          </div>

          <div className="p-4 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
            <div className="text-[var(--text-dim)] text-[10px] uppercase">Patents</div>
            <div className="font-bold text-2xl text-[var(--text-primary)] mt-1">{ARCHIVE_STATISTICS.patents.count}+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">{ARCHIVE_STATISTICS.patents.label}</div>
          </div>

          <div className="p-4 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
            <div className="text-[var(--text-dim)] text-[10px] uppercase">Lab Logs</div>
            <div className="font-bold text-2xl text-[var(--text-primary)] mt-1">{ARCHIVE_STATISTICS.logs.count}+</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">{ARCHIVE_STATISTICS.logs.label}</div>
          </div>

          <div className="p-4 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
            <div className="text-[var(--text-dim)] text-[10px] uppercase">Papers</div>
            <div className="font-bold text-2xl text-[var(--text-primary)] mt-1">{ARCHIVE_STATISTICS.papers.count}</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">{ARCHIVE_STATISTICS.papers.label}</div>
          </div>
        </div>
      </section>

      {/* Research Divisions */}
      <section className="space-y-4">
        <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Research Divisions
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl">
          The Institute operates across five research divisions, each investigating distinct aspects of experimental audio technologies, material acoustics, and perceptual experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {RESEARCH_DIVISIONS.map((division) => (
            <NavLink
              key={division}
              to={`/prototypes?division=${encodeURIComponent(division)}`}
              className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-all group"
            >
              <div className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-green-bright)]">
                {division}
              </div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider mt-2 group-hover:text-[var(--text-primary)]">
                Explore Division &rarr;
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Institutional Timeline */}
      <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-amber)] uppercase tracking-widest font-bold">
          <Calendar className="w-4 h-4" />
          <span>Five-Year Archive</span>
        </div>
        <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
          {ARCHIVE_STATISTICS.years.start}–{ARCHIVE_STATISTICS.years.end}
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          The Institute was established in {ARCHIVE_STATISTICS.years.start} as a five-year non-commercial speculative inquiry. The archive documents breakthroughs, decommissions, symposia, and key research milestones across the full institutional timeline.
        </p>
        <NavLink
          to="/timeline"
          className="inline-flex items-center mt-3 text-xs text-[var(--accent-green-bright)] hover:underline"
        >
          View Institutional Timeline &rarr;
        </NavLink>
      </section>

      {/* Quick Links */}
      <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-4">
        <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Explore the Archive
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <NavLink
            to="/founder"
            className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-xs text-[var(--text-primary)]">Founder</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{FOUNDER.name}</div>
            </div>
            <Users className="w-4 h-4 text-[var(--text-dim)]" />
          </NavLink>

          <NavLink
            to="/prototypes"
            className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-xs text-[var(--text-primary)]">Prototypes</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">120+ Material Records</div>
            </div>
            <Cpu className="w-4 h-4 text-[var(--text-dim)]" />
          </NavLink>

          <NavLink
            to="/papers"
            className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-xs text-[var(--text-primary)]">Technical Papers</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">12 Monographs</div>
            </div>
            <BookOpen className="w-4 h-4 text-[var(--text-dim)]" />
          </NavLink>

          <NavLink
            to="/patents"
            className="p-3 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-green)] transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-xs text-[var(--text-primary)]">Speculative Patents</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">75 Dossiers</div>
            </div>
            <FileCheck className="w-4 h-4 text-[var(--text-dim)]" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};
