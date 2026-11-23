import { SEASON_CONFIG, type TreasureWave } from "./season";

export type TreasureWaveConfig = TreasureWave;

export const TREASURE_WAVES: TreasureWaveConfig[] = SEASON_CONFIG.waves;

export interface TreasureBannerState {
  status: "upcoming" | "live" | "ended";
  mainText: string;
  badgeText: string;
}

/**
 * 根据传入日期自动判断三态：
 * startDate <= today <= endDate 为 live，之后的判断顺延：
 * 1. Wave 1 开始前：Wave 1: Starts {w1.dateStr} • {w1.multiplierText}
 * 2. 活动期间 (startDate <= today <= endDate)：Wave {n} is live — {multiplierText} ({oddsText})
 * 3. 结束后等待下一波：Wave {n} ended — next: {nextInfo}
 * 4. 最后一波结束：Treasure Hours concluded — season ends {seasonEndDateDetailed}
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

  // 2. 检查 Wave 1 之前
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
    mainText: `Treasure Hours concluded — season ends ${SEASON_CONFIG.endMaintenanceDate}`,
    badgeText: "Concluded",
  };
}
