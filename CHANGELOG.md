# Changelog - TrackChest

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
