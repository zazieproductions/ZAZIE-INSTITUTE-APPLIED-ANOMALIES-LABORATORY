/**
 * Site-wide configuration for the Zazie Institute of Applied Anomalies.
 * Single source of truth for canonical URLs, domain, and site identity.
 */

export const SITE = {
  domain: 'zazieinstitute.org',
  protocol: 'https',
  get baseUrl() {
    return `${this.protocol}://${this.domain}`;
  },
  name: 'Zazie Institute of Applied Anomalies',
  shortName: 'Zazie Institute',
  acronym: 'ZIAA',
  description:
    'Independent laboratory archive for experimental audio technologies, speculative patents, perceptual interfaces, signal archaeology, and public listening infrastructure.',
  founded: '2021',
  foundingYear: 2021,
  currentYear: 2026,
  language: 'en',
  locale: 'en_US',
  inLanguage: 'en-US',
  contentRating: 'General',
  themeColor: '#121415',
  backgroundColor: '#121415',
} as const;

/** Canonical URL builder */
export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.baseUrl}${normalized}`;
}

/** Standard page routes used across the system */
export const ROUTES = {
  home: '/',
  founder: '/founder',
  about: '/about',
  cite: '/cite',
  prototypes: '/prototypes',
  prototypeDetail: (id: string) => `/prototypes/${id}`,
  patents: '/patents',
  instruments: '/instruments',
  logs: '/logs',
  papers: '/papers',
  people: '/people',
  exhibitions: '/exhibitions',
  timeline: '/timeline',
  search: '/search',
  policies: '/policies',
} as const;
