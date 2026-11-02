const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

console.log('--- EXECUTING ACTION 1 ACROSS ALL 32 REMAINING ARTICLES ---');

// Helper to normalize line endings
const normalize = str => str.replace(/\r\n/g, '\n');
const denormalize = str => str.replace(/\n/g, '\r\n');

// -----------------------------------------------------------------------------
// 1. SYSTEMIC JARGON CLEANUP: "Zone 5", "Zone 6", "Climate Zones 5-7" -> Regional Geography
// -----------------------------------------------------------------------------
const zoneReplacements = [
  { from: /in Climate Zones 5, 6, and 7/g, to: 'across the Great Lakes, the Upper Midwest, and the Northern Plains' },
  { from: /in Climate Zones 4, 5, and 6/g, to: 'across the Great Lakes, the Corn Belt, and the Northern Plains' },
  { from: /in Climate Zone 5 and 6/g, to: 'across the Great Lakes and Northern Plains' },
  { from: /in Climate Zone 5 & 6/g, to: 'across the Great Lakes and Northern Plains' },
  { from: /in Climate Zone 5/g, to: 'across the Upper Midwest and Great Lakes' },
  { from: /in Zone 5/g, to: 'in the Great Lakes and Plains' },
  { from: /Zone 5 winters/g, to: 'harsh Midwest and Great Lakes winters' },
  { from: /Zone 5 and 6/g, to: 'the Great Lakes and Northern Plains' },
  { from: /Climate Zone 5/g, to: 'the Upper Midwest and Great Lakes' },
  { from: /Climate Zones 4 and 5/g, to: 'the Midwest and Great Lakes region' },
  { from: /Climate Zones 5 through 7/g, to: 'the Great Lakes, Upper Midwest, and Northern Plains' }
];

// List of all 32 articles to process
const articles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md') && f !== 'icf-basements-walls.md' && f !== 'cold-climate-heat-pumps.md');

let processedCount = 0;

articles.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Apply zone cleanup
  zoneReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    processedCount++;
  }
});

console.log(`✓ Systemic zone jargon updated across ${processedCount} articles.`);
