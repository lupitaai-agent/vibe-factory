# Reminders for Jochem

## 🔴 HIGH PRIORITY

### April 9, 2026 — 8:00 AM CEST
**Task:** Set up Claude CLI access for Olaf  
**What to do:**
1. Get behind Mac Mini
2. Install Claude CLI: `brew install anthropic-ai/anthropic-ai/claude`
3. Configure API key: `export ANTHROPIC_API_KEY="your-key"`
4. Expose local endpoint that OpenClaw can reach
5. Give Olaf the connection details (localhost:PORT, auth if needed)

**Why:** Olaf will use Claude Sonnet for research writing (better quality than Haiku, cheaper than paying API costs)  
**Duration:** ~15 minutes  
**Contact:** Message Olaf when done

---

### April 1, 2026 — 11:00 AM CEST
**Task:** Try sherpa-onnx-tts setup again  
**What to do:**
1. Run: `openclaw skills install sherpa-onnx-tts`
2. Follow the interactive prompts to download runtime + voice model
3. Verify: `openclaw skills check | grep sherpa-onnx-tts`

**Why:** ClawHub rate limit should be cleared by then  
**Duration:** ~5-10 minutes  
**Contact:** Message Olaf when done

---

**Status:** Two reminders set  
**Reminders:**
- 2026-04-01 11:00 CEST: Sherpa-ONNX setup (Jochem action)
- 2026-04-09 08:00 CEST: Claude CLI setup (Jochem action)

**Added by:** Olaf  
**Date added:** 2026-03-31
