/**
 * Page metadata definitions for the Zazie Institute site.
 * 
 * Central source of truth for titles and descriptions used by
 * the Seo component and pre-rendered HTML.
 */

import { SITE, ROUTES } from './site';
import { FOUNDER, ZAZIE_PRODUCTIONS } from './entities';
import { INSTITUTIONAL_RELATIONSHIP, FOUNDER_BIOGRAPHY, ABOUT_STATEMENT } from './canonicalFacts';

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
}

/**
 * Homepage metadata.
 * Strongly associated with Zazie Institute of Applied Anomalies.
 */
export const HOME_METADATA: PageMetadata = {
  title: `${SITE.name} (${SITE.acronym})`,
  description: `${INSTITUTIONAL_RELATIONSHIP.short} ${SITE.description}`,
  path: ROUTES.home,
  indexable: true,
};

/**
 * Founder page metadata.
 * Strongly associated with Zazie Kanwar-Torge and Zazie Productions.
 */
export const FOUNDER_METADATA: PageMetadata = {
  title: `${FOUNDER.name} — Founder of ${ZAZIE_PRODUCTIONS.shortName} & ${SITE.shortName}`,
  description: FOUNDER_BIOGRAPHY.metaDescription,
  path: ROUTES.founder,
  indexable: true,
};

/**
 * About page metadata.
 * Strong institutional entity clarification.
 */
export const ABOUT_METADATA: PageMetadata = {
  title: `About ${SITE.name}`,
  description: ABOUT_STATEMENT.metaDescription,
  path: ROUTES.about,
  indexable: true,
};

/**
 * Prototypes index metadata.
 */
export const PROTOTYPES_METADATA: PageMetadata = {
  title: 'Prototype Archive',
  description: '120+ material prototype records across 5 research divisions: Signal Archaeology, Perceptual Interfaces, Material Acoustics, Generative Systems, and Spatial Infrastructures.',
  path: ROUTES.prototypes,
  indexable: true,
};

/**
 * Patents index metadata.
 */
export const PATENTS_METADATA: PageMetadata = {
  title: 'Speculative Patent Office',
  description: '75+ speculative patent dossiers and defensive prior-art filings from the Zazie Institute laboratory archive.',
  path: ROUTES.patents,
  indexable: true,
};

/**
 * Instruments metadata.
 */
export const INSTRUMENTS_METADATA: PageMetadata = {
  title: 'Live Sound Experiments & Instruments',
  description: 'Interactive audio experiments and live instruments from the Zazie Institute laboratory: ferrofluid resonators, tape decay engines, and psychoacoustic apparatus.',
  path: ROUTES.instruments,
  indexable: true,
};

/**
 * Lab Logs metadata.
 */
export const LOGS_METADATA: PageMetadata = {
  title: 'Laboratory Logs',
  description: '250+ laboratory log entries documenting field measurements, transducer stress tests, signal scans, and protocol analyses from 2021–2026.',
  path: ROUTES.logs,
  indexable: true,
};

/**
 * Papers metadata.
 */
export const PAPERS_METADATA: PageMetadata = {
  title: 'Technical Papers & Monographs',
  description: 'Longform technical monographs from the Zazie Institute research divisions. Includes BibTeX citations, DOI identifiers, and full scholarly metadata.',
  path: ROUTES.papers,
  indexable: true,
};

/**
 * People metadata.
 */
export const PEOPLE_METADATA: PageMetadata = {
  title: 'People & Research Fellows',
  description: 'Profiles of researchers, fellows, and contributors to the Zazie Institute archive: acoustic physicists, magnetics engineers, psychoacousticians, and systems architects.',
  path: ROUTES.people,
  indexable: true,
};

/**
 * Exhibitions metadata.
 */
export const EXHIBITIONS_METADATA: PageMetadata = {
  title: 'Exhibitions & Installations',
  description: 'Public exhibitions and installations of Zazie Institute research: sound art, material acoustics, and perceptual interfaces shown internationally since 2021.',
  path: ROUTES.exhibitions,
  indexable: true,
};

/**
 * Timeline metadata.
 */
export const TIMELINE_METADATA: PageMetadata = {
  title: 'Institutional Timeline',
  description: 'Five-year institutional timeline (2021–2026) of the Zazie Institute: breakthroughs, decommissions, symposia, and key research milestones.',
  path: ROUTES.timeline,
  indexable: true,
};

/**
 * Search metadata.
 */
export const SEARCH_METADATA: PageMetadata = {
  title: 'Archive Search',
  description: 'Cross-reference search across the full Zazie Institute archive: prototypes, patents, lab logs, papers, people, and exhibitions.',
  path: ROUTES.search,
  indexable: true,
};

/**
 * Policies metadata.
 */
export const POLICIES_METADATA: PageMetadata = {
  title: 'Policies & Governance',
  description: 'Institutional policies, speculative research disclaimers, material laboratory safety standards, and governance charter of the Zazie Institute.',
  path: ROUTES.policies,
  indexable: true,
};
