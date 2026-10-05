# Branded Search Runbook

Post-deployment actions for optimizing branded search visibility for Zazie Kanwar-Torge, Zazie Productions LLC, and the Zazie Institute of Applied Anomalies.

---

## 1. Google Search Console

### Setup

1. **Verify ownership** of `zazieinstitute.org`
   - Use DNS TXT record method (preferred for Cloudflare Pages)
   - Or use HTML file upload to `public/google-verification.html`

2. **Submit sitemap**
   - URL: `https://zazieinstitute.org/sitemap.xml`
   - Verify all 25+ URLs are discovered

3. **Request indexing** for key pages:
   - `/` (homepage)
   - `/founder` (Zazie Kanwar-Torge profile)
   - `/about` (institutional information)
   - `/prototypes` (archive index)
   - `/papers` (technical monographs)
   - `/people` (research fellows)

4. **Monitor coverage report**
   - Check for crawl errors
   - Verify no pages are excluded unintentionally
   - Ensure `/founder` and `/about` are indexed

### Performance Monitoring

Track impressions, clicks, and average position for these branded queries:

**Primary branded queries:**
- `"Zazie Kanwar-Torge"`
- `"Zazie Productions"`
- `"Zazie Productions LLC"`
- `"Zazie Institute"`
- `"Zazie Institute of Applied Anomalies"`
- `"ZIAA"`

**Long-tail branded queries:**
- `"Zazie Kanwar-Torge" "Zazie Productions"`
- `"Zazie Kanwar-Torge" "Zazie Institute"`
- `"Zazie Productions" "Zazie Institute"`
- `"Zazie Kanwar-Torge" founder`
- `"Zazie Institute" founder`

**Site-specific queries:**
- `site:zazieinstitute.org`
- `site:zazieinstitute.org "Zazie Kanwar-Torge"`
- `site:zazieinstitute.org "Zazie Productions"`

### Goals

- `/founder` should rank #1 for `"Zazie Kanwar-Torge"`
- Homepage should rank #1 for `"Zazie Institute of Applied Anomalies"`
- `/about` should appear in top 3 for `"Zazie Institute" about`

---

## 2. External Profile Optimization

Update legitimate existing profiles to clearly state and link the relationship:

> Zazie Kanwar-Torge, working as Zazie Productions, is founder and director of the Zazie Institute of Applied Anomalies.

### Priority Profiles

**If these profiles exist, update them:**

1. **IMDb** (if applicable)
   - Add Zazie Institute of Applied Anomalies to bio
   - Link to https://zazieinstitute.org/founder

2. **Ars Electronica** (if artist profile exists)
   - Add institutional affiliation
   - Link to https://zazieinstitute.org

3. **FilmFreeway** (if applicable)
   - Add Zazie Productions LLC as production company
   - Add Zazie Institute as research affiliation

4. **Bandcamp** (if music releases exist)
   - Artist bio should mention Zazie Productions LLC
   - Link to https://zazieinstitute.org

5. **LinkedIn** (if professional profile exists)
   - Add Zazie Productions LLC as company
   - Add Zazie Institute of Applied Anomalies as project/organization
   - Link to https://zazieinstitute.org/founder

6. **GitHub** (if repositories exist)
   - Add Zazie Institute link to profile
   - Pin zazieproductions repositories

7. **Zenodo / ORCID** (if scholarly publications exist)
   - Add institutional affiliation
   - Link to https://zazieinstitute.org

### sameAs URLs

Once legitimate external profiles are established and verified, add them to:

**File:** `src/seo/entities.ts`

```typescript
export const FOUNDER = {
  // ... existing fields ...
  sameAs: [
    'https://www.imdb.com/name/nmXXXXXXX/',  // Only if real
    'https://www.linkedin.com/in/zazie-kanwar-torge/',  // Only if real
    // Add other legitimate profiles
  ],
};

export const ZAZIE_PRODUCTIONS = {
  // ... existing fields ...
  sameAs: [
    'https://github.com/zazieproductions',  // Only if real
    // Add other legitimate profiles
  ],
};

export const ZIAA = {
  // ... existing fields ...
  sameAs: [
    'https://github.com/zazieproductions/ZAZIE-INSTITUTE-APPLIED-ANOMALIES-LABORATORY',  // Only if real
    // Add other legitimate profiles
  ],
};
```

**Important:** Only add URLs that genuinely exist and resolve. Do not fabricate profiles.

---

## 3. Content Strategy

### Ongoing Content to Strengthen Entity Signals

1. **Publish more technical papers** authored by or directed by Zazie Kanwar-Torge
   - Each paper strengthens the authored-work graph
   - Papers with DOI identifiers are especially valuable

2. **Document exhibitions and installations**
   - Each exhibition page strengthens institutional credibility
   - Include venue names, dates, and locations

