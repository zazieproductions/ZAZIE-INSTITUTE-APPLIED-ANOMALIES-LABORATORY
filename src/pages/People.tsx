import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Mail, Award, Cpu, BookOpen } from 'lucide-react';
import { peopleData } from '../data/people';

export const People: React.FC = () => {
  return (
    <div className="space-y-8 font-mono-tech">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <User className="w-4 h-4" />
          <span>ZIAA Resident Fellows &amp; Research Faculty</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          People &amp; Research Residencies
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Profiles of acoustic physicists, archival conservators, magnetics engineers, cognitive psychoacousticians, and embedded DSP architects leading ZIAA’s research divisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peopleData.map((person) => (
          <div
            key={person.id}
            className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-md p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                <span className="font-bold text-[var(--accent-green-bright)]">{person.yearsActive}</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  {person.division || 'Lab Direction'}
                </span>
              </div>

              <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)]">
                {person.name}
              </h2>
              <p className="text-xs text-[var(--accent-amber)] font-bold">{person.role}</p>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-2">
                {person.bio}
              </p>

              <div className="pt-2">
                <div className="text-[10px] text-[var(--text-dim)] uppercase font-bold mb-1">Research Specializations</div>
                <div className="flex flex-wrap gap-1">
                  {person.researchFocus.map((f, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] text-[var(--text-muted)]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] space-y-2 text-xs">
              <div className="text-[10px] text-[var(--text-dim)] uppercase">Selected Prototypes</div>
              <div className="flex items-center space-x-2">
                {person.selectedPrototypes.map((protoId) => (
                  <NavLink
                    key={protoId}
                    to={`/prototypes/${protoId}`}
                    className="text-[var(--accent-green-bright)] hover:underline font-bold text-[11px]"
                  >
                    {protoId}
                  </NavLink>
                ))}
              </div>

              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] pt-1"
              >
                <Mail className="w-3.5 h-3.5 mr-1 text-[var(--accent-green-bright)]" /> {person.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
