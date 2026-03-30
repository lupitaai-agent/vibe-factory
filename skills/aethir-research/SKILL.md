# Aethir Research Agent Skill

## Description
Specialized research agent for Aethir Enterprise GPU compute intelligence. Performs deep competitive analysis, market research, pricing intelligence, and ecosystem mapping for the decentralized GPU compute space.

## When to Use
Use this skill when:
- User asks about "Aethir competitors"
- Needs competitive pricing analysis in GPU compute
- Requests market sizing or ecosystem research
- Wants to compare decentralized vs. centralized GPU providers
- Needs partnership or integration opportunity research

## Tools Required
- `web_search`: For competitor discovery and pricing
- `web_fetch`: For extracting detailed pages
- `memory_search`: To avoid duplicate research
- `sessions_spawn`: To run isolated research tasks

## Research Methodology

### Phase 1: Competitor Identification
1. Search for "decentralized GPU compute platforms"
2. Search for "enterprise GPU cloud providers"
3. Identify both direct (decentralized) and indirect (centralized) competitors
4. Extract: company name, website, primary offering, target market

### Phase 2: Pricing Intelligence
1. For each competitor, search "{company} pricing"
2. Extract pricing models (hourly, monthly, committed use)
3. Normalize to $/GPU-hour equivalent for comparison
4. Document minimum commitments and enterprise terms

### Phase 3: Feature Matrix
1. For each competitor: technical capabilities, supported frameworks, regions
2. Differentiators: decentralization approach, token economics, partnerships
3. Documentation & developer experience quality
4. Customer testimonials/case studies found

### Phase 4: Market Analysis
1. Total addressable market sizing
2. Growth trends in AI/ML compute demand
3. Key customer segments and their requirements
4. Partnership and integration opportunities

## Expected Output Format

Research agent produces a structured JSON:

```json
{
  "research_id": "uuid",
  "query": "original user question",
  "timestamp": "2026-03-26T...",
  "competitors": [
    {
      "name": "Company Name",
      "category": "decentralized|centralized|hybrid",
      "website": "https://...",
      "pricing": {
        "model": "per GPU hour",
        "rate_usd": 1.99,
        "minimum_commitment": "none"
      },
      "key_features": ["feature1", "feature2"],
      "differentiators": "What makes them unique",
      "target_market": "Enterprise | Developers | Researchers"
    }
  ],
  "market_insights": {
    "total_addressable_market_usd": "...",
    "key_trends": ["trend1", "trend2"],
    "opportunities": ["opp1", "opp2"]
  },
  "raw_research_notes": "link to detailed notes"
}
```

## Implementation Notes
- Agent runs in isolated session to prevent research pollution of main memory
- Saves detailed notes to `memory/sessions/research-{id}.md`
- Main agent synthesizes findings into user-friendly format
- Follows memory hygiene: research notes are at `/memory/sessions/research-{id}.md` in that session, and the session transcript gets stored in the main session memory

## Example Usage

```javascript
// From main agent:
sessions_spawn({
  task: "Research top 5 Aethir competitors in enterprise GPU compute. Focus on pricing and differentiators.",
  agentId: "aethir-research",
  model: "anthropic/claude-haiku-4-5",
  attachments: ["Any background context"]
});
```

## Maintenance
- Update competitor list quarterly
- Refresh pricing intelligence monthly
- Archive old research to `memory/knowledge/`
- Track research costs against value delivered