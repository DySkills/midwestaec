// build.js - Zero-Dependency Markdown Compiler & Database Generator for MIAEC
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');
const outputDir = path.join(__dirname, 'articles');
const dataJsPath = path.join(__dirname, 'data.js');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Simple YAML frontmatter parser
function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: fileContent };
  }

  const rawYaml = match[1];
  const body = match[2];
  const frontmatter = {};

  rawYaml.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();

      // Clean quotes
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Array parser (e.g. ["A", "B"])
      if (val.startsWith('[') && val.endsWith(']')) {
        try {
          val = JSON.parse(val);
        } catch (e) {
          val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
        }
      }
      frontmatter[key] = val;
    }
  });

  return { frontmatter, body };
}

// Lightweight Markdown to HTML parser
function markdownToHtml(md) {
  let html = '';
  const lines = md.split('\n');
  let inList = false;
  let inTable = false;
  let tableHeaderDone = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Table parsing
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        html += '<div class="my-6 overflow-x-auto"><table class="w-full text-left border-collapse border border-slate-200 text-sm font-mono">\n';
        inTable = true;
        tableHeaderDone = false;
      }
      // Separator line (e.g. |---|---|)
      if (line.includes('---')) {
        tableHeaderDone = true;
        continue;
      }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (!tableHeaderDone) {
        html += '<thead class="bg-steel-50 text-navy font-bold"><tr>' + cells.map(c => `<th class="p-3 border border-slate-200">${c}</th>`).join('') + '</tr></thead>\n<tbody>\n';
      } else {
        html += '<tr class="border-b border-slate-100 hover:bg-slate-50/50">' + cells.map(c => `<td class="p-3 border border-slate-200 text-slate-700">${c}</td>`).join('') + '</tr>\n';
      }
      continue;
    } else if (inTable) {
      html += '</tbody></table></div>\n';
      inTable = false;
    }

    // Code / Diagram block parsing (```)
    if (line.startsWith('```')) {
      let codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      html += `<pre class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-slate-800"><code>${codeLines.join('\n')}</code></pre>\n`;
      continue;
    }

    // Blockquote & Quick Summary parser
    if (line.startsWith('>')) {
      let bqLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        bqLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      i--; // rewind one step for main loop

      let bqHtml = '<div class="my-8 p-6 sm:p-7 rounded-2xl bg-steel-50/80 border-l-4 border-crimson border border-steel-border/60 shadow-sm">\n';
      bqHtml += '  <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-crimson mb-3">\n';
      bqHtml += '    <svg class="w-4 h-4 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>\n';
      bqHtml += '    <span>Quick Summary & Essential Takeaways</span>\n';
      bqHtml += '  </div>\n';

      let inBqList = false;
      for (let b = 0; b < bqLines.length; b++) {
        let bLine = bqLines[b].trim();
        if (!bLine) continue;

        if (bLine.startsWith('- ') || bLine.startsWith('* ')) {
          if (!inBqList) {
            bqHtml += '  <ul class="mt-4 pt-4 border-t border-slate-200/80 space-y-2.5 text-sm text-slate-700 font-sans">\n';
            inBqList = true;
          }
          bqHtml += `    <li class="flex items-start gap-2.5"><span class="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span><span>${formatInline(bLine.slice(2).trim())}</span></li>\n`;
        } else {
          if (inBqList) {
            bqHtml += '  </ul>\n';
            inBqList = false;
          }
          let cleanText = bLine.replace(/^\*\*Quick Summary:\*\*\s*/i, '');
          bqHtml += `  <p class="text-slate-800 text-base sm:text-lg font-serif leading-relaxed my-2">${formatInline(cleanText)}</p>\n`;
        }
      }
      if (inBqList) bqHtml += '  </ul>\n';
      bqHtml += '</div>\n';

      html += bqHtml;
      continue;
    }

    // List parsing
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) {
        html += '<ul class="list-disc pl-6 space-y-2 text-slate-700 my-4">\n';
        inList = true;
      }
      const itemContent = line.slice(2).trim();
      html += `  <li>${formatInline(itemContent)}</li>\n`;
      continue;
    } else if (inList) {
      html += '</ul>\n';
      inList = false;
    }

    // Numbered List parsing (e.g. "1. ")
    if (/^\d+\.\s/.test(line)) {
      const itemContent = line.replace(/^\d+\.\s/, '').trim();
      html += `<div class="flex items-start gap-3 my-3 text-slate-700 text-base leading-relaxed pl-1"><span class="w-6 h-6 rounded-full bg-navy/10 text-navy font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${line.match(/^\d+/)[0]}</span><div>${formatInline(itemContent)}</div></div>\n`;
      continue;
    }

    // Horizontal Rule
    if (line === '---') {
      html += '<hr class="my-8 border-slate-200" />\n';
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      html += `<h3 class="text-xl font-bold text-navy font-serif mt-8 mb-3">${formatInline(line.slice(4))}</h3>\n`;
      continue;
    }
    if (line.startsWith('## ')) {
      html += `<h2 class="text-2xl font-bold text-navy font-serif mt-10 mb-4 pt-4 border-t border-slate-100">${formatInline(line.slice(3))}</h2>\n`;
      continue;
    }
    if (line.startsWith('# ')) {
      // Main H1 skipped in body if placed in template header
      continue;
    }

    // Empty lines
    if (line === '') {
      continue;
    }

    // Standard Paragraph (Tight 2-3 sentences)
    html += `<p class="text-slate-700 text-base leading-relaxed my-4">${formatInline(line)}</p>\n`;
  }

  if (inList) html += '</ul>\n';
  if (inTable) html += '</tbody></table></div>\n';

  return html;
}

