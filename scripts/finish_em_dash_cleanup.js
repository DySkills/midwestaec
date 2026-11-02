const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

const exactCleanups = [
  {
    file: 'basement-lvp-flooring-moisture.md',
    from: 'chilled at **38°F to 42°F**—retaining the accumulated cold of the preceding two months.',
    to: 'chilled at **38°F to 42°F**, retaining the accumulated ground cold of the preceding two months.'
  },
  {
    file: 'basement-waterproofing.md',
    from: 'The primary failure point is the **cove joint**—the cold joint where the horizontal floor slab was poured against the vertical foundation footing.',
    to: 'The primary failure point is the **cove joint**, the cold joint where the horizontal floor slab meets the vertical foundation footing.'
  },
  {
    file: 'blower-door-checklist.md',
    from: 'In these challenging assemblies, builders utilize **AeroBarrier**—an automated aerosolized acrylic sealant system:',
    to: 'In these challenging assemblies, builders utilize **AeroBarrier**, an automated aerosolized acrylic sealant system:'
  },
  {
    file: 'cold-climate-heat-pumps.md',
    from: 'delivers a **flat capacity curve**—a straight line delivering 100% of its rated BTU output (e.g., a full 36,000 BTUs from a 3-ton unit) all the way down to -5°F, continuing to deliver 75%+ rated heat at -15°F.',
    to: 'delivers a **flat capacity curve**, holding 100% of its rated BTU output (e.g., a full 36,000 BTUs from a 3-ton unit) down to -5°F, and continuing to deliver 75%+ rated heat at -15°F.'
  },
  {
    file: 'cold-climate-heat-pumps.md',
    from: 'understanding the **Coefficient of Performance (COP)**—the ratio of useful heat energy delivered to electrical energy consumed.',
    to: 'understanding the **Coefficient of Performance (COP)**: the ratio of useful heat delivered to electrical energy consumed.'
  },
  {
    file: 'crawlspace-encapsulation.md',
    from: 'above 25%—the critical rot threshold for structural wood framing.',
    to: 'above 25%, the critical rot threshold for structural wood framing.'
  },
  {
    file: 'crawlspace-encapsulation.md',
    from: 'governed by **psychrometrics**—the thermodynamic relationship between air temperature, absolute moisture content, and relative humidity (RH).',
    to: 'governed by **psychrometrics** (the relationship between air temperature, absolute moisture content, and relative humidity).'
  },
  {
    file: 'crawlspace-encapsulation.md',
    from: 'functions as an **industrial dehumidifier working in reverse**—constantly extracting moisture from outdoor summer air and depositing gallons of liquid water onto the structural wood framing of the home.',
    to: 'functions like an industrial dehumidifier running in reverse, continuously pulling moisture from humid outdoor air and depositing gallons of water onto structural wood framing.'
  },
  {
    file: 'does-house-need-to-breathe.md',
    from: 'lies the **Neutral Pressure Plane (NPP)**—the horizontal boundary where internal building pressure precisely equals outdoor atmospheric pressure:',
    to: 'lies the **Neutral Pressure Plane (NPP)**, the horizontal boundary where internal building pressure precisely equals outdoor atmospheric pressure:'
  },
  {
    file: 'energy-hikes.md',
    from: 'spans **40 to 60 years**—exceeding the 20-year lifespan of insulated glass seals.',
    to: 'spans **40 to 60 years**, well past the 20-year lifespan of insulated glass seals.'
  },
  {
    file: 'false-spring-envelope-thaw.md',
    from: 'notorious "false spring"—a sudden, deceptive 48-hour warm front where sub-zero polar air gives way to 50°F sunshine and melting snowpack.',
    to: 'notorious "false spring," a sudden 48-hour warm front where sub-zero air gives way to 50°F sunshine and rapid snowmelt.'
  },
  {
    file: 'heat-pump-aux-heat-lockout-balance-point.md',
    from: 'Thermal Balance Point**—the outdoor temperature where building heat loss precisely equals heat pump output:',
    to: 'Thermal Balance Point**, which is the outdoor temperature where building heat loss equals heat pump output:'
  },
  {
    file: 'ice-dams-roofs.md',
    from: 'balanced cold roof assembly**—an attic engineered so the entire roof deck remains uniformly below 32°F during winter weather.',
    to: 'balanced cold roof assembly**, where the attic is engineered so the roof deck stays uniformly below 32°F throughout winter weather.'
  },
  {
    file: 'icf-basements-walls.md',
    from: 'Insulated Concrete Forms (ICF)—sometimes colloquially referred to by Midwest tradesmen as an **ice block foundation** due to the interlocking white foam forms, eliminate the thermal bridge',
    to: 'Insulated Concrete Forms (ICF), often called an "ice block foundation" by tradespeople because of the interlocking white foam blocks, eliminate the thermal bridge'
  },
  {
    file: 'off-grid-systems.md',
    from: 'This phenomenon, known as **lithium plating**—permanently degrades battery capacity, increases internal resistance, and can grow microscopic metallic dendrites that puncture the separator, creating catastrophic internal short circuits.',
    to: 'This phenomenon, known as **lithium plating**, permanently degrades battery capacity, increases internal resistance, and can grow microscopic metallic dendrites that short out cells internally.'
  },
  {
    file: 'rammed-earth-midwest-flooring.md',
    from: 'in excess of **30,000 psi**—far exceeding the tensile strength of compacted soil (which is typically under 150 psi).',
    to: 'in excess of **30,000 psi**, far exceeding the tensile strength of compacted soil (typically under 150 psi).'
  },
  {
    file: 'when-to-replace-windows.md',
    from: 'spans **45 to 65 years**—far exceeding the 20- to 25-year service life of the insulated glass seals!',
    to: 'spans **45 to 65 years**, far exceeding the 20- to 25-year service life of insulated glass seals.'
  }
];

exactCleanups.forEach(item => {
  const p = path.join(contentDir, item.file);
  let content = fs.readFileSync(p, 'utf8');
  if (content.includes(item.from)) {
    content = content.replace(item.from, item.to);
    fs.writeFileSync(p, content, 'utf8');
    console.log(`[Cleaned] ${item.file}`);
  } else {
    console.warn(`[Not Found] ${item.file}: "${item.from.slice(0, 30)}..."`);
  }
});

console.log('All exact em-dash replacements processed.');
