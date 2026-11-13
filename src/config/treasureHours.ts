export interface TreasureWaveConfig {
  wave: number;
  dateStr: string;
  startDate: string; // YYYY-MM-DD
  nextInfo: string;
  multiplierText: string;
  oddsText: string;
  badge: string;
}

export const TREASURE_WAVES: TreasureWaveConfig[] = [
  {
    wave: 1,
    dateStr: "Saturday, Nov 14",
    startDate: "2026-11-14",
    nextInfo: "Nov 21 (2x)",
    multiplierText: "1.5x drops",
    oddsText: "1 in 91,667",
    badge: "1.5x Boost",
  },
  {
    wave: 2,
    dateStr: "Saturday, Nov 21",
    startDate: "2026-11-21",
    nextInfo: "Nov 28 (2x)",
    multiplierText: "2.0x drops",
    oddsText: "1 in 68,750",
    badge: "2.0x Boost",
  },
  {
    wave: 3,
    dateStr: "Saturday, Nov 28",
    startDate: "2026-11-28",
    nextInfo: "Season Finale",
    multiplierText: "2.0x drops",
    oddsText: "1 in 68,750",
    badge: "2.0x Boost",
  },
];

export interface TreasureBannerState {
  status: "upcoming" | "live" | "ended";
  mainText: string;
  badgeText: string;
}

/**
 * 根据传入日期自动判断三态：
 * 1. 14 日 00:00 前：Wave 1: Starts Saturday, Nov 14 • 1.5x drops
 * 2. 14 日当天（00:00 - 23:59:59）：Wave 1 is live — 1.5x drops (1 in 91,667)
 * 3. 结束后变灰：Wave 1 ended — next: Nov 21 (2x)
 * 4. 三波（14 / 21 / 28 日）共用此套自适应逻辑
 */
export function getTreasureBannerState(date: Date = new Date()): TreasureBannerState {
  // 提取本地与 UTC 的日期字符串 YYYY-MM-DD
  const localYear = date.getFullYear();
  const localMonth = String(date.getMonth() + 1).padStart(2, "0");
  const localDay = String(date.getDate()).padStart(2, "0");
  const localDateStr = `${localYear}-${localMonth}-${localDay}`;

  const utcYear = date.getUTCFullYear();
  const utcMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const utcDay = String(date.getUTCDate()).padStart(2, "0");
  const utcDateStr = `${utcYear}-${utcMonth}-${utcDay}`;

  // 1. 先检查当前日期是否恰好落在某一波次（本地或 UTC 任一满足即算 Live）
  for (const w of TREASURE_WAVES) {
    if (localDateStr === w.startDate || utcDateStr === w.startDate) {
      return {
        status: "live",
        mainText: `Wave ${w.wave} is live — ${w.multiplierText} (${w.oddsText})`,
        badgeText: `LIVE • ${w.multiplierText.toUpperCase()}`,
      };
    }
  }

  // 2. 检查 Wave 1 之前 (早于 2026-11-14)
  if (localDateStr < TREASURE_WAVES[0].startDate && utcDateStr < TREASURE_WAVES[0].startDate) {
    const w1 = TREASURE_WAVES[0];
    return {
      status: "upcoming",
      mainText: `Wave 1: Starts ${w1.dateStr} • ${w1.multiplierText}`,
      badgeText: w1.badge,
    };
  }

  // 3. 检查 Wave 1 结束 ~ Wave 2 开始前
  if (localDateStr < TREASURE_WAVES[1].startDate) {
    return {
      status: "ended",
      mainText: `Wave 1 ended — next: ${TREASURE_WAVES[0].nextInfo}`,
      badgeText: "Wave 1 Ended",
    };
  }

  // 4. 检查 Wave 2 结束 ~ Wave 3 开始前
  if (localDateStr < TREASURE_WAVES[2].startDate) {
    return {
      status: "ended",
      mainText: `Wave 2 ended — next: ${TREASURE_WAVES[1].nextInfo}`,
      badgeText: "Wave 2 Ended",
    };
  }

  // 5. Wave 3 结束之后
  return {
    status: "ended",
    mainText: "Wave 3 ended — Treasure Hours concluded (season ends Dec 4–5)",
    badgeText: "Concluded",
  };
}
