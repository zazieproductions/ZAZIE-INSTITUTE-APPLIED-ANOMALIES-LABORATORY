import React from 'react';
import { MapPin, Calendar, Radio, Users, Layers, ExternalLink } from 'lucide-react';
import { exhibitionsData } from '../data/exhibitions';

export const Exhibitions: React.FC = () => {
  return (
    <div className="space-y-8 font-mono-tech">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-green-bright)] uppercase tracking-widest font-bold">
          <Radio className="w-4 h-4" />
          <span>Public Listening Infrastructure &amp; Sound Installations</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Exhibitions &amp; Listening Posts
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Public listening posts, geothermal acoustic installations, subterranean horn arrays, and retrospective exhibitions installed across global research vaults and listening posts.
        </p>
      </div>

      <div className="space-y-6">
        {exhibitionsData.map((exhib) => (
          <div
            key={exhib.id}
            className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-4"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
              <div>
                <div className="text-[10px] text-[var(--accent-burgundy-bright)] uppercase font-bold">{exhib.id}</div>
                <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)] mt-0.5">
                  {exhib.title}
                </h2>
                <div className="flex items-center space-x-3 text-xs text-[var(--text-dim)] mt-1">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[var(--accent-green-bright)]" /> {exhib.venue}, {exhib.location}</span>
                  <span>&bull;</span>
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-[var(--accent-amber)]" /> {exhib.dates}</span>
                </div>
              </div>

              <div className="p-3 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] text-center shrink-0">
                <div className="text-[10px] text-[var(--text-dim)] uppercase">Public Attendance</div>
                <div className="font-bold text-base text-[var(--text-primary)] mt-0.5">{exhib.visitorsEstimate.toLocaleString()} Visitors</div>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {exhib.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[10px] text-[var(--text-dim)] uppercase font-bold">Featured Hardware Installations</div>
              <ul className="space-y-1.5 text-xs">
                {exhib.installations.map((inst, idx) => (
                  <li key={idx} className="p-2.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)]">
                    {inst}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
