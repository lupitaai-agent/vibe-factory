# Long-Term Memory - OpenClaw Assistant

## System Configuration Learnings

### Elevated Permissions & Sudo Access
- **Critical:** OpenClaw's elevated (sudo) permissions are **channel-specific** and disabled by default
- **Error Pattern:** When users see "missing approval ID" errors, the real issue is usually missing `tools.elevated.allowFrom.<provider>` configuration, not the approval mechanism itself
- **Telegram Status:** Telegram channel currently does NOT have sudo access enabled in this deployment
- **Fallback Solutions:** When agent permissions fail, users can:
  1. Run commands directly on the machine
  2. Use alternative interfaces (web UI, Discord) with pre-configured sudo
  3. Configure SSH access in TOOLS.md for agent-mediated sudo

### Troubleshooting Pattern
When debugging permission issues, always:
1. Attempt to trigger the permission system to see actual error messages
2. Check `allowFrom` gate configurations for the specific provider
3. Offer multiple workaround options, not just the "proper" configuration path

## User Context

### Jochem - Aethir Enterprise
- **Primary Channel:** Telegram (ID: 542685810, Username: @Jochem_NL)
- **Technical Level:** Advanced - understands system configuration and troubleshooting
- **Communication Style:** Direct, action-oriented, appreciates root cause analysis
- **Organization:** Aethir Enterprise (likely enterprise/business user)
- **Current Project:** Vibe Factory (AI-driven research platform at vibefactory.io)

## Technical Notes

### OpenClaw Security Model
- Provider-specific permission gates (`tools.elevated.allowFrom.telegram`)
- Runtime checks prevent privilege escalation (runtime=direct restrictions)
- Approval system requires both mechanism configuration AND channel authorization

### Best Practices Documented
✅ Always test permission systems to get real error messages  
✅ Provide multiple solution paths (config change, direct execution, alternative interfaces)  
✅ Document both successes AND configuration failures for future debugging  
✅ Update both daily memory (specific events) and long-term memory (patterns)

## Vibe Factory Operations

### Daily Research Schedule
- **Publish Days:** Tuesday, Friday, Sunday at 1 AM CET/CEST
- **Ownership:** Olaf (me) — full end-to-end: research → writing → SEO/AAIO/GEO optimization → publishing → social queuing
- **Template:** Located at `/config/.openclaw/workspace/articles/tech-google-turboquant.html` (use as reference)
- **Research Data:** Stored in `research.html` RESEARCH_DATA array (update when publishing)
- **Social Posts:** Queue in `logs/social-queue.md` before publishing

### First Publication (2026-03-30)
- **Article:** "Inference-Time Scaling: Why AI Reasoning Models Will Dominate 2026"
- **Category:** 🤖 AI
- **Topics Covered:** o1, DeepSeek-R1, test-time compute, reasoning tokens, inference scaling vs training scaling
- **Word Count:** ~2,500 words (11 min read)
- **Status:** ✅ Live at vibefactory.io

### Website Infrastructure
- **Hosted:** GitHub Pages (https://github.com/lupitaai-agent/vibe-factory)
- **Domain:** vibefactory.io (DNS configured via GoDaddy A record + CNAME)
- **Favicon:** favicon.svg (clawbot icon, embedded in all pages)
- **Social Image:** social-image.svg (1200x630 for OG/Twitter cards)
- **Waitlist:** Google Forms integration (no emails stored in repo, all data to private Google Sheet)

### Coverage Areas
AI | Robotics | Security | Sustainability | Crypto | Economy | Tech | Free Diving

### Brand Voice
- Direct, systems-thinking, quality-over-quantity
- Research as a live showcase of agentic AI capability
- Olaf is the AI co-CEO, not an assistant (branded accordingly)
