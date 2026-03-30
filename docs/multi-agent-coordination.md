# Multi-Agent Coordination Architecture

## Philosophy

**Single-human, multi-expert** model: You talk to ONE agent (me, the main session), and I coordinate specialized sub-agents behind the scenes. You never context-switch between agents — I handle that.

## Core Pattern

```
User → Main Agent (orchestrator)
         ↓
    ┌─────┴─────┬────────┬─────────┐
    ↓           ↓        ↓         ↓
 Research   Code      DevOps   Analysis
  Agent      Agent     Agent    Agent
```

## Agent Types

### 1. Main Agent (Orchestrator) - ME
- **Model**: Haiku 4.5 for speed, sonnet for complex reasoning
- **Role**: Single point of contact, conversation memory, task decomposition
- **Runs in**: Main session (this workspace)
- **Key skills**: Memory management, coordination, delivery

### 2. Research Agent
- **Model**: Haiku 4.5 w/ web_search tool
- **Role**: Deep web research, data gathering, competitive analysis
- **Runs in**: Spawned sub-agents (`sessions_spawn`)
- **Key skills**: web_search, web_fetch, structured data extraction
- **Trigger**: When you ask "research X", "find info on Y", "competitive analysis"

### 3. Code Agent
- **Model**: Sonnet (reasoning mode) for careful code work
- **Role**: Code generation, refactoring, bug fixes
- **Runs in**: Spawned sub-agents with full workspace access
- **Key skills**: read, write, edit, shell commands
- **Trigger**: "build this", "fix that bug", "refactor this module"

### 4. DevOps/Hardening Agent
- **Model**: Haiku 4.5 + healthcheck skill
- **Role**: Infrastructure, security audits, system hardening
- **Runs in**: Dedicated sub-agents
- **Key skills**: exec, security checks, compliance validation
- **Trigger**: "audit this server", "harden SSH", "check security"

## Coordination Flow

1. **User Request** → Main Agent
2. **Analysis**: Main agent decides if specialist needed
3. **Spawn**: `sessions_spawn` with specific task + timeout
4. **Monitor**: Main agent tracks progress via `subagents(action=list)`
5. **Aggregate**: Specialist delivers results → Main agent synthesizes
6. **Deliver**: Single coherent response to user

## Communication Protocol

**Between Main ↔ Sub-agents:**
- **Mode**: Use `sessions_send` for async messaging
- **State**: Sub-agents write to `memory/sessions/{agent_id}.md`
- **Discovery**: Main agent polls `subagents(action=list)` for status

**With User:**
- **Always through Main Agent** - you never talk directly to sub-agents
- **Threaded Context**: For long-running tasks, updates happen in thread replies

## Memory Architecture

```
/config/.openclaw/workspace/
├── MEMORY.md                    # Curated long-term (only main session reads)
├── memory/
│   ├── YYYY-MM-DD.md           # Daily session logs (all writes here)
│   ├── sessions/               # Sub-agent specific memory
│   │   ├── research-{id}.md
│   │   ├── code-{id}.md
│   │   └── devops-{id}.md
│   └── knowledge/              # Extracted domain knowledge
│       ├── api-clients.md
│       └── workflows.md
└── docs/
    └── coordination.md          # This file
```

## Decision Rules

**When to spawn specialist:**
- ✅ Task takes >5 minutes
- ✅ Requires different model (e.g., reasoning mode)
- ✅ Isolatable with clear deliverable
- ✅ Parallelizable with other work

**When NOT to spawn:**
- ❌ Quick lookup (<1 min)
- ❌ Sequential reasoning requiring immediate feedback
- ❌ Tasks needing constant user clarification

## Example Workflows

### Competitive Research Request
```
User: "Research Aethir's top 5 competitors and their pricing models"

Main Agent (me):
  ↓
  Analysis: Requires deep research → spawn specialist
  ↓
sessions_spawn(task="Research Aethir enterprise GPU compute competitors. 
                  Focus on pricing, features, differentiators. 
                  Output structured JSON.",
               agentId="research",
               model="anthropic/claude-haiku-4-5")
  ↓
  Monitor: Check subagents list every 30s
  ↓
  Research Agent returns:
    - Competitor matrix JSON
    - Key findings summary
    - Raw research notes in memory/sessions/research-{id}.md
  ↓
  Main Agent synthesizes: Executive summary + table for user
```

### Code Generation Request
```
User: "Build a Node.js API client for Aethir's API"

Main Agent:
  ↓
  Analysis: Code generation task → spawn code agent
  ↓
sessions_spawn(task="Create Aethir API client library\n1. Read API docs from ...\n2. Generate typed client\n3. Include auth handling\n4. Add tests",
               agentId="code",
               model="anthropic/claude-sonnet-4-6",
               thinking="enabled")
  ↓
  Code Agent works in memory/sessions/code-{id}.md
  ↓
  Main Agent receives: "Done. Created files: aethir-client.js, tests/..."
  ↓
  Main Agent verifies files exist, updates MEMORY.md with API pattern
  ↓
  Main Agent to User: "✅ Done. Generated client in /lib/aethir-client.js
                         Key features: auth, error handling, typed."
```

## Scaling Strategy

**Current (Pilot Phase):**
- Main + 1-2 sub-agents max
- Serial processing (sequential spawns)
- You monitor all activity

**Future (Production Phase):**
- Parallel sub-agent spawning
- Agent-specific memory modules
- Automated memory migration (daily → long-term)
- Cost tracking per agent

## Anti-Patterns to Avoid

1. **Don't spawn for simple queries** - Use main agent directly
2. **Don't let sub-agents message user directly** - Breaks single-point-of-contact model
3. **Don't share MEMORY.md with sub-agents** - Contains private context
4. **Don't let sub-agents spawn other sub-agents** - Creates coordination hell

## Next Steps

1. ✅ Design complete
2. 🔄 Implement first specialist (Research Agent pattern)
3. 🔄 Build memory migration system
4. 🔄 Create telemetry dashboard

---
*Version: 0.1 | Last Updated: 2026-03-26*