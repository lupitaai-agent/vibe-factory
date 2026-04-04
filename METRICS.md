# Vibe Factory Metrics & Transparency Dashboard

## Overview

The Vibe Factory Metrics Dashboard (`/metrics.html`) is a public transparency page showing how Olaf optimizes research for AI citation, organic search discovery, and human engagement.

This page demonstrates:
- **Real-time optimization work** — What we're testing, why, and expected impact
- **Hypothesis validation** — Explicit predictions vs. actual results
- **Sprint-based progress** — Organized optimization work with measurable outcomes
- **Public methodology** — Full transparency on how we measure and what data sources we use

**Live at:** `https://vibefactory.io/metrics`

---

## Files

| File | Purpose |
|------|---------|
| `/metrics.html` | Public-facing dashboard (accessible on the web) |
| `/metrics.json` | Structured data defining metrics, hypotheses, sprints, and backlog |
| `/logs/metrics.log` | Update log with timestamp entries for every sync |
| `/scripts/update-metrics.sh` | Automated weekly update script (runs via cron) |
| `/cron/metrics-update.cron` | Cron schedule configuration (Sunday @ 23:00 CET) |
| `/METRICS.md` | This file — usage guide and documentation |

---

## Data Structure

### `/metrics.json` Schema

```json
{
  "lastUpdated": "ISO8601 timestamp",
  "sprints": [
    {
      "id": "sprint-1",
      "name": "Sprint name",
      "dates": "Date range",
      "focus": "What we're optimizing",
      "hypotheses": ["h1", "h2", "h3"],
      "status": "complete|in_progress|planned",
      "commits": ["git hash"],
      "expectedImpact": "Expected outcome"
    }
  ],
  "metrics": {
    "metric_id": {
      "name": "Display name",
      "current": "Current value or 'baseline_pending'",
      "unit": "Measurement unit",
      "description": "What this metric measures",
      "dataSource": "Where data comes from",
      "target": "Target improvement",
      "history": []
    }
  },
  "hypotheses": [
    {
      "id": "h1",
      "sprint": "sprint-1",
      "name": "Hypothesis title",
      "description": "Detailed description",
      "metric": "metric_id",
      "expectedImpact": "+15-25%",
      "reasoning": "Why we expect this impact",
      "testDate": "ISO8601",
      "actualImpact": "pending|+X%|result",
      "status": "in_progress|complete|failed",
      "conclusion": "What we learned"
    }
  ],
  "backlog": [
    {
      "id": "task-1",
      "sprint": 2,
      "priority": "high|medium|low",
      "title": "Task title",
      "description": "What we'll do",
      "estimatedImpact": "Expected impact",
      "category": "SEO|AAIO|GEO|Social"
    }
  ]
}
```

---

## Core Metrics

### 1. AI Citation Rate
- **What:** How often Perplexity, ChatGPT, Claude cite Vibe Factory
- **Why:** Measures reach in AI answer engines (AAIO optimization)
- **Data Source:** Semrush API, Ahrefs, manual audit
- **Target:** Establish baseline by Apr 10, then +15-25% per sprint
- **Baseline:** Pending (Apr 10)

### 2. Organic Traffic
- **What:** Unique sessions from Google Search
- **Why:** Measures SEO effectiveness and traditional search visibility
- **Data Source:** Google Search Console API
- **Target:** +30% by end of Q2
- **Baseline:** Pending (Apr 10)

### 3. Pages Per Session
- **What:** Average pages viewed per user session
- **Why:** Indicates content depth and user engagement
- **Data Source:** Google Analytics 4
- **Target:** Increase by 20% through internal linking
- **Baseline:** Pending (Apr 10)

### 4. Bounce Rate
- **What:** Percentage of single-page sessions
- **Why:** Lower bounce rate = better UX and engagement
- **Data Source:** Google Analytics 4
- **Target:** Reduce by 15%
- **Baseline:** Pending (Apr 10)

### 5. Avg. Time on Page
- **What:** Average time spent per article
- **Why:** Indicates content quality and relevance
- **Data Source:** Google Analytics 4
- **Target:** 3+ minutes for research pieces
- **Baseline:** Pending (Apr 10)

### 6. Social Shares
- **What:** Total shares via buttons and posts
- **Why:** Measures content resonance and reach
- **Data Source:** Site tracking + platform APIs
- **Target:** 10+ per article within 48h
- **Current:** 0 (tracking active)

---

## Sprint 1: Schema & Citation Optimization

**Dates:** April 2-3, 2026  
**Status:** ✓ Complete  
**Focus:** JSON-LD Schema + Author Entity + AI Citation Optimization

### Hypotheses

#### H1: NewsArticle + Author schema increases AI citations
- **Expected:** +15-25%
- **Reasoning:** AI models rely on structured data to identify authoritative sources
- **Test Date:** Apr 10
- **Status:** In Progress

#### H2: Internal linking improves pages per session
- **Expected:** +20%
- **Reasoning:** Relevant links encourage deeper exploration
- **Test Date:** Apr 10
- **Status:** In Progress

#### H3: Keyword optimization increases organic visibility
- **Expected:** +30%
- **Reasoning:** Strategic keywords in H1, snippet optimization, question-focused content
- **Test Date:** Apr 15
- **Status:** In Progress

---

## Weekly Update Process

### Automated Workflow (Every Sunday @ 23:00 CET)

1. **Data Collection** (`update-metrics.sh`)
   - Pull GSC organic traffic data via API
   - Pull GA4 engagement metrics via API
   - Fetch AI citation data (if APIs available)
   - Log timestamp and status

2. **Validation**
   - Manual review of AI citation metrics
   - Verify data accuracy and completeness
   - Update hypothesis status

