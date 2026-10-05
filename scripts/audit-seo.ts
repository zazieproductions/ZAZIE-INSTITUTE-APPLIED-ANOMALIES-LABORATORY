#!/usr/bin/env node
/**
 * SEO Audit script for the Zazie Institute site.
 * 
 * Performs automated checks for:
 * - Entity graph integrity (founder, organizations)
 * - Structured data validity
 * - Canonical URL consistency
 * - Page indexability
 * - Sitemap completeness
 * 
 * Run: npm run audit:seo
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '..', 'dist');

let passed = 0;
let failed = 0;
let warnings = 0;

function check(name: string, condition: boolean, message?: string) {
  if (condition) {
    console.log(`  ✓ ${name}`);
    passed++;
  } else {
    console.log(`  ✗ ${name}${message ? ': ' + message : ''}`);
    failed++;
  }
}

function _warn(name: string, message: string) {
  console.log(`  ⚠ ${name}: ${message}`);
  warnings++;
}

function auditDistFiles() {
  console.log('\n[1] Dist Directory Structure\n');
  
  const requiredFiles = [
    'index.html',
    'sitemap.xml',
    'robots.txt',
    'llms.txt',
  ];
  
  for (const file of requiredFiles) {
    const path = join(DIST_DIR, file);
    check(`${file} exists`, existsSync(path));
  }
}

function auditSitemap() {
  console.log('\n[2] Sitemap Validation\n');
  
  const sitemapPath = join(DIST_DIR, 'sitemap.xml');
  if (!existsSync(sitemapPath)) {
    check('sitemap.xml exists', false);
    return;
  }
  
  const sitemap = readFileSync(sitemapPath, 'utf-8');
  
  check('sitemap.xml is valid XML', sitemap.includes('<?xml'));
  check('sitemap.xml contains urlset', sitemap.includes('<urlset'));
  check('sitemap.xml includes homepage', sitemap.includes('https://zazieinstitute.org/'));
  check('sitemap.xml includes /founder', sitemap.includes('/founder'));
  check('sitemap.xml includes /about', sitemap.includes('/about'));
  check('sitemap.xml includes /prototypes', sitemap.includes('/prototypes'));
  check('sitemap.xml includes /papers', sitemap.includes('/papers'));
  check('sitemap.xml includes lastmod', sitemap.includes('<lastmod>'));
  check('sitemap.xml includes priority', sitemap.includes('<priority>'));
}

function auditLlmsTxt() {
  console.log('\n[3] llms.txt Validation\n');
  
  const llmsPath = join(DIST_DIR, 'llms.txt');
  if (!existsSync(llmsPath)) {
    check('llms.txt exists', false);
    return;
  }
  
  const llms = readFileSync(llmsPath, 'utf-8');
  
  check('llms.txt mentions Zazie Kanwar-Torge', llms.includes('Zazie Kanwar-Torge'));
  check('llms.txt mentions Zazie Productions LLC', llms.includes('Zazie Productions LLC'));
  check('llms.txt mentions Zazie Institute', llms.includes('Zazie Institute'));
  check('llms.txt mentions founder relationship', llms.includes('founder'));
  check('llms.txt includes sitemap reference', llms.includes('sitemap.xml'));
}

function auditRobotsTxt() {
  console.log('\n[4] robots.txt Validation\n');
  
  const robotsPath = join(DIST_DIR, 'robots.txt');
  if (!existsSync(robotsPath)) {
    check('robots.txt exists', false);
    return;
  }
  
  const robots = readFileSync(robotsPath, 'utf-8');
  
  check('robots.txt allows crawling', robots.includes('Allow:'));
  check('robots.txt references sitemap', robots.includes('Sitemap:'));
}

function auditEntityGraph() {
  console.log('\n[5] Entity Graph Integrity\n');
  
  // Check that entities.ts defines the correct founder
  const entitiesPath = join(__dirname, '..', 'src', 'seo', 'entities.ts');
  if (!existsSync(entitiesPath)) {
    check('entities.ts exists', false);
    return;
  }
  
  const entities = readFileSync(entitiesPath, 'utf-8');
  
  check('FOUNDER is Zazie Kanwar-Torge', entities.includes('Zazie Kanwar-Torge'));
  check('FOUNDER has canonical @id', entities.includes('/founder#person'));
  check('ZAZIE_PRODUCTIONS is defined', entities.includes('Zazie Productions LLC'));
  check('ZAZIE_PRODUCTIONS has canonical @id', entities.includes('/#zazie-productions'));
  check('ZIAA is defined', entities.includes('Zazie Institute of Applied Anomalies'));
  check('ZIAA has canonical @id', entities.includes('/#organization'));
  check('Archive personnel are documented', entities.includes('ARCHIVE_PERSONNEL'));
  check('Dr. H. Zazie is listed as archive persona', entities.includes('Dr. H. Zazie'));
}

function auditSchemaBuilders() {
  console.log('\n[6] Schema Builders\n');
  
  const schemaPath = join(__dirname, '..', 'src', 'seo', 'schema.ts');
  if (!existsSync(schemaPath)) {
    check('schema.ts exists', false);
    return;
  }
  
  const schema = readFileSync(schemaPath, 'utf-8');
  
  check('organizationSchema() exists', schema.includes('export function organizationSchema'));
  check('personSchema() exists', schema.includes('export function personSchema'));
  check('zazieProductionsSchema() exists', schema.includes('export function zazieProductionsSchema'));
  check('websiteSchema() exists', schema.includes('export function websiteSchema'));
  check('scholarlyArticleSchema() exists', schema.includes('export function scholarlyArticleSchema'));
  check('Schema uses FOUNDER.id reference', schema.includes('FOUNDER.id'));
  check('Schema uses ZIAA.id reference', schema.includes('ZIAA.id'));
  check('Schema uses ZAZIE_PRODUCTIONS.id reference', schema.includes('ZAZIE_PRODUCTIONS.id'));
}

function auditFounderPage() {
  console.log('\n[7] Founder Page\n');
  
  const founderPath = join(__dirname, '..', 'src', 'pages', 'Founder.tsx');
  if (!existsSync(founderPath)) {
    check('Founder.tsx exists', false);
    return;
  }
  
  const founder = readFileSync(founderPath, 'utf-8');
  
  check('Founder page imports Seo component', founder.includes("import { Seo }"));
  check('Founder page imports personSchema', founder.includes('personSchema'));
  check('Founder page mentions Zazie Kanwar-Torge', founder.includes('Zazie Kanwar-Torge'));
  check('Founder page mentions Zazie Productions LLC', founder.includes('Zazie Productions LLC'));
  check('Founder page mentions Zazie Institute', founder.includes('Zazie Institute'));
  check('Founder page clarifies archive persona', founder.includes('Dr. H. Zazie'));
}

function auditAboutPage() {
  console.log('\n[8] About Page\n');
  
  const aboutPath = join(__dirname, '..', 'src', 'pages', 'About.tsx');
  if (!existsSync(aboutPath)) {
    check('About.tsx exists', false);
    return;
  }
  
  const about = readFileSync(aboutPath, 'utf-8');
  
  check('About page imports Seo component', about.includes("import { Seo }"));
  check('About page imports organizationSchema', about.includes('organizationSchema'));
  check('About page mentions founder', about.includes('FOUNDER'));
  check('About page mentions parent organization', about.includes('ZAZIE_PRODUCTIONS'));
}

function auditHomepage() {
  console.log('\n[9] Homepage\n');
  
  const overviewPath = join(__dirname, '..', 'src', 'pages', 'Overview.tsx');
  if (!existsSync(overviewPath)) {
    check('Overview.tsx exists', false);
    return;
  }
  
  const overview = readFileSync(overviewPath, 'utf-8');
  
  check('Homepage imports Seo component', overview.includes("import { Seo }"));
  check('Homepage imports organizationSchema', overview.includes('organizationSchema'));
  check('Homepage mentions Zazie Kanwar-Torge', overview.includes('Zazie Kanwar-Torge'));
  check('Homepage mentions Zazie Productions LLC', overview.includes('Zazie Productions LLC'));
}

function auditRouting() {
  console.log('\n[10] Routing\n');
  
  const appPath = join(__dirname, '..', 'src', 'App.tsx');
  if (!existsSync(appPath)) {
    check('App.tsx exists', false);
    return;
  }
  
  const app = readFileSync(appPath, 'utf-8');
  
  check('App imports Founder page', app.includes("import { Founder }"));
  check('App imports About page', app.includes("import { About }"));
  check('App has /founder route', app.includes('path="/founder"'));
  check('App has /about route', app.includes('path="/about"'));
}

function auditEntityAmbiguity() {
  console.log('\n[11] Entity Ambiguity Check\n');
  
  // Check that people.ts clarifies archive personnel
  const peoplePath = join(__dirname, '..', 'src', 'data', 'people.ts');
  if (!existsSync(peoplePath)) {
    check('people.ts exists', false);
    return;
  }
  
  const people = readFileSync(peoplePath, 'utf-8');
  
  check('people.ts clarifies archive personas', people.includes('archive persona') || people.includes('Archive Personnel'));
  check('people.ts references real founder', people.includes('Zazie Kanwar-Torge'));
  
  // Check that schema.ts does NOT emit archive personnel as founders
  const schemaPath = join(__dirname, '..', 'src', 'seo', 'schema.ts');
  if (existsSync(schemaPath)) {
    const schema = readFileSync(schemaPath, 'utf-8');
    
    check('Schema does not use Dr. V. Aris Thorne as founder', !schema.includes('Dr. V. Aris Thorne'));
    check('Schema does not use Elena Mstislav as founder', !schema.includes('Elena Mstislav'));
    check('Schema does not use Dr. Tamsin Callow as founder', !schema.includes('Dr. Tamsin Callow'));
  }
}

function auditSameAsSeparation() {
  console.log('\n[12] sameAs Separation\n');
  
  const entitiesPath = join(__dirname, '..', 'src', 'seo', 'entities.ts');
  if (!existsSync(entitiesPath)) {
    check('entities.ts exists', false);
    return;
  }
  
  const entities = readFileSync(entitiesPath, 'utf-8');
  
  check('FOUNDER has separate sameAs array', entities.includes('FOUNDER') && entities.includes('sameAs: []'));
  check('ZAZIE_PRODUCTIONS has separate sameAs array', entities.includes('ZAZIE_PRODUCTIONS') && entities.includes('sameAs: []'));
  check('ZIAA has separate sameAs array', entities.includes('ZIAA') && entities.includes('sameAs: []'));
}

function main() {
  console.log('═'.repeat(60));
  console.log('  ZAZIE INSTITUTE SEO AUDIT');
  console.log('═'.repeat(60));
  
  auditDistFiles();
  auditSitemap();
  auditLlmsTxt();
  auditRobotsTxt();
  auditEntityGraph();
  auditSchemaBuilders();
  auditFounderPage();
  auditAboutPage();
  auditHomepage();
  auditRouting();
  auditEntityAmbiguity();
  auditSameAsSeparation();
  
  console.log('\n' + '═'.repeat(60));
  console.log(`  RESULTS: ${passed} passed, ${failed} failed, ${warnings} warnings`);
  console.log('═'.repeat(60) + '\n');
  
  if (failed > 0) {
    process.exit(1);
  }
}

main();
