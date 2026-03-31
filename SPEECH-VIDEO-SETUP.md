# Speech & Video Skills Setup — Status Report

**Date:** 2026-03-31 23:10 UTC  
**Status:** 2 of 3 installed, 1 needs manual setup

---

## ✅ INSTALLED & READY

### 1. OpenAI Whisper (Speech-to-Text)
**Status:** ✅ Ready to use  
**Location:** `~/.openclaw/workspace/skills/openai-whisper/`  
**What it does:** Transcribe voice messages to text (offline, no API key needed)  
**Requirements:** ✓ All satisfied

**Usage:**
```bash
# Record voice message → Whisper transcribes it
# Fully offline, completely private
```

### 2. Video-Frames (Video Processing)
**Status:** ✅ Ready to use  
**Location:** `~/.openclaw/workspace/skills/video-frames/`  
**What it does:** Extract frames, clips, metadata from videos  
**Requirements:** ✓ ffmpeg already installed

**Usage:**
```bash
# Extract frames, create short clips, analyze video
```

---

## ⚠️ INSTALLED BUT NEEDS SETUP

### 3. Sherpa-ONNX-TTS (Text-to-Speech)
**Status:** 🟡 Installed, needs runtime + model files  
**Location:** `~/.openclaw/workspace/skills/sherpa-onnx-tts/`  
**What it does:** Convert text to natural-sounding voice (offline, no API key)

**The Problem:**
- Skill is installed ✓
- Runtime files not downloaded (bzip2 not available on VPS)
- Model files not downloaded

**How to Fix (Option A — Automatic):**

You can use the OpenClaw installer wizard:
```bash
openclaw skills sherpa-onnx-tts install
# Follow prompts to download runtime + model
```

**How to Fix (Option B — Manual):**

I'll prepare the download links. You run on your Mac/local machine with bzip2:

```bash
# On your Mac:
mkdir -p ~/.openclaw/tools/sherpa-onnx-tts/{runtime,models}

# Download runtime (macOS Universal)
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/v1.12.23/sherpa-onnx-v1.12.23-osx-universal2-shared.tar.bz2
tar -xjf sherpa-onnx-v1.12.23-osx-universal2-shared.tar.bz2 -C ~/.openclaw/tools/sherpa-onnx-tts/runtime --strip-components=1

# Download voice model
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-en_US-lessac-high.tar.bz2
tar -xjf vits-piper-en_US-lessac-high.tar.bz2 -C ~/.openclaw/tools/sherpa-onnx-tts/models

# Then sync to VPS or configure path
```

**How to Fix (Option C — Use OpenAI TTS instead):**

If you want TTS immediately without setup:
```bash
openclaw skills install openai-tts
# Uses your OpenAI subscription (costs $)
```

---

## Configuration (All Options)

Once Sherpa is set up, add to `~/.openclaw/openclaw.json`:

```json
{
  "skills": {
    "entries": {
      "sherpa-onnx-tts": {
        "env": {
          "SHERPA_ONNX_RUNTIME_DIR": "~/.openclaw/tools/sherpa-onnx-tts/runtime",
          "SHERPA_ONNX_MODEL_DIR": "~/.openclaw/tools/sherpa-onnx-tts/models/vits-piper-en_US-lessac-high"
        }
      }
    }
  }
}
```

Then verify:
```bash
openclaw skills check | grep sherpa-onnx-tts
# Should show: 🔉 sherpa-onnx-tts ✓
```

---

## What You Can Do NOW

**✅ Voice-to-Text Flow (Fully Working):**
```
Telegram voice message → openai-whisper → Transcribed text
```

**✅ Video Processing (Fully Working):**
```
Video file → video-frames → Extract clips/frames/metadata
```

**❌ Text-to-Voice (Needs Setup):**
```
Text → sherpa-onnx-tts → Voice message (sherpa) OR (openai-tts if you want cloud)
```

---

## My Recommendation

**Now:** Start using Whisper + video-frames. They work fully.

**Soon:** When you have bzip2 available (Mac), download and set up sherpa-onnx runtime + model.

**Timeline:**
- Wednesday (Apr 2): Website upgrades
- Friday (Apr 4): I can work with Whisper + video-frames for research
- Next week: Complete sherpa-onnx setup

Would you like me to:
1. Proceed with Whisper + video-frames for now (text-to-voice comes later)?
2. Try the OpenAI TTS install as a temporary solution?
3. Set a reminder for you to run the sherpa-onnx installer on your Mac?

---

**Last Updated:** 2026-03-31 23:10 UTC
