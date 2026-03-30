#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const QUEUE_PATH = path.join(__dirname, '.taskqueue');
const TASKS_DIR = path.join(__dirname, 'tasks');

async function getNextPendingTask(agentType) {
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
  
  let tasks = (await Promise.all(activePromises)).filter(Boolean);
  
  // Filter by agent type: specific agent type OR general