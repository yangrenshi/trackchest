# Changelog - TrackChest

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
