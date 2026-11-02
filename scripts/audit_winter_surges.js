const googleTrends = require('google-trends-api');

// High-intent homeowner seeds for late autumn / winter in the Midwest
const SEEDS = [
  'furnace blowing cold',
  'furnace clicking',
  'furnace short cycling',
  'sump pump discharge frozen',
  'frozen pipes',
  'drafty windows in winter',
  'attic condensation in winter',
  'crawl space frozen pipes',
  'heat pump blowing cold air in winter',
  'ice dams on roof'
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function auditSeed(seed) {
  console.log(`\n======================================================`);
  console.log(`  AUDITING: "${seed}"`);
  console.log(`======================================================`);
  try {
    const raw = await googleTrends.relatedQueries({
      keyword: seed,
      geo: 'US'
    });
    const parsed = JSON.parse(raw);
    const top = parsed.default?.rankedList?.[0]?.rankedKeyword || [];
    const rising = parsed.default?.rankedList?.[1]?.rankedKeyword || [];

    console.log(`[RISING / BREAKOUT QUERIES]:`);
    if (rising.length > 0) {
      rising.slice(0, 7).forEach(r => {
        console.log(`  * "${r.query}" -> ${r.formattedValue}`);
      });
    } else {
      console.log(`  (None above threshold)`);
    }

    console.log(`[TOP SUSTAINED QUERIES]:`);
    if (top.length > 0) {
      top.slice(0, 5).forEach(t => {
        console.log(`  * "${t.query}" (Score: ${t.value}/100)`);
      });
    } else {
      console.log(`  (None above threshold)`);
    }
  } catch (err) {
    console.warn(`Error querying "${seed}":`, err.message);
  }
}

async function main() {
  for (const s of SEEDS) {
    await auditSeed(s);
    await sleep(1500); // polite rate limit
  }
}

main();