3. **Maintain laboratory logs**
   - Regular updates signal active research
   - Logs authored by "Dr. H. Zazie" (archive persona) represent Institute work

4. **Create case studies or retrospectives**
   - Long-form content about specific research projects
   - Can be published as papers or blog-style logs

### Internal Linking

Ensure natural internal links across pages:

- "Zazie Kanwar-Torge" → `/founder`
- "Zazie Productions LLC" → `/about`
- "Zazie Institute" or "ZIAA" → `/`
- "founder" or "director" → `/founder`

**Already implemented in:**
- Header navigation
- Footer institutional context
- Homepage hero section
- About page founding statement
- Founder page biography

---

## 4. Technical Monitoring

### Regular Checks

1. **Run SEO audit monthly:**
   ```bash
   npm run build
   npm run audit:seo
   ```

2. **Run GEO audit quarterly:**
   ```bash
   npm run audit:geo
   ```

3. **Verify sitemap freshness:**
   - Check `dist/sitemap.xml` after each build
   - Ensure new pages are included
   - Verify `lastmod` dates are accurate

4. **Test structured data:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Test homepage, `/founder`, `/about`, and a sample paper
   - Verify JSON-LD parses without errors

5. **Monitor page speed:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: >90 mobile, >95 desktop
   - Current: React SPA with client-side rendering

### Crawl Budget

For a site of this size (~25 pages), crawl budget is not a concern. Focus on:

- Ensuring all important pages are indexable
- Avoiding duplicate content
- Maintaining clean URL structure
- Keeping internal linking logical

---

## 5. Knowledge Graph Optimization

### Wikidata / Wikipedia

**Do NOT create Wikidata items or Wikipedia articles unless:**

1. Zazie Kanwar-Torge has significant independent notability (major press coverage, awards, etc.)
2. Zazie Productions LLC has significant independent notability
3. The Zazie Institute has significant independent notability

**If notability is established:**

- Create Wikidata items with proper references
- Link to https://zazieinstitute.org/founder and https://zazieinstitute.org
- Add `official website` property
- Add `founded by` property linking to Zazie Kanwar-Torge item

**Do NOT:**

- Create stub Wikipedia articles that will be deleted
- Add self-referential citations
- Engage in conflict-of-interest editing

### Schema.org Markup

Current structured data includes:

- **Organization** schema for ZIAA and Zazie Productions LLC
- **Person** schema for Zazie Kanwar-Torge
- **WebSite** schema with SearchAction
- **ProfilePage** schema for /founder
- **AboutPage** schema for /about
- **ScholarlyArticle** schema for papers

**Future enhancements:**

- Add **Event** schema for exhibitions
- Add **CreativeWork** schema for specific installations
- Add **SoftwareApplication** schema if tools are released publicly

---

## 6. Search Console Queries to Monitor

### Weekly Checks

```
"Zazie Kanwar-Torge"
"Zazie Productions"
"Zazie Institute"
site:zazieinstitute.org
```

### Monthly Deep Dives

```
"Zazie Kanwar-Torge" "founder"
"Zazie Institute" "applied anomalies"
"Zazie Productions LLC"
"ZIAA" "research"
"Zazie Institute" "prototypes"
"Zazie Institute" "papers"
```

### Quarterly Analysis

- Compare branded vs. non-branded traffic
- Track position changes for top 10 branded queries
- Identify new branded queries appearing in Search Console
- Analyze which pages rank for which branded queries

---

## 7. Competitive Analysis

### Monitor These Queries

Check what appears for:

- `"Zazie Kanwar-Torge"` — Should be dominated by zazieinstitute.org
- `"Zazie Productions"` — Should show zazieinstitute.org in top 3
- `"Zazie Institute"` — Homepage should be #1

### If Competitors Appear

If other sites rank for branded queries:

1. **Identify the competitor** — Is it a legitimate mention or confusion?
2. **Strengthen your content** — Add more authoritative content on your site
3. **Build legitimate backlinks** — Get mentioned on authoritative third-party sites
4. **Do NOT engage in negative SEO** — Never attack competitors

---

## 8. Backlink Strategy

### Legitimate Backlink Opportunities

**Do NOT engage in spammy backlink campaigns.**

**Instead, pursue:**

1. **Press coverage** — If Zazie Kanwar-Torge or the Institute is featured in articles
2. **Academic citations** — If papers are cited by other researchers
3. **Exhibition catalogs** — If installations are documented by venues
4. **Conference proceedings** — If research is presented at events
5. **Industry directories** — If listed in legitimate sound art / research directories

### Anchor Text

Natural anchor text should include:

