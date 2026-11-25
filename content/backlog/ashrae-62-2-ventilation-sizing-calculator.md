---
title: "ASHRAE 62.2 Compliance: Continuous vs Intermittent Mechanical Ventilation CFM Sizing"
subtitle: "Forensic mechanical ventilation engineering, calculating total required airflow rates, blower door infiltration credits, and ERV/HRV run-time duty cycle multipliers."
category: "air-barriers"
layout: post
readTime: 14 min read
date: "2026-08-14"
author: "Midwest AEC Building Science Diagnostic Taskforce"
authorRole: "Forensic Hydronic, Envelope, and Geotechnical Engineering Group"
heroImage: "/images/heroes/ashrae-ventilation-calculator.png"
description: "Calculate required continuous and intermittent mechanical fresh air ventilation CFM under ASHRAE Standard 62.2. Master blower door infiltration credits."
summary: "An engineering-grade psychrometric and indoor air quality guide for Midwest energy auditors, HVAC contractors, and architects on sizing whole-building ventilation systems."
tags:
  - "Ventilation"
  - "Indoor Air Quality"
  - "ASHRAE 62.2"
  - "HVAC Sizing"
  - "Energy Efficiency"
---

# ASHRAE 62.2 Compliance: Continuous vs Intermittent Mechanical Ventilation CFM Sizing

In modern residential construction across Climate Zones 5A and 6A, building codes mandate continuous, verified envelope air tightness. Under the 2021 and 2024 International Energy Conservation Code (IECC Section R402.4), new homes must demonstrate an airtightness threshold of **less than 3.0 Air Changes per Hour at 50 Pascals (ACH50)**, with high-performance builds routinely achieving 0.5 to 1.5 ACH50.

While extreme airtightness slashes winter heating energy loss and prevents interstitial wall condensation, it eliminates the natural air leakage that historically purged indoor pollutants. 

Without controlled mechanical ventilation, carbon dioxide ($CO_2$), volatile organic compounds (VOCs off-gassed from paints, flooring, and cabinetry), particulate matter (PM2.5), and moisture vapor accumulate to toxic concentrations inside the living space.

To safeguard occupant health while preventing excessive energy penalties, the engineering community relies on **ASHRAE Standard 62.2 (Ventilation and Acceptable Indoor Air Quality in Residential Buildings)**. 

Designing an engineered ventilation system requires calculating total required airflow, taking proper credit for envelope air infiltration measured by calibrated blower door testing, and sizing continuous or intermittent Energy Recovery Ventilators (ERVs).

```
            ASHRAE 62.2 WHOLE-BUILDING VENTILATION EQUATION
            
     TOTAL VENTILATION AIRFLOW REQUIREMENT:
     Q_tot = 0.03 * A_floor + 7.5 * (N_br + 1)
     
     Where:
     * A_floor = Conditioned Floor Area (sq ft)   [Floor area factor: 0.03 CFM/sq ft]
     * N_br    = Number of Bedrooms (Occupants)   [Occupancy factor: 7.5 CFM/person]
     
     EXAMPLE: 2,500 sq ft Home with 3 Bedrooms
     -----------------------------------------
     Floor Area Component:   0.03 * 2,500 sq ft  =  75.0 CFM
     Occupancy Component:    7.5 * (3 + 1)       =  30.0 CFM
                                                   ---------
     TOTAL CONTINUOUS VENTILATION AIRFLOW (Q_tot) = 105.0 CFM!
     
     +---------------------------------------------------------------+
     | Deduct Infiltration Credit (from Blower Door CFM50 Test!)     |
     | - Calculate Q_inf using Weather & Shielding Factor (wsf)      |
     |                                                               |
     v                                                               |
     NET MECHANICAL VENTILATION RATE (Q_fan) = Sized for ERV or HRV! |
     +---------------------------------------------------------------+
```

---

## 1. Engineering Physics of Whole-Building Dilution Ventilation

ASHRAE Standard 62.2 establishes a mass-balance model to maintain indoor concentrations of common bio-effluents and volatile organic compounds below established thresholds of health concern.

### The Baseline Airflow Formulation
The fundamental equation for total required continuous ventilation rate ($Q_{\text{tot}}$) in residential dwellings is:

$$Q_{\text{tot}} = 0.03 \cdot A_{\text{floor}} + 7.5 \cdot (N_{\text{br}} + 1)$$

Where:
* $A_{\text{floor}}$ is the conditioned floor area of the residence, including finished basements (in square feet). The coefficient $0.03\text{ CFM/sq ft}$ accounts for background off-gassing from building materials and furnishings.
* $N_{\text{br}}$ is the number of bedrooms (with the assumed number of occupants defined as $N_{\text{br}} + 1$). The coefficient $7.5\text{ CFM per person}$ provides fresh oxygen and dilutes human metabolic carbon dioxide generation ($0.008\text{ to }0.012\text{ CFM of } CO_2\text{ per resting adult}$).

For a 3,000-square-foot home with 4 bedrooms:

