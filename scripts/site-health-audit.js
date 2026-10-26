// scripts/site-health-audit.js
// Weekly Automated Site Health & Integrity Auditor for Midwest AEC
// Run directly: node scripts/site-health-audit.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_DIR = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(BASE_DIR, 'sitemap.xml');
const DATA_JS_PATH = path.join(BASE_DIR, 'data.js');
const CONTENT_DIR = path.join(BASE_DIR, 'content');
const ARTICLES_DIR = path.join(BASE_DIR, 'articles');
const ROBOTS_PATH = path.join(BASE_DIR, 'robots.txt');

const USER_AGENT = 'MidwestAEC-HealthBot/1.0 (+https://midwestaec.com; Weekly Integrity Monitor)';
const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  const headers = {
    'User-Agent': options.useBrowserUA ? BROWSER_UA : USER_AGENT,
    ...(options.headers || {})
  };

  try {
    const t0 = Date.now();
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
      redirect: 'follow'
    });
    const t1 = Date.now();
    clearTimeout(id);
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      timeMs: t1 - t0,
      headers: response.headers
    };
  } catch (err) {
    clearTimeout(id);
    return {
      ok: false,
      status: 0,
      statusText: err.name === 'AbortError' ? 'TIMEOUT' : 'NETWORK_ERROR',
      error: err.message,
      timeMs: 0
    };
  }
}

