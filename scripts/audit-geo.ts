#!/usr/bin/env node
/**
 * GEO (Generative Engine Optimization) Audit script.
 * 
 * Checks that the site is well-structured for AI search systems,
 * knowledge graphs, and large language models to understand
 * entity relationships and content.
 * 
 * Run: npm run audit:geo
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '..', 'dist');

let passed = 0;
let failed = 0;

function check(name: string, condition: boolean, message?: string) {
  if (condition) {
    console.log(`  ✓ ${name}`);
    passed++;
  } else {
    console.log(`  ✗ ${name}${message ? ': ' + message : ''}`);
    failed++;
  }
}

function auditLlmsTxt() {
  console.log('\n[1] llms.txt for AI Systems\n');
  
  const llmsPath = join(DIST_DIR, 'llms.txt');
  if (!existsSync(llmsPath)) {
    check('llms.txt exists', false);
    return;
  }
  
  const llms = readFileSync(llmsPath, 'utf-8');
  
  check('llms.txt has clear identity statement', llms.includes('Zazie Institute of Applied Anomalies'));
  check('llms.txt identifies founder', llms.includes('Zazie Kanwar-Torge'));
  check('llms.txt identifies parent org', llms.includes('Zazie Productions LLC'));
  check('llms.txt lists research divisions', llms.includes('Signal Archaeology') && llms.includes('Perceptual Interfaces'));
  check('llms.txt describes archive scope', llms.includes('120+') && llms.includes('Prototype'));
  check('llms.txt includes key URLs', llms.includes('/founder') && llms.includes('/about'));
  check('llms.txt clarifies content type', llms.includes('speculative research archive'));
}

function auditStructuredData() {
  console.log('\n[2] Structured Data for Knowledge Graphs\n');
  
  const schemaPath = join(__dirname, '..', 'src', 'seo', 'schema.ts');
  if (!existsSync(schemaPath)) {
    check('schema.ts exists', false);
    return;
  }
  
  const schema = readFileSync(schemaPath, 'utf-8');
  
  check('Organization schema uses @id references', schema.includes("'@id':"));
  check('Person schema has founder relationship', schema.includes('founder:'));
  check('Schema includes knowsAbout for Person', schema.includes('knowsAbout'));
  check('Schema includes affiliation', schema.includes('affiliation'));
  check('Schema includes parentOrganization', schema.includes('parentOrganization'));
  check('ScholarlyArticle schema exists', schema.includes('ScholarlyArticle'));
  check('WebSite schema has SearchAction', schema.includes('SearchAction'));
}

function auditEntityRelationships() {
  console.log('\n[3] Entity Relationships\n');
  
  const entitiesPath = join(__dirname, '..', 'src', 'seo', 'entities.ts');
  if (!existsSync(entitiesPath)) {
    check('entities.ts exists', false);
    return;
  }
  
  const entities = readFileSync(entitiesPath, 'utf-8');
  
  check('FOUNDER has stable @id', entities.includes("id: canonicalUrl('/founder#person')"));
  check('ZAZIE_PRODUCTIONS has stable @id', entities.includes("id: canonicalUrl('/#zazie-productions')"));
  check('ZIAA has stable @id', entities.includes("id: canonicalUrl('/#organization')"));
  check('FOUNDER has founderId reference to ZIAA', entities.includes('founderId'));
  check('ZIAA references parentOrganizationId', entities.includes('parentOrganizationId'));
}

function auditCanonicalFacts() {
  console.log('\n[4] Canonical Facts for Content Consistency\n');
  
  const factsPath = join(__dirname, '..', 'src', 'seo', 'canonicalFacts.ts');
  if (!existsSync(factsPath)) {
    check('canonicalFacts.ts exists', false);
    return;
  }
  
  const facts = readFileSync(factsPath, 'utf-8');
  
  check('INSTITUTIONAL_RELATIONSHIP defined', facts.includes('INSTITUTIONAL_RELATIONSHIP'));
  check('FOUNDER_BIOGRAPHY defined', facts.includes('FOUNDER_BIOGRAPHY'));
  check('ABOUT_STATEMENT defined', facts.includes('ABOUT_STATEMENT'));
  check('ARCHIVE_STATISTICS defined', facts.includes('ARCHIVE_STATISTICS'));
  check('RESEARCH_DIVISIONS defined', facts.includes('RESEARCH_DIVISIONS'));
}

function auditCrawlableContent() {
  console.log('\n[5] Crawlable Static Content\n');
  
  // Check that key pages exist in src
  const keyPages = [
    'src/pages/Overview.tsx',
    'src/pages/Founder.tsx',
    'src/pages/About.tsx',
    'src/pages/Papers.tsx',
    'src/pages/PrototypeIndex.tsx',
  ];
  
  for (const page of keyPages) {
    const pagePath = join(__dirname, '..', page);
    check(`${page} exists`, existsSync(pagePath));
  }
  
  // Check that pages use Seo component
  const founderPath = join(__dirname, '..', 'src', 'pages', 'Founder.tsx');
  if (existsSync(founderPath)) {
    const founder = readFileSync(founderPath, 'utf-8');
    check('Founder page injects JSON-LD', founder.includes('schemas={['));
  }
  
  const aboutPath = join(__dirname, '..', 'src', 'pages', 'About.tsx');
  if (existsSync(aboutPath)) {
    const about = readFileSync(aboutPath, 'utf-8');
    check('About page injects JSON-LD', about.includes('schemas={['));
  }
}

function auditInternalLinking() {
  console.log('\n[6] Internal Linking for Entity Discovery\n');
  
  const headerPath = join(__dirname, '..', 'src', 'components', 'Header.tsx');
  if (!existsSync(headerPath)) {
    check('Header.tsx exists', false);
    return;
  }
  
  const header = readFileSync(headerPath, 'utf-8');
  
  check('Header links to /founder', header.includes("path: '/founder'"));
  check('Header links to /about', header.includes("path: '/about'"));
  
  const footerPath = join(__dirname, '..', 'src', 'components', 'Footer.tsx');
  if (existsSync(footerPath)) {
    const footer = readFileSync(footerPath, 'utf-8');
    check('Footer links to /founder', footer.includes('to="/founder"'));
    check('Footer links to /about', footer.includes('to="/about"'));
    check('Footer mentions Zazie Kanwar-Torge', footer.includes('Zazie Kanwar-Torge'));
  }
}

function auditSitemapCompleteness() {
  console.log('\n[7] Sitemap Completeness\n');
  
  const sitemapPath = join(DIST_DIR, 'sitemap.xml');
  if (!existsSync(sitemapPath)) {
    check('sitemap.xml exists', false);
    return;
  }
  
  const sitemap = readFileSync(sitemapPath, 'utf-8');
  
  check('Sitemap includes /founder', sitemap.includes('/founder'));
  check('Sitemap includes /about', sitemap.includes('/about'));
  check('Sitemap includes /prototypes', sitemap.includes('/prototypes'));
  check('Sitemap includes /papers', sitemap.includes('/papers'));
  check('Sitemap includes prototype detail pages', sitemap.includes('/prototypes/ZIAA-PROTO'));
}

function auditRobotsAndMeta() {
  console.log('\n[8] Robots and Meta Configuration\n');
  
  const robotsPath = join(DIST_DIR, 'robots.txt');
  if (!existsSync(robotsPath)) {
    check('robots.txt exists', false);
    return;
  }
  
  const robots = readFileSync(robotsPath, 'utf-8');
  
  check('robots.txt allows all crawlers', robots.includes('User-agent: *'));
  check('robots.txt allows all paths', robots.includes('Allow: /'));
  check('robots.txt references sitemap', robots.includes('Sitemap:'));
}

function main() {
  console.log('═'.repeat(60));
  console.log('  ZAZIE INSTITUTE GEO AUDIT');
  console.log('  (Generative Engine Optimization)');
  console.log('═'.repeat(60));
  
  auditLlmsTxt();
  auditStructuredData();
  auditEntityRelationships();
  auditCanonicalFacts();
  auditCrawlableContent();
  auditInternalLinking();
  auditSitemapCompleteness();
  auditRobotsAndMeta();
  
  console.log('\n' + '═'.repeat(60));
  console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
  console.log('═'.repeat(60) + '\n');
  
  if (failed > 0) {
    process.exit(1);
  }
}

main();
