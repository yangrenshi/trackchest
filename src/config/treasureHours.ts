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

  // 档位 2: 11/28 当天 (Wave 3 active)
  if (localDateStr === "2026-11-28" || utcDateStr === "2026-11-28") {
    return {
      status: "live",
      mainText: SEASON_CONFIG.wave3ActiveBannerText,
      badgeText: "Wave 3 Active",
    };
  }

  // 档位 3: 11/29 起 (Wave 3 ended)
  if (localDateStr >= "2026-11-29" || utcDateStr >= "2026-11-29") {
    return {
      status: "ended",
      mainText: SEASON_CONFIG.postWave3BannerText,
      badgeText: SEASON_CONFIG.postWave3BadgeText,
    };
  }

  // 档位 1: 今天至 11/27 (Wave 2 ended — next: Nov 28 (2x))
  return {
    status: "ended",
    mainText: `Wave ${TREASURE_WAVES[1].wave} ended — next: ${TREASURE_WAVES[1].nextInfo}`,
    badgeText: `Wave ${TREASURE_WAVES[1].wave} Ended`,
  };
}
