const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Files to update in root
const rootFiles = ['index.html', 'browse.html', 'about.html', 'privacy.html', 'terms.html', 'disclosure.html'];

rootFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace header logo text
  content = content.replace(
    'Midwest<span class="text-steel">AEC</span>\n',
    'Midwest<span class="text-steel">AEC</span><span class="text-[10px] font-sans text-slate-400 font-normal align-top ml-0.5">™</span>\n'
  );

  // Replace footer copyright
  content = content.replace(
    '&copy; 2026 Midwest AEC &bull;',
    '&copy; 2026 Midwest AEC™ &bull;'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});

// 2. Add explicit Trademark clause to terms.html
const termsPath = path.join(rootDir, 'terms.html');
let termsContent = fs.readFileSync(termsPath, 'utf8');
const ipTarget = 'and international copyright, trademark, and intellectual property laws.\n      </p>';
const ipReplacement = 'and international copyright, trademark, and intellectual property laws.\n      </p>\n      <p>\n        <strong>Trademark Notice:</strong> "Midwest AEC", "MidwestAEC", the MW badge emblem, and related brand identifiers are common-law trademarks claimed and held by the publisher. All rights reserved. Unauthorized commercial use, deceptive simulation, or reproduction is prohibited.\n      </p>';

if (termsContent.includes(ipTarget)) {
  termsContent = termsContent.replace(ipTarget, ipReplacement);
  fs.writeFileSync(termsPath, termsContent, 'utf8');
  console.log('Added explicit Trademark Notice to terms.html');
}

// 3. Update build.js
const buildPath = path.join(rootDir, 'build.js');
let buildContent = fs.readFileSync(buildPath, 'utf8');

// Header logo in build.js
buildContent = buildContent.replace(
  '<span class="text-lg font-bold tracking-tight text-navy font-serif">Midwest<span class="text-steel">AEC</span></span>',
  '<span class="text-lg font-bold tracking-tight text-navy font-serif">Midwest<span class="text-steel">AEC</span><span class="text-[9px] font-sans text-slate-400 font-normal align-top ml-0.5">™</span></span>'
);

// Footer in build.js
buildContent = buildContent.replace(
  '&copy; 2026 Midwest AEC &bull; Independent Building Science Publication',
  '&copy; 2026 Midwest AEC™ &bull; Independent Building Science Publication. All rights reserved.'
);

fs.writeFileSync(buildPath, buildContent, 'utf8');
console.log('Updated build.js');
