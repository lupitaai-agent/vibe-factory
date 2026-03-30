#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const QUEUE_PATH = path.join(__dirname, '.taskqueue');
const TASKS_DIR = path.join(__dirname, 'tasks');

async function cancelTask(taskId) {
  const queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8').catch(() => '{"active_tasks":[]}', 'utf8'));
  const taskPath = path.join(TASKS_DIR, `${taskId}.json`);
  
  let task;
  try {
    task = JSON.parse(await fs.readFile(taskPath, 'utf8'));
  } catch (err) {
    console.error(`Task ${taskId} not found`);
    process.exit(1);
  }
  
  if (task.status !== 'pending') {
    console.error(`Can only cancel pending tasks (current status: ${task.status})`);
    process.exit(1);
  }
  
  task.status = 'cancelled';
  task.cancelled_at = new Date().toISOString();
  
  // Remove from active
  queue.active_tasks = queue.active_tasks.filter(id => id !== taskId);
  
  await fs.writeFile(QUEUE_PATH, JSON.stringify(queue, null, 2));
  await fs.writeFile(taskPath, JSON.stringify(task, null, 2));
  
  console.log(`Task ${taskId} cancelled: ${task.title}`);
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.error('Usage: node cancel-task.js <task-id>');
    process.exit(1);
  }
  
  const taskId = args[0];
  cancelTask(taskId).catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = { cancelTask };