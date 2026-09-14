import React, { useState } from 'react';
import { Shield, FileText, Rss, AlertTriangle, Lock, Server, Check } from 'lucide-react';
import { policyData } from '../data/policies';

export const Policies: React.FC = () => {
  const [copiedRss, setCopiedRss] = useState(false);

  const rssFeedXml = `<?xml font="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Zazie Institute of Applied Anomalies (ZIAA) Research Feed</title>
    <link>https://ziaa.zazie-productions.org</link>
    <description>Latest telemetry dispatches, defensive patents, and sound monographs from ZIAA</description>
    <language>en-us</language>
    <lastBuildDate>Thu, 10 Sep 2026 00:00:00 GMT</lastBuildDate>
    <item>
      <title>ZIAA-PROTO-084: Sub-Acoustic Ferrofluid Resonator</title>
      <link>https://ziaa.zazie-productions.org/prototypes/ZIAA-PROTO-084</link>
      <pubDate>Mon, 01 Sep 2026 12:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

  const handleCopyRss = () => {
    navigator.clipboard.writeText(rssFeedXml);
    setCopiedRss(true);
    setTimeout(() => setCopiedRss(false), 2000);
  };

  return (
    <div className="space-y-8 font-mono-tech">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs text-[var(--accent-burgundy-bright)] uppercase tracking-widest font-bold">
          <Shield className="w-4 h-4" />
          <span>Institutional Policies &amp; Speculative Governance</span>
        </div>
        <h1 className="font-serif-editorial font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Policies, Safety Protocols &amp; Disclaimer
        </h1>
        <p className="text-xs text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Open documentation charter, material laboratory safety standards, non-commercial speculative project disclaimer, and RSS feed metadata.
        </p>
      </div>

      {/* Prominent Speculative Disclaimer Banner */}
      <div className="border-2 border-[var(--accent-burgundy-bright)] bg-[var(--bg-secondary)] p-6 rounded-md space-y-3">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase text-[var(--accent-burgundy-bright)]">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>Non-Commercial Speculative Research Disclaimer</span>
        </div>
        <div className="text-xs text-[var(--text-primary)] font-serif-editorial leading-relaxed p-4 bg-[var(--bg-primary)] rounded border border-[var(--border-color)]">
          {policyData.disclaimer}
        </div>
      </div>

      {/* Governance Charter */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 rounded-md space-y-4">
        <div className="border-b border-[var(--border-color)] pb-2">
          <h2 className="font-serif-editorial font-bold text-2xl text-[var(--text-primary)]">
            {policyData.governance.title}
          </h2>
          <div className="text-xs text-[var(--accent-green-bright)] mt-0.5">{policyData.governance.version}</div>
        </div>

        <div className="space-y-4 text-xs">
          {policyData.governance.principles.map((p, idx) => (
            <div key={idx} className="p-4 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1">
              <div className="font-bold text-[var(--text-primary)]">{p.heading}</div>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Material Laboratory Safety Standards */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 rounded-md space-y-3">
        <h2 className="font-serif-editorial font-bold text-xl text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">
          Material Laboratory Safety Protocols
        </h2>
        <ul className="space-y-2 text-xs">
          {policyData.safetyProtocols.map((prot, idx) => (
            <li key={idx} className="p-3 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] leading-relaxed">
              <span className="text-[var(--accent-amber)] font-bold mr-1">&bull;</span>
              {prot}
            </li>
          ))}
        </ul>
      </div>

      {/* RSS Feed Simulator */}
      <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 rounded-md space-y-3">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-[var(--accent-amber)]">
            <Rss className="w-4 h-4" />
            <span>ZIAA Institutional RSS 2.0 Telemetry Stream</span>
          </div>

          <button
            onClick={handleCopyRss}
            className="flex items-center space-x-1 text-xs text-[var(--accent-green-bright)] hover:underline cursor-pointer"
          >
            {copiedRss ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Rss className="w-3.5 h-3.5" />}
            <span>{copiedRss ? 'Copied RSS XML' : 'Copy RSS Feed URL'}</span>
          </button>
        </div>

        <pre className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-[10px] text-[var(--text-muted)] overflow-x-auto">
          {rssFeedXml}
        </pre>
      </div>
    </div>
  );
};
