const googleTrends = require('google-trends-api');

const QUERIES = [
  'aux heat',
  'furnace blowing cold',
  'frozen pipes',
  'ice dam'
];

async function checkDuration(kw) {
  console.log(`\n======================================================`);
  console.log(`  SEASONALITY TIMELINE: "${kw}" (Past 12 Months)`);
  console.log(`======================================================`);
  try {
    const raw = await googleTrends.interestOverTime({
      keyword: kw,
      geo: 'US',
      startTime: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    });
    const parsed = JSON.parse(raw);
    const data = parsed.default.timelineData || [];
    
    // Find weeks where interest > 20
    const activeWeeks = data.filter(d => d.value[0] >= 15);
    console.log(`Total Weeks in Year: ${data.length}`);
    console.log(`Active Surge Weeks (Interest >= 15/100): ${activeWeeks.length} weeks`);
    
    if (activeWeeks.length > 0) {
      const first = activeWeeks[0];
      const last = activeWeeks[activeWeeks.length - 1];
      console.log(`Surge Window Start: Week of ${first.formattedTime} (Score: ${first.value[0]})`);
      console.log(`Surge Window End:   Week of ${last.formattedTime} (Score: ${last.value[0]})`);
      
      // Find peak
      let peak = activeWeeks[0];
      activeWeeks.forEach(w => {
        if (w.value[0] > peak.value[0]) peak = w;
      });
      console.log(`Peak Week:          Week of ${peak.formattedTime} (Score: ${peak.value[0]})`);
    }

    // Print month-by-month summary
    const monthly = {};
    data.forEach(d => {
      // d.formattedTime like "Nov 5, 2023" or similar
      const parts = d.formattedTime.split(' ');
      const monthYear = parts[0] + ' ' + (parts[2] || '');
      if (!monthly[monthYear]) monthly[monthYear] = [];
      monthly[monthYear].push(d.value[0]);
    });

    console.log(`Monthly Average Relative Interest:`);
    Object.entries(monthly).forEach(([m, vals]) => {
      const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
      const bar = '█'.repeat(Math.round(avg / 5));
      console.log(`  ${m.padEnd(12)}: ${avg.toString().padStart(3)}/100 ${bar}`);
    });

  } catch (err) {
    console.warn(`Error on ${kw}:`, err.message);
  }
}

async function main() {
  for (const q of QUERIES) {
    await checkDuration(q);
  }
}

main();
