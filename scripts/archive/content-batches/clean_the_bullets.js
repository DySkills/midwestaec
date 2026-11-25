const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

let replacedCount = 0;

files.forEach(f => {
  const filePath = path.join(contentDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace "- **The [Word]...:**" with "- **[Word]...:**"
  // e.g. "- **The Eave Ice Wall:**" -> "- **Eave Ice Wall:**"
  content = content.replace(/^(\s*-\s*\*\*)The\s+([^*]+:\*\*)/gm, (match, prefix, rest) => {
    replacedCount++;
    return `${prefix}${rest}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Cleaned 'The' bullets] ${f}`);
  }
});

console.log(`Total 'The' prefix bullets converted: ${replacedCount}`);
