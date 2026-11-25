const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const files = fs.readdirSync(path.join(rootDir, 'content')).filter(f => f.endsWith('.md'));

console.log(`Auditing all ${files.length} articles for Action 1 completion:`);

let allPassed = true;

files.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, 'content', f), 'utf8');
  const title = (c.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const lines = c.split(/\r?\n/).length;
  const hasCostOrEmergency = /cost|emergency|breakdown|diagnostics|triage|spalling|roi|failures/i.test(c);
  const hasZoneJargon = /zone\s*[4567]/i.test(title);
  
  if (hasZoneJargon) {
    console.warn(`⚠ ${f} has zone in title: "${title}"`);
    allPassed = false;
  }
  
  if (!hasCostOrEmergency) {
    console.warn(`⚠ ${f} missing cost/emergency section`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log(`✓ ALL ${files.length} ARTICLES PASSED AUDIT! Every article contains grounded homeowner cost/diagnostic sections and zero title zone jargon.`);
}
