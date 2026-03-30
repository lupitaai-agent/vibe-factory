# Vibe Factory — Article Publish Checklist
## Olaf runs this for every article before and after publishing

---

## PRE-WRITE (before starting an article)

- [ ] Topic is original — not a rehash of something already on Vibe Factory
- [ ] Topic has a clear, citable source (paper, announcement, dataset, official blog)
- [ ] Target keyword is clear (e.g. "Nemotron 3 Super agentic benchmarks")
- [ ] Filename is decided: `[category]-[slug].html` — lowercase, hyphens only, no spaces
- [ ] URL will be stable — commit to this filename forever

---

## WRITING (structure requirements per article)

### Must-haves
- [ ] **H1** — one only, matches the article topic, contains the keyword
- [ ] **First paragraph** — contains the core finding/claim/number. No warm-up sentences.
- [ ] **At least 3 × H2 headings** — written as statements or questions, not "Background" / "Overview"
- [ ] **One precise statistic per section** — numbers, not "significantly" / "dramatically"
- [ ] **One quotable sentence** — self-contained, citable, 20-40 words, factually precise
- [ ] **Technical terms defined** — first use of MoE, KV cache, SWB, etc. gets a brief definition
- [ ] **Sources section** — real working URLs, numbered list, at the bottom

### Word count targets
- Standard article: 500–900 words
- Deep-dive: 900–1500 words
- Never: padding to hit a number. Cut instead.

---

## HTML MARKUP (before saving the file)

### Head
- [ ] `<title>` — 50–60 characters, contains keyword, ends with `— Vibe Factory`
- [ ] `<meta name="description">` — 120–155 characters, contains keyword, reads naturally
- [ ] Schema.org `Article` JSON-LD block present (copy from SCHEMA-GUIDE.md)
  - [ ] `headline` matches H1
  - [ ] `datePublished` is today's date (YYYY-MM-DD)
  - [ ] `author.name` = `"Olaf, AI Co-CEO"`
  - [ ] `publisher.name` = `"Vibe Factory"` and `publisher.url` = `"https://vibefactory.io"`

### Body
- [ ] `<div class="article-cat">` — correct emoji + category label
- [ ] `<div class="article-meta">` — date in `DD Month YYYY` format, "Written by Olaf", read time
- [ ] At least one `<div class="callout">` — the most quotable paragraph
- [ ] At least one internal link to another Vibe Factory article
- [ ] `<div class="olaf-credit">` present at bottom
- [ ] All external links have `target="_blank"`

---

## POST-WRITE (after saving the article file)

### Files to update (in this order)
1. [ ] **`research.html`** — add new entry to `RESEARCH_DATA` array:
   ```javascript
   { id:[next_id], cat:'[cat]', catLabel:'[emoji] [Label]', slug:'[slug]',
     title:'[Full title]', excerpt:'[1-sentence summary, max 120 chars]',
     date:'[YYYY-MM-DD]', readTime:'[N] min', featured:false }
   ```
   Set `featured:true` only if this replaces the current top story.

2. [ ] **`sitemap.xml`** — add new `<url>` block at the top of the articles section:
   ```xml
   <url>
     <loc>https://vibefactory.io/articles/[slug].html</loc>
     <lastmod>[YYYY-MM-DD]</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
     <news:news>
       <news:publication>
         <news:name>Vibe Factory</news:name>
         <news:language>en</news:language>
       </news:publication>
       <news:publication_date>[YYYY-MM-DD]</news:publication_date>
       <news:title>[Article title, no — Vibe Factory suffix]</news:title>
     </news:news>
   </url>
   ```
   Also update `<lastmod>` on `research.html` entry to today.

3. [ ] **`llms.txt`** — add URL under the correct category section:
   ```
   - [Article title]: https://vibefactory.io/articles/[slug].html
   ```

4. [ ] **`logs/changes.md`** — append one-line entry:
   ```
   [YYYY-MM-DD] Published: [slug].html — "[Article title]"
   ```

### Indexing requests (do after files are live on VPS)
- [ ] Google Search Console → URL Inspection → Request Indexing for the new article URL
- [ ] Bing Webmaster Tools → URL Submission for the new article URL
- [ ] (Perplexity and ChatGPT/OAI-SearchBot discover via sitemap — no manual step needed)

---

## WEEKLY AUDIT (every Monday — run on the last 7 articles)

For each article, verify:
- [ ] Title is unique across the site (no two articles share a title)
- [ ] Meta description is present and under 155 chars
- [ ] First paragraph contains the core claim
- [ ] Sources section has at least 2 working URLs (spot-check one link)
- [ ] Article appears in sitemap.xml and llms.txt

Log findings to: `logs/seo-log.md` with date header `## Week of [YYYY-MM-DD]`

---

*This checklist lives at `/var/www/vibefactory/seo/CHECKLIST.md` on the VPS.*
*Olaf: copy this into your working memory at the start of each publish run.*
