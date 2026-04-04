# Website Upgrades Backlog — Vibe Factory

**Managed by:** Olaf (AI Co-CEO)  
**Review Cycle:** Every Wednesday & Saturday at 1 AM CET  
**Status:** Backlog prioritized by impact on SEO/AAIO/GEO

---

## 🚨 CRITICAL (High Impact, Quick Wins)

### 1. JSON-LD Structured Data — NewsArticle Schema
**Impact:** Highest. AI models rely heavily on structured data.  
**What:** Add NewsArticle/BlogPosting + Organization + BreadcrumbList schema to every article  
**Files to Update:** All HTML articles in `/articles/`  
**Details:**
- NewsArticle schema with: headline, datePublished, dateModified, author, articleBody, image
- Organization schema on homepage + every page (name: "Vibe Factory", url, logo, etc.)
- BreadcrumbList on article pages (Home > Research > Category > Article)
**Expected Impact:** 15-25% increase in AI citation rate  
**Assigned to:** Sprint 1 (April 2)

### 2. Visible Publication Dates on Articles
**Impact:** Very High. AI models weight freshness heavily.  
**What:** Add visible "Published March 30, 2026" + "Last updated..." to article headers  
**Files to Update:** All article HTML + article template  
**Details:**
- Place in article header, above title or in meta line
- Use consistent date format across all articles
- Add dateModified schema attribute
**Expected Impact:** Better ranking in AI answer engines (Perplexity, Claude, etc.)  
**Assigned to:** Sprint 1 (April 2)

### 3. Inline Citations & Source Links
**Impact:** High. AI citation engines require verifiable sources.  
**What:** Add numbered citations throughout articles with hyperlinked sources  
**Files to Update:** All article HTML  
**Details:**
- Replace entity mentions (OpenAI, DeepSeek, Anthropic) with links
- Add formal citations section with numbered references
- Link to official papers, blog posts, product pages
- Example: "OpenAI's o1[1]" → [1] = https://openai.com/o1
**Expected Impact:** 10-20% increase in citation credibility  
**Assigned to:** Sprint 1 (April 2)

### 4. Homepage Meta Tags & Open Graph
**Impact:** High. Currently missing entirely.  
**What:** Add og:title, og:description, og:image, meta description to index.html  
**Files to Update:** `index.html`  
**Details:**
- og:title: "Vibe Factory — Daily Research, Automated by Olaf"
- og:description: Clear, compelling description of what we do
- og:image: social-image.svg
- meta description: ~155 characters for SEO
**Expected Impact:** Better social sharing + 5-10% CTR increase from social platforms  
**Assigned to:** Sprint 1 (April 2)

---

## 📈 HIGH PRIORITY (Important, Medium Effort)

### 5. Author Entity Establishment
**Impact:** Medium-High. E-E-A-T signals matter for AI ranking.  
**What:** Create "About Olaf" page + establish external presence  
**Components:**
- `/about-olaf.html` page with schema (Person schema with biography, image, credentials)
- Mention credentials: "Digital twin of Jochem Herber, CEO of Vibe Factory. Runs on Aethir Claw infrastructure."
- Link to Aethir Claw, Jochem's social (if public)
- Consider: Crunchbase listing for Vibe Factory (company), LinkedIn profile for Olaf (if possible)
- Add author bio block to every article (byline + small bio)
**Expected Impact:** Improved E-E-A-T score, 5-10% boost in AI model trust  
**Assigned to:** Sprint 2 (April 9)

### 6. Related Articles Section
**Impact:** Medium. Improves crawlability + internal linking.  
**What:** Add "Related Reading" section at bottom of each article  
**Details:**
- Show 3-4 related articles from same category or linked topics
- Use smart algorithm: same category + topic overlap + recency
- Link both to articles and to category page
**Expected Impact:** 15% increase in pages per session, improved internal link juice  
**Assigned to:** Sprint 2 (April 9)

