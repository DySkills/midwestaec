const fs = require('fs');
const path = require('path');
const contentDir = 'C:/Users/Dylen/Desktop/AEC/Midwest/content';
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const inventory = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(contentDir, f), 'utf8');
  const formatMatch = content.match(/format:\s*["']?([^"'\r\n]+)/);
  const titleMatch = content.match(/title:\s*["']?([^"'\r\n]+)/);
  const catMatch = content.match(/category:\s*["']?([^"'\r\n]+)/);
  inventory.push({
    file: f,
    format: formatMatch ? formatMatch[1].trim() : 'Unknown',
    category: catMatch ? catMatch[1].trim() : 'Unknown',
    title: titleMatch ? titleMatch[1].trim() : 'Untitled'
  });
});

console.log('Total live markdown articles:', inventory.length);
console.log('\n--- FEATURES (' + inventory.filter(i => i.format === 'Feature').length + ') ---');
inventory.filter(i => i.format === 'Feature').forEach(i => console.log(`- [${i.file}] (${i.category}): ${i.title}`));

console.log('\n--- REPORTS (' + inventory.filter(i => i.format === 'Report').length + ') ---');
inventory.filter(i => i.format === 'Report').forEach(i => console.log(`- [${i.file}] (${i.category}): ${i.title}`));

console.log('\n--- OTHER FORMATS ---');
inventory.filter(i => i.format !== 'Feature' && i.format !== 'Report').forEach(i => console.log(`- [${i.file}] (${i.format}): ${i.title}`));
