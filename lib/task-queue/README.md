# Task Queue System

Simple file-based task queue for multi-agent coordination in OpenClaw workspace.

## Architecture

```
lib/task-queue/
├── .taskqueue          # Main queue state (JSON)
├── queue.log           # Human-readable log
├── agents/             # Agent registry
└── tasks/              # Individual task files
```

## Quick Commands

```bash
# Add a task
node lib/task-queue/add-task.js "Research Aethir competitors" --agent research --priority high

# List active tasks
node lib/task-queue/list-tasks.js

# Process next task (agents call this)
node lib/task-queue/next-task.js --agent research

# Cancel a task
node lib/task-queue/cancel-task.js --id <task-id>
```

## Task States

- `pending` - Waiting to be picked up
- `assigned` - Assigned to an agent
- `in_progress` - Agent is working on it
- `completed` - Done successfully
- `failed` - Failed (with error)
- `cancelled` - User cancelled

## Integration with OpenClaw

Main agent adds tasks, specialist agents pick them up:

```javascript
// Main agent adds research task
await addTask({
  title: "Research Aethir competitors",
  description: "Find top 5 competitors with pricing",
  agent_type: "research",
  priority: "high"
});

// Research agent picks up next task
const task = await getNextPendingTask("research");
if (task) {
  await markInProgress(task.id);
  // Do work...
  await markComplete(task.id, { results: "..." });
}
```

## Agent Types

- `research` - ResearchAgent
- `code` - CodeAgent
- `devops` - DevOps/Hardening agent
- `analysis` - Data analysis agent
- `general` - Can be picked up by any agent