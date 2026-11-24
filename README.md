# TrackChest (trackchest.com)

> **Fortnite Chest Tracker & Counter — Free Online Chest Counter**
> Track every chest you open in Fortnite. Free online companion counter for solos or squads with zero logins, no Epic Games account required, offline LocalStorage persistence, and multi-tier chest categorization.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🎯 Target Keyword & SEO Focus
- **Primary Keyword**: `chest tracker fortnite` (KD 19.4)
- **Secondary Keywords**: `fortnite chest tracker`, `chest counter fortnite`, `pirate token odds`, `how to check how many chests you opened in fortnite`
- **Domain**: `https://www.trackchest.com`

---

## ✨ Features
- **Zero-Latency Tap Counter**: Big tap buttons engineered for single-thumb mobile operation while gaming.
- **No Epic Login Needed**: 100% client-side LocalStorage. Zero credential risk or ban possibilities.
- **Multi-Chest Classification**:
  - Standard Golden Chests
  - Rare / Mythic Blue Chests
  - Sprite / Elemental Chests
  - Pirate Token Chests & Buried Treasure
  - Faction Vault Bunkers
  - Cash Registers & Safes
- **Data Metrics**:
  - `This Match` Session Counter
  - `Today Total` Daily Counter
  - `Daily Best` Record
  - `All-Time` Career Totals
- **Game Feedback**:
  - Milestone unlock alerts (10, 25, 50, 100 chests) with vibration feedback.
  - Undo stack (`Ctrl+Z`) and new match reset without losing daily streaks.
  - JSON data export and restore backup.
- **SEO & Information Gain**:
  - Valid `WebApplication` and `FAQPage` JSON-LD structured data.
  - 1000+ words of in-depth SSR knowledge text covering chest spawn mechanics and drop odds.
  - Native comparison table optimized for GEO engines (ChatGPT, Perplexity, Claude).
  - Epic Games Fan Content Policy compliance disclaimer.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build
```bash
npm run build
```

---

## 🛠️ Internal QA & Testing Parameters

For internal staging, testing, and continuous deployment validation, the top event banner supports simulated Eastern Time date injection via URL query string:
- `?date=YYYY-MM-DD`: Simulates `America/New_York` noon time (`T12:00:00-05:00`), allowing QA to inspect banner states without altering system clocks:
  - `?date=2026-11-28`: Simulates Wave 3 active double-odds state (`Wave 3 active — 2x Treasure Hours`).
  - `?date=2026-11-29`: Simulates Wave 3 concluded state (`Wave 3 ended — Treasure Hours complete`).
  - `?date=2026-12-05`: Simulates Chapter 7 concluded state (`Season ended — Chapter 7 complete`).

*Note: This query parameter is reserved strictly for internal QA, manual verification, and preview diagnostics.*

---

## 📄 Legal & Fan Content Disclaimer
TrackChest is an independent community fan utility. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic Games, Inc.
