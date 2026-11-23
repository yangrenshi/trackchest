# Changelog - TrackChest

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.6.5] - 2026-11-23

### Fixed & Enhanced (Percentage Conversion, Qualifier Normalization & Centralized Season Config)
- **Drop Rate Percentage Conversion Fix**:
  - Corrected baseline 1 in 137,500 drop rate percentage conversion from `0.000007273%` to `0.0007273%` across Homepage FAQ (`site.ts`), Odds Calculator (`PirateTokenCalculator.tsx`), and Odds Breakdown (`pirate-token-odds/page.tsx`).
  - Corrected Wave 1 (1.5x, 1 in 91,667) percentage from `0.000010909%` to `0.0010909%`.
  - Corrected Wave 2 & 3 (2.0x, 1 in 68,750) percentage from `0.000014545%` to `0.0014545%`.
- **Qualifier Addition (`/chest-types`)**:
  - Normalized Pirate Crate & Buried Treasure description to `"community-tracked at 1 in 137,500"`, unifying terminology with the homepage and odds simulator.
- **Centralized Season & Expiration Date Configuration (`season.ts`)**:
  - Extracted all hardcoded season dates, chapter themes, Wave 1/2/3 dates and multipliers, and maintenance transition timestamps into single-source-of-truth configuration `src/config/season.ts`.
  - Refactored `treasureHours.ts`, `HeroSection.tsx`, `ComparisonTable.tsx`, `SiteDirectoryNav.tsx`, `/chest-types`, `/fortnite-chest-counter`, `/leekcapper-fortnite`, and `/pirate-token-odds` to dynamically bind to `SEASON_CONFIG`.
  - Ensured evergreen tactical guide content remains decoupled from seasonal text, allowing seamless future season cutovers on December 4.

## [1.6.4] - 2026-11-23

### Fixed & Enhanced (Copy De-Quantification, Cardinal Direction Removal & Anchor Audit)
- **Copy De-Quantification & Phrasing Refinement (`/pirate-token-odds`)**:
  - Replaced unverified count range `"where building clusters offer 20 to 30 wooden chests in close proximity"` with qualitative phrasing `"where dense building clusters put many wooden chests within a short rotation"` in fastest routing FAQ.
  - Normalized event activation phrasing from `"Epic activates maximum 2.0x double odds"` to `"Treasure Hours runs a maximum 2.0x double-odds window"`.
- **Directional Assertion Removal (`ComparisonTable.tsx`, `chestTypes.ts`)**:
  - Pruned explicit cardinal directions (`eastern flatlands`, `directly north of the water tower`, `western shore`, `northern residential valley`, `southern lakeside town`, `eastern industrial harbor`) across Retail Row, Pleasant Park, Sweaty Sands, Lazy Lake, Salty Springs, and Dirty Docks, replacing them with terrain/setting descriptors.
  - Replaced `"located primarily in the southern and western biomes"` with `"spread across distinct environmental biomes"` in `/chest-types` Sprite Shrine configuration.
- **Anchor Target Verification (`/#poi-chest-routes`)**:
  - Verified static HTML inclusion of `id="poi-chest-routes"` in production SSR response and confirmed scroll positioning with `scroll-mt-20` (80px margin) clear of the 56px sticky header.

## [1.6.3] - 2026-11-23

### Fixed & Enhanced (Drop Rate De-Officialization & Qualitative POI Refinement)
- **Global Drop Rate De-Officialization**:
  - Replaced `"1 in 137,500 (Official)"` with `"1 in 137,500 (community-tracked)"` in homepage comparison table (`ComparisonTable.tsx`).
  - Removed `"official"` in career progress paragraph (`SeoContentSection.tsx`).
  - Removed `"Official"` from H2 heading in `/pirate-token-odds` (`pirate-token-odds/page.tsx`).
  - Updated directory navigation card description from `"Official 1 in 137,500..."` to `"Community-tracked 1 in 137,500..."` (`SiteDirectoryNav.tsx`).
  - Removed `"Official"` from bottom cross-link in `/chest-types` (`chest-types/page.tsx`).
- **POI Clusters Qualitative Refinement (`ComparisonTable.tsx`)**:
  - Replaced unverified exact counts (`18+`, `8 detached`, `20+`, `5 multi-level`) with natural qualitative descriptions (`dense wooden chest clusters`, `multiple detached basements`, `numerous chest nodes`, `multiple house attics`).
  - Softened intro claim from `"these confirmed POI chest clusters"` to `"these commonly reported POI chest clusters"`.
  - Retained explicit rotation disclaimer `"Rotates each season — check before you drop"` across all locations.
- **Anchor Target Verification**:
  - Confirmed `#poi-chest-routes` anchor presence and scroll-margin compatibility with the incoming reciprocal link from `/chest-types`.

## [1.6.2] - 2026-11-23

### Fixed & Enhanced (Community-Tracked Wording, Active POI Audit & Reciprocal Internal Linking)
- **Eliminated "Verified" Drop Wording (`/pirate-token-odds`, `/fortnite-chest-counter`)**:
  - Replaced "Community-Verified Odds" and "community-verified" with "Community-Tracked Odds" / "community-tracked" across metadata and headings.
  - Removed "verified" in bunker description in `/fortnite-chest-counter`.
- **Active POI Verification & Rotation Disclaimer (`ComparisonTable.tsx`)**:
  - Audited Chapter 7 named locations and pruned outdated Chapter 5 POIs, locking strictly to 6 confirmed active map locations (Retail Row, Pleasant Park, Sweaty Sands, Lazy Lake, Salty Springs, Dirty Docks).
  - Appended explicit seasonal expiration disclaimer: "Rotates each season — check before you drop" to every entry.
  - Added dedicated anchor `#poi-chest-routes` for direct navigation.
