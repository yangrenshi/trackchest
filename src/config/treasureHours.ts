import { SEASON_CONFIG, type TreasureWave } from "./season";

export type TreasureWaveConfig = TreasureWave;

export const TREASURE_WAVES: TreasureWaveConfig[] = SEASON_CONFIG.waves;

export interface TreasureBannerState {
  status: "upcoming" | "live" | "ended";
  mainText: string;
  badgeText: string;
}

/**
 * 获取指定时间在 America/New_York (US Eastern Time) 时区下的 YYYY-MM-DD 字符串。
 * 
 * 来源依据：
 * Fortnite 官方周末 Treasure Hours 及限时活动均以美东时间（America/New_York，EST/EDT）为唯一标准。
 * 锁定美东时区作为单一真实事实来源 (SSOT)，避免跨国访客本地时区或服务器 UTC 导致的过早/过迟切档。
 */
export function getEasternDateString(date: Date = new Date()): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const parts = formatter.formatToParts(date);
    const year = parts.find((p) => p.type === "year")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const day = parts.find((p) => p.type === "day")?.value;
    if (year && month && day) {
      return `${year}-${month}-${day}`;
    }
  } catch {}

  // 兜底回退：EST 时区固定为 UTC-5
  const estTime = new Date(date.getTime() - 5 * 60 * 60 * 1000);
  const y = estTime.getUTCFullYear();
  const m = String(estTime.getUTCMonth() + 1).padStart(2, "0");
  const d = String(estTime.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getTreasureBannerState(date: Date = new Date()): TreasureBannerState {
  const easternDateStr = getEasternDateString(date);

  // 档位 4: 12/05 起 (赛季彻底结束，Chapter 7 完结)
  // 来源：Chapter 7 赛季于 12/4 维护停机，12/5 00:00 EST 起全面收尾
  if (easternDateStr >= "2026-12-05") {
    return {
      status: "ended",
      mainText: SEASON_CONFIG.seasonEndedBannerText,
      badgeText: SEASON_CONFIG.seasonEndedBadgeText,
    };
  }

  // 档位 3: 11/29 至 12/04 (Wave 3 结束，Treasure Hours 全部收官)
  if (easternDateStr >= "2026-11-29") {
    return {
      status: "ended",
      mainText: SEASON_CONFIG.postWave3BannerText,
      badgeText: SEASON_CONFIG.postWave3BadgeText,
    };
  }

  // 档位 2: 11/28 当天 (Wave 3 激活进行中)
  // 来源：Wave 3 双倍活动窗口为 2026-11-28 00:00:00 至 23:59:59 EST (America/New_York)
  if (easternDateStr === "2026-11-28") {
    return {
      status: "live",
      mainText: SEASON_CONFIG.wave3ActiveBannerText,
      badgeText: "Wave 3 Active",
    };
  }

  // 档位 1: 今天至 11/27 (Wave 2 ended — next: Nov 28 (2x))
  return {
    status: "ended",
    mainText: `Wave ${TREASURE_WAVES[1].wave} ended — next: ${TREASURE_WAVES[1].nextInfo}`,
    badgeText: `Wave ${TREASURE_WAVES[1].wave} Ended`,
  };
}
