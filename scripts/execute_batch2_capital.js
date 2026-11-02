const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';
const contentDir = path.join(rootDir, 'content');

console.log('=== EXECUTING BATCH 2: BLUEPRINT B (CAPITAL DECISION MATRIX) ===');

function robustReplace(filePath, oldSnippet, newSnippet) {
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  const target = oldSnippet.replace(/\r\n/g, '\n').trim();
  const replacement = newSnippet.replace(/\r\n/g, '\n').trim();

  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8');
    console.log(`✓ Updated ${path.basename(filePath)}`);
    return true;
  } else {
    console.warn(`⚠ Target NOT FOUND in ${path.basename(filePath)}`);
    return false;
  }
}

// -----------------------------------------------------------------------------
// 1. sips-vs-traditional-framing.md
// -----------------------------------------------------------------------------
const f1 = path.join(contentDir, 'sips-vs-traditional-framing.md');
const old1 = `## Prairie Winds on the Outskirts of Des Moines at -6°F

It is late January on the rolling agricultural bluffs outside Des Moines, Iowa. A sweeping Canadian cold front has cleared the skies, and the red bar stops at a biting -6°F. 

On the open prairie, a sustained 28 mph wind buffets two neighboring homes currently under construction, both framed to the identical 2,400-square-foot two-story footprint:

### Conventional 2x6 Framing
House A is conventionally stick-framed with 2x6 Douglas fir studs spaced 16 inches on center, insulated with R-20 fiberglass batts, and sheathed in 7/16-inch OSB. Even with quality housewrap meticulously taped, the wind drives air through the wall cavities. The wood framing members—studs, double top plates, and bottom plates—account for 25% of the total wall surface area. These solid lumber elements act as continuous thermal bridges with an effective resistance of barely R-6.8. In the unheated framed shell, an infrared thermometer reads 14°F on the interior surface of the studs.

### Structural Insulated Panel (SIP)
House B is erected using Structural Insulated Panels (SIPs): monolithic 6.5-inch wall panels consisting of a continuous core of expanded polystyrene (EPS) foam structurally laminated between two sheets of oriented strand board (OSB). The walls contain no interior framing studs every 16 inches. The only thermal breaks occur at engineered splines spaced every 8 feet. The building envelope acts as an airtight, monolithic thermos bottle. Inside House B, with no mechanical heat running, the interior wall surface measures 28°F—fourteen degrees warmer than its stick-framed neighbor—solely due to thermal mass retention and zero convective air leakage.

The question facing custom home builders and forward-thinking homeowners across the Midwest is simple: **Does the premium material cost of a panelized SIP envelope justify itself against traditional stick framing?**`;

const new1 = `## The Capital Dilemma: Structural Insulated Panels vs. 2x6 Framing Bids

When budgeting a custom home or rural acreage build across the Great Lakes and Northern Plains, the framing bid represents one of the largest single capital expenditures in the project. Builders and owners are frequently caught between conventional stick framing and high-performance Structural Insulated Panels (SIPs):

### 1. The Two Competing Construction Bids
- **Conventional 2x6 Stick Framing (R-20 Cavity):** Wood studs spaced 16 inches on center, insulated with fiberglass batts and wrapped in housewrap. While material costs are lower, wood framing members (studs, plates, headers) account for **25% of the exterior wall surface area**, acting as continuous thermal bridges that bleed heat in -15°F winter winds.
- **Monolithic SIPs Envelopes (6.5" Walls / 10.25" Roofs):** Monolithic panels featuring continuous expanded polystyrene (EPS) or graphite polystyrene (GPS) foam cores factory-laminated between two sheets of structural OSB. Delivers uninterrupted R-24 to R-40 insulation with studs eliminated every 16 inches.

### 2. The Upfront Material vs. Dry-In Labor Trade-Off
While SIPs factory packages carry an upfront material premium of **$14,000 to $20,000** over stick-framing lumber packages, they cut jobsite dry-in labor by **50% to 70%** (3 to 5 days with a crane vs. 3 to 4 weeks of stick framing). Evaluating the true financial payback requires analyzing the combined shell assembly cost, HVAC equipment downsizing, and long-term utility performance.`;

