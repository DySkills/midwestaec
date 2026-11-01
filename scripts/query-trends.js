// query-trends.js - Grounded Google Trends Intelligence CLI for MidwestAEC
const googleTrends = require('google-trends-api');

async function main() {
  const keyword = process.argv.slice(2).join(' ') || 'heat pump aux heat';
  console.log(`\n======================================================`);
  console.log(`  GOOGLE TRENDS AUDIT: "${keyword}" (US Region)`);
  console.log(`======================================================\n`);

  try {
    // 1. Interest Over Time (Past 12 Months)
    console.log(`[1] Pulling 12-Month Search Velocity Curve...`);
    const timelineRaw = await googleTrends.interestOverTime({
      keyword: keyword,
      geo: 'US',
      startTime: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    });
    const parsedTimeline = JSON.parse(timelineRaw);
    const points = parsedTimeline.default.timelineData;
    if (points && points.length > 0) {
      console.log(`    Total Weekly Snapshots: ${points.length}`);
      const recent = points.slice(-4);
      console.log(`    Recent 4-Week Activity:`);
      recent.forEach(p => {
        console.log(`      * Week of ${p.formattedTime}: Interest Index = ${p.value[0]} / 100`);
      });
    } else {
      console.log(`    No timeline data returned for "${keyword}".`);
    }

    // 2. Related Queries (Top & Rising)
    console.log(`\n[2] Pulling Live Real-User Query Clusters...`);
    const relatedRaw = await googleTrends.relatedQueries({
      keyword: keyword,
      geo: 'US'
    });
    const parsedRelated = JSON.parse(relatedRaw);
    const topList = parsedRelated.default?.rankedList?.[0]?.rankedKeyword || [];
    const risingList = parsedRelated.default?.rankedList?.[1]?.rankedKeyword || [];

    if (topList.length > 0) {
      console.log(`    Top Co-Searched Queries:`);
      topList.slice(0, 5).forEach(k => {
        console.log(`      * "${k.query}" (Relative Volume: ${k.value})`);
      });
    } else {
      console.log(`    Top Queries: (None or below privacy threshold)`);
    }

    if (risingList.length > 0) {
      console.log(`\n    Rising / Breakout Queries (>5000% Surge):`);
      risingList.slice(0, 5).forEach(k => {
        console.log(`      * "${k.query}" (Growth: ${k.formattedValue})`);
      });
    } else {
      console.log(`    Rising Queries: (None or below privacy threshold)`);
    }

  } catch (err) {
    console.error(`Error querying Google Trends:`, err.message || err);
  }
  console.log(`\n======================================================\n`);
}

main();
