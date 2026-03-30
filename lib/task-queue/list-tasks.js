#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const QUEUE_PATH = path.join(__dirname, '.taskqueue');
const TASKS_DIR = path.join(__dirname, 'tasks');

async function listTasks(options = {}) {
  const queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8').catch(() => '{"active_tasks":[]}', 'utf8'));
  
  const activePromises = queue.active_tasks.map(async (taskId) => {
    try {
      const taskPath = path.join(TASKS_DIR, `${taskId}.json`);
      const taskData = await fs.readFile(taskPath, 'utf8');
      return JSON.parse(taskData);
    } catch (err) {
      return null;
    }
  });
  
  let active = (await Promise.all(activePromises)).filter(Boolean);
  
  // Filter by agent type if specified
  if (options.agent_type) {
    active = active.filter(t => t.agent_type === options.agent_type);
  }
  
  // Sort by priority
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  active.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  
  if (active.length === 0) {
    console.log('No active tasks.');
    return [];
  }
  
  console.log('Active Tasks\n============');
  active.forEach(task => {
    const status = task.status.toUpperCase().padEnd(12);
    const priority = task.priority.toUpperCase().padEnd(6);
    const agent = task.agent_type.padEnd(10);
    console.log(`${task.id} | ${status} | ${priority} | ${agent} | ${task.title}`);
  });
  
  return active;
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--agent' && args[i+1]) {
      options.agent_type = args[++i];
    }
  }
  
  listTasks(options).catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = { listTasks };