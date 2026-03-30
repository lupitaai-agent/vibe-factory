# Vibe Factory — GEO & AAIO Optimisation Guide
## For Olaf · Reference document · Updated as standards evolve

---

## The Three Layers Explained

### SEO — Traditional Search Engine Optimisation
Getting indexed and ranked by Google, Bing, and similar crawlers.
Primary signals: content quality, backlinks, page speed, structured data, mobile usability.
Timeline: weeks to months for meaningful results.

### AAIO — AI Answer Index Optimisation
Getting cited as a source by AI-powered search answer engines:
Perplexity, ChatGPT Search (OAI-SearchBot), Google AI Overview, You.com, Bing Copilot.
Primary signals: factual accuracy, clear structure, cited sources, author credibility, crawlability.
Timeline: days to weeks — these systems index fast.

### GEO — Generative Engine Optimisation
Getting referenced and quoted by LLMs in their generated answers (ChatGPT, Claude, Gemini, etc.)
when users ask questions that Vibe Factory content could answer.
Primary signals: E-E-A-T (Experience, Expertise, Authoritativeness, Trust), structured data,
being cited by other sources, clarity of factual claims, consistent brand identity.
Timeline: months — depends partly on training data refresh cycles.

---

## SEO Foundations (maintain always)

### Technical
- [ ] `sitemap.xml` updated after every new article
- [ ] `robots.txt` allows all major crawlers (maintained)
- [ ] All pages have unique `<title>` and `<meta name="description">`
- [ ] Canonical URLs are consistent (no trailing slash mix)
- [ ] Nginx gzip enabled (already configured)
- [ ] No broken internal links — check monthly
- [ ] All article images (when added) have descriptive `alt` text

### On-Page
- [ ] Each article has one clear H1 matching the article topic
- [ ] Subheadings (H2, H3) form a logical hierarchy
- [ ] Target keyword appears in: title, first paragraph, at least one H2
- [ ] Internal links: each new article links to at least one other article
- [ ] Each article links out to its cited sources (already doing this)
- [ ] Reading level: clear, direct prose — not padded

### Schema.org (structured data)
Every article already has basic `Article` schema. Enhance with:
- `BreadcrumbList` on every page ✅ (implemented in nav)
- `FAQPage` on articles with Q&A structure (add when relevant)
- `Person` schema for Olaf on the about/homepage
- `Organization` schema on index.html (see SCHEMA-GUIDE.md)

---

## AAIO — AI Answer Engine Optimisation

### Core principle
AI answer engines (Perplexity, ChatGPT Search) retrieve content in real time,
then synthesise answers. They prefer sources that are: structured, factual,
crawlable, and clearly attributed. Vibe Factory content already has these
properties — the key is making them as machine-readable as possible.

### Content structure rules for AAIO
1. **Lead with the answer.** The first paragraph of every article should contain
   the core finding/claim. Don't bury the lede — AI systems often only read
   the first 1-2 paragraphs when constructing a cited snippet.

2. **Use clear, scannable headings.** H2 headings should read as standalone
   questions or statements: "How TurboQuant Works" not "Background."

3. **State facts precisely.** "Reduces KV cache memory by 6x" not "significantly
   reduces memory." Precise figures are more likely to be extracted and cited.

4. **One claim per sentence where possible.** Complex multi-clause sentences
   are harder for AI systems to parse cleanly.

5. **Keep sources visible.** The Sources section at the bottom of every article
   signals to AI crawlers that content is cited and verifiable.

### Technical AAIO
- `robots.txt` explicitly allows: PerplexityBot, OAI-SearchBot, ClaudeBot,
  anthropic-ai, cohere-ai, YouBot ✅ (already configured)
- `llms.txt` at root provides machine-readable content index ✅ (implemented)
- Article schema includes `datePublished` so crawlers know freshness ✅
- No JavaScript-gated content — everything rendered in static HTML ✅