$$Q_{\text{tot}} = (0.03 \cdot 3,000) + [7.5 \cdot (4 + 1)] = 90 + 37.5 = 127.5\text{ CFM}$$

The building requires a continuous fresh air exchange rate of **128 CFM (217 cubic meters per hour)**.

### The Infiltration Credit (Blower Door Interaction)
ASHRAE Standard 62.2 does not assume a house is a hermetic glass jar. Real buildings experience some background infiltration through microscopic envelope pores driven by wind pressure and indoor-outdoor temperature differentials.

To avoid over-ventilating a home (which wastes heating and cooling energy), the standard allows an **infiltration credit** ($Q_{\text{inf}}$) derived directly from a calibrated multipoint blower door depressurization test conforming to ASTM E779:

$$Q_{\text{inf}} = 0.052 \cdot Q_{50} \cdot wsf \cdot \left(\frac{H}{H_{\text{ref}}}\right)^z$$

Where:
* $Q_{50}$ is the measured airflow leakage rate at 50 Pascals depressurization (CFM50).
* $wsf$ is the local Weather and Shielding Factor tabulated in ASHRAE 62.2 based on local climate data (typically $0.21\text{ to }0.28$ across Midwest cities like Chicago, Minneapolis, and Detroit).
* $H$ is the vertical height of the conditioned pressure boundary.

The **required mechanical fan airflow** ($Q_{\text{fan}}$) installed by the HVAC contractor is the difference between total required airflow and the effective background infiltration:

$$Q_{\text{fan}} = Q_{\text{tot}} - Q_{\text{inf}}$$

*In high-performance Passive House or tight modern builds where $ACH50 < 1.0$, $Q_{\text{inf}}$ is negligible, meaning 100 percent of the ventilation load must be delivered mechanically ($Q_{\text{fan}} \approx Q_{\text{tot}}$).*

---

## 2. Continuous vs Intermittent Ventilation: The Run-Time Multiplier

Mechanical ventilation does not have to run 24 hours a day. In many installations, contractors configure ventilation systems (such as high-efficiency bathroom exhaust fans or central supply fans) to run on timed intervals (e.g., 20 minutes on, 40 minutes off per hour).

However, because pollutants continue accumulating during the off-cycle, **intermittent systems cannot simply deliver the same average CFM**. 

To achieve equivalent average pollutant exposure over a 24-hour period, ASHRAE 62.2 applies a non-linear mathematical penalty called the **intermittent ventilation effectiveness factor ($\epsilon$)**:

$$Q_{\text{intermittent}} = \frac{Q_{\text{fan}}}{f \cdot \epsilon}$$

Where:
* $f$ is the fractional run-time ($f = \frac{T_{\text{on}}}{T_{\text{cycle}}}$).
* $\epsilon$ is the ventilation effectiveness factor derived from the off-time duration.

```
            INTERMITTENT RUN-TIME MULTIPLIER (ASHRAE TABLE 4.2)
            
   Fractional Run-Time (f)     Cycle Time (T)     Multiplier (1 / f*eps)
   -----------------------     --------------     ----------------------
   1.00 (Continuous 24/7)      Always ON          1.00  (e.g., 60 CFM)
   0.66 (40 min per hour)      60 minutes         1.55  (e.g., 93 CFM)
   0.50 (30 min per hour)      60 minutes         2.10  (e.g., 126 CFM)
   0.33 (20 min per hour)      60 minutes         3.25  (e.g., 195 CFM)
   0.25 (15 min per hour)      60 minutes         4.50  (e.g., 270 CFM)
```

If a home requires 60 CFM of continuous fresh air, but the contractor sets a timer to run the fan for only **15 minutes per hour ($f = 0.25$)**, the fan cannot simply be sized to $60 \times 4 = 240\text{ CFM}$. 

Under Table 4.2, the intermittent multiplier is **4.50**, requiring a fan capacity of:

$$Q_{\text{intermittent}} = 60\text{ CFM} \cdot 4.50 = 270\text{ CFM}$$

Running an intermittent fan at 270 CFM causes excessive duct noise, drafts, and pressure imbalances. Consequently, **continuous balanced mechanical ventilation (ERV/HRV) is significantly superior to intermittent exhaust strategies**.

---

## 3. Why Aggregators and Standard HVAC Sizing Fail

Mainstream contractor blogs make severe calculation errors that violate code:

1. **Relying Exclusively on "Rule of Thumb" Air Changes per Hour:** HVAC salespeople often tell homeowners to size ventilation for "0.35 ACH." Sizing a large 4,000-square-foot home with 2 occupants for 0.35 ACH requires 186 CFM, which dramatically over-ventilates the home. In sub-zero Midwest winters, dumping 186 CFM of dry outdoor air into the house drops indoor relative humidity to 15 percent, causes extreme static electricity, and adds hundreds of dollars in heating costs.
2. **Ignoring Mechanical System Balance (Negative vs Positive Pressure):** Low-bid contractors frequently install single exhaust fans running continuously to meet code. Running a continuous 100-CFM exhaust fan in a tight house without dedicated fresh air intake depressurizes the building (-5 to -15 Pascals). This negative pressure sucks radon gas out of the foundation, pulls car exhaust from attached garages, and can cause atmospheric gas water heaters to backdraft deadly carbon monoxide ($CO$) into the home.
3. **Failing to Measure Duct Static Pressure in the Field:** Sizing an ERV on paper for 100 CFM means nothing if the ductwork is installed with restrictive 6-inch flex duct and poor exterior hood dampers. Unmeasured static pressure often drops actual field airflow by **40 to 60 percent**, failing code compliance inspections.

