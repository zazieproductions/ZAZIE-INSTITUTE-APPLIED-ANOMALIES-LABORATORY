/**
 * Seo component — manages document <head> for each route.
 * 
 * Sets:
 * - <title>
 * - <meta name="description">
 * - <link rel="canonical">
 * - JSON-LD structured data
 * - Open Graph tags
 * 
 * Usage:
 *   <Seo
 *     title="Founder — Zazie Kanwar-Torge"
 *     description="..."
 *     path="/founder"
 *     schemas={[personSchema(), profilePageSchema()]}
 *   />
 */

import React, { useEffect } from 'react';
import { SITE, canonicalUrl } from './site';

interface SeoProps {
  /** Page title (without site name suffix — that's appended automatically) */
  title: string;
  
  /** Meta description */
  description: string;
  
  /** Route path (e.g., '/founder') — used to build canonical URL */
  path: string;
  
  /** JSON-LD schema objects to inject */
  schemas?: object[];
  
  /** Override the full title (skips site name suffix) */
  fullTitle?: string;
  
  /** Open Graph image URL */
  ogImage?: string;
  
  /** Whether the page should be indexed (default: true) */
  indexable?: boolean;
  
  /** Article published time (for papers) */
  publishedTime?: string;
  
  /** Article modified time */
  modifiedTime?: string;
}

/** Title length safeguard — keep under ~60 chars for display */
const MAX_TITLE_LENGTH = 65;

function buildTitle(pageTitle: string, fullTitle?: string): string {
  if (fullTitle) return fullTitle;
  
  const suffix = ` | ${SITE.shortName}`;
  const combined = `${pageTitle}${suffix}`;
  
  if (combined.length <= MAX_TITLE_LENGTH) {
    return combined;
  }
  
  // If too long, try without suffix
  if (pageTitle.length <= MAX_TITLE_LENGTH) {
    return pageTitle;
  }
  
  // Truncate with ellipsis
  return pageTitle.slice(0, MAX_TITLE_LENGTH - 3) + '...';
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  schemas = [],
  fullTitle,
  ogImage,
  indexable = true,
  publishedTime,
  modifiedTime,
}) => {
  useEffect(() => {
    const finalTitle = buildTitle(title, fullTitle);
    const canonical = canonicalUrl(path);
    
    // Set document title
    document.title = finalTitle;
    
    // Helper to set or create meta tags
    const setMeta = (selector: string, attr: string, value: string, nameOrProperty: 'name' | 'property' = 'name') => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameOrProperty, selector.replace(`meta[${nameOrProperty}="`, '').replace('"]', ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    
    // Meta description
    setMeta('meta[name="description"]', 'content', description);
    
    // Canonical URL
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Robots meta
    if (!indexable) {
      setMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else {
      const robotsEl = document.head.querySelector('meta[name="robots"]');
      if (robotsEl) robotsEl.remove();
    }
    
    // Open Graph tags
    setMeta('meta[property="og:title"]', 'content', finalTitle, 'property');
    setMeta('meta[property="og:description"]', 'content', description, 'property');
    setMeta('meta[property="og:url"]', 'content', canonical, 'property');
    setMeta('meta[property="og:site_name"]', 'content', SITE.name, 'property');
    setMeta('meta[property="og:type"]', 'content', path === '/' ? 'website' : 'article', 'property');
    setMeta('meta[property="og:locale"]', 'content', SITE.locale, 'property');
    
    if (ogImage) {
      setMeta('meta[property="og:image"]', 'content', ogImage, 'property');
    }
    
    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'content', 'summary');
    setMeta('meta[name="twitter:title"]', 'content', finalTitle);
    setMeta('meta[name="twitter:description"]', 'content', description.slice(0, 200));
    
    // Article dates
    if (publishedTime) {
      setMeta('meta[property="article:published_time"]', 'content', publishedTime, 'property');
    }
    if (modifiedTime) {
      setMeta('meta[property="article:modified_time"]', 'content', modifiedTime, 'property');
    }
    
    // JSON-LD structured data
    // Remove existing ZIAA JSON-LD
    const existingScripts = document.head.querySelectorAll('script[data-ziaa-schema="true"]');
    existingScripts.forEach((s) => s.remove());
    
    // Inject new schemas
    if (schemas.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-ziaa-schema', 'true');
      
      if (schemas.length === 1) {
        script.textContent = JSON.stringify(schemas[0]);
      } else {
        script.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': schemas,
        });
      }
      
      document.head.appendChild(script);
    }
    
    // Cleanup on unmount
    return () => {
      const scripts = document.head.querySelectorAll('script[data-ziaa-schema="true"]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, schemas, fullTitle, ogImage, indexable, publishedTime, modifiedTime]);
  
  return null;
};

export default Seo;
