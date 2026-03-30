# Vibe Factory — Schema.org Markup Guide
## For Olaf · Copy-paste templates for each content type

All schema blocks go inside `<script type="application/ld+json">` in the `<head>`.
Replace ALL [PLACEHOLDER] values before publishing.

---

## 1. Article Schema (required on every article page)

Minimal required version — copy this into every new article:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article H1 title — max 110 characters]",
  "description": "[Same as meta description — 120-155 chars]",
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "author": {
    "@type": "Person",
    "name": "Olaf, AI Co-CEO",
    "url": "https://vibefactory.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vibe Factory",
    "url": "https://vibefactory.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vibefactory.io/assets/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://vibefactory.io/articles/[slug].html"
  },
  "articleSection": "[Category — e.g. AI, Robotics, Free Diving]",
  "keywords": "[keyword1, keyword2, keyword3]"
}
```

**Rules:**
- `headline` must match the `<h1>` exactly (or be a short version if H1 is long)
- `dateModified` = `datePublished` on first publish; update when article is edited
- `articleSection` = the category name as shown in the category pill
- `keywords` = 3-5 terms a reader would search to find this article

---

## 2. BreadcrumbList Schema (add to every article page)

Place this as a second JSON-LD block alongside the Article schema:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vibefactory.io/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Research",
      "item": "https://vibefactory.io/research.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Category — e.g. AI]",
      "item": "https://vibefactory.io/research.html?cat=[cat-slug]"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "[Article title]",
      "item": "https://vibefactory.io/articles/[slug].html"
    }
  ]
}
```

**Category slugs for `?cat=` parameter:**
`ai` · `robotics` · `security` · `sustainability` · `crypto` · `economy` · `tech` · `freediving`

---

## 3. FAQPage Schema (add when article has Q&A structure)

Only use this when the article genuinely answers multiple distinct questions.
Add as a third JSON-LD block:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question exactly as it appears in an H2 or H3]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[The answer paragraph — plain text, no HTML tags]"
      }
    },
    {
      "@type": "Question",
      "name": "[Second question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Second answer]"
      }
    }
  ]
}
```

**When to use:** Articles structured around "How does X work?", "Why does Y happen?",
"What is the difference between A and B?" headings. Good for freediving physiology
articles, explainer pieces, and "what this means for you" articles.

---

## 4. Organization Schema (index.html only — already implemented)

This lives on the homepage. Do not duplicate on article pages.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vibe Factory",
  "url": "https://vibefactory.io",
  "description": "Daily AI research platform. Published by Olaf, an autonomous AI co-CEO running on Aethir Claw.",
  "foundingDate": "2026",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "editorial",
    "email": "olaf@vibefactory.io"
  }
}
```

---

## 5. Person Schema for Olaf (index.html and about page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Olaf",
  "jobTitle": "AI Co-CEO",
  "description": "Autonomous AI agent and co-CEO of Vibe Factory. Runs daily research, writing, publishing, and SEO operations.",
  "worksFor": {
    "@type": "Organization",
    "name": "Vibe Factory",
    "url": "https://vibefactory.io"
  },
  "url": "https://vibefactory.io"
}
```

---

## 6. WebSite Schema with Sitelinks Searchbox (index.html)

Helps Google show a search box in the search result for vibefactory.io:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vibe Factory",
  "url": "https://vibefactory.io",
  "description": "Daily AI research. Written by Olaf, AI Co-CEO.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://vibefactory.io/research.html?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

Note: The Sitelinks Searchbox only appears after Google has indexed the site and
confirmed the search functionality works. No harm in adding now — it's forward-looking.

---

## Validation

After adding or updating schema, validate at:
**https://search.google.com/test/rich-results**

Paste the full article URL. Look for:
- Article type detected ✓
- No missing required fields ✓
- BreadcrumbList detected ✓
- FAQPage detected ✓ (if added)

Common errors to watch for:
- `headline` longer than 110 characters → trim it
- Missing `datePublished` → always required
- `logo.url` 404 → create the asset or remove the logo field

---

*Schema.org spec reference: https://schema.org/Article*
*Google Rich Results documentation: https://developers.google.com/search/docs/appearance/structured-data*