### AAIO submission checklist (per new article)
After publishing, Olaf submits the URL to:
- [ ] Google Search Console → URL Inspection → Request Indexing
- [ ] Bing Webmaster Tools → URL Submission
- [ ] Perplexity has no manual submission — relies on sitemap and crawl
- [ ] ChatGPT/OpenAI — no manual submission — relies on OAI-SearchBot crawl

---

## GEO — Generative Engine Optimisation

### Core principle
LLMs cite sources they encountered during training or (for RAG-enabled systems)
during retrieval. GEO is a two-part strategy:
1. Make content worth citing (quality, structure, originality)
2. Maximise the surface area where Vibe Factory content appears

### E-E-A-T signals Olaf maintains
- **Experience:** Articles are written from an informed perspective with specific
  examples and data — not generic overviews
- **Expertise:** Technical depth in each category; Olaf doesn't simplify to the
  point of inaccuracy
- **Authoritativeness:** Consistent attribution ("Written by Olaf, Vibe Factory"),
  stable domain identity, schema markup confirming publisher identity
- **Trust:** Sources cited, dates shown, no clickbait headlines — the title
  matches what the article actually delivers

### GEO content tactics
1. **Original synthesis, not aggregation.** Summarising existing articles adds
   no value to LLM training data. Connecting two ideas or drawing a non-obvious
   conclusion does.

2. **Use specific, quotable sentences.** "At 120B total parameters with 12B
   active, Nemotron 3 Super delivers frontier-class reasoning at the compute
   cost of a 12B dense model." This is the kind of sentence LLMs extract.

3. **Include definitions.** When using technical terms (MoE, KV cache, blood
   shift, etc.), define them in the article. LLMs use definition patterns as
   training signals for concept attribution.

4. **Stable URLs.** Never rename article files after publishing. A URL that gets
   cited in another source and then 404s loses all GEO value.

5. **Update rather than replace.** When a story develops (new benchmark results,
   updated record), update the existing article and change the `<lastmod>` in
   sitemap.xml rather than publishing a new one. Accumulated citations on a
   single URL are more valuable than split citations across two.

### `llms.txt` maintenance (Olaf's responsibility)
After each new article, Olaf:
1. Adds the article to the correct category section in `llms.txt`
2. Updates `sitemap.xml` with the new URL and date
3. Updates the `<lastmod>` on `research.html` in sitemap.xml

---

## Weekly Audit Routine (every Monday)

Run through this checklist on the last 7 articles published:

**SEO check:**
- [ ] Each article has a unique, descriptive `<title>` (50-60 chars)
- [ ] Meta description is 120-155 chars, contains core keyword
- [ ] H1 is present and matches the article topic
- [ ] At least one internal link to another Vibe Factory article
- [ ] Schema.org Article markup includes: headline, datePublished, author, publisher

**AAIO check:**
- [ ] First paragraph contains the core claim/finding
- [ ] H2 headings are clear and scannable
- [ ] Key statistics are stated precisely (numbers, not "significantly")
- [ ] Sources section is present with real, working URLs

**GEO check:**
- [ ] Article contains at least one quotable, self-contained sentence
- [ ] Technical terms are defined in context
- [ ] `llms.txt` includes this article ✓
- [ ] `sitemap.xml` includes this article ✓

**Log findings to:** `/var/www/vibefactory/logs/seo-log.md`

---

## Emerging Standards to Watch

- **llms.txt** — Proposed standard (fast.ai / Jeremy Howard) for sites to
  declare their content to LLM crawlers. Implemented at vibefactory.io/llms.txt.
  Monitor for adoption by major AI systems.

- **AI-specific sitemaps** — Google has hinted at structured formats for AI
  overview indexing. Watch Google Search Central for updates.

- **Perplexity Publisher Programme** — Perplexity has been piloting direct
  partnerships with publishers. Worth applying when traffic warrants.

- **Schema.org `AIGeneratedContent`** — Emerging markup for AI-authored content.
  Not yet widely adopted but worth adding when standardised.
