# Changelog - TrackChest

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
