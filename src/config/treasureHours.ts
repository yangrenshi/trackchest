export interface TreasureWaveConfig {
  wave: number;
  dateStr: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
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
    endDate: "2026-11-14",
    nextInfo: "Nov 21 (2x)",
    multiplierText: "1.5x drops",
    oddsText: "1 in 91,667",
    badge: "1.5x Boost",
  },
  {
    wave: 2,
    dateStr: "Saturday, Nov 21",
    startDate: "2026-11-21",
    endDate: "2026-11-21",
    nextInfo: "Nov 28 (2x)",
    multiplierText: "2.0x drops",
    oddsText: "1 in 68,750",
    badge: "2.0x Boost",
  },
  {
    wave: 3,
    dateStr: "Saturday, Nov 28",
    startDate: "2026-11-28",
    endDate: "2026-11-28",
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
 * startDate <= today <= endDate 为 live，之后的判断顺延：
 * 1. 14 日 00:00 前：Wave 1: Starts Saturday, Nov 14 • 1.5x drops
 * 2. 14 日当天 (startDate <= today <= endDate)：Wave 1 is live — 1.5x drops (1 in 91,667)
 * 3. 结束后变灰 (today > w1.endDate && today < w2.startDate)：Wave 1 ended — next: Nov 21 (2x)
 * 4. 三波（14 / 21 / 28 日）共用此套自适应逻辑
 * 5. 28 日后 (today > w3.endDate)：Treasure Hours concluded — season ends Dec 4–5 (badge: Concluded)
 */
export function getTreasureBannerState(date: Date = new Date()): TreasureBannerState {
  // 提取传入日期的本地与 UTC 日期字符串 YYYY-MM-DD
  const localYear = date.getFullYear();
  const localMonth = String(date.getMonth() + 1).padStart(2, "0");
  const localDay = String(date.getDate()).padStart(2, "0");
  const localDateStr = `${localYear}-${localMonth}-${localDay}`;

  const utcYear = date.getUTCFullYear();
  const utcMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const utcDay = String(date.getUTCDate()).padStart(2, "0");
  const utcDateStr = `${utcYear}-${utcMonth}-${utcDay}`;

  // 1. 检查各波次是否正在进行 (startDate <= today <= endDate)
  // 本地日期或 UTC 日期任一处于窗口期即认定为 Live
  for (const w of TREASURE_WAVES) {
    const isLocalLive = localDateStr >= w.startDate && localDateStr <= w.endDate;
    const isUtcLive = utcDateStr >= w.startDate && utcDateStr <= w.endDate;
    if (isLocalLive || isUtcLive) {
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

  // 3. 检查 Wave 1 结束 ~ Wave 2 开始前 (2026-11-15 至 2026-11-20)
  if (localDateStr < TREASURE_WAVES[1].startDate) {
    return {
      status: "ended",
      mainText: `Wave 1 ended — next: ${TREASURE_WAVES[0].nextInfo}`,
      badgeText: "Wave 1 Ended",
    };
  }

  // 4. 检查 Wave 2 结束 ~ Wave 3 开始前 (2026-11-22 至 2026-11-27)
  if (localDateStr < TREASURE_WAVES[2].startDate) {
    return {
      status: "ended",
      mainText: `Wave 2 ended — next: ${TREASURE_WAVES[1].nextInfo}`,
      badgeText: "Wave 2 Ended",
    };
  }

  // 5. Wave 3 结束之后 (2026-11-29 及以后)
  return {
    status: "ended",
    mainText: "Treasure Hours concluded — season ends Dec 4–5",
    badgeText: "Concluded",
  };
}
