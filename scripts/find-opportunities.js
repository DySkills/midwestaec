// find-opportunities.js - Automated High-Intent Niche Opportunity Finder for MidwestAEC
const googleTrends = require('google-trends-api');

// Seed topics matching high-ticket contractor trades (HVAC, Foundations, Roofing, Moisture)
const SEEDS = [
  'aux heat',
  'furnace vent',
  'furnace shutting off',
  'basement wall',
  'basement leak',
  'roof frost',
  'ice dam',
  'egress window'
];

// Aggregator junk to filter out (terms where Angi / Thumbtack dominate)
const AGGREGATOR_TERMS = ['near me', 'company', 'companies', 'contractor', 'contractors', 'cost', 'quote', 'jobs', 'salary'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scanSeed(keyword) {
  try {
    const raw = await googleTrends.relatedQueries({
      keyword: keyword,
      geo: 'US'
    });
    const parsed = JSON.parse(raw);
    const top = parsed.default?.rankedList?.[0]?.rankedKeyword || [];
    const rising = parsed.default?.rankedList?.[1]?.rankedKeyword || [];

    const highIntentOpportunities = [];

    // Process Rising Queries first (Breakouts)
    rising.forEach(item => {
      const q = item.query.toLowerCase();
      const isAggregator = AGGREGATOR_TERMS.some(junk => q.includes(junk));
      if (!isAggregator) {
        highIntentOpportunities.push({
          query: item.query,
          signal: `RISING / ${item.formattedValue}`,
          type: 'Breakout Surge'
        });
      }
    });

    // Process Top Volume Queries
    top.forEach(item => {
      const q = item.query.toLowerCase();
      const isAggregator = AGGREGATOR_TERMS.some(junk => q.includes(junk));
      if (!isAggregator && item.value >= 25) {
        highIntentOpportunities.push({
          query: item.query,
          signal: `HIGH VOLUME (Score: ${item.value}/100)`,
          type: 'Sustained Search'
        });
      }
    });

    return highIntentOpportunities;
  } catch (err) {
    return [{ query: keyword, signal: `Error: ${err.message}`, type: 'Failed' }];
  }
}

async function main() {
  console.log('================================================================');
  console.log('     MIDWEST AEC UNCOVERED OPPORTUNITY SCANNER (GOOGLE TRENDS)   ');
  console.log('     Filtering out generic aggregator terms (Angi/Bob Vila)      ');
  console.log('================================================================\n');

  for (const seed of SEEDS) {
    console.log(`>>> Scanning Seed Topic: "${seed}"...`);
    const opps = await scanSeed(seed);
    
    if (opps.length === 0) {
      console.log('    No high-intent queries passed filter.\n');
    } else {
      opps.slice(0, 5).forEach(o => {
        console.log(`    [${o.signal}] -> "${o.query}"`);
      });
      console.log('');
    }
    // Polite delay between requests to avoid rate limits
    await sleep(1500);
  }

  console.log('================================================================');
  console.log('Scan complete. Target the [RISING / Breakout] queries first.');
  console.log('================================================================\n');
}

main();
