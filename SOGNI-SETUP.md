# Sogni Integration Setup

**Date:** 2026-03-31  
**Status:** ✅ Installed & ready (API key needed)

---

## What You Get

✅ **Free AI Image Generation** via Sogni Supernet (decentralized)
- Flux model (highest quality)
- Stable Diffusion 3
- Qwen Image (multilingual)
- Z-Image Turbo (fast)

**Free Tier:** Monthly image credits (generous for research use)

---

## Setup (3 Steps)

### Step 1: Create Sogni Account
Go to https://app.sogni.ai and sign up (free)

### Step 2: Get API Key
1. Log in to Sogni dashboard
2. Create API key
3. Copy it

### Step 3: Configure OpenClaw
```bash
# Option A: Environment variable
export SOGNI_API_KEY="your_api_key_here"

# Option B: Add to ~/.openclaw/openclaw.json
openclaw config set skills.entries.sogni-image-gen.env.SOGNI_API_KEY "your_key"
```

---

## Usage

**Generate image:**
```bash
node ~/.openclaw/workspace/skills/sogni-image-gen/gen.js \
  --prompt "futuristic AI research lab, cinematic lighting" \
  --model flux \
  --size 1024x1024
```

**Output:** Image saved to `workspace/img/sogni-*.png`

---

## Why Sogni (vs OpenAI, Midjourney)?

✅ **Fully free tier** (not trial, not limited)  
✅ **Decentralized** (runs on peer network, no central server)  
✅ **Built by your friends** (Sogni-AI team)  
✅ **Open-source client** (transparent, auditable)  
✅ **No tracking** (peer-to-peer, your data stays local)

Perfect for Vibe Factory research illustrations and creative content.

---

## Next Steps

1. **Sign up for free Sogni account**
2. **Get API key**
3. **Set SOGNI_API_KEY environment variable**
4. **Test:** `node skills/sogni-image-gen/gen.js --prompt "test"`
5. **Use in research** — generate illustrations for articles

---

## Video Generation (Future)

Sogni also has video generation (Wan 2.2 model):
- Text-to-video
- Image-to-video
- Sound-to-video
- Motion transfer

Can be added to this skill later if needed.

---

**Last Updated:** 2026-03-31
