---
name: sogni-image-generation
description: Free AI image generation via Sogni Supernet (decentralized, no API keys required)
metadata:
  {
    "openclaw":
      {
        "emoji": "🎨",
        "os": ["darwin", "linux", "win32"],
        "requires": { "bins": ["node"] }
      }
  }
---

# Sogni Image Generation

Generate images using Sogni Supernet — a decentralized network of creative AI inference workers. Free tier available.

## Quick Start

```bash
# Generate an image
sogni-gen --prompt "a serene landscape with mountains and lake" --model flux

# Available models: stable-diffusion, qwen-image, z-image-turbo, flux
```

## Features

✅ **Models Available:**
- Flux (highest quality)
- Stable Diffusion 3
- Qwen Image (multi-lingual)
- Z-Image Turbo (fast)

✅ **Capabilities:**
- Text-to-image generation
- Image editing with prompts
- Batch generation
- Multiple aspect ratios (1:1, 3:2, 16:9, 21:9)

✅ **Pricing:**
- Free tier: Limited credits/month
- Paid: Pay-per-image on Supernet

## Usage in OpenClaw

```bash
# Generate image from text
node ~/.openclaw/workspace/skills/sogni-image-gen/gen.js \
  --prompt "cyberpunk city at night" \
  --model flux \
  --size 1024x1024

# Image will be saved to workspace/img/
```

## Authentication

Sogni requires a free account:
1. Sign up: https://app.sogni.ai
2. Get API key from dashboard
3. Set environment variable: `export SOGNI_API_KEY="your_key"`

Or add to `~/.openclaw/openclaw.json`:
```json
{
  "skills": {
    "entries": {
      "sogni-image-gen": {
        "env": {
          "SOGNI_API_KEY": "your_key_here"
        }
      }
    }
  }
}
```

## Notes

- Free tier includes monthly credits
- Decentralized network (peer-to-peer generation)
- No data collection or usage tracking
- Results saved locally to workspace

---

See: https://github.com/Sogni-AI/sogni-client for full SDK documentation.
