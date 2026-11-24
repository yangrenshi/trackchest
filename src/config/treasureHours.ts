import { SEASON_CONFIG, type TreasureWave } from "./season";

export type TreasureWaveConfig = TreasureWave;

export const TREASURE_WAVES: TreasureWaveConfig[] = SEASON_CONFIG.waves;

export interface TreasureBannerState {
  status: "upcoming" | "live" | "ended";
  mainText: string;
  badgeText: string;
}

export function getTreasureBannerState(date: Date = new Date()): TreasureBannerState {
  const localYear = date.getFullYear();
  const localMonth = String(date.getMonth() + 1).padStart(2, "0");
  const localDay = String(date.getDate()).padStart(2, "0");
  const localDateStr = `${localYear}-${localMonth}-${localDay}`;

  const utcYear = date.getUTCFullYear();
  const utcMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const utcDay = String(date.getUTCDate()).padStart(2, "0");
  const utcDateStr = `${utcYear}-${utcMonth}-${utcDay}`;

  for (const w of TREASURE_WAVES) {
    const isLocalLive = localDateStr >= w.startDate && localDateStr <= w.endDate;
    const isUtcLive = utcDateStr >= w.startDate && utcDateStr <= w.endDate;
    if (isLocalLive || isUtcLive) {
      return {
        status: "live",
        mainText: w.wave === 3 ? SEASON_CONFIG.wave3ActiveBannerText : `Wave ${w.wave} is live — ${w.multiplierText} (${w.oddsText})`,
        badgeText: w.wave === 3 ? "Wave 3 Active" : `LIVE • ${w.multiplierText.toUpperCase()}`,
      };
    }
  }

  if (localDateStr < TREASURE_WAVES[0].startDate && utcDateStr < TREASURE_WAVES[0].startDate) {
    const w1 = TREASURE_WAVES[0];
    return {
      status: "upcoming",
      mainText: `Wave ${w1.wave}: Starts ${w1.dateStr} • ${w1.multiplierText}`,
      badgeText: w1.badge,
    };
  }

  if (localDateStr < TREASURE_WAVES[1].startDate) {
    return {
      status: "ended",
      mainText: `Wave ${TREASURE_WAVES[0].wave} ended — next: ${TREASURE_WAVES[0].nextInfo}`,
      badgeText: `Wave ${TREASURE_WAVES[0].wave} Ended`,
    };
  }

  if (localDateStr < TREASURE_WAVES[2].startDate) {
    return {
      status: "ended",
      mainText: `Wave ${TREASURE_WAVES[1].wave} ended — next: ${TREASURE_WAVES[1].nextInfo}`,
      badgeText: `Wave ${TREASURE_WAVES[1].wave} Ended`,
    };
  }

  // 11/28 之后（11/29 起）生效的最终结束状态
  return {
    status: "ended",
    mainText: SEASON_CONFIG.postWave3BannerText,
    badgeText: SEASON_CONFIG.postWave3BadgeText,
  };
}
