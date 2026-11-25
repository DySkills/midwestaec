const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const phrases = [
  'suffocating on its own',
  'engineering death sentence',
  'hydrostatic wedge',
  'psychrometric trap',
  'paradox',
  'in reality',
  'furthermore',
  'moreover',
  'landscape',
  'beacon',
  'fosters',
  'testament',
  'crucial role',
  'delicate balance'
];

const results = [];

files.forEach(f => {
  const filePath = path.join(contentDir, f);
  const text = fs.readFileSync(filePath, 'utf8');
  phrases.forEach(p => {
    if (text.toLowerCase().includes(p.toLowerCase())) {
      results.push({ file: f, phrase: p });
    }
  });
});

console.log('Total phrase matches found:', results.length);
results.forEach(r => console.log(`  ${r.file} -> "${r.phrase}"`));