function formatInline(str) {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-crimson font-medium underline hover:text-crimson-hover">$1</a>');
}

// Generate complete HTML page
function buildArticleHtml(frontmatter, htmlBody) {
  const citiesStr = Array.isArray(frontmatter.cities) ? frontmatter.cities.slice(0, 5).join(', ') + '...' : frontmatter.cities || 'Midwest';
  const statesStr = Array.isArray(frontmatter.states) ? frontmatter.states.join(', ') : frontmatter.states || 'All Midwest';
  const formatBadge = frontmatter.format ? frontmatter.format.toUpperCase() : 'FEATURE';
  const leadTag = frontmatter.leadType ? ` &bull; ${frontmatter.leadType.toUpperCase()} LEAD` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${frontmatter.title} | MIAEC</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Newsreader"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            navy: {
              DEFAULT: '#161F83',
              dark: '#0e1458',
              deep: '#0a0e3f',
              text: '#111863',
              50: '#eef2ff',
            },
            steel: {
              DEFAULT: '#3274AE',
              dark: '#225582',
              100: '#e8f2fa',
              50: '#f4f8fc',
              border: '#d0e1f0',
            },
            crimson: {
              DEFAULT: '#C42927',
              hover: '#a8211f',
              light: '#fdf2f2',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#FBFBFC] text-slate-800 font-sans antialiased selection:bg-navy selection:text-white min-h-screen flex flex-col">

  <!-- Header -->
  <header class="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="../index.html" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-navy flex items-center justify-center font-bold text-white text-xs font-mono group-hover:bg-navy-dark transition">
          <span>M</span><span class="text-crimson">I</span>
        </div>
        <span class="text-lg font-bold tracking-tight text-navy font-serif">MI<span class="text-steel">AEC</span></span>
      </a>

      <div class="flex items-center gap-4 text-xs font-mono uppercase">
        <a href="../browse.html?cat=${frontmatter.catSlug}" class="text-steel hover:text-navy transition font-semibold">&larr; ${frontmatter.category}</a>
        <span class="text-slate-300">|</span>
        <a href="../browse.html?cat=all" class="text-slate-500 hover:text-navy transition">All Guides</a>
      </div>
    </div>
  </header>

  <!-- Focused Single-Column Monograph -->
  <main class="max-w-3xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
    <!-- Format Badge, Category & Metadata -->
    <div class="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-4">
      <span class="px-2.5 py-0.5 rounded-full bg-navy text-white font-bold tracking-wider uppercase text-[10px]">
        ${formatBadge}${leadTag}
      </span>
      <span class="px-2.5 py-0.5 rounded bg-steel-50 text-steel-dark border border-steel-border font-semibold">
        ${frontmatter.category}
      </span>
      <span>&bull;</span>
      <span class="text-slate-600">States: ${statesStr}</span>
      <span>&bull;</span>
      <span class="text-crimson font-medium">${frontmatter.readTime || '8 min read'}</span>
    </div>

    <!-- Article Title -->
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy font-serif tracking-tight leading-tight mb-3">
      ${frontmatter.title}
    </h1>

    ${frontmatter.subtitle ? `
    <!-- Description Subtitle -->
    <p class="text-lg sm:text-xl text-slate-600 font-serif leading-relaxed mb-6 font-normal">
      ${frontmatter.subtitle}
    </p>` : ''}

    <div class="flex items-center gap-3 text-xs font-mono text-slate-500 border-b border-slate-200 pb-6 mb-8">
      <span>By ${frontmatter.author || 'MIAEC Building Science'}</span>
      <span>&bull;</span>
      <span>Published ${frontmatter.date || 'October 2026'}</span>
      <span>&bull;</span>
      <span class="text-steel font-bold">${frontmatter.codeTag || 'Building Science Spec'}</span>
    </div>

    <!-- Article Content -->
    <article class="prose max-w-none">
      ${htmlBody}
    </article>

    <!-- Natural Dual CTA 2: Contractor Matching Hook -->
    <div class="mt-14 p-8 rounded-2xl bg-white border-2 border-steel-border shadow-sm">
      <div class="flex items-center justify-between gap-2 mb-2">
        <span class="text-xs font-mono uppercase tracking-widest text-crimson font-bold">Vetted Contractor Network</span>
        <span class="text-[10px] font-mono text-slate-400">Midwest Region</span>
      </div>
      <h3 class="text-2xl font-bold text-navy font-serif">
        Need Vetted Local Specialists in Your Area?
      </h3>
      <p class="text-slate-600 text-sm mt-2 font-sans leading-relaxed">
        Connect with licensed, building-science trained contractors serving ${citiesStr}. Free estimates with zero obligation.
      </p>

      <div class="mt-6 flex flex-wrap items-center gap-3">
        <a href="../browse.html?cat=${frontmatter.catSlug}" class="px-5 py-2.5 rounded-xl bg-crimson hover:bg-crimson-hover text-white text-xs font-mono font-semibold transition shadow-sm">
          Get Local Contractor Quotes &rarr;
        </a>
        <a href="../browse.html?cat=all" class="px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium transition">
          Browse More Specifications
        </a>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="border-t border-slate-200 bg-white py-8 text-xs text-slate-500 font-mono mt-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>MIAEC &bull; Midwest Architecture, Engineering & Construction</div>
      <div><a href="../about.html" class="hover:text-navy">About MIAEC</a> &bull; &copy; 2026 MIAEC Media LLC</div>
    </div>
  </footer>
</body>
</html>
`;
}

// Compile all articles & generate data.js
function build() {
  console.log('Building MIAEC articles from Markdown...');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const databaseRecords = [];

  files.forEach(file => {
    const fullPath = path.join(contentDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, body } = parseFrontmatter(content);

    const slug = frontmatter.slug || path.basename(file, '.md');
    const htmlBody = markdownToHtml(body);
    const fullHtml = buildArticleHtml(frontmatter, htmlBody);

    const outPath = path.join(outputDir, `${slug}.html`);
    fs.writeFileSync(outPath, fullHtml, 'utf8');
    console.log(`✓ Built articles/${slug}.html`);

    databaseRecords.push({
      title: frontmatter.title,
      subtitle: frontmatter.subtitle || '',
      format: frontmatter.format || 'Feature',
      leadType: frontmatter.leadType || '',
      category: frontmatter.category,
      catSlug: frontmatter.catSlug,
      cities: frontmatter.cities || ["All Midwest"],
      states: frontmatter.states || ["All Midwest"],
      summary: frontmatter.summary || '',
      codeTag: frontmatter.codeTag || "Building Science Spec",
      type: frontmatter.format || "Article",
      url: `articles/${slug}.html`
    });
  });

  // Write updated data.js
  const dataJsContent = `// Auto-generated from content/*.md by build.js
// Do not edit manually; edit files in content/*.md and run 'node build.js'

var miaecData = ${JSON.stringify(databaseRecords, null, 2)};
`;

  fs.writeFileSync(dataJsPath, dataJsContent, 'utf8');
  console.log(`✓ Regenerated data.js with ${databaseRecords.length} specifications!`);
}

build();