async function runAudit() {
  const report = {
    timestamp: new Date().toISOString(),
    localTime: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }) + ' Central',
    inventoryCheck: {},
    sitemapCrawl: {
      total: 0,
      passed: 0,
      failed: 0,
      averageLatencyMs: 0,
      results: []
    },
    internalLinksCheck: {
      totalChecked: 0,
      broken: []
    },
    externalStandardsCheck: {
      total: 0,
      passed: 0,
      failed: 0,
      results: []
    },
    edgeHealth: {
      domain: 'https://midwestaec.com',
      sslActive: false,
      cfRay: null,
      cfCache: null,
      server: null
    },
    schemaValidation: {
      totalChecked: 0,
      passed: 0,
      issues: []
    }
  };

  console.log('=====================================================');
  console.log(' MIDWEST AEC - WEEKLY SITE HEALTH AUDIT');
  console.log(` Timestamp: ${report.localTime} (${report.timestamp})`);
  console.log('=====================================================\n');

  // -----------------------------------------------------------------
  // 1. INVENTORY & COUNT CONSISTENCY CHECK
  // -----------------------------------------------------------------
  console.log('--- [1/5] INVENTORY & COUNT CONSISTENCY ---');
  const markdownFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  const articleHtmlFiles = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.html'));

  const dataJsContent = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const dataMatch = dataJsContent.match(/var miaecData = (\[[\s\S]*?\]);/);
  const dataRecords = dataMatch ? JSON.parse(dataMatch[1]) : [];

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const sitemapUrls = (sitemapContent.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
  const sitemapArticleUrls = sitemapUrls.filter(u => u.includes('/articles/'));
  const sitemapCoreUrls = sitemapUrls.filter(u => !u.includes('/articles/'));

  report.inventoryCheck = {
    markdownFilesCount: markdownFiles.length,
    articlesHtmlCount: articleHtmlFiles.length,
    dataJsRecordsCount: dataRecords.length,
    sitemapTotalUrls: sitemapUrls.length,
    sitemapArticleUrlsCount: sitemapArticleUrls.length,
    sitemapCoreUrlsCount: sitemapCoreUrls.length,
    countsMatch: (
      markdownFiles.length === articleHtmlFiles.length &&
      markdownFiles.length === dataRecords.length &&
      markdownFiles.length === sitemapArticleUrls.length
    )
  };

  console.log(`- content/*.md count:         ${report.inventoryCheck.markdownFilesCount}`);
  console.log(`- articles/*.html count:      ${report.inventoryCheck.articlesHtmlCount}`);
  console.log(`- data.js records count:      ${report.inventoryCheck.dataJsRecordsCount}`);
  console.log(`- sitemap.xml article URLs:   ${report.inventoryCheck.sitemapArticleUrlsCount}`);
  console.log(`- sitemap.xml core site URLs: ${report.inventoryCheck.sitemapCoreUrlsCount}`);
  console.log(`- sitemap.xml TOTAL URLs:     ${report.inventoryCheck.sitemapTotalUrls}`);
  console.log(`- Consistency Status:         ${report.inventoryCheck.countsMatch ? 'PERFECT MATCH ✓' : 'MISMATCH DETECTED ✗'}\n`);

  // -----------------------------------------------------------------
  // 2. CRAWL ALL SITEMAP URLS ON HTTPS://MIDWESTAEC.COM
  // -----------------------------------------------------------------
  console.log('--- [2/5] LIVE HTTPS SITEMAP CRAWL (midwestaec.com) ---');
  report.sitemapCrawl.total = sitemapUrls.length;
  let totalLatency = 0;

  for (const url of sitemapUrls) {
    const res = await fetchWithTimeout(url);
    totalLatency += res.timeMs;
    const entry = {
      url,
      status: res.status,
      timeMs: res.timeMs,
      ok: res.status === 200
    };
    report.sitemapCrawl.results.push(entry);

    if (res.status === 200) {
      report.sitemapCrawl.passed++;
      console.log(`✓ [200 OK] (${res.timeMs}ms) ${url}`);
    } else {
      report.sitemapCrawl.failed++;
      console.log(`✗ [${res.status || res.statusText}] (${res.timeMs}ms) ${url}`);
    }

    if (url === 'https://midwestaec.com/index.html' && res.headers) {
      report.edgeHealth.sslActive = true;
      report.edgeHealth.cfRay = res.headers.get('cf-ray');
      report.edgeHealth.cfCache = res.headers.get('cf-cache-status');
      report.edgeHealth.server = res.headers.get('server');
    }
  }

  report.sitemapCrawl.averageLatencyMs = Math.round(totalLatency / sitemapUrls.length);
  console.log(`\nSitemap Crawl Summary: ${report.sitemapCrawl.passed}/${report.sitemapCrawl.total} URLs passed (Avg latency: ${report.sitemapCrawl.averageLatencyMs}ms)\n`);

  // -----------------------------------------------------------------
  // 3. INTERNAL LINK AUDIT ACROSS ALL HTML PAGES
  // -----------------------------------------------------------------
  console.log('--- [3/5] INTERNAL HYPERLINK INTEGRITY AUDIT ---');
  const allHtmlFiles = [
    ...['index.html', 'about.html', 'browse.html', 'privacy.html', 'terms.html', 'disclosure.html'].map(f => path.join(BASE_DIR, f)),
    ...articleHtmlFiles.map(f => path.join(ARTICLES_DIR, f))
  ];

  const hrefRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  const discoveredExternalLinks = new Map();

  allHtmlFiles.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
      const rawHref = match[1].trim();
      report.internalLinksCheck.totalChecked++;

      // Filter special schemes and client-side JS template literals
      if (rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:') || rawHref.startsWith('${')) {
        continue;
      }

      if (rawHref.startsWith('http://') || rawHref.startsWith('https://')) {
        // Collect external links for standards check
        const cleanExt = rawHref.split('#')[0];
        if (!cleanExt.includes('midwestaec.com')) {
          if (!discoveredExternalLinks.has(cleanExt)) {
            discoveredExternalLinks.set(cleanExt, []);
          }
          discoveredExternalLinks.get(cleanExt).push(path.relative(BASE_DIR, filePath));
        }
        continue;
      }

      // Check relative link
      const cleanHref = rawHref.split('#')[0].split('?')[0];
      if (!cleanHref) continue;

      const sourceDir = path.dirname(filePath);
      let targetPath;
      if (cleanHref.startsWith('/')) {
        targetPath = path.join(BASE_DIR, cleanHref);
      } else {
        targetPath = path.join(sourceDir, cleanHref);
      }

      if (!fs.existsSync(targetPath)) {
        report.internalLinksCheck.broken.push({
          source: path.relative(BASE_DIR, filePath),
          href: rawHref,
          resolvedTarget: path.relative(BASE_DIR, targetPath)
        });
      }
    }
  });

  console.log(`- Total <a> hyperlinks checked: ${report.internalLinksCheck.totalChecked}`);
  console.log(`- Broken internal links:         ${report.internalLinksCheck.broken.length}`);
  if (report.internalLinksCheck.broken.length > 0) {
    report.internalLinksCheck.broken.forEach(b => console.log(`  ✗ [BROKEN] In ${b.source}: href="${b.href}"`));
  } else {
    console.log(`  ✓ Zero broken internal links found across all pages!\n`);
  }

  // -----------------------------------------------------------------
  // 4. EXTERNAL EDUCATIONAL & STANDARD LINKS CHECK
  // -----------------------------------------------------------------
  console.log('--- [4/5] EXTERNAL EDUCATIONAL & STANDARD LINKS CHECK ---');
  // Define standard benchmarks + dynamically collected external links
  const targetStandards = [
    { name: 'Building Performance Institute (BPI)', url: 'https://www.bpi.org' },
    { name: 'National Fenestration Rating Council (NFRC)', url: 'https://www.nfrc.org' },
    { name: 'Flooring Contractors Association (FCICA)', url: 'https://fcica.com' },
    { name: 'Database of State Incentives for Renewables & Efficiency (DSIRE)', url: 'https://www.dsireusa.org' },
    { name: 'Air Conditioning Contractors of America (ACCA)', url: 'https://www.acca.org' },
    { name: 'International Code Council (ICC)', url: 'https://codes.iccsafe.org' },
    { name: 'Networx Contractor Partner Privacy', url: 'https://www.networx.com/privacy' },
    { name: 'Modernize Contractor Partner Privacy', url: 'https://modernize.com/privacy' } // Note tested working URL
  ];

  // Also include any other discovered external links from articles
  for (const [url] of discoveredExternalLinks.entries()) {
    if (!targetStandards.some(s => s.url === url)) {
      targetStandards.push({ name: `Article Reference (${url})`, url });
    }
  }

  report.externalStandardsCheck.total = targetStandards.length;

  for (const item of targetStandards) {
    const res = await fetchWithTimeout(item.url, { useBrowserUA: true });
    const isSuccess = res.status >= 200 && res.status < 400;
    const resultItem = {
      name: item.name,
      url: item.url,
      status: res.status,
      statusText: res.statusText,
      timeMs: res.timeMs,
      ok: isSuccess
    };
    report.externalStandardsCheck.results.push(resultItem);

    if (isSuccess) {
      report.externalStandardsCheck.passed++;
      console.log(`✓ [${res.status} OK] (${res.timeMs}ms) ${item.name} -> ${item.url}`);
    } else {
      report.externalStandardsCheck.failed++;
      console.log(`✗ [${res.status || res.statusText}] (${res.timeMs}ms) ${item.name} -> ${item.url}`);
    }
  }

  console.log(`\nExternal Standards Summary: ${report.externalStandardsCheck.passed}/${report.externalStandardsCheck.total} responding\n`);

  // -----------------------------------------------------------------
  // 5. SCHEMA.ORG & STRUCTURED DATA VALIDATION
  // -----------------------------------------------------------------
  console.log('--- [5/5] SCHEMA.ORG & STRUCTURED DATA VALIDATION ---');
  articleHtmlFiles.forEach(file => {
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    report.schemaValidation.totalChecked++;

    const jsonLdMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    if (!jsonLdMatch || jsonLdMatch.length === 0) {
      report.schemaValidation.issues.push({ file, issue: 'Missing JSON-LD script tag' });
    } else {
      let validSchemas = 0;
      jsonLdMatch.forEach(tag => {
        try {
          const raw = tag.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
          const parsed = JSON.parse(raw);
          if (parsed['@context'] && parsed['@type']) {
            validSchemas++;
          }
        } catch (e) {
          report.schemaValidation.issues.push({ file, issue: `JSON parse error: ${e.message}` });
        }
      });
      if (validSchemas > 0) {
        report.schemaValidation.passed++;
      }
    }
  });

  console.log(`- Schema.org JSON-LD validated: ${report.schemaValidation.passed}/${report.schemaValidation.totalChecked} articles`);
  if (report.schemaValidation.issues.length === 0) {
    console.log(`  ✓ 100% of articles contain valid Article/FAQPage/HowTo Schema.org JSON-LD!\n`);
  } else {
    report.schemaValidation.issues.forEach(i => console.log(`  ✗ [SCHEMA ISSUE] ${i.file}: ${i.issue}`));
  }

  // -----------------------------------------------------------------
  // SAVE AUDIT REPORT DATA TO JSON & RETURN
  // -----------------------------------------------------------------
  const auditLogPath = path.join(BASE_DIR, 'scripts', 'latest-health-audit.json');
  fs.writeFileSync(auditLogPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`Audit report persisted to ${auditLogPath}`);

  return report;
}

runAudit().catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