3. **Metrics Update**
   - Update `metrics.json` with latest values
   - Add entry to `logs/metrics.log`
   - Update `metrics.html` dashboard

4. **Commit & Publish**
   - Git commit with message: `"Weekly metrics update published — see the data"`
   - Dashboard updates live immediately

---

## Setting Up the Cron Job

### Option 1: crontab (Linux/macOS)

```bash
# Add to crontab (crontab -e)
# Sunday @ 23:00 CET (adjust for your timezone)
0 23 * * 0 cd /config/.openclaw/workspace && /bin/bash scripts/update-metrics.sh >> logs/metrics-cron.log 2>&1
```

### Option 2: systemd timer (Linux)

Create `/etc/systemd/system/metrics-update.service`:
```ini
[Unit]
Description=Vibe Factory Metrics Weekly Update
After=network.target

[Service]
Type=oneshot
WorkingDirectory=/config/.openclaw/workspace
ExecStart=/bin/bash scripts/update-metrics.sh
StandardOutput=journal
StandardError=journal
```

Create `/etc/systemd/system/metrics-update.timer`:
```ini
[Unit]
Description=Vibe Factory Metrics Update Timer

[Timer]
OnCalendar=Sun *-*-* 23:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

Enable and start:
```bash
sudo systemctl daemon-reload
sudo systemctl enable metrics-update.timer
sudo systemctl start metrics-update.timer
```

### Option 3: OpenClaw Native Scheduling

If OpenClaw provides native scheduling (check with `openclaw cron --help`), use:
```bash
openclaw cron schedule "Sunday 23:00 CET" "/config/.openclaw/workspace/scripts/update-metrics.sh"
```

---

## Manual Updates

To manually trigger a metrics update:

```bash
cd /config/.openclaw/workspace
bash scripts/update-metrics.sh
```

---

## API Configuration

For the automated script to work, configure these environment variables:

```bash
# Google Search Console
export GSC_PROPERTY_URL="https://vibefactory.io"
export GSC_TOKEN="your-gsc-api-token"

# Google Analytics 4
export GA4_PROPERTY_ID="your-ga4-property-id"
export GA4_TOKEN="your-ga4-api-token"

# Semrush (for AI citations)
export SEMRUSH_API_TOKEN="your-semrush-token"
```

Store these in a secure `.env` file (not in git):
```bash
echo "GSC_TOKEN=..." >> .env
echo "GA4_TOKEN=..." >> .env
```

Load in `update-metrics.sh`:
```bash
source "$WORKSPACE/.env"
```

---

## Methodology & Data Sources

### AI Citation Rate
- **Semrush API:** Primary source for tracking AI citation mentions
- **Ahrefs:** Backup citation tracking
- **Manual audit:** Weekly query of Perplexity, ChatGPT, Claude
- **Frequency:** Weekly (Sunday)
- **Baseline:** Apr 10, 2026

### Organic Traffic & SEO
- **Google Search Console API:** Clicks, impressions, CTR, ranking position
- **Google Analytics 4:** Session data, traffic source attribution
- **Frequency:** Daily pull, weekly summarization
- **Tools:** Keywords, featured snippet position, SERP tracking

### Engagement Metrics
- **Google Analytics 4:** Pages/session, bounce rate, time on page
- **Site tracking:** Custom events, scroll depth, internal link clicks
- **Frequency:** Real-time with 48-hour GA4 reporting lag
- **Granularity:** Per-page and per-session

### Social & Brand Lift
- **Site share buttons:** Tracking embed (JavaScript)
- **Twitter/X API:** Platform-native analytics
- **LinkedIn API:** Content performance metrics
- **Frequency:** Real-time tracking, weekly aggregate

---

## Interpreting Results

### Status Indicators

- **Baseline Pending:** Metric is being measured but baseline not yet established
- **In Progress:** Hypothesis is actively being tested; await Apr 10 validation
- **Complete:** Hypothesis validation finished; conclusion documented
- **Pending:** Actual result not yet measured

### Impact Ranges

- **High Impact:** > 25% improvement
- **Medium Impact:** 10-25% improvement
- **Low Impact:** < 10% improvement
- **Negative:** Result contradicted hypothesis (valuable learning)

---

## FAQ

**Q: Why is the baseline pending?**  
A: We need 1-2 weeks of measurement to establish a reliable baseline before we can claim % improvements. First validation is Apr 10.

**Q: How do you measure AI citations?**  
A: Primary via Semrush API + manual queries (Perplexity, ChatGPT, Claude). We search for mentions of "Vibe Factory" and count how often our content is cited.

**Q: What if hypotheses fail?**  
A: Failure is valuable data. We document what we expected, what happened, and what we learned for next sprint.

**Q: Can we trust these metrics?**  
A: We publish methodology for each metric so you can audit our approach. GSC and GA4 are Google's official tools; manual audits are replicated weekly.

**Q: When does the dashboard update?**  
A: Every Sunday @ 11 PM CET (23:00 Amsterdam time). Check back weekly for fresh data.

---

## Roadmap

### Sprint 2 (April 7-14)
- Link reclamation (SEO)
- AI answer engine direct submission (AAIO)
- Featured snippet optimization (SEO)

### Sprint 3 (April 14-21)
- Generative discovery tags (GEO)
- Social engagement loop (Social)

---

## Support

For issues or questions:
- Check `/logs/metrics.log` for update history
- Review data sources section above
- Test manually with `bash scripts/update-metrics.sh`
- Verify git commits: `git log --oneline | grep metrics`

---

**Last Updated:** 2026-04-04  
**Status:** Live & Active  
**Next Update:** 2026-04-06 23:00 CET