- "Zazie Kanwar-Torge"
- "Zazie Productions"
- "Zazie Institute"
- "Zazie Institute of Applied Anomalies"
- "ZIAA"
- Branded URLs (https://zazieinstitute.org)

**Avoid:**

- Exact-match keyword stuffing
- Generic "click here" anchors
- Paid links
- Link exchanges

---

## 9. Social Media (If Applicable)

### If Social Profiles Exist

Update bios to include:

> Zazie Kanwar-Torge | Founder, Zazie Productions LLC | Director, Zazie Institute of Applied Anomalies | https://zazieinstitute.org

**Platforms to consider:**

- Twitter/X (if active)
- Instagram (for visual documentation)
- YouTube (for demonstrations, installations)
- Vimeo (for higher-quality video content)

**Link to:**

- https://zazieinstitute.org (homepage)
- https://zazieinstitute.org/founder (personal profile)
- https://zazieinstitute.org/about (institutional info)

---

## 10. Ongoing Maintenance

### Monthly

- [ ] Check Google Search Console for errors
- [ ] Review top 5 branded query performance
- [ ] Verify sitemap is current
- [ ] Test structured data on key pages

### Quarterly

- [ ] Run full SEO audit (`npm run audit:seo`)
- [ ] Run GEO audit (`npm run audit:geo`)
- [ ] Review and update external profiles
- [ ] Analyze branded vs. non-branded traffic
- [ ] Check for new backlink opportunities

### Annually

- [ ] Review and update founder biography
- [ ] Update institutional statistics
- [ ] Refresh key page content
- [ ] Evaluate new schema.org types
- [ ] Assess knowledge graph presence

---

## 11. Success Metrics

### 3-Month Goals

- [ ] `/founder` ranks #1 for `"Zazie Kanwar-Torge"`
- [ ] Homepage ranks #1 for `"Zazie Institute of Applied Anomalies"`
- [ ] 10+ branded queries show impressions in Search Console
- [ ] Sitemap fully indexed (25+ URLs)

### 6-Month Goals

- [ ] 5+ pages rank on page 1 for branded queries
- [ ] 100+ monthly impressions for branded queries
- [ ] 10+ legitimate backlinks from external sites
- [ ] Knowledge panel appears for branded queries (if notability established)

### 12-Month Goals

- [ ] Dominant presence in top 3 for all primary branded queries
- [ ] 500+ monthly impressions for branded queries
- [ ] 20+ legitimate backlinks
- [ ] Wikidata item created (if notability established)
- [ ] Featured snippets for branded queries

---

## 12. Troubleshooting

### Problem: `/founder` not ranking for "Zazie Kanwar-Torge"

**Solutions:**

1. Verify page is indexed in Search Console
2. Check for competing pages with same name
3. Strengthen internal linking to `/founder`
4. Add more content about Zazie Kanwar-Torge on other pages
5. Build legitimate external mentions

### Problem: Homepage not ranking for "Zazie Institute"

**Solutions:**

1. Verify title tag includes "Zazie Institute of Applied Anomalies"
2. Check meta description
3. Strengthen institutional relationship statement in hero
4. Build external mentions of "Zazie Institute"
5. Ensure JSON-LD Organization schema is correct

### Problem: Sitemap not fully indexed

**Solutions:**

1. Resubmit sitemap in Search Console
2. Request indexing for individual URLs
3. Check for crawl errors
4. Verify robots.txt allows crawling
5. Ensure pages return 200 status

### Problem: Structured data errors

**Solutions:**

1. Run Rich Results Test on affected pages
2. Check JSON-LD syntax
3. Verify @id references are correct
4. Ensure all required properties are present
5. Test with Schema.org validator

---

## 13. Contact & Support

**For technical issues:**

- Review audit scripts in `scripts/`
- Check `src/seo/` for entity definitions
- Verify `dist/sitemap.xml` and `dist/llms.txt`

**For content strategy:**

- Focus on legitimate, authoritative content
- Avoid keyword stuffing
- Prioritize user experience over SEO tricks
- Build genuine relationships with external sites

---

## Summary

This runbook provides a comprehensive guide for optimizing branded search visibility. The technical foundation is now in place:

✅ Entity graph established (Zazie Kanwar-Torge → Zazie Productions LLC → ZIAA)  
✅ Structured data implemented (JSON-LD on all key pages)  
✅ Sitemap and llms.txt generated  
✅ /founder and /about pages created  
✅ Internal linking optimized  
✅ SEO and GEO audits passing  

**Next steps:**

1. Deploy to production
2. Verify in Google Search Console
3. Submit sitemap
4. Monitor branded query performance
5. Update external profiles as appropriate
6. Continue publishing authoritative content

**Remember:** Branded search dominance comes from **clear entity relationships**, **authoritative content**, and **legitimate external corroboration** — not from keyword density or manipulative tactics.

---

*Last updated: 2026-10-05*  
*Repository: zazieproductions/ZAZIE-INSTITUTE-APPLIED-ANOMALIES-LABORATORY*