---

## 4. Engineering-Grade Ventilation Specification

```
                  BALANCED ERV SYSTEM CONFIGURATION
                  
   Living Areas / Bedrooms                     Bathrooms / Kitchen / Laundry
   +==========================+               +==========================+
   | Fresh, Filtered Air      |               | Stale, Humid, Odorous    |
   | Distributed to Supply    |               | Air Continuously Sucked  |
   | (Living / Bedrooms)      |               | Out to Recovery Core!    |
   +------------+-------------+               +------------+-------------+
                ^                                          |
                |                                          v
       +--------+------------------------------------------+--------+
       | Energy Recovery Ventilator (ERV) Core                     |
       | Heat Exchange: 75% to 82% Sensible Effectiveness (SRE)    |
       | Latent Moisture Exchange: Latent Recovery Ratio (LRR 0.65)|
       +--------+------------------------------------------+--------+
                ^                                          |
                | Fresh Outdoor Intake                     v Exhaust Outdoors
   ===================================================================
     Exterior Wall: Minimum 10-Foot Separation Between Hoods!
```

### Installation Standard (ASHRAE 62.2 & 2024 IECC Compliance)
1. **System Type Specification (Balanced ERV vs HRV):**
   * In Climate Zones 4A and 5A (humid Midwest summers and cold winters), specify an **Energy Recovery Ventilator (ERV)** equipped with a polymer enthalpy membrane core (such as Panasonic Intelli-Balance 100 or Broan AI Series). The enthalpy core transfers both sensible heat and latent water vapor between air streams, preventing summer humidity spikes while retaining indoor moisture during winter.
   * In extreme northern Climate Zone 6A (northern Minnesota, Wisconsin, Upper Michigan), a **Heat Recovery Ventilator (HRV)** is acceptable if dedicated summer dehumidification is present.
2. **Dedicated Ductwork Standard:**
   * Fully ducted independent systems are the professional benchmark.
   * Pull stale, moisture-laden exhaust air from bathrooms, powder rooms, laundry rooms, and the kitchen perimeter (never over the range; kitchen ranges require independent through-roof venting per IRC M1503).
   * Supply fresh, tempered, MERV 13-filtered air directly to the master bedroom, secondary bedrooms, and primary living areas.
   * Size all rigid galvanized metal ductwork to maintain air velocity below **600 to 700 feet per minute (FPM)** to eliminate audible air noise, with total system static pressure restricted to **less than 0.20 inches water gauge**.
3. **Field Commissioning and Balancing Protocol:**
   * Commissioning is mandatory. After installation, verify and balance airflows using an analog differential pressure gauge or calibrated airflow hood (balometer).
   * Adjust supply and exhaust blower speeds until the supply airflow ($Q_{\text{supply}}$) matches the exhaust airflow ($Q_{\text{exhaust}}$) within **plus or minus 5 percent**, establishing true neutral atmospheric pressure balance within the building envelope.

---

## 5. Cost Schedule: Balanced ERV vs Ineffective Exhaust Fans

| Ventilation System Architecture | Equipment & Material Cost | Turnkey Contractor Installed | Energy & IAQ Performance |
|:---|:---|:---|:---|
| **Exhaust-Only Continuous Bath Fan (Panasonic DC)** | $140 - $220 | $450 - $850 | Complies with code, but creates negative pressure & drafts |
| **Balanced Central ERV System (Fully Ducted, 100 CFM)** | $1,250 - $1,850 | $3,200 - $5,400 | Gold standard; neutral pressure; 80% heat recovery |
| **Blower Door Test & ASHRAE Sizing Calculation** | Equipment fee | $350 - $650 (Audit fee) | Certified blower door test, wsf calculation, code report |
| **High-Efficiency MERV 13 Filter Upgrades (Annual)** | $45 - $85 / year | DIY maintenance | Captures 90% of PM2.5 particles, wildfire smoke, pollen |

---

## 6. Building Code Citations and Regulatory Mandates

* **ASHRAE Standard 62.2-2022:** Ventilation and Acceptable Indoor Air Quality in Residential Buildings.
* **2024 International Energy Conservation Code (IECC) Section R403.6:** Mechanical ventilation; mandates whole-house mechanical ventilation systems complying with IRC Section M1505 or ASHRAE 62.2.
* **International Residential Code (IRC) Section M1505.4.3:** Continuous whole-house mechanical ventilation system airflow rate table and calculation methodology.
* **ASTM E779:** Standard Test Method for Determining Air Leakage Rate by Fan Pressurization (Blower Door Test Protocol).
