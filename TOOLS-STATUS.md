# Tools Status — Vibe Factory Infrastructure

**Last Updated:** 2026-03-31 23:25 UTC  
**Overall Status:** ✅ Ready for Daily Research

---

## Installed & Ready Now

### ✅ Video Processing
- **video-frames** — Extract clips, frames, metadata from videos
- **Status:** Ready to use
- **Dependency:** ffmpeg (installed)
- **Cost:** Free (open-source)

### ✅ Image Generation  
- **sogni-image-gen** (custom skill)
- **Models:** Flux, Stable Diffusion 3, Qwen Image, Z-Image Turbo
- **Status:** Ready (needs Sogni API key)
- **Cost:** Free tier monthly credits
- **Setup:** Sign up at https://app.sogni.ai

### ✅ Research Publishing
- **Full Vibe Factory pipeline** — research → write → publish → social queue
- **Status:** Live and working
- **3x/week:** Tuesday, Friday, Sunday at 1 AM CET

### ✅ Website Optimization
- **Automated weekly upgrades** — Wednesday, Saturday at 1 AM CET
- **Status:** Sprint 1 (JSON-LD schema) scheduled for April 2
- **Tracked in:** WEBSITE-UPGRADES-BACKLOG.md

---

## Coming Soon (April 9)

### 🔜 Claude Sonnet Access via Local CLI
- **Status:** Reminder set for April 9 @ 8 AM CEST
- **Setup:** Mac Mini Claude CLI bridge
- **Benefit:** Better research quality (Sonnet > Haiku)
- **Cost:** Uses your Claude subscription (already paid)

### 🔜 Local Speech-to-Text
- **Tool:** OpenAI Whisper (fully local, offline)
- **Status:** Blocked on `python3-pip` install (needs sudo)
- **Timeline:** Install on April 9 when at Mac Mini
- **Cost:** Free (open-source)

### 🔜 Sherpa-ONNX Text-to-Speech
- **Status:** Skill installed, needs runtime + models downloaded
- **Timeline:** April 1 @ 11 AM CET (ClawHub rate limit cleared)
- **Cost:** Free (open-source)

---

## What's Currently Blocked

❌ **Speech-to-Text** — Needs pip (April 9 fix)  
❌ **Text-to-Speech** — Needs Sherpa runtime download (April 1 retry)  
❌ **Telegram Sudo Permissions** — Not configured (can enable if needed)

---

## Your Action Items

### Immediate (Next 12 hours)
- [ ] Sign up for Sogni: https://app.sogni.ai
- [ ] Get API key and set `SOGNI_API_KEY` environment variable

### April 1 @ 11 AM CET
- [ ] Try Sherpa-ONNX setup: `openclaw skills install sherpa-onnx-tts`

### April 9 @ 8 AM CET
- [ ] Set up Claude CLI on Mac Mini
- [ ] Install python3-pip
- [ ] Install OpenAI Whisper

---

## Daily Capabilities (Ready Now)

✅ Research writing (using Haiku)  
✅ Video processing (extract clips, frames)  
✅ Image generation (with Sogni)  
✅ Website publishing (fully automated)  
✅ Social media queuing (X, LinkedIn)

---

## Cost Summary

| Tool | Cost | Status |
|------|------|--------|
| Vibe Factory | Free | ✅ Running |
| Sogni images | Free tier | ✅ Ready (key needed) |
| Video-frames | Free | ✅ Ready |
| Whisper STT | Free | 🔜 April 9 |
| Sherpa TTS | Free | 🔜 April 1 |
| Claude Sonnet | (your subscription) | 🔜 April 9 |

**Total ongoing cost:** $0 (using existing Claude subscription)

---

**Next check-in:** April 2 (website upgrades Sprint 1)
