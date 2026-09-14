import React, { useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, ShieldAlert, FileText, Calendar, User, Cpu, AlertTriangle, MessageSquare, ExternalLink } from 'lucide-react';
import { prototypesData } from '../data/prototypes';
import { audioApparatus } from '../lib/audioEngine';
import { AudioVisualizer } from '../components/AudioVisualizer';
import { SchematicViewer } from '../components/SchematicViewer';

export const PrototypeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [newAnnotation, setNewAnnotation] = useState('');

  const prototype = prototypesData.find((p) => p.id === id) || prototypesData[0];

  const toggleAudio = () => {
    if (isPlaying) {
      audioApparatus.stop();
      setIsPlaying(false);
    } else {
      audioApparatus.playPreset(prototype.audioPreset || 'ferrofluid', 0.6);
      setIsPlaying(true);
    }
  };

  const handleAddAnnotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnotation.trim()) return;
    prototype.annotations.push({
      author: 'Visiting Researcher (Peer Note)',
      date: new Date().toISOString().split('T')[0],
      text: newAnnotation.trim()
    });
    setNewAnnotation('');
  };

  return (
    <div className="space-y-8 font-mono-tech">
      {/* Navigation & Breadcrumb Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 text-xs">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog Index</span>
        </button>

        <div className="flex items-center space-x-3 text-[10px] text-[var(--text-dim)]">
          <span>CATALOG RECORD: {prototype.id}</span>
          <span>&bull;</span>
          <span>DIVISION: {prototype.division}</span>
        </div>
      </div>

      {/* Main Dossier Header Banner */}
      <div className="border border-[var(--border-accent)] bg-[var(--bg-secondary)] rounded-md p-6 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-bold text-[var(--accent-burgundy-bright)] uppercase tracking-widest">{prototype.id}</span>
              <span className="text-[var(--text-dim)]">&bull;</span>
              <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] uppercase text-[10px]">
                Status: {prototype.status}
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent-green-bright)] uppercase text-[10px]">
                Year: {prototype.year}
              </span>
            </div>

            <h1 className="font-serif-editorial font-bold text-2xl sm:text-4xl text-[var(--text-primary)] mt-2">
              {prototype.title}
            </h1>
            <p className="text-xs text-[var(--text-muted)] mt-1">{prototype.subtitle}</p>
          </div>

          {/* Live Audio Control Button */}
          <button
            onClick={toggleAudio}
            className={`px-5 py-2.5 rounded text-xs uppercase font-bold flex items-center space-x-2 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-[var(--accent-burgundy)] text-white animate-pulse'
                : 'bg-[var(--accent-green)] text-white hover:bg-[var(--accent-green-bright)]'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlaying ? 'Halt Audio Engine' : 'Synthesize Audio Preview'}</span>
          </button>
        </div>

        {/* Audio Visualizer Canvas */}
        <AudioVisualizer isPlaying={isPlaying} preset={prototype.audioPreset || 'ferrofluid'} />

        {/* Lead Researchers & Division Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div>
            <div className="text-[10px] text-[var(--text-dim)] uppercase">Lead Researchers</div>
            <div className="font-bold text-[var(--text-primary)] mt-0.5">{prototype.leadResearchers.join(', ')}</div>
          </div>
          <div>
            <div className="text-[10px] text-[var(--text-dim)] uppercase">Research Division</div>
            <div className="font-bold text-[var(--accent-green-bright)] mt-0.5">{prototype.division}</div>
          </div>
          <div>
            <div className="text-[10px] text-[var(--text-dim)] uppercase">Provenance / Origin</div>
            <div className="text-[var(--text-muted)] text-[11px] mt-0.5">{prototype.provenance}</div>
          </div>
        </div>
      </div>

      {/* Technical Schematic Diagram */}
      <section className="space-y-2">
        <SchematicViewer
          type={prototype.schematicType}
          catalogId={prototype.id}
          title={prototype.title}
          materials={prototype.materials}
        />
      </section>

      {/* Core Research Question & Abstract */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Abstract & Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-3">
            <h2 className="font-serif-editorial font-bold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
              Research Objective &amp; Abstract
            </h2>
            <div className="bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)]">
              <div className="text-[10px] text-[var(--accent-amber)] uppercase font-bold mb-1">Primary Research Question</div>
              <p className="font-serif-editorial italic text-sm text-[var(--text-primary)] leading-relaxed">
                "{prototype.researchQuestion}"
              </p>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {prototype.abstract}
            </p>
          </section>

          {/* Development Timeline Milestones */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-3">
            <h2 className="font-serif-editorial font-bold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-[var(--accent-amber)]" /> Development Milestones
            </h2>
            <div className="space-y-3 divide-y divide-[var(--border-color)]">
              {prototype.timeline.map((item, idx) => (
                <div key={idx} className="pt-2 flex items-start space-x-3 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-amber)] font-bold shrink-0">
                    {item.year}
                  </span>
                  <p className="text-[var(--text-muted)]">{item.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Limitations and Failures */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-3">
            <h2 className="font-serif-editorial font-bold text-lg text-[var(--accent-burgundy-bright)] border-b border-[var(--border-color)] pb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-[var(--accent-burgundy-bright)]" />
              Known Limitations &amp; Operational Failures
            </h2>
            <ul className="space-y-2 text-xs">
              {prototype.limitationsAndFailures.map((fail, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-[var(--text-muted)]">
                  <span className="text-[var(--accent-burgundy-bright)] font-bold">&bull;</span>
                  <span>{fail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Ethics & Governance Notes */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 rounded-md space-y-2">
            <h2 className="font-serif-editorial font-bold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2 flex items-center">
              <ShieldAlert className="w-4 h-4 mr-2 text-[var(--accent-green-bright)]" /> Ethics &amp; Acoustic Safety Charter
            </h2>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {prototype.ethicsNotes}
            </p>
          </section>
        </div>

        {/* Right Column: Materials, Cross-Links, Discussion Annotations */}
        <div className="space-y-6">
          {/* Material Composition Bill */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 rounded-md space-y-3">
            <div className="font-bold text-xs uppercase text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1">
              Material Bill &amp; Components
            </div>
            <ul className="space-y-1.5 text-xs">
              {prototype.materials.map((m, idx) => (
                <li key={idx} className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)]">
                  {m}
                </li>
              ))}
            </ul>
          </section>

          {/* Cross-Linked Records */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 rounded-md space-y-3">
            <div className="font-bold text-xs uppercase text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1">
              Cross-Linked Archive Dossiers
            </div>

            <div className="space-y-2 text-xs">
              <div className="text-[10px] text-[var(--text-dim)] uppercase">Related Patents</div>
              {prototype.relatedPatents.map((patId) => (
                <NavLink
                  key={patId}
                  to={`/patents?id=${patId}`}
                  className="block p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent-burgundy-bright)] hover:underline flex items-center justify-between"
                >
                  <span>{patId}</span>
                  <ExternalLink className="w-3 h-3" />
                </NavLink>
              ))}

              <div className="text-[10px] text-[var(--text-dim)] uppercase pt-2">Related Lab Logs</div>
              {prototype.relatedLogs.map((logId) => (
                <NavLink
                  key={logId}
                  to={`/logs?id=${logId}`}
                  className="block p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent-amber)] hover:underline flex items-center justify-between"
                >
                  <span>{logId}</span>
                  <ExternalLink className="w-3 h-3" />
                </NavLink>
              ))}

              <div className="text-[10px] text-[var(--text-dim)] uppercase pt-2">Related Papers</div>
              {prototype.relatedPapers.map((paperId) => (
                <NavLink
                  key={paperId}
                  to={`/papers?id=${paperId}`}
                  className="block p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--accent-green-bright)] hover:underline flex items-center justify-between"
                >
                  <span>{paperId}</span>
                  <ExternalLink className="w-3 h-3" />
                </NavLink>
              ))}
            </div>
          </section>

          {/* Public Discussion Annotations */}
          <section className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 rounded-md space-y-3">
            <div className="font-bold text-xs uppercase text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1 flex items-center">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[var(--accent-green-bright)]" /> Research Annotations
            </div>

            <div className="space-y-3">
              {prototype.annotations.map((ann, idx) => (
                <div key={idx} className="p-3 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                    <span className="font-bold text-[var(--accent-green-bright)]">{ann.author}</span>
                    <span>{ann.date}</span>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed">{ann.text}</p>
                </div>
              ))}
            </div>

            {/* Add Annotation Form */}
            <form onSubmit={handleAddAnnotation} className="pt-2 space-y-2">
              <input
                type="text"
                value={newAnnotation}
                onChange={(e) => setNewAnnotation(e.target.value)}
                placeholder="Append peer observation..."
                className="w-full px-3 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-1.5 rounded bg-[var(--accent-green)] text-white text-xs uppercase font-bold hover:bg-[var(--accent-green-bright)] transition-colors cursor-pointer"
              >
                Submit Discussion Note
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