robustReplace(f1, old1, new1);

// -----------------------------------------------------------------------------
// 2. when-to-replace-windows.md
// -----------------------------------------------------------------------------
const f2 = path.join(contentDir, 'when-to-replace-windows.md');
const old2 = `## Technical Baseline: Fenestration Economics & Thermal Performance

Windows represent an undeniable thermal weak point in any residential building envelope. While an average exterior wall framed to 2024 IRC energy codes delivers a thermal resistance between **R-15 and R-21**, even a high-end, brand-new double-pane window rated by the National Fenestration Rating Council (NFRC) achieves a U-factor between **0.26 and 0.30**—equivalent to a thermal resistance of barely **R-3.3 to R-3.8**.

The aggressive marketing of the residential window replacement industry relies on consumer confusion between surface discomfort and whole-house energy loss. Homeowners feel cold radiant temperatures sitting next to an older single- or double-pane window during a sub-zero winter evening. Window salespeople exploit this physical discomfort to claim that spending $20,000 to $40,000 on full-frame replacement will slash heating bills by 40% to 50%.

In reality, windows account for only **15% to 25%** of a home's total heating load. The simple financial payback for window replacement on energy savings alone regularly exceeds **30 to 45 years**—well past the expected service life of the insulated glass unit (IGU) seal itself.`;

const new2 = `## The Capital Dilemma: $25,000 Window Quotes vs. Envelope Realities

Homeowners across the Midwest are aggressively targeted by window replacement contractors promising that new double- or triple-pane windows will slash winter heating bills in half. Before committing $20,000 to $40,000 to a window replacement contract, building science economics reveals the mathematical truth:

### 1. The Physics Gap: R-3 Windows vs. R-20 Walls
- Even a brand-new, top-tier Energy Star double-pane window (U-0.27) provides an insulating value of barely **R-3.7**—compared to an R-20 exterior wall or an R-60 attic.
- Windows account for only **15% to 22%** of a typical home's total heat loss.
- Slashing your heating bills by 50% through windows alone is a thermodynamic impossibility. On an annual heating bill of $2,000, replacing all windows typically saves **$250 to $450 per year**.
- On a $25,000 window replacement contract, the simple financial payback spans **45 to 65 years**—far exceeding the 20- to 25-year service life of the insulated glass seals!

### 2. When Capital Investment Makes Sense vs. When to Pass
- **INVEST:** If original wood jambs have structural wet rot, balances are physically broken, glass is shattered, or during a full siding tear-off where full-frame flashing can be seamlessly integrated.
- **PASS (Target the Alternatives):** If frames are structurally sound and the primary complaint is drafts and high heating bills. Installing Low-E storm windows and air-sealing weight pockets delivers 80% of the thermal performance at one-tenth the capital cost.`;

robustReplace(f2, old2, new2);

// -----------------------------------------------------------------------------
// 3. window-alternatives.md
// -----------------------------------------------------------------------------
const f3 = path.join(contentDir, 'window-alternatives.md');
const old3 = `## Winter Gusts in Portage Park at 14°F

It is late January in the historic Portage Park neighborhood on Chicago's Northwest Side. A biting winter wind howls down the alley, and the outdoor temperature stops at 14°F.

Inside a 1923 brick bungalow, the homeowner sits at the kitchen table drinking morning coffee. Every time a gust of wind strikes the north wall, the sheer curtains over the double-hung windows flutter as if a door were standing open. 

Holding a hand near the wooden window stool, the air feels like an open draft from a refrigerator. Placing a digital thermometer against the glass yields a surface reading of 38°F. 

The homeowner's furnace runs continuously, cycling on every twelve minutes. Last month's gas bill was \$485. 

Desperate for relief, the homeowner schedules an in-home sales presentation with a prominent national window replacement company. The salesperson brings a heat lamp, an infrared meter, and a slick sales pitch: *"Your original wood windows are leaking all your heat. For just \$26,500, we can tear them out and install our high-efficiency vinyl replacement windows. They'll pay for themselves in energy savings in five years."*

The homeowner is staring down a massive financial commitment. But before signing a contract for \$26,500, the homeowner needs to understand the thermodynamic realities of historic windows, building physics, and the low-cost alternatives that window replacement companies will never mention.`;

const new3 = `## The 80/10 Capital Equation: High-Performance Storms vs. Replacement Quotes

Homeowners living in classic bungalows, Victorians, and mid-century homes across Chicago, Milwaukee, Minneapolis, and Des Moines face an aggressive sales pitch: spend $25,000 to $35,000 replacing original windows, or endure freezing drafts and soaring winter gas bills.

### 1. The 80/10 Rule of Window Physics
Extensive field testing by the Pacific Northwest National Laboratory (PNNL) proves that homeowners do not need to spend five figures to achieve thermal comfort:
- **80% Performance at 10% Cost:** Adding an engineered, AERC-rated Low-E storm window over an existing single-pane window drops the overall assembly U-factor from U-1.10 down to **U-0.30 to U-0.34**—virtually identical to brand-new $1,000 double-pane vinyl replacement windows.
- **The Capital Differential:** Equipping 20 windows with Low-E exterior storm windows costs **$3,600 to $5,800 installed**—compared to **$22,000 to $32,000** for full-frame window replacements.
- **Preservation of Old-Growth Lumber:** Original pre-1950s wood window frames were milled from dense, rot-resistant old-growth heartwood that will last another 100 years if maintained. Replacing them with hollow vinyl units discards irreplaceable architectural timber for plastic frames that warp and fail within 20 years.`;

robustReplace(f3, old3, new3);

// -----------------------------------------------------------------------------
// 4. barndominium-post-frame.md
// -----------------------------------------------------------------------------
const f4 = path.join(contentDir, 'barndominium-post-frame.md');
const old4 = `## Dawn on a Rural Acreage

It is late January in east-central Iowa. Dawn breaks over a 10-acre rural parcel, and the red bar stops at a brutal -14°F. 

On the open section of the acreage stands a newly constructed 40x60-foot building. From the road, it looks like a sleek modern residence: matte-black ribbed steel siding, an expansive front porch supported by cedar timber posts, and an engineered standing-seam metal roof. It is a "barndominium"—a post-frame structural shell converted into a luxury residential home.

Inside the living space, however, the homeowner is fighting a quiet structural disaster. 

The homeowner had opted for an open-concept great room with 18-foot vaulted ceilings, framed with heavy timber purlins and steel scissor trusses. But walking into the center of the room, a rhythmic *tap... tap... tap...* echoes off the concrete floor. 

Looking up, water is dripping steadily from the vaulted tongue-and-groove pine ceiling. In the master closet along the exterior wall, green mold is blooming across the baseboards, and a cold draft blows across the floor like an open refrigerator door.

The homeowner calls the post-frame builder, who suggests: *"Just run a couple of space heaters and crank the dehumidifier. It's just a little metal sweating."*

It is not "a little sweating." It is a catastrophic building science failure caused by applying agricultural pole-barn construction methods to a high-moisture residential occupancy.`;

const new4 = `## The Capital Dilemma: The $60/Sq. Ft. Shell Myth vs. Turnkey Midwest Living Costs

Post-frame construction ("barndominiums") is marketed across rural Midwest acreages as a revolutionary way to build a custom home for "$60 to $80 per square foot." While that price accurately covers an agricultural storage shell, turning a steel pole barn into a safe, code-compliant, and durable residential home requires a much different capital budget:

### 1. The Bare Shell vs. Turnkey Reality
- **The $55 to $75/Sq. Ft. Structural Shell:** Covers laminated structural posts, clear-span steel roof trusses, 29-gauge metal siding and roofing, basic vinyl windows, and concrete pier footings. (This leaves an unconditioned, dirt-floor agricultural barn).
- **The $145 to $195/Sq. Ft. Finished Living Quarters:** Turning that shell into a home requires sub-slab continuous R-10 insulation, frost-depth perimeter thermal breaks, interior stud framing, electrical, plumbing, cold-climate heat pump mechanicals, drywall, interior finishes, and engineered condensation-control insulation.
- **The Real Cost:** A 2,400 sq. ft. finished barndominium costs **$340,000 to $460,000 turnkey**—delivering roughly 15% to 25% savings over conventional stick-built custom homes, rather than the fictional 60% discounts promised online.

### 2. The #1 Structural Risk: Building an Agricultural Envelope for Residential Moisture
Agricultural barns house tractors and hay; they generate zero interior moisture. Residential homes house families who generate **25 to 40 pounds of water vapor daily** through cooking, bathing, and respiration. If a post-frame builder applies agricultural construction details to a residential barndominium, interior humidity contacts sub-zero exterior metal sheeting, causing catastrophic ceiling rain and structural framing rot.`;

robustReplace(f4, old4, new4);

// -----------------------------------------------------------------------------
// 5. energy-hikes.md
// -----------------------------------------------------------------------------
const f5 = path.join(contentDir, 'energy-hikes.md');
const old5 = `## Sub-Freezing Nights

It is 2:00 AM in early February. A biting wind sweeps across the Midwestern prairie, and the red bar stops at 4°F.

Inside a split-level home built in 1978, the furnace kicks on with an aggressive hum. It has been running every twelve minutes for the past six hours. In the hallway, the digital thermostat is set to 68°F, but sitting in the living room feels like an icebox. The air is drafty, the hardwood floors are freezing, and the ceiling feels miles away.

Two weeks later, the utility bill arrives: **\$412 for natural gas and electricity—a 35% jump over the previous winter.**

Panic sets in. The homeowner assumes the culprit is clear: the original double-hung wood windows. The glass feels ice-cold to the touch, and standing near them reveals a noticeable draft. 

Within days, a local replacement window salesman is sitting at the kitchen table with an iPad and a laser measuring tape: *"Your windows are bleeding money. For just \$24,000, we can replace all 18 openings with our custom triple-pane argon-filled units. You'll cut your heating bill in half."*

The homeowner is on the verge of signing. But before writing a \$24,000 check, they need to know the engineering truth: **Replacing windows is almost certainly the worst financial investment you can make to lower your winter energy bill.**`;

const new5 = `## The Capital Allocation Hierarchy: Why $20,000 on Windows Fails the Payback Test

When winter natural gas tariffs and electric heating rates spike across the Midwest, homeowners look for ways to cut utility costs. Window replacement companies aggressively pitch $20,000 to $30,000 contracts, claiming new windows will slash energy bills in half. Building science thermodynamics proves this is one of the worst capital investments a homeowner can make:

### 1. The Capital Payback Reality Check
- **The $25,000 Window Investment:** Delivers an annual heating energy savings of roughly **$250 to $450 per year**. The simple payback period spans **40 to 60 years**—exceeding the 20-year lifespan of insulated glass seals.
- **The $2,500 Air-Sealing & Attic Insulation Alternative:** Sealing attic bypasses and basement rim joists with expanding foam and blowing R-60 cellulose cuts winter heating bills by **$350 to $650 per year**. The simple payback period is **2 to 4 years**!
- **The Capital Allocation Rule:** Before spending $25,000 on windows, invest $3,000 to $5,000 in comprehensive envelope air-sealing and mechanical duct sealing. You achieve double the energy savings at one-fifth the capital expenditure.`;

robustReplace(f5, old5, new5);
