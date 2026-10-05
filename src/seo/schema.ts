/**
 * JSON-LD Schema builders for the Zazie Institute ecosystem.
 * 
 * Builds structured data for search engines, knowledge graphs, and AI systems.
 * Ensures proper entity relationships and avoids ambiguity between real-world
 * entities and archive personas.
 */

import { SITE, canonicalUrl } from './site';
import { FOUNDER, ZAZIE_PRODUCTIONS, ZIAA } from './entities';

/**
 * Organization schema for Zazie Institute of Applied Anomalies.
 * Used on homepage and institutional pages.
 */
export function organizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ZIAA.id,
    name: ZIAA.name,
    legalName: ZIAA.legalName,
    alternateName: [ZIAA.shortName, ZIAA.acronym],
    description: ZIAA.description,
    url: canonicalUrl('/'),
    foundingDate: ZIAA.foundingDate,
    founder: {
      '@id': FOUNDER.id,
    },
    parentOrganization: {
      '@id': ZAZIE_PRODUCTIONS.id,
    },
    sameAs: ZIAA.sameAs.length > 0 ? ZIAA.sameAs : undefined,
    email: ZIAA.email,
    ...(ZIAA.logo && { logo: ZIAA.logo }),
  };
}

/**
 * Organization schema for Zazie Productions LLC (parent company).
 */
export function zazieProductionsSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ZAZIE_PRODUCTIONS.id,
    name: ZAZIE_PRODUCTIONS.name,
    legalName: ZAZIE_PRODUCTIONS.legalName,
    alternateName: [ZAZIE_PRODUCTIONS.shortName],
    description: ZAZIE_PRODUCTIONS.description,
    founder: {
      '@id': FOUNDER.id,
    },
    sameAs: ZAZIE_PRODUCTIONS.sameAs.length > 0 ? ZAZIE_PRODUCTIONS.sameAs : undefined,
    ...(ZAZIE_PRODUCTIONS.url && { url: ZAZIE_PRODUCTIONS.url }),
  };
}

/**
 * Person schema for Zazie Kanwar-Torge (founder).
 * Used on /founder page and referenced by other schemas.
 */
export function personSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER.id,
    name: FOUNDER.name,
    givenName: FOUNDER.givenName,
    familyName: FOUNDER.familyName,
    url: FOUNDER.url,
    mainEntityOfPage: FOUNDER.url,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.description,
    knowsAbout: FOUNDER.knowsAbout,
    affiliation: [
      {
        '@id': ZIAA.id,
      },
      {
        '@id': ZAZIE_PRODUCTIONS.id,
      },
    ],
    founder: [
      {
        '@id': ZIAA.id,
      },
      {
        '@id': ZAZIE_PRODUCTIONS.id,
      },
    ],
    sameAs: FOUNDER.sameAs.length > 0 ? FOUNDER.sameAs : undefined,
  };
}

/**
 * WebSite schema for the homepage.
 * Establishes the site as a searchable entity.
 */
export function websiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': canonicalUrl('/#website'),
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.acronym],
    url: canonicalUrl('/'),
    description: SITE.description,
    inLanguage: SITE.inLanguage,
    publisher: {
      '@id': ZIAA.id,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${canonicalUrl('/search')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * WebPage schema for individual pages.
 */
export function webPageSchema(options: {
  title: string;
  description: string;
  url: string;
  isPartOf?: string;
  about?: object;
  mainEntity?: object;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.title,
    description: options.description,
    url: options.url,
    isPartOf: options.isPartOf || canonicalUrl('/#website'),
    inLanguage: SITE.inLanguage,
    ...(options.about && { about: options.about }),
    ...(options.mainEntity && { mainEntity: options.mainEntity }),
  };
}

/**
 * ProfilePage schema for the /founder page.
 */
export function profilePageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': FOUNDER.id,
    },
    about: {
      '@id': FOUNDER.id,
    },
  };
}

/**
 * AboutPage schema for the /about page.
 */
export function aboutPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@id': ZIAA.id,
    },
    about: {
      '@id': ZIAA.id,
    },
  };
}

/**
 * ScholarlyArticle schema for technical papers.
 * Links authors to canonical Person @id when appropriate.
 */
export function scholarlyArticleSchema(options: {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publishedDate: string;
  abstract: string;
  keywords?: string[];
  doi?: string;
  url: string;
}): object {
  // Map author names to canonical Person references where applicable
  const authors = options.authors.map((authorName) => {
    // Check if this is Zazie Kanwar-Torge (the real founder)
    if (authorName === FOUNDER.name || authorName === 'Zazie Kanwar-Torge') {
      return {
        '@id': FOUNDER.id,
      };
    }
    // Otherwise, represent as a simple Person name
    return {
      '@type': 'Person',
      name: authorName,
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    '@id': canonicalUrl(`/papers?id=${options.id}#article`),
    name: options.title,
    ...(options.subtitle && { alternativeHeadline: options.subtitle }),
    author: authors,
    datePublished: options.publishedDate,
    description: options.abstract,
    url: options.url,
    publisher: {
      '@id': ZAZIE_PRODUCTIONS.id,
    },
    isPartOf: {
      '@type': 'PublicationVolume',
      name: 'Zazie Institute Technical Monograph Series',
      isPartOf: {
        '@type': 'Periodical',
        name: 'Zazie Institute Technical Monograph Series',
        publisher: {
          '@id': ZAZIE_PRODUCTIONS.id,
        },
      },
    },
    ...(options.keywords && { keywords: options.keywords.join(', ') }),
    ...(options.doi && { identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: options.doi } }),
    inLanguage: SITE.inLanguage,
  };
}

/**
 * BreadcrumbList schema for navigation context.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Combine multiple schemas into a single JSON-LD graph.
 */
export function combinedSchema(...schemas: object[]): string {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': schemas,
    },
    null,
    2
  );
}

/**
 * Serialize a single schema to JSON-LD string.
 */
export function serializeSchema(schema: object): string {
  return JSON.stringify(schema, null, 2);
}
