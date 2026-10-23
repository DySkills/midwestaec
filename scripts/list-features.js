const fs = require('fs');
const path = require('path');
const contentDir = 'C:/Users/Dylen/.gemini/antigravity/scratch/midwest-aec/content';
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const features = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(contentDir, f), 'utf8');
  const formatMatch = content.match(/format:\s*["']?([^"'\r\n]+)["']?/i);
  const titleMatch = content.match(/title:\s*["']?([^"'\r\n]+)["']?/i);
  if (formatMatch && formatMatch[1].trim().toLowerCase() === 'feature') {
    features.push({ file: f, title: titleMatch ? titleMatch[1].trim() : f });
  }
});

console.log(JSON.stringify(features, null, 2));
