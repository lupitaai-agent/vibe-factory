#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const QUEUE_PATH = path.join(__dirname, '.taskqueue');
const TASKS_DIR = path.join(__dirname, 'tasks');
const LOG_PATH = path.join(__dirname, 'queue.log');

async function ensureDirs() {
  await fs.mkdir(TASKS_DIR, { recursive: true });
}

function generateId() {
  return crypto.randomBytes(6).toString('hex');
}

function formatLogEntry(task, action) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${action.toUpperCase()} task:${task.id} agent:${task.agent_type} priority:${task.priority} "${task.title}"\n`;
}

async function logAction(task, action) {
  const entry = formatLogEntry(task, action);
  await fs.appendFile(LOG_PATH, entry);
}

async function addTask(options) {
  await ensureDirs();
  
  const queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8').catch(() => '{"active_tasks":[],"completed_tasks":[],"failed_tasks":[]}', 'utf8'));
  
  const task = {
    id: options.id || generateId(),
    title: options.title || 'Untitled Task',
    description: options.description || '',
    agent_type: options.agent_type || 'general',
    priority: options.priority || 'medium',
    status: 'pending',
    created_at: new Date().toISOString(),
    assigned_to: null,
    started_at: null,
    completed_at: null,
    result: null,
    metadata: options.metadata || {}
  };
  
  queue.active_tasks.push(task.id);
  queue.last_updated = new Date().toISOString();
  
  await fs.writeFile(QUEUE_PATH, JSON.stringify(queue, null, 2));
  await fs.writeFile(path.join(TASKS_DIR, `${task.id}.json`), JSON.stringify(task, null, 2));
  await logAction(task, 'created');
  
  console.log(`Task created: ${task.id}`);
  console.log(`Title: ${task.title}`);
  console.log(`Agent: ${task.agent_type} | Priority: ${task.priority}`);
  
  return task;
}

// CLI parsing
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: node add-task.js "Task title" [--agent type] [--priority high|medium|low] [--description "text"]');
    process.exit(1);
  }
  
  const title = args[0];
  const options = { title };
  
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--agent' && args[i+1]) {
      options.agent_type = args[++i];
    } else if (args[i] === '--priority' && args[i+1]) {
      options.priority = args[++i];
    } else if (args[i] === '--description' && args[i+1]) {
      options.description = args[++i];
    }
  }
  
  addTask(options).catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = { addTask };