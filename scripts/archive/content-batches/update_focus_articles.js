const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\Dylen\\Desktop\\AEC\\Midwest';

// -----------------------------------------------------------------------------
// 1. UPDATE content/icf-basements-walls.md
// -----------------------------------------------------------------------------
const icfPath = path.join(rootDir, 'content', 'icf-basements-walls.md');
let icfContent = fs.readFileSync(icfPath, 'utf8');

// Normalize line breaks for replacement
const normalizeBreaks = str => str.replace(/\r\n/g, '\n').trim();

// Add the Cost Section after "## Why an ICF Basement Outperforms a Standard Poured Concrete Foundation"
const costSection = `## ICF Foundation Cost vs. Standard Poured Concrete: The Real Midwest Price Breakdown

For homeowners and general contractors evaluating bids, the most critical decision factor is the true **icf foundation cost** compared to conventional poured concrete. Aggregator estimates online often quote misleading national averages that omit cold-climate frost footing depths, regional pump truck rates, and necessary interior finishing trades. 

In the Midwest (Climate Zones 5 through 7), foundation walls must reach 8 to 9 feet in height to provide full-headroom basements below 4- to 5-foot frost lines. When comparing apples-to-apples installation costs across Illinois, Wisconsin, Minnesota, Iowa, and Indiana, the upfront bid price and the net finished price tell two very different stories.

### 1. Upfront Wall Area Cost: ICF vs. Standard Poured Walls

When reviewing initial foundation bids, ICF carries an apparent premium of **$4.00 to $7.00 per square foot of vertical wall area**:

* **Standard 8-Inch Poured Concrete Wall:** **$14.00 to $17.50 per sq. ft.** of wall area. This covers wooden form rental, standard steel ties, 3,000 PSI ready-mix concrete, basic Grade 60 rebar, crew placement labor, form stripping, and basic solvent spray dampproofing. For a typical 2,000 sq. ft. home footprint with 1,400 sq. ft. of foundation wall area, a bare poured basement costs between **$19,600 and $24,500**.
* **Monolithic 8-Inch Core ICF Wall (Continuous R-24):** **$18.50 to $24.00 per sq. ft.** of wall area. This includes interlocking Type II expanded polystyrene (EPS) blocks, heavy-gauge polypropylene web ties at 8 inches on center, engineered Grade 60 horizontal and vertical reinforcement (per ACI 318 / IRC R404.1.3), concrete boom pump placement, pencil-vibrator consolidation, and alignment bracing rental. For that same 1,400 sq. ft. foundation wall perimeter, an ICF foundation costs between **$25,900 and $33,600**.

At first glance, the **cost of icf foundation** installation appears to be an upfront premium of **$6,300 to $9,100**. However, evaluating an ICF foundation solely on initial concrete contractor bids is a fundamental accounting error.

### 2. The Net Cost Equalizer: The Secondary Trades ICF Eliminates

In Climate Zones 5 through 7, building energy codes (2021/2024 IECC Section R402) mandate that finished basement walls achieve a minimum of **R-15 continuous insulation or R-19 cavity insulation**. A standard bare concrete wall cannot be legally finished or occupied as living space without adding a secondary interior insulated wall assembly.

Because ICF blocks feature integrated high-density polypropylene fastening webs spaced every 8 inches on center, drywall screws directly into the foam forms. An **insulated concrete forms basement** completely eliminates the need for four costly interior framing and insulation trades:

> ### The Turnkey Finishing Credit (What ICF Replaces)
>
> | Eliminated Trade / Scope | Conventional Poured Wall Requirement | Material & Subcontractor Cost Saved |
> | :--- | :--- | :--- |
> | **Interior Perimeter Framing** | 2x4 SPF wood studs @ 16" O.C., treated bottom plate, top plate, fireblocking | **$2.50 to $3.50 / sq. ft.** |
> | **Continuous Cavity Insulation** | R-15 to R-21 high-density fiberglass batts or Rockwool mineral wool | **$1.80 to $2.40 / sq. ft.** |
> | **Vapor Retarder & Air Sealing** | Smart vapor retarder (Intello/Membrain), acoustic sealant, can foam at rim | **$0.75 to $1.10 / sq. ft.** |
> | **Fastening Backers & Furring** | Electrical shallow boxes, furring strips, drywall shims | **$0.40 to $0.60 / sq. ft.** |
> | **TOTAL FINISHING TRADE SAVINGS:** | *(Required on every standard poured wall)* | **$5.45 to $7.60 / sq. ft.** |

When you calculate the total "ready-for-drywall" envelope, the financial equation flips:

$$\\text{Net ICF Premium} = (\\text{ICF Wall Cost: } \\$21.25/\\text{sq.ft.}) - (\\text{Poured Wall: } \\$15.75/\\text{sq.ft.} + \\text{Framing/Insulation: } \\$6.50/\\text{sq.ft.}) = -\\$1.00/\\text{sq.ft.}$$

On a custom build or finished basement plan, an ICF foundation costs virtually the same—and frequently less—than paying a concrete crew to pour bare walls, followed weeks later by a framing crew and an insulation crew building wood walls inside a damp concrete box.

### 3. Lifetime Operating Economics & HVAC Downsizing Payback

Beyond turnkey construction parity, an ICF foundation delivers permanent operating returns from day one:

1. **Downsized HVAC Capacity ($1,200 to $2,500 Equipment Savings):** Because continuous dual-EPS eliminates basement perimeter thermal loss, an ACCA Manual J load calculation typically shows a 0.5- to 1.0-ton (6,000 to 12,000 BTU/hr) reduction in whole-home heating design load. This allows builders to specify a smaller, less expensive heat pump or condensing furnace.
2. **Annual Heating & Cooling Savings ($450 to $850 / Year):** In Upper Midwest winters, an ICF basement retains heat via its concrete thermal flywheel ($c_p = 0.88 \\text{ kJ/kg}\\cdot\\text{K}$). Heating bills drop by 25% to 40% compared to a conventionally framed basement with leaky rim joists and thermal-bridged wood studs.
3. **Zero Risk of Hidden Moisture Remediation ($8,000 to $25,000 Risk Avoidance):** Standard stud-and-fiberglass basement retrofits suffer average lifespans of 7 to 12 years before hidden condensation rots the bottom plates or breeds black mold behind the poly vapor barrier. ICF contains zero organic, rot-susceptible cellulose within the wall assembly.

### 4. Comprehensive Cost Benchmark: Poured Concrete vs. ICF Foundations

The following matrix details realistic 2026 installed costs for a 2,000 sq. ft. home (1,400 sq. ft. of 9-foot foundation wall area) in the Midwest:

| Foundation System | Wall Assembly Description | Installed Wall Cost ($/Sq.Ft.) | Base Foundation Total (1,400 Sq.Ft.) | Interior Framing & Insulation Added | Turnkey "Ready for Drywall" Total | 10-Year Cumulative Energy Cost |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Standard Poured Concrete (Unfinished)** | 8" 3,000 PSI concrete, stripped forms, bare interior (R-1.1) | $15.50 | $21,700 | $0 (Unfinished storage only) | **$21,700** | $14,200 (Extreme heat loss) |
| **Poured Concrete + Interior Stud Wall** | 8" concrete + 2x4 wood studs + R-15 batts + poly sheet | $15.50 | $21,700 | $9,100 ($6.50/sq.ft. installed) | **$30,800** | $8,600 (Thermal bridging) |
| **Monolithic ICF Foundation (R-24+)** | 8" concrete core + dual 2.625" Type II EPS (R-24 continuous) | $21.00 | $29,400 | **$0** (Drywall screws directly to webs) | **$29,400** | **$4,800** (Monolithic thermal mass) |

*Notes: Pricing based on RSMeans 2026 Midwest regional cost index and verified contractor bids across Chicago, Minneapolis, Milwaukee, and Des Moines. Excludes excavation, footings, and flat slab, which are functionally identical across both systems.*

---
`;

const anchorTarget = `6. **Engineered Insulated Concrete Form Foundations:** When engineering **insulated concrete form foundations**, the concrete core hydrates within an insulated thermal jacket, eliminating curing microcracks and boosting compressive load resistance by up to 50% compared to standard poured walls.

---`;

if (normalizeBreaks(icfContent).includes(normalizeBreaks(anchorTarget))) {
  const icfNormalized = icfContent.replace(/\r\n/g, '\n');
  const replacementTarget = normalizeBreaks(anchorTarget) + '\n\n' + normalizeBreaks(costSection);
  const replaced = icfNormalized.replace(normalizeBreaks(anchorTarget), replacementTarget);
  icfContent = replaced.replace(/\n/g, '\r\n');
  console.log('✓ Successfully inserted ICF cost section.');
  fs.writeFileSync(icfPath, icfContent, 'utf8');
  console.log('✓ Wrote updated content/icf-basements-walls.md');
} else {
  console.warn('⚠ Could not find anchorTarget for ICF cost section.');
}
