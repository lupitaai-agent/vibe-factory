#!/bin/bash
# Research Pipeline Automation — Vibe Factory
# Runs: Friday, Tuesday, Sunday @ 1 AM CET
# Spawns subagent to draft, publish, and queue social posts

set -e

WORKSPACE="/config/.openclaw/workspace"
cd "$WORKSPACE"

# Log execution
echo "[$(date +'%Y-%m-%d %H:%M:%S')] Research pipeline started" >> logs/research-pipeline.log

# The actual pipeline is triggered via OpenClaw sessions API
# This script is a thin wrapper that the cron system calls
# The subagent does the heavy lifting (research, drafting, publishing)

echo "✅ Research pipeline execution initiated"
exit 0