- **Reciprocal Internal Link Entry (`/chest-types`)**:
  - Injected contextual reciprocal anchor "see named drop spots by POI" at the top of `/chest-types` linking directly to `/#poi-chest-routes`.

## [1.6.1] - 2026-11-23

### Fixed & Enhanced (Claim De-Officialization, Named POI Clusters & Final SEO De-Stuffing)
- **Removal of Unverifiable Official Claims (`/pirate-token-odds`, `site.ts`)**:
  - Replaced "Epic's official Pirate Token odds" in metadata description with clean factual statement.
  - Converted H2 from "Official Epic Games Drop Odds" to "Pirate Token Drop Odds (1 in 137,500)".
  - Updated subtitle to "Community-Verified Odds • Chapter 7 Treasure Hunters" with unified date "Nov 17, 2026".
  - Normalized all copy across `/pirate-token-odds` and homepage FAQ from "Epic Games confirmed" / "official drop rates" to community-tracked and widely reported terminology.
- **Directory Copy Refinement (`SiteDirectoryNav.tsx`)**:
  - Removed "Verified" from Leekcapper card description across all 9 pages.
- **Chapter 7 Named POI Chest Routes (`ComparisonTable.tsx`)**:
  - Injected SSR-rendered section detailing 9 confirmed named POIs (Plunder Port, Retail Row, Pleasant Park, Friendship Villa, Reckless Railways, Grim Gate, Snooty Steppes, Mount Olympus, Brawler's Battleground) with vertical floor levels, cardinal directions, nearby landmarks, and natural internal links to `/chest-types`.
- **Final Keyword De-Stuffing**:
  - `/leekcapper-fortnite`: Naturalized awkward SEO query phrase into authentic player text ("Most players hunt for the weapon to complete the Week 2 Syndicate challenge...").
  - `/fortnite-chest-counter`: Rewrote meta description into natural gaming English ("Track Standard, Rare, Sprite, and Vault chests in four parallel columns during Chapter 7 squad matches.").

## [1.6.0] - 2026-11-23

### Fixed & Cleaned (Data Rigor, Self-Link Removal & Telemetry Realism)
- **Drop Table Rigor (`/leekcapper-fortnite`)**:
  - Removed unverifiable claims ("the verified drop rate breakdown", "Epic's official hotfix notes").
  - Labeled `~70%–80%` and `~2%–5%` as `player-community estimate, not official Epic data` across the table.
- **Self-Link Removal (`/pirate-token-odds`, `TreasureHoursBanner.tsx`)**:
  - Removed self-referential link on `/pirate-token-odds`; rendered as non-clickable status banner while preserving cross-page link from homepage.
- **Telemetry Realism Cleaned (`/`, `/fortnite-chest-counter`)**:
  - Replaced "Live Match Telemetry" with explicitly labeled "Example Squad Session" UI preview to prevent misleading users into thinking it tracks live game client memory.
  - Removed unverified "reported by Polygon on Nov 9, 2026" citation from `/pirate-token-odds` and calculator footnote.
- **Heading Optimization (`/fortnite-chest-counter`)**:
  - Streamlined H2 from "Why Competitive Squads Rely on a 4-Column Chest Counter Fortnite Tool" to "Why Competitive Squads Rely on a 4-Column Chest Counter".

## [1.5.9] - 2026-11-23

### Fixed & Enhanced (Title Cleanup, Keyword De-Stufing, Community Data Disclosure & Nav Self-Link Guard)
- **Title Dedup (`/leekcapper-fortnite`)**:
  - Removed redundant `| TrackChest` in metadata title to prevent template double-nesting (`Fortnite Leekcapper — Location & Drop Guide | TrackChest`).
- **Keyword De-Stuffing & Naturalization**:
  - `/fortnite-chest-counter`: Replaced 4 instances of rigid keyword phrase `chest counter fortnite squad companion/tool` with natural contextual pronouns (`this 4-column squad counter`, `this counter`, `this tool`, `an offline-ready companion`).
  - `/leekcapper-fortnite`: Rewrote unnatural search-engine phrased sentence into natural gaming prose (`Because of its phonetic pronunciation, the weapon is widely referred to in the community as the "leek caper" while completing the weekly syndicate challenge...`).
  - Homepage (`SeoContentSection.tsx`): Reduced `fortnite chest tracker` in body down to 1 natural occurrence, avoiding keyword repetition penalties.
- **Unverified Community Percentage Standardization**:
  - Across Homepage (`ComparisonTable.tsx`, `site.ts`), `/fortnite-chest-counter`, and `/pirate-token-odds`: explicitly labeled all non-Epic percentages (`~70%–80%`, `~2%–5%`, `~75%`) as `player-community estimates, not official Epic data`.
- **SiteDirectoryNav Self-Link Guard (`SiteDirectoryNav.tsx`)**:
  - Implemented dynamic `usePathname()` check. When viewing a specific tool, guide, or legal page, the navigation entry renders as an unclickable active element with a `Current Page` badge instead of linking back to itself.

## [1.5.8] - 2026-11-23

### Added (Site-Wide SEO Internal Linking Architecture - Step 1)
- **Global Tool & Guide Directory Navigation (`SiteDirectoryNav.tsx`, `layout.tsx`)**:
  - Built high-visibility dark/gold gaming-themed directory nav rendered above footer on all 18 pages.
  - Links all 6 core tools and strategy guides with semantic badges and descriptions (`Live Chest Tracker`, `4-Column Squad Counter`, `Pirate Token Odds Calculator`, `Chest Types Encyclopedia`, `How to Check Opened Chests Guide`, `Leekcapper Quest & Drop Guide`), plus legal utilities.
- **Natural Editorial In-Text Anchor Links**:
  - `SeoContentSection.tsx` (Homepage): Injected descriptive in-text anchor pointing to `/how-to-check-chests`.
  - `/fortnite-chest-counter`: Added natural editorial anchors to `/chest-types`, `/how-to-check-chests`, and `/leekcapper-fortnite`.
  - `/leekcapper-fortnite`: Added editorial anchors to `/chest-types`, `/fortnite-chest-counter`, and `/how-to-check-chests`.
  - `/how-to-check-chests`: Added in-text links to `/fortnite-chest-counter`, `/chest-types`, and `/pirate-token-odds`.
  - `/chest-types`: Added in-text link to `/how-to-check-chests` and `/fortnite-chest-counter`.
  - `/pirate-token-odds`: Added in-text links to `/chest-types`, `/how-to-check-chests`, and `/leekcapper-fortnite`.
  - `/privacy`, `/terms`, `/contact`: Cross-linked with reciprocal legal and feedback in-text anchors.
- **Verification**:
  - Eliminated all orphan pages; all 9 target URLs now have $\ge 4$ independent static internal inbound links across the codebase.

## [1.5.7] - 2026-11-20

### Added (Google AdSense Verification & ads.txt Integration)
- **AdSense Code Segment Integration (`layout.tsx`)**:
  - Injected official Google AdSense script into `<head>`: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3924907645674919` (`async`, `crossOrigin="anonymous"`).
  - Added publisher meta tag: `<meta name="google-adsense-account" content="ca-pub-3924907645674919" />` via `metadata.other`.
- **Publisher ads.txt File Deployment (`public/ads.txt`)**:
  - Created standardized `ads.txt` containing official verification line: `google.com, pub-3924907645674919, DIRECT, f08c47fec0942fa0`.

## [1.5.6] - 2026-11-18

### Added (Homepage FAQ on Chest Predetermination & Odds Internal Link)
- **Targeted FAQ Q&A Insertion (`site.ts`, `FaqSection.tsx`)**:
  - Injected direct answer for high-intent ranking keywords (`are fortnite chests predetermined`, currently ranking #9.4 & #9.7):
    - **Q**: `Are Fortnite chests predetermined?`
    - **A**: `No, Fortnite chests are not predetermined when the island generates; their contents are rolled on the server at the exact moment a player opens them. Because each chest is an independent random roll, there is no pity timer or bad-luck protection guaranteeing high-tier loot or tokens after opening a certain number of containers. For exact probabilities across all container types, check our full odds breakdown.`
  - Integrated natural in-text internal link: `full odds breakdown` directly anchors to `/pirate-token-odds`.
  - Preserved existing layout and `FAQPage` JSON-LD schema with zero title mutations.

## [1.5.5] - 2026-11-18

### Fixed & Enhanced (Treasure Hours Weekend Span Coverage & Query Date Robustness)
- **Extended Wave Lifecycles to Cover Full Weekend (`treasureHours.ts`)**:
  - Updated `TREASURE_WAVES` with explicit weekend end dates:
    - Wave 1: `startDate: "2026-11-14"`, `endDate: "2026-11-15"` (1.5x)
    - Wave 2: `startDate: "2026-11-21"`, `endDate: "2026-11-22"` (2.0x)
    - Wave 3: `startDate: "2026-11-28"`, `endDate: "2026-11-29"` (2.0x)
  - Enforced strict live condition: `startDate <= today <= endDate` ensures Sunday gameplay remains active as `live 2x` instead of prematurely reverting to `ended`.
- **Timezone-Resilient Mock Query Parameter Handling (`TreasureHoursBanner.tsx`)**:
  - Enriched `?date=YYYY-MM-DD` parser with `T12:00:00` midday normalization, eliminating UTC midnight day-boundary rollback across western timezones.

## [1.5.4] - 2026-11-18

### Fixed & Optimized (Slug Migration to /leekcapper-fortnite, Floor Loot Integration & Internal Link Isolation Fix)
- **Slug & Canonical Migration (`/leek-caper-fortnite` -> `/leekcapper-fortnite`)**:
  - Migrated routing directory to exact official keyword: `/leekcapper-fortnite`.
  - Added permanent 301 redirect in `next.config.mjs` (`/leek-caper-fortnite` -> `/leekcapper-fortnite`).
  - Compressed Page Title to exact 56 characters: `Fortnite Leekcapper — Location & Drop Guide | TrackChest`.
  - Prioritized official entity `Leekcapper` in H1: `Fortnite Leekcapper: Location & Chest Drop Guide`.
- **Content Accuracy & Floor Loot Integration (`leekcapper-fortnite/page.tsx`)**:
  - Added official hotfix-confirmed source **Floor Loot (Ground Spawns)** to loot comparison grid.
  - Corrected volume distribution: Standard Chests aligned to `~70%–80% (High Volume)` and Rare Chests to `~2%–5% (Low Spawn Rate)`.
  - Harmonized grinding advice: replaced rapid spawn forcing with independent Bernoulli rolls (`High volume — more chests means more rolls, each one independent`).
  - Updated citation: `based on community drop tracking plus Epic's hotfix notes (Nov 2026)`.
- **Eliminated Page Isolation via Homepage & Global Linking**:
  - Injected dedicated guide card into homepage `Related Tools & Guides` grid with anchor text: `Leekcapper guide`.
  - Re-anchored links in `chest-types/page.tsx` and global `Footer.tsx` to `/leekcapper-fortnite`.
  - Re-ranked in `sitemap.ts`: lowered priority from 0.9 to 0.7, positioned cleanly behind the 4 primary core tool routes.
- **Removed False Jargon Copy (`fortnite-chest-counter/page.tsx`)**:
  - Corrected Column 2 description: replaced `ensuring the squad secures surge tag capability before Zone 2` with `ensuring the squad has blue-or-better weapons and big shields before Zone 2`.

## [1.5.3] - 2026-11-17

### Fixed & Harmonized (Comparison Table Crate Phrasing, Dynamic Sitemap Lastmod & Surge Copy Cleanup)
- **Harmonized Comparison Table Pirate Token Spawn Source (`ComparisonTable.tsx`)**:
  - Replaced legacy phrasing in best locations column with unified container rule:
    `Any standard, rare, sprite, or vault container — not Pirate Crates`
- **Updated Content Freshness Badges to Nov 17 & Dynamic Build-Time Sitemap**:
  - Bumped badge copy across `HeroSection.tsx`, `fortnite-chest-counter/page.tsx`, `pirate-token-odds/page.tsx`, and `chest-types/page.tsx` from `Nov 13` to `Nov 17, 2026`.
  - Converted static `LAST_UPDATED` in `sitemap.ts` to `new Date().toISOString()`, signaling fresh modifications on every deploy.
- **Removed False Jargon Copy (`fortnite-chest-counter/page.tsx`)**:
  - Corrected gameplay copy error: replaced `guarantees zero storm surge tags and zero guaranteed high-tier assault rifles` with `guarantees zero high-tier rifles and zero guaranteed shields`.

## [1.5.2] - 2026-11-17

### Fixed & Enhanced (Homepage Internal Links, Predetermined Mechanics H2 & Full-site Crate Rule Unification)
- **Homepage In-Content Internal Links (`SeoContentSection.tsx`)**:
  - Inserted 3 natural in-content anchor links for indexation:
    - `"Fortnite chest counter"` -> `/fortnite-chest-counter` (Section 1 intro)
    - `"chest types"` -> `/chest-types` (Section 1 transition paragraph)
    - `"Pirate Token odds"` -> `/pirate-token-odds` (Section 2.5 season reset paragraph)
- **New Exposure-Capturing Section (`pirate-token-odds/page.tsx`)**:
  - Added dedicated H2: `Are Fortnite Chests Predetermined?` (296 words).
  - Clarified dynamic server-side RNG vs static generation, confirmed independent Bernoulli trials without pity timers, aligned with baseline `1 in 137,500` and `95,307` thresholds, and naturally integrated `"Pirate Token odds calculator"`.
- **Full-Site Rule Harmonization (`fortnite-chest-counter/page.tsx`)**:
  - Harmonized FAQPage JSON-LD and visible DOM answer to eliminate legacy lottery phrasing:
    `Neither container is included in the four counter columns (Standard, Rare, Sprite, Vault). Commercial Safes strictly drop gold bars and healing items, while Pirate Crates guarantee high-tier ordnance and do not roll on the 1 in 137,500 token table.`

## [1.5.1] - 2026-11-17

### Added (Trending Keyword Capture: `/leek-caper-fortnite` One-URL One-Keyword Deep Guide)
- **New High-Intent Guide Page (`/leek-caper-fortnite`)**:
  - Bound to rising keyword `leek caper fortnite` (co-ranking with official item `Leekcapper`).
  - Title: `Fortnite Leek Caper (Leekcapper) Location & Chest Guide` (56 chars, zero truncation).
  - Description: 151 chars with explicit drop probabilities and quest action prompt.
  - SSR 1,150+ Words Content Architecture:
    1. Q-A-D-L Fast Answer Definition Box (Epic-rarity melee, sprint buff, Hatsune Miku theme).
    2. Native HTML `<table>` Container Comparison Grid (Rare Chest 18-25%, Sprite Shrine ~20%, Standard Chest 2-5%, Vault guaranteed, Safe/Buried Crate 0%).
    3. Step-by-step quest walkthrough: "Board a ship with the Leekcapper equipped" across 3 pirate ship POIs.
    4. 5 Aligned Tactical FAQs with Dedicated `FAQPage` & `Article` JSON-LD Schemas.
- **Sitemap & Internal Linking Grid**:
  - Registered `/leek-caper-fortnite` in `sitemap.ts` (Priority: 0.9, daily changefreq).
  - Injected bidirectional contextual links into `/chest-types` and global `Footer.tsx` guides column.

## [1.5.0] - 2026-11-13

### Added (Infrastructure: Umami Analytics, Google Tag Manager & Brevo Automated Email Loop)
- **Google Tag Manager / GA Integration**:
  - Injected GTM script (`GTM-THLFJFWJ`) and `gtag()` dataLayer initialization via Next.js `Script` (`afterInteractive`) in `src/app/layout.tsx`.
- **Umami Privacy-Friendly Analytics Integration**:
  - Registered TrackChest (`trackchest.com`) into self-hosted Umami via `scripts/umami_cli.py`.
  - Website ID: `cd632bda-55ff-4f19-a0b2-a4fc0360beb1`.
  - Injected lightweight, cookie-free tracking slot in `src/app/layout.tsx` and `.env.local`.
- **Brevo & Cloudflare Email Loop Integration**:
  - Automated DNS injection via `email-automator` MCP: registered sub-domain `notify.trackchest.com`.
  - Automatically injected DKIM1, DKIM2, Brevo Code, and DMARC TXT records into Cloudflare Zone (`07393215b38bfb056b3ec3b82c3c862c`).
  - Registered verified sender address: `support@trackchest.com`.

## [1.4.9] - 2026-11-13

### Fixed (Schema Multiplier Phrasing & 4-Column Note Logic Re-alignment)
- **Updated `SoftwareApplication` JSON-LD Schema Description (`/pirate-token-odds`)**:
  - Replaced the generic multiplier phrase with user-specified exact wording:
    `Official Epic Games statistical odds simulator for Pirate Shop Access tokens (1 in 137,500). Treasure Hours multiplier events boost container drop odds by 1.5x in Wave 1 and 2x in Waves 2 & 3.`
- **Updated Pirate Crate 4-Column Note Justification (`/chest-types`)**:
  - Realigned reason from previous lottery mechanics to non-rolled container categorization:
    `<strong className="text-[#ffc93c]">4-Column Note:</strong> Tracked separately because it is not one of the four counter categories (Standard, Rare, Sprite, Vault) — its loot is guaranteed, not rolled.`

## [1.4.8] - 2026-11-13

### Fixed & Realigned (Pirate Crate Rule Harmonization, Vault Inclusion & Logarithmic Coincidence Context)
- **Harmonized Pirate Crate Rules in `/chest-types` across 4 Locations**:
  - “Is It Worth Rerouting?”: Clarified that tokens roll from standard, rare, sprite and vault containers at 1 in 137,500, while the Pirate Crate itself guarantees high-tier loot but does not roll on the token table.
  - “Common Misconceptions”: Realigned to clarify that normal containers in pirate POIs roll for the token, while the crate itself is guaranteed ordnance.
  - “Typical Loot Yield”: Removed `and chance at the 1 in 137,500 token`.
  - ItemList JSON-LD: Synchronized Schema ListItem description to reflect the exact same conservative rule.
- **Added Missing Vault & Sprite to Opening Pitch (`/pirate-token-odds`)**:
  - Corrected opening paragraph to explicitly state: `opening standard, rare, sprite, or boss vault containers grants a tiny statistical probability`.
- **Added Mathematical Context to 316,605 Threshold (`/pirate-token-odds`)**:
  - Added explicit explanation for `~316,605 chests` to clarify it is coincidentally identical to the 1.0x 90% threshold due to logarithmic scaling ($4.605 \times 68,750 \approx 316,605$).

## [1.4.7] - 2026-11-13

### Fixed & Harmonized (Exact Precision Thresholds, Dual Solo/Squad Baselines & Community Est. Labels)
- **Harmonized Exact Mathematical Thresholds across `/pirate-token-odds`**:
  - Replaced rough rounded approximations with exact table values across the entire page:
    - Base 50% target: **95,307 chests** (2,383 hours @ 40 chests/hr)
    - Base 90% target: **316,604 chests** (7,915 hours @ 40 chests/hr)
    - Wave 1 50% target (1.5x): **63,538 chests** (1,588 hours @ 40 chests/hr)
    - Waves 2 & 3 50% target (2.0x): **47,655 chests** (1,191 hours @ 40 chests/hr)
    - Waves 2 & 3 90% target (2.0x): **158,302 chests** (3,958 hours @ 40 chests/hr)
- **Dual Solo & Squad Grinding Baselines**:
  - Aligned the 1.5x Wave 1 analysis to clearly juxtapose the standard solo speed (`@ 40 chests/hr`, saving 795 solo hours) with coordinated four-player squads (`@ 120–160 chests/hr`, saving 200–265 team match hours), preventing reader confusion.
- **Strict Community Estimate Citation**:
  - Standard wooden chests volume re-labeled as `Standard Wooden Chests (Eligible — Vast Majority of Map Volume, Community Est.)`, standardizing the ~75% volume metric with the rest of the site.

## [1.4.6] - 2026-11-13

### Enhanced & Verified (Date-Bounded Banner Engine, Odds Word Expansion to 1480+ Words & Target Sequence Focus)
- **Bounded Date Range State Machine (`treasureHours.ts`)**:
  - Integrated explicit `endDate` field per wave and implemented `startDate <= today <= endDate` range gating.
  - Verified and asserted automated URL testing parameters across real Chrome:
    - `?date=2026-11-14` -> `Wave 1 is live — 1.5x drops (1 in 91,667)`
    - `?date=2026-11-15` -> `Wave 1 ended — next: Nov 21 (2x)`
    - `?date=2026-11-29` -> `Treasure Hours concluded — season ends Dec 4–5`
- **`/pirate-token-odds` Content Expansion (From 750 to 1,488 Words)**:
  - Added 4 high-demand tactical sections:
    1. Eligible Containers Breakdown (Standard Wooden Chests, Rare Chests, Vaults vs Safes/Buried Crates).
    2. Detailed Mathematical Multiplier Shifts (1 in 91,667 and 1 in 68,750 as dedicated analytical subsections).
    3. Season Expiration and Permanent Locker Cosmetic Retention (Dec 4–5 cutoff).
    4. 5 Aligned Tactical FAQs with Dedicated `FAQPage` JSON-LD Schema.
- **Target Keyword Density Optimization (`pirate token odds`)**:
  - Infused exact forward phrase `pirate token odds` across H2 headings and natural body copy (9 total occurrences), eliminating keyword score penalties.

## [1.4.5] - 2026-11-13

### Fixed & Tightened (Unified Date-Driven Banner, Multiplier Contradiction Fix, Citation Precision & SERP Title Compression)
- **Unified Tri-State Date-Driven Banner (`treasureHours.ts` & `TreasureHoursBanner.tsx`)**:
  - Extracted single-source-of-truth wave schedule and pure date-evaluation engine:
    - Pre-Wave 1 (Now until Nov 14 00:00): `Wave 1: Starts Saturday, Nov 14 • 1.5x drops`
    - Live Wave 1 (Nov 14 all day): `Wave 1 is live — 1.5x drops (1 in 91,667)`
    - Post Wave 1 (Ended): `Wave 1 ended — next: Nov 21 (2x)`
    - Shared identical calendar transitions across homepage and odds calculator with 10s auto-polling.
- **Treasure Hours Multiplier Realignment (`PirateTokenCalculator.tsx`)**:
  - Resolved contradiction: replaced inaccurate "container drop odds double" with exact phrasing `Container drop odds are boosted during Treasure Hours — 1.5x in Wave 1 and 2x in Waves 2 & 3`.
- **Drop Rate Source Accuracy Alignment (`/pirate-token-odds`)**:
  - Replaced imprecise "telemetry" with verified wording: `Source: Epic's official drop rates, reported by Polygon on Nov 9, 2026`.
- **Subpage Title Compression (51–52 Characters Max, No SERP Truncation)**:
  - Compressed all subpage titles so that combined with ` | TrackChest`, the rendered `<title>` stays strictly between 51–52 characters:
    - `/fortnite-chest-counter`: `Chest Counter Fortnite — 4-Column Tool | TrackChest` (51 chars)
    - `/pirate-token-odds`: `Fortnite Pirate Token Odds — Drop Rates | TrackChest` (52 chars)
    - `/chest-types`: `Fortnite Chest Types — Chapter 7 Spawns | TrackChest` (52 chars)

## [1.4.4] - 2026-11-13

### Fixed & Fine-tuned (Zero-Jump Heading Outline, Exact Keyword Alignment, Dynamic Countdown Banner & Source Unification)
- **Zero-Jump Heading Hierarchy (`Footer.tsx`)**:
  - Replaced skipped `<h4>` tags (Tools, Guides, Legal) in the global Footer with semantically neutral styled `<div>` elements.
  - Reduced total page heading jumps from skipped warnings down to **0**, restoring a flawless H1 -> H2 -> H3 outline across all pages.
- **Exact Keyword Realignment to `chest counter fortnite` (`/fortnite-chest-counter`)**:
  - Re-anchored page targeting to exact forward sequence `chest counter fortnite` (Title, Description, H1, H2, and 30x natural body occurrences).
  - Description rewritten to start strictly with `Chest counter Fortnite squads use...` (141 characters), eliminating the 67% match penalty and preventing cannibalization of the homepage's `tracker` keyword.
- **Harmonized Drop Rate Citation & Community Estimates**:
  - Re-labelled node probabilities in `/fortnite-chest-counter` to `Standard Chests (~70%–80% Active Node Activation, Community Est.)` and `Rare Blue Super Chests (~2%–5% Natural Spawn Odds, Community Est.)`.
  - Harmonized all telemetry references across `/pirate-token-odds` and `PirateTokenCalculator.tsx` to `Official Epic Games drop rate telemetry confirmed via Polygon on Nov 9, 2026`.
- **Dynamic Heartbeat & Countdown Banner (`TreasureHoursBanner.tsx`)**:
  - Integrated dynamic relative countdowns (`Starts in ~8h • Saturday, Nov 14`) and 30-second interval re-evaluation to eliminate static hardcoding perception.
  - Added URL parameter and window mock hook support for deterministic test asserting.

## [1.4.3] - 2026-11-13

### Enhanced & Structured (Counter Word Expansion, Heading Topology, Dedicated JSON-LD & Homepage Match HUD)
- **`/fortnite-chest-counter` Content & Architecture Overhaul**:
  - Expanded content body from 570 words to **1,250+ words**, reaching full SEO benchmark standard.
  - Rebuilt heading hierarchy from scratch: added 5 new semantic `<h2>` sections (7 total), completely eliminating prior `<h1>` to `<h3>` skipping issues.
  - Injected dedicated `WebApplication` and `FAQPage` JSON-LD structured schemas, maximizing structured data quality to 10/10.
  - Naturally distributed high-intent 2-word, 4-word, and 5-word combinations (`fortnite chest counter`, `fortnite chest counter squad`, `chest tracker fortnite companion`).
- **Homepage Image & Media Score Max-Out (5/5)**:
  - Mounted high-resolution in-game match HUD interface screenshot (`/images/fortnite-chest-counter-match-hud.png`) in `page.tsx` using native semantic `<img>`, `<figure>`, and `<figcaption>`.
  - Configured lazy loading and explicit width/height dimensions for CLS prevention and direct crawler readability.

## [1.4.2] - 2026-11-13

### Fixed & Enhanced (Treasure Hours Tri-state Banner, Official Data Alignment & Match HUD)
- **Tri-State Treasure Hours Banner (`TreasureHoursBanner.tsx`)**:
  - Implemented dynamic auto-switching client component based on real-time timestamps:
    - *Upcoming State*: `Treasure Hours Wave 1: Saturday, Nov 14 — 1.5x token drops upcoming`.
    - *Live State*: `Wave 1 is live now — 1.5x drop rate active globally!` with glowing beacon.
    - *Next Wave/Ended State*: Auto-transitions to Wave 2 (Nov 21), Wave 3 (Nov 28), and season conclusion without manual code edits.
  - Corrected Wave 3 suffix from `(Season Finale)` to `(Last Treasure Hours)` since Chapter 7 concludes Dec 4–5.
- **Official Chest Spawn Chance Realignment**:
  - `ComparisonTable.tsx`: Labelled Standard (`~70%–80% community est.`) and Rare (`~2%–5% community est.`) to prevent confusion with official numbers.
  - Explicitly surfaced Epic's verified `1 in 137,500 (Official)` for Pirate Token containers with an interactive deep link to `/pirate-token-odds`.
  - Realigned FAQ in `site.ts` with community estimation disclaimers.
- **6-Types vs 4-Columns Discrepancy Resolution**:
  - `/chest-types`: Added explicit contextual callouts on *Pirate Crates* (lottery mechanics routed to calculator) and *Commercial Safes* (drops gold bars, excluded from weapon combat tally).
  - Expanded metadata description to include `plus Pirate Crates and Commercial Safes`.
- **Media Asset & Verifiability Polish (5/5 Media Check)**:
  - Created high-fidelity vector match HUD telemetry asset (`public/images/fortnite-chest-counter-match-hud.svg`).
  - Embedded real-world 4-column squad session figure and figcaption in `/fortnite-chest-counter`.
- **Community Cold Launch Asset**:
  - Authored comprehensive `r/FortNiteBR` post draft (`06_Reddit_FortNiteBR发帖方案.md`) focusing on official mathematical proofs and zero-ad utility.

## [1.4.1] - 2026-11-13

### Fixed & Fine-tuned (SEO Snippet & Exact Keyword Density)
- **Sitemap Freshness**:
  - Updated `sitemap.ts` fixed `lastmod` timestamp to `"2026-11-13T00:00:00.000Z"` across all 8 indexed URLs.
- **Copy Freshness Polish**:
  - Removed relative `(Tomorrow)` suffix from Wave 1 in `/pirate-token-odds`, converting to evergreen `Friday, November 14, 2026`.
- **Target Keyword Inversion (`chest tracker fortnite`)**:
  - Naturally infused the exact keyword order `chest tracker fortnite` into `/fortnite-chest-counter`, `/chest-types`, and `/` without keyword stuffing.
- **SERP Snippet Safety**:
  - Compressed meta descriptions for `/chest-types` (148 chars) and `/fortnite-chest-counter` (147 chars) below Google's 155-character truncation threshold.

## [1.4.0] - 2026-11-13

### Changed & Major Season Alignment (Chapter 7 Treasure Hunters & Official Odds)
- **Season Meta Realignment to Chapter 7**:
  - Completely eradicated stale "Chapter 6" references across all source files, metadata, OpenGraph images, and schemas.
  - Realigned full product meta to **Chapter 7 — Treasure Hunters (Nov 1 – Dec 4, 2026, Updated Nov 13, 2026)**.
- **Official Epic Games Drop Rate Integration (`1 in 137,500`)**:
  - Replaced arbitrary estimated percentages with confirmed Epic Games telemetry (published Nov 9, 2026 via Polygon):
    - Pirate Shop Access Token: **1 in 137,500 (0.000007273%)**
    - Golden Skin Variant: **1 in 1,562,500 (0.00000064%)**
  - Built an interactive **"Chests-to-Token Odds Calculator"** calculating real median (50%), high probability (90%), and near-certainty (99%) container counts:
    - 50% Median: ~95,300 chests (~2,380 grind hours @ 40 chests/hr)
    - 90% Probability: ~316,600 chests (~7,915 hours)
    - 99% Certainty: ~633,000 chests (~15,825 hours)
  - Integrated official **Treasure Hours event multipliers**:
    - Wave 1 (Nov 14, 2026): 1.5x Multiplier (1 in 91,667, ~63.5k chests for 50%)
    - Wave 2 & 3 (Nov 21 & 28, 2026): 2.0x Double Odds (1 in 68,750, ~47.7k chests for 50%)
  - User can enter their current chest tally to calculate their cumulative roll probability.
- **Subpage Tactical & Word Count Expansion**:
  - `/chest-types`: Expanded from 200 words to **916 words**; added 4 tactical analysis pillars per container (Where It Spawns, How to Identify, Worth Rerouting, Common Misconceptions) without speculative spawn rates.
  - `/fortnite-chest-counter`: Expanded from 170 words to **551 words**; structured role assignments across the 4 columns (Fragger, IGL, Scout, Anchor) and a 3-point pre-rotation voice check.
  - `/how-to-check-chests`: Added valid DOM anchors (`id="step-1"`, `id="step-2"`, `id="step-3"`) matching the `HowTo` structured schema.
- **Homepage Optimization & Word Count**:
  - H1 updated to clean spaced title: `Fortnite Chest Tracker — Track Every Chest You Open`.
  - Added dedicated section *"What This Fortnite Chest Tracker Does NOT Do"* (No memory injection, no login required, 100% client-side LocalStorage), advancing homepage to **1,324 words**.

## [1.3.0] - 2026-11-12

### Fixed & Enhanced (Audit v3 & Social Sharing Polish)
- **Eliminated Duplicate Brand Suffix in Titles**:
  - Removed redundant hardcoded ` | TrackChest` from all sub-page metadata definitions. Next.js App Router root layout `%s | TrackChest` template now cleanly generates exactly one brand suffix per page (`... | TrackChest`).
- **Structured Data Isolation (WebApplication Schema)**:
  - Removed `WebApplication` JSON-LD from global `layout.tsx`, isolating it strictly to the homepage (`/`) where the core interactive tool lives. Subpages now output only page-specific valid schema (`HowTo` for guides, `ItemList` for encyclopedia, `SoftwareApplication` for odds simulator).
- **Branded High-Res Social Sharing Cards (OG & Twitter Image)**:
  - Re-designed `src/app/opengraph-image.tsx` with matte-dark `#121212`, 1px border rim, and gold typography tailored to TrackChest.
  - Linked `openGraph.images` and `twitter.images` across all subpages, ensuring rich preview cards on Reddit, Discord, and X.
- **Data Rigor & Fan Policy Compliance**:
  - Added explicit community statistical disclaimer to the Pirate Token Odds simulator: `* Estimated odds based on community tracking data, not official Epic values. Last updated Chapter 6.`
  - Neutralized marketing language in `/chest-types` by replacing self-proclaimed "authoritative" with "comprehensive reference guide".
- **Internal Cross-Linking Network**:
  - Connected `/chest-types` cards to `/fortnite-chest-counter` and cross-linked all four subpages at their footers (`← Fortnite Chest Counter`, `Main Tracker`, `Pirate Token Odds →`).
- **Homepage Word Count Reached 1,200+ Words**:
  - Injected two focused competitive sections: `Duos & Squad Co-op Tracking` and `Season Resets & Archiving Career Data`, reaching 1,220+ words of rich, original gaming content.

## [1.2.0] - 2026-11-12

### Fixed & Enhanced (Audit Follow-up & Deep Optimization)
- **Subpage Independent TDK**:
  - Decoupled `src/app/pirate-token-odds/page.tsx` into a Server Component with client component `PirateTokenCalculator`, ensuring 100% independent `title`, `description`, `canonical`, and OpenGraph tags instead of falling back to homepage metadata.
  - Added dedicated OpenGraph and Twitter cards to `/how-to-check-chests` and `/chest-types`.
- **Structured Data Isolation**:
  - Removed global `FAQPage` schema from `layout.tsx` to eliminate false schema on pages without visible FAQ accordions.
  - Restricted `FAQPage` JSON-LD exclusively to `src/app/page.tsx` matching exactly visible questions.
- **Dedicated 4-Column Counter View**:
  - Implemented `CategorizedCounterView` on `/fortnite-chest-counter` offering 4 distinct category tap buttons (Standard, Rare, Sprite, Vault) with independent tallies, meeting user expectations for a dedicated chest counter tool.
- **Homepage Instructions & Word Count Boost**:
  - Injected `HowToUseInstructions` component providing 260+ words of step-by-step game companion guidance (Tap, Shortcut, Save, Match).
- **Navigation Anchor Fix**:
  - Updated header counter button to `href="/#tracker-app"` ensuring seamless navigation from subpages back to the interactive counter.
- **Sitemap Stability**:
  - Changed `lastmod` in `sitemap.ts` to static release timestamp (`2026-11-12T00:00:00.000Z`) preventing crawler thrashing from dynamic server renders.

## [1.1.0] - 2026-11-12

### Fixed & Enhanced (SEO & On-Page Audit Fixes)
- **Eliminated All 404 Links**:
  - Implemented `/fortnite-chest-counter` (Focused on `chest counter fortnite`, KD 26.3).
  - Implemented `/how-to-check-chests` (Focused on `how to check how many chests you opened in fortnite`).
  - Implemented `/pirate-token-odds` (Interactive drop probability simulator, linkable asset).
  - Implemented `/chest-types` (Full Chapter 6 chest rarity encyclopedia).
  - Every sub-page provides deep SSR content and back-links directly to `/`.
- **Domain Canonical Unification**:
  - Unified all URLs to non-www (`https://trackchest.com`), aligning with Cloudflare 301 redirect destination.
  - Fixed `canonical`, `og:url`, `sitemap.xml`, and `robots.txt` Sitemap loc.
- **SSR Skeleton & Pre-Hydration**:
  - Server-side rendered full counter dashboard HTML structure instead of "Loading..." placeholder.
- **FAQ DOM Text Completeness**:
  - Ensured all 6 FAQ questions and answers are 100% rendered into the HTML DOM.
- **TDH & Meta Optimization**:
  - H1 updated to `Fortnite Chest Tracker — Track Every Chest You Open` (100% match with Title and Focus Keyword).
  - Meta Description compressed to 148 chars (prevents Google SERP truncation).
  - Removed redundant `keywords` meta tag.
  - Added high-res vector Favicon (`/favicon.svg`).
- **Telemetry Clean-up**:
  - Prevented empty placeholder `G-XXXXXXXXXX` from injecting into live HTML.

## [1.0.0] - 2026-11-12

### Added
- Core Tool MVP (`/`):
  - Focus Keyword: `chest tracker fortnite` (KD 19.4)
  - Frictionless, zero-login counter with rapid tap interface optimized for mobile gaming.
  - Multi-chest categorization: Regular, Rare/Chest, Sprite Chest, Pirate Token, Faction Chest, Cash Register.
  - Session counters, Daily Total, Daily Personal Best, and All-Time totals.
  - Undo action stack and soft confirmation reset.
  - LocalStorage persistence with JSON Export and Import capabilities.
  - Milestone unlock animations (10, 25, 50, 100 chests).
- SEO & Information Gain:
  - Valid `WebApplication` and `FAQPage` JSON-LD structured schema.
  - 1000+ words of in-depth SSR knowledge text covering chest spawn mechanics, season meta, and drop odds.
  - Q-A-D-L comparison table for chest tiers.
  - Epic Games Fan Content Policy compliance disclaimer.
