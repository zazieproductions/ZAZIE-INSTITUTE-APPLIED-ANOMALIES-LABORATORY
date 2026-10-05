/**
 * Canonical entity definitions for the Zazie Institute ecosystem.
 * 
 * This file defines the real-world entities and their relationships:
 * - Zazie Kanwar-Torge (Person, founder)
 * - Zazie Productions LLC (Organization, parent company)
 * - Zazie Institute of Applied Anomalies (Organization, research lab)
 * 
 * Archive personas (Dr. H. Zazie, Dr. V. Aris Thorne, etc.) are fictional
 * institutional characters and must NOT be emitted as real-world founders.
 */

import { SITE, canonicalUrl } from './site';

/**
 * Zazie Kanwar-Torge — real-world founder and owner.
 * This is the canonical Person entity.
 */
export const FOUNDER = {
  /** Stable canonical @id for JSON-LD references */
  id: canonicalUrl('/founder#person'),
  
  /** Canonical page URL */
  url: canonicalUrl('/founder'),
  
  /** Full legal name */
  name: 'Zazie Kanwar-Torge',
  
  /** Name components for structured data */
  givenName: 'Zazie',
  familyName: 'Kanwar-Torge',
  
  /** Professional title */
  jobTitle: 'Founder & Director',
  
  /** Short description for search snippets */
  description:
    'Sound artist, researcher, and founder of Zazie Productions LLC and the Zazie Institute of Applied Anomalies.',
  
  /** Research and creative focus areas */
  knowsAbout: [
    'Experimental audio technologies',
    'Physical modeling synthesis',
    'Signal archaeology',
    'Magnetorheological acoustics',
    'Speculative research infrastructure',
    'Perceptual interfaces',
    'Generative composition systems',
    'Sound installation art',
  ],
  
  /** 
   * External identity URLs (sameAs).
   * Only include URLs that genuinely exist and resolve.
   * Add legitimate profiles here as they are established.
   */
  sameAs: [] as string[],
  
  /** Archive persona used in institutional fiction (NOT the real person) */
  archivePersona: 'Dr. H. Zazie',
} as const;

/**
 * Zazie Productions LLC — parent company and operator.
 * This is the canonical Organization entity for the parent company.
 */
export const ZAZIE_PRODUCTIONS = {
  /** Stable canonical @id for JSON-LD references */
  id: canonicalUrl('/#zazie-productions'),
  
  /** Official name */
  name: 'Zazie Productions LLC',
  
  /** Legal name */
  legalName: 'Zazie Productions LLC',
  
  /** Short name */
  shortName: 'Zazie Productions',
  
  /** Organization type */
  type: 'LLC',
  
  /** Description */
  description:
    'Independent production company and operator of the Zazie Institute of Applied Anomalies.',
  
  /** Founder/owner */
  founder: FOUNDER.name,
  founderId: FOUNDER.id,
  
  /** External identity URLs (sameAs) */
  sameAs: [] as string[],
  
  /** Canonical URL (if separate site exists later) */
  url: null as string | null,
} as const;

/**
 * Zazie Institute of Applied Anomalies — the research organization.
 * This is the canonical Organization entity for the Institute itself.
 */
export const ZIAA = {
  /** Stable canonical @id for JSON-LD references */
  id: canonicalUrl('/#organization'),
  
  /** Official name */
  name: SITE.name,
  
  /** Legal name */
  legalName: 'Zazie Institute of Applied Anomalies',
  
  /** Short name / acronym */
  shortName: SITE.shortName,
  acronym: SITE.acronym,
  
  /** Description */
  description: SITE.description,
  
  /** Founding date */
  foundingDate: '2021',
  foundingYear: SITE.foundingYear,
  
  /** Founder */
  founder: FOUNDER.name,
  founderId: FOUNDER.id,
  
  /** Parent organization */
  parentOrganization: ZAZIE_PRODUCTIONS.name,
  parentOrganizationId: ZAZIE_PRODUCTIONS.id,
  
  /** External identity URLs (sameAs) — distinct from Person sameAs */
  sameAs: [] as string[],
  
  /** Logo (if available) */
  logo: null as string | null,
  
  /** Contact */
  email: 'archive@zazie-inst.org',
} as const;

/**
 * Archive personnel — fictional institutional characters.
 * These are NOT real-world founders and must be kept separate from
 * the real-world entity graph.
 */
export const ARCHIVE_PERSONNEL = [
  'Dr. H. Zazie',
  'Dr. Elene Vane',
  'Aris Thorne',
  'Dr. K. M. Osei',
  'Yael Lindholm',
  'T. M. Chen',
  'Dr. V. Aris Thorne',
  'Elena Mstislav',
  'Dr. Tamsin Callow',
] as const;

/**
 * Check if a name refers to the real-world founder.
 */
export function isRealFounder(name: string): boolean {
  return name === FOUNDER.name || name === 'Zazie Kanwar-Torge';
}

/**
 * Check if a name is an archive persona (fictional character).
 */
export function isArchivePersona(name: string): boolean {
  return (ARCHIVE_PERSONNEL as readonly string[]).includes(name);
}

/**
 * Get the canonical Person @id for a known author.
 * Returns the @id if the author is Zazie Kanwar-Torge, null otherwise.
 */
export function getCanonicalAuthorId(name: string): string | null {
  if (isRealFounder(name)) {
    return FOUNDER.id;
  }
  return null;
}
