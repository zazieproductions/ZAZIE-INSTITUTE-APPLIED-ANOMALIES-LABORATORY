import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Briefcase, BookOpen, Cpu, ExternalLink, Award } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { FOUNDER_METADATA } from '../seo/metadata';
import { personSchema, profilePageSchema, organizationSchema, zazieProductionsSchema } from '../seo/schema';
import { FOUNDER, ZAZIE_PRODUCTIONS, ZIAA } from '../seo/entities';
import { FOUNDER_BIOGRAPHY } from '../seo/canonicalFacts';
import { papersData } from '../data/papers';
import { prototypesData } from '../data/prototypes';

export const Founder: React.FC = () => {
  // Find works where the archive persona "Dr. H. Zazie" appears
  // These represent Institute research directed by Zazie Kanwar-Torge
  const zaziePapers = papersData.filter(p => 
    p.authors.some(a => a === 'Dr. H. Zazie' || a === FOUNDER.name)
  );
  
  const zaziePrototypes = prototypesData.filter(p =>
    p.leadResearchers.some(r => r === 'Dr. H. Zazie' || r === FOUNDER.name)
  );

  return (
    <div className="space-y-10 font-mono-tech">
      <Seo
        title={FOUNDER_METADATA.title}
        description={FOUNDER_METADATA.description}
        path={FOUNDER_METADATA.path}
        schemas={[
          personSchema(),
          profilePageSchema(),
          organizationSchema(),
          zazieProductionsSchema(),
        ]}
      />

      {/* Hero Section — Identity Statement */}
      <section className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 sm:p-10 relative overflow-hidden">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] font-mono-tech text-xs text-[var(--accent-green-bright)] uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Founder &amp; Director</span>
          </div>

          <h1 className="font-serif-editorial font-bold text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)] leading-tight">
            {FOUNDER.name}
          </h1>

          <p className="font-serif-editorial text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
            {FOUNDER_BIOGRAPHY.opening}
          </p>

          <p className="font-serif-editorial text-base text-[var(--text-muted)] leading-relaxed">
            {FOUNDER_BIOGRAPHY.researchDirection}
          </p>
        </div>
      </section>

      {/* Roles & Affiliations */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-[var(--accent-burgundy-bright)] uppercase tracking-widest font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Zazie Productions LLC</span>
          </div>
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
            Founder &amp; Owner
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {FOUNDER.name} is the founder and owner of <NavLink to="/about" className="text-[var(--accent-green-bright)] hover:underline">{ZAZIE_PRODUCTIONS.name}</NavLink>, an independent production company that operates the Zazie Institute of Applied Anomalies as its non-commercial R&amp;D division.
          </p>
        </div>

        <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
            <Award className="w-4 h-4" />
            <span>Zazie Institute of Applied Anomalies</span>
          </div>
          <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
            Founder &amp; Director
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {FOUNDER.name} founded the <NavLink to="/" className="text-[var(--accent-green-bright)] hover:underline">{ZIAA.name}</NavLink> ({ZIAA.acronym}) in {ZIAA.foundingDate} and serves as its director, overseeing five research divisions and a comprehensive archive of speculative audio research.
          </p>
        </div>
      </section>

      {/* Research Direction */}
      <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-4">
        <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Research Direction
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl">
          Under {FOUNDER.givenName}'s direction, the Institute investigates the boundaries between acoustic physics, material science, and perceptual experience. Research spans magnetorheological acoustics, signal archaeology, perceptual interfaces, generative composition systems, and public listening infrastructure.
        </p>

        <div className="pt-2">
          <div className="text-[10px] text-[var(--text-dim)] uppercase font-bold mb-2">Areas of Expertise</div>
          <div className="flex flex-wrap gap-2">
            {FOUNDER.knowsAbout.map((area, idx) => (
              <span key={idx} className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Institute Work */}
      {zaziePrototypes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-[var(--accent-green-bright)]" />
              Selected Institute Prototypes
            </h2>
            <NavLink to="/prototypes" className="text-xs text-[var(--accent-green-bright)] hover:underline">
              View All Prototypes &rarr;
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {zaziePrototypes.slice(0, 4).map((proto) => (
              <NavLink
                key={proto.id}
                to={`/prototypes/${proto.id}`}
                className="block p-4 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="text-[var(--accent-green-bright)] font-bold">{proto.id}</span>
                  <span>{proto.year}</span>
                </div>
                <div className="font-bold text-sm text-[var(--text-primary)] mt-1">{proto.title}</div>
                <p className="text-[11px] text-[var(--text-muted)] mt-1 line-clamp-2">{proto.abstract}</p>
                <div className="mt-2 text-[10px] text-[var(--text-dim)]">
                  Division: {proto.division}
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      )}

      {/* Selected Research and Publications */}
      {zaziePapers.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
            <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-[var(--accent-green-bright)]" />
              Selected Research &amp; Publications
            </h2>
            <NavLink to="/papers" className="text-xs text-[var(--accent-green-bright)] hover:underline">
              View All Monographs &rarr;
            </NavLink>
          </div>

          <div className="space-y-3">
            {zaziePapers.map((paper) => (
              <NavLink
                key={paper.id}
                to={`/papers?id=${paper.id}`}
                className="block p-4 rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-green)] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span className="text-[var(--accent-green-bright)] font-bold">{paper.id}</span>
                  <span>{paper.publishedDate}</span>
                </div>
                <div className="font-bold text-sm text-[var(--text-primary)] mt-1">{paper.title}</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5 italic">{paper.subtitle}</div>
                <p className="text-[11px] text-[var(--text-muted)] mt-2 line-clamp-2">{paper.abstract}</p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                  <span>Authors: {paper.authors.join(', ')}</span>
                  <span>Downloads: {paper.downloadsCount}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      )}

      {/* Institutional Context */}
      <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-3">
        <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Institutional Context
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Within the Institute's archive, research is documented under the institutional identity <span className="text-[var(--text-primary)] font-semibold">Dr. H. Zazie</span>, representing the collective research direction established by {FOUNDER.name}. This archive persona appears as lead researcher or co-author on Institute prototypes, technical papers, and laboratory logs.
        </p>
        <div className="pt-3 flex flex-wrap gap-3">
          <NavLink
            to="/about"
            className="inline-flex items-center px-4 py-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--accent-green)] text-xs uppercase tracking-wider"
          >
            About the Institute
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </NavLink>
          <NavLink
            to="/people"
            className="inline-flex items-center px-4 py-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--accent-green)] text-xs uppercase tracking-wider"
          >
            Research Fellows
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};
