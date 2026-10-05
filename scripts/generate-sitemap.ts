#!/usr/bin/env node
/**
 * Sitemap generator for the Zazie Institute site.
 * 
 * Generates sitemap.xml with all important pages for search engine indexing.
 * Run after build: npm run sitemap
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://zazieinstitute.org';
const TODAY = new Date().toISOString().split('T')[0];

/**
 * Page definitions with priority and change frequency.
 */
const pages = [
  // Core pages — highest priority
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/founder', priority: 0.9, changefreq: 'monthly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  
  // Archive index pages
  { path: '/prototypes', priority: 0.8, changefreq: 'monthly' },
  { path: '/papers', priority: 0.8, changefreq: 'monthly' },
  { path: '/patents', priority: 0.7, changefreq: 'monthly' },
  { path: '/logs', priority: 0.7, changefreq: 'weekly' },
  { path: '/people', priority: 0.7, changefreq: 'monthly' },
  { path: '/exhibitions', priority: 0.7, changefreq: 'monthly' },
  { path: '/timeline', priority: 0.6, changefreq: 'monthly' },
  { path: '/instruments', priority: 0.6, changefreq: 'monthly' },
  
  // Utility pages
  { path: '/search', priority: 0.5, changefreq: 'monthly' },
  { path: '/policies', priority: 0.4, changefreq: 'yearly' },
];

/**
 * Dynamic prototype detail pages.
 * These are individual prototype dossiers that should be indexed.
 */
const prototypeIds = [
  'ZIAA-PROTO-084',
  'ZIAA-PROTO-012',
  'ZIAA-PROTO-020',
  'ZIAA-PROTO-099',
  'ZIAA-PROTO-041',
  'ZIAA-PROTO-063',
  'ZIAA-PROTO-050',
  'ZIAA-PROTO-003',
  'ZIAA-PROTO-105',
  'ZIAA-PROTO-112',
  'ZIAA-PROTO-033',
  'ZIAA-PROTO-077',
];

function generateSitemap() {
  const urls = [];
  
  // Static pages
  for (const page of pages) {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: TODAY,
      changefreq: page.changefreq,
      priority: page.priority.toFixed(1),
    });
  }
  
  // Prototype detail pages
  for (const id of prototypeIds) {
    urls.push({
      loc: `${SITE_URL}/prototypes/${id}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: '0.6',
    });
  }
  
  // Build XML
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(url => [
      '  <url>',
      `    <loc>${url.loc}</loc>`,
      `    <lastmod>${url.lastmod}</lastmod>`,
      `    <changefreq>${url.changefreq}</changefreq>`,
      `    <priority>${url.priority}</priority>`,
      '  </url>',
    ].join('\n')),
    '</urlset>',
  ].join('\n');
  
  // Write to dist/sitemap.xml
  const outputPath = join(__dirname, '..', 'dist', 'sitemap.xml');
  writeFileSync(outputPath, xml, 'utf-8');
  
  console.log(`✓ Generated sitemap.xml with ${urls.length} URLs`);
  console.log(`  → ${outputPath}`);
  
  return urls.length;
}

generateSitemap();
