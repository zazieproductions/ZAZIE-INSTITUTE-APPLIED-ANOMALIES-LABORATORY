#!/usr/bin/env node
/**
 * llms.txt generator for the Zazie Institute site.
 * 
 * Generates llms.txt — a machine-readable file that helps AI systems
 * understand the site's purpose, entities, and content structure.
 * 
 * See: https://llmstxt.org/
 * 
 * Run after build: npm run llms
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://zazieinstitute.org';

function generateLlmsTxt() {
  const content = `# Zazie Institute of Applied Anomalies

> Independent laboratory archive for experimental audio technologies, speculative patents, perceptual interfaces, signal archaeology, and public listening infrastructure.

## Identity

The Zazie Institute of Applied Anomalies (ZIAA) was founded by Zazie Kanwar-Torge in 2021 and is operated by Zazie Productions LLC as a non-commercial research and development division.

- **Founder**: Zazie Kanwar-Torge
- **Parent Organization**: Zazie Productions LLC
- **Founded**: 2021
- **Type**: Independent speculative research laboratory and archive
- **Website**: ${SITE_URL}

## About the Founder

Zazie Kanwar-Torge is the founder and owner of Zazie Productions LLC and the founder and director of the Zazie Institute of Applied Anomalies. Since 2021, Zazie has directed the Institute's research into experimental audio technologies, material acoustics, perceptual interfaces, and speculative research infrastructure.

**Profile**: ${SITE_URL}/founder

## Research Divisions

The Institute operates across five research divisions:

1. **Signal Archaeology** — Physical magnetic tape erosion, oxide hysteresis, natural VLF radio, and historical audio media reclamation.
2. **Perceptual Interfaces** — Parametric ultrasonic difference tones, bone conduction, psychoacoustic masking, and phantom auditory phenomena.
3. **Material Acoustics** — Magnetorheological ferrofluid resonators, timber piezo contact arrays, and sub-wavelength metamaterial traps.
4. **Generative Systems** — Robotic tape re-splicing, micro-granular memory buffers, and physical jog-wheel hardware algorithms.
5. **Spatial Infrastructures** — Subterranean bedrock waveguides, dark-sky soundscape post monitoring, and geophonic impedance arrays.

## Archive Scope

The Institute maintains a comprehensive archive documenting five years of speculative inquiry (2021–2026):

- **120+ Material Prototype Records** — Detailed dossiers on experimental hardware, instruments, and installations.
- **75+ Speculative Patent Dossiers** — Defensive prior-art filings and speculative invention concepts.
- **250+ Laboratory Log Entries** — Field measurements, transducer stress tests, signal scans, and protocol analyses.
- **12 Technical Monographs** — Longform research papers with full scholarly metadata, BibTeX citations, and DOI identifiers.

## Key Pages

- **Homepage**: ${SITE_URL}/
- **About the Institute**: ${SITE_URL}/about
- **Founder Profile**: ${SITE_URL}/founder
- **Prototype Archive**: ${SITE_URL}/prototypes
- **Technical Papers**: ${SITE_URL}/papers
- **Speculative Patents**: ${SITE_URL}/patents
- **Laboratory Logs**: ${SITE_URL}/logs
- **People & Fellows**: ${SITE_URL}/people
- **Exhibitions**: ${SITE_URL}/exhibitions
- **Institutional Timeline**: ${SITE_URL}/timeline
- **Policies & Governance**: ${SITE_URL}/policies

## Content Type

This is a speculative research archive and artistic project. All patents, dossiers, prototypes, schematics, logs, and essays are transparently speculative artistic creations and experimental audio research. They do not represent real government patents, commercial medical products, surveillance systems, or certified industrial safety gear.

## Contact

- **Email**: archive@zazie-inst.org
- **Institutional Identity**: Zazie Institute of Applied Anomalies (ZIAA)
- **Parent Company**: Zazie Productions LLC
- **Founder**: Zazie Kanwar-Torge

## Technical Notes

- Built with React 19, TypeScript, Vite, and Tailwind CSS
- Deployed on Cloudflare Pages
- Static site with client-side routing
- JSON-LD structured data on all pages
- Sitemap: ${SITE_URL}/sitemap.xml
`;

  const outputPath = join(__dirname, '..', 'dist', 'llms.txt');
  writeFileSync(outputPath, content, 'utf-8');
  
  console.log(`✓ Generated llms.txt`);
  console.log(`  → ${outputPath}`);
}

generateLlmsTxt();