### 7. Category Landing Pages
**Impact:** Medium. Creates hub pages for each topic area.  
**What:** Create 8 dedicated category pages (one per research category)  
**Files:** `/ai.html`, `/robotics.html`, `/security.html`, etc.  
**Details:**
- Filter research.html grid to show only that category
- Category intro text (SEO-optimized)
- Add category-specific schema
- Link from research.html and homepage
**Expected Impact:** Better topical authority, 10-15% increase in organic traffic per category  
**Assigned to:** Sprint 2 (April 9)

---

## 🔧 MEDIUM PRIORITY (Nice-to-Have, Moderate Effort)

### 8. Social Share Buttons
**Impact:** Low-Medium. Increases distribution potential.  
**What:** Add X, LinkedIn, copy-link buttons to articles  
**Files to Update:** Article template (HTML)  
**Details:**
- Buttons in article footer
- Pre-populated share text (title + author + link)
- Icon-based, not text buttons (clean design)
**Expected Impact:** 5-10% increase in social sharing  
**Assigned to:** Sprint 3 (April 16)

### 9. Reading Progress Indicator
**Impact:** Low. UX enhancement.  
**What:** Add scrollbar-style progress indicator at top of article  
**Files to Update:** Article CSS + JS  
**Details:**
- Horizontal bar that fills as user scrolls
- Color: lime (#CAFF15)
- Sticky at top
**Expected Impact:** Better UX, minor retention boost  
**Assigned to:** Sprint 3 (April 16)

### 10. Site Speed Optimization
**Impact:** Medium. Affects both SEO and AI crawling.  
**What:** Audit and optimize performance  
**Details:**
- Compress images (SVGs are already good)
- Minify CSS/JS
- Defer non-critical JS
- Test with PageSpeed Insights
**Expected Impact:** 10-20% faster load times, minor SEO boost  
**Assigned to:** Sprint 3 (April 16)

---

## 📋 LOW PRIORITY (Backlog, Can Defer)

### 11. LLMs.txt Enhancement
**Impact:** Low-Medium. Helps AI discovery.  
**What:** Optimize llms.txt for better AI indexing  
**Details:**
- Add structured metadata (categories, latest articles, API endpoints)
- Include author info, publication schedule
**Assigned to:** Sprint 4+ (April 23+)

### 12. API Endpoint for Research Metadata
**Impact:** Low. Future-proofing.  
**What:** Create `/api/research.json` endpoint  
**Details:**
- Returns all research articles in JSON format
- Useful for agents, integrations, third-party discovery
- Schema: title, slug, category, date, excerpt, url
**Assigned to:** Sprint 4+ (April 23+)

### 13. Archive / Timeline View
**Impact:** Low. UX feature.  
**What:** Alternative view of all research (timeline or archive)  
**Assigned to:** Backlog (non-critical)

---

## Sprint Schedule

Sprints run on unified week cycles: **Wednesday @ 1 AM CET + Saturday @ 1 AM CET = one sprint week**

| Sprint | Week | Wed Date | Sat Date | Focus | Owner |
|--------|------|----------|----------|-------|-------|
| 1 | Apr 2-3 | Apr 1 | Apr 4 | Critical fixes (schema, dates, citations, homepage) | Olaf |
| 2 | Apr 8-12 | Apr 8 | Apr 12 | Author presence + category pages + related articles | Olaf |
| 3 | Apr 15-19 | Apr 15 | Apr 19 | Social buttons + progress + speed optimization | Olaf |
| 4+ | Apr 22+ | Apr 22 | Apr 26 | LLMs.txt, API, archive view, future features | Olaf |

**Cycle:** Each sprint spans Wed-to-Sat (2 execution days within a week), allowing for rapid iteration and measurement.

---

## Metrics to Track

- **AI Citation Rate:** How often Perplexity, ChatGPT cite Vibe Factory articles
- **Organic Traffic:** Google Search Console data
- **Social Shares:** Count from social share buttons
- **Pages per Session:** After related articles implementation
- **Bounce Rate:** Should decrease with related articles + better UX
- **E-E-A-T Signals:** Monitor Semrush, Ahrefs for author/entity recognition

---

**Last Updated:** 2026-04-04  
**Sprint Cycle:** Wed @ 1 AM CET + Sat @ 1 AM CET = unified sprint week  
**Next Execution:** Sprint 2 begins Wed, April 8 @ 1 AM CET
