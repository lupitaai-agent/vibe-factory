#!/usr/bin/env node

const SogniClient = require('sogni-client').default;
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
let prompt = '';
let model = 'flux';
let size = '1024x1024';

// Parse args
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--prompt' && args[i + 1]) {
    prompt = args[++i];
  }
  if (args[i] === '--model' && args[i + 1]) {
    model = args[++i];
  }
  if (args[i] === '--size' && args[i + 1]) {
    size = args[++i];
  }
}

if (!prompt) {
  console.error('Error: --prompt is required');
  process.exit(1);
}

async function generateImage() {
  try {
    const client = new SogniClient({
      apiKey: process.env.SOGNI_API_KEY,
    });

    console.log(`🎨 Generating image with ${model}...`);
    console.log(`📝 Prompt: ${prompt}`);
    console.log(`📐 Size: ${size}`);

    const [width, height] = size.split('x').map(Number);

    const response = await client.generateImage({
      prompt,
      model,
      width,
      height,
    });

    // Save image
    const imgDir = path.join(process.cwd(), 'img');
    if (!fs.existsSync(imgDir)) {
      fs.mkdirSync(imgDir, { recursive: true });
    }

    const timestamp = Date.now();
    const filename = `sogni-${timestamp}.png`;
    const filepath = path.join(imgDir, filename);

    // response.imageData contains the PNG buffer or base64 string
    const imageData = typeof response.imageData === 'string'
      ? Buffer.from(response.imageData, 'base64')
      : response.imageData;

    fs.writeFileSync(filepath, imageData);

    console.log(`✅ Image saved to: ${filepath}`);
    console.log(`📊 Tokens used: ${response.tokensUsed || 'N/A'}`);

    return filepath;
  } catch (error) {
    console.error('❌ Error generating image:', error.message);
    process.exit(1);
  }
}

generateImage();
