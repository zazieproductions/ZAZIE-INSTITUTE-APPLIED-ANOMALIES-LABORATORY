/**
 * Canonical facts about the Zazie Institute ecosystem.
 * 
 * Single source of truth for institutional statements used across
 * the site, ensuring consistency in visible text, meta descriptions,
 * and structured data.
 */

import { FOUNDER, ZAZIE_PRODUCTIONS, ZIAA } from './entities';

/**
 * Core institutional relationship statement.
 * Used on homepage, /about, and other authoritative pages.
 */
export const INSTITUTIONAL_RELATIONSHIP = {
  /** Primary statement for homepage hero or early content */
  primary: `Founded by ${FOUNDER.name} and operated by ${ZAZIE_PRODUCTIONS.name}, the ${ZIAA.name} (${ZIAA.acronym}) is an independent laboratory for experimental audio technologies, speculative patents, perceptual interfaces, signal archaeology, and public listening infrastructure.`,
  
  /** Shorter version for meta descriptions and snippets */
  short: `${ZIAA.name}, founded by ${FOUNDER.name} and operated by ${ZAZIE_PRODUCTIONS.name}.`,
  
  /** Statement emphasizing the founder */
  founderFocused: `${FOUNDER.name} founded the ${ZIAA.name} in ${ZIAA.foundingDate} as the non-commercial research division of ${ZAZIE_PRODUCTIONS.name}.`,
  
  /** Statement emphasizing the parent company */
  parentFocused: `${ZAZIE_PRODUCTIONS.name}, founded by ${FOUNDER.name}, operates the ${ZIAA.name} as its independent R&D division.`,
};

/**
 * Founder biographical statement.
 * Used on /founder page and in Person schema descriptions.
 */
export const FOUNDER_BIOGRAPHY = {
  /** Opening statement for /founder page */
  opening: `${FOUNDER.name} is the founder and owner of ${ZAZIE_PRODUCTIONS.name} and the founder and director of the ${ZIAA.name} (${ZIAA.acronym}).`,
  
  /** Research direction summary */
  researchDirection: `Since ${ZIAA.foundingDate}, ${FOUNDER.givenName} has directed the Institute's research into experimental audio technologies, material acoustics, perceptual interfaces, and speculative research infrastructure.`,
  
  /** Short description for meta tags */
  metaDescription: `${FOUNDER.name} is the founder of ${ZAZIE_PRODUCTIONS.name} and the ${ZIAA.name}. Sound artist and researcher in experimental audio technologies.`,
  
  /** Role description */
  role: 'Founder & Director',
};

/**
 * About page institutional statement.
 */
export const ABOUT_STATEMENT = {
  /** Primary description for /about page */
  primary: `The ${ZIAA.name} (${ZIAA.acronym}) is an independent speculative research laboratory and archive established in ${ZIAA.foundingDate} by ${FOUNDER.name}. Operated by ${ZAZIE_PRODUCTIONS.name}, the Institute serves as a non-commercial R&D division dedicated to experimental audio technologies, creative tools, speculative patents, perceptual interfaces, signal archaeology, material research, generative composition systems, and public listening infrastructure.`,
  
  /** Mission statement */
  mission: `The Institute maintains a comprehensive archive of 120+ material prototype records, 75+ speculative patent dossiers, 250+ laboratory logs, and longform technical monographs documenting five years of speculative inquiry across five research divisions.`,
  
  /** Short description for meta tags */
  metaDescription: `About the ${ZIAA.name}: independent speculative research laboratory founded by ${FOUNDER.name} and operated by ${ZAZIE_PRODUCTIONS.name}. Est. ${ZIAA.foundingDate}.`,
};

/**
 * Archive statistics for institutional credibility.
 */
export const ARCHIVE_STATISTICS = {
  prototypes: {
    count: 120,
    label: 'Material Prototype Records',
  },
  patents: {
    count: 75,
    label: 'Speculative Patent Dossiers',
  },
  logs: {
    count: 250,
    label: 'Laboratory Log Entries',
  },
  papers: {
    count: 12,
    label: 'Technical Monographs',
  },
  divisions: {
    count: 5,
    label: 'Research Divisions',
  },
  years: {
    start: 2021,
    end: 2026,
    label: 'Years of Speculative Inquiry',
  },
} as const;

/**
 * Research divisions.
 */
export const RESEARCH_DIVISIONS = [
  'Signal Archaeology',
  'Perceptual Interfaces',
  'Material Acoustics',
  'Generative Systems',
  'Spatial Infrastructures',
] as const;
