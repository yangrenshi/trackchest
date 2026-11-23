export interface TreasureWave {
  wave: number;
  dateStr: string; // e.g., "Saturday, Nov 14"
  fullDateStr: string; // e.g., "Saturday, November 14, 2026"
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  nextInfo: string; // e.g., "Nov 21 (2x)"
  multiplier: number; // e.g., 1.5
  multiplierText: string; // e.g., "1.5x drops"
  oddsText: string; // e.g., "1 in 91,667"
  oddsPercentage: string; // e.g., "0.0010909%"
  confidenceThreshold50: string; // e.g., "63,538 chests"
  badge: string; // e.g., "1.5x Boost"
}

export interface SeasonConfig {
  chapter: string; // e.g., "Chapter 7"
  theme: string; // e.g., "Treasure Hunters"
  name: string; // e.g., "Chapter 7 Treasure Hunters"
  shortDateRange: string; // e.g., "Nov 1 – Dec 4, 2026"
  fullDateRange: string; // e.g., "November 1 to December 4–5, 2026"
  endDate: string; // e.g., "December 4, 2026"
  endMaintenanceDate: string; // e.g., "December 4–5, 2026"
  nextChapter: string; // e.g., "Chapter 8"
  lastUpdated: string; // e.g., "Nov 17, 2026"
  waves: TreasureWave[];
}

export const SEASON_CONFIG: SeasonConfig = {
  chapter: "Chapter 7",
  theme: "Treasure Hunters",
  name: "Chapter 7 Treasure Hunters",
  shortDateRange: "Nov 1 – Dec 4, 2026",
  fullDateRange: "November 1 to December 4–5, 2026",
  endDate: "December 4, 2026",
  endMaintenanceDate: "December 4–5, 2026",
  nextChapter: "Chapter 8",
  lastUpdated: "Nov 17, 2026",
  waves: [
    {
      wave: 1,
      dateStr: "Saturday, Nov 14",
      fullDateStr: "Saturday, November 14, 2026",
      startDate: "2026-11-14",
      endDate: "2026-11-15",
      nextInfo: "Nov 21 (2x)",
      multiplier: 1.5,
      multiplierText: "1.5x drops",
      oddsText: "1 in 91,667",
      oddsPercentage: "0.0010909%",
      confidenceThreshold50: "63,538 chests",
      badge: "1.5x Boost",
    },
    {
      wave: 2,
      dateStr: "Saturday, Nov 21",
      fullDateStr: "Saturday, November 21, 2026",
      startDate: "2026-11-21",
      endDate: "2026-11-22",
      nextInfo: "Nov 28 (2x)",
      multiplier: 2.0,
      multiplierText: "2.0x drops",
      oddsText: "1 in 68,750",
      oddsPercentage: "0.0014545%",
      confidenceThreshold50: "47,655 chests",
      badge: "2.0x Boost",
    },
    {
      wave: 3,
      dateStr: "Saturday, Nov 28",
      fullDateStr: "Saturday, November 28, 2026",
      startDate: "2026-11-28",
      endDate: "2026-11-29",
      nextInfo: "Season Finale",
      multiplier: 2.0,
      multiplierText: "2.0x drops",
      oddsText: "1 in 68,750",
      oddsPercentage: "0.0014545%",
      confidenceThreshold50: "47,655 chests",
      badge: "2.0x Boost",
    },
  ],
};
