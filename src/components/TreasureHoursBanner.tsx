"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock, Radio } from "lucide-react";
import Link from "next/link";

interface WaveConfig {
  num: number;
  dateStr: string;
  startIso: string;
  endIso: string;
  multiplier: string;
  odds: string;
  dayOfMonth: number; // 14, 21, 28
}

const WAVES: WaveConfig[] = [
  {
    num: 1,
    dateStr: "Saturday, Nov 14",
    startIso: "2026-11-14T00:00:00Z",
    endIso: "2026-11-14T23:59:59Z",
    multiplier: "1.5x drops",
    odds: "1 in 91,667",
    dayOfMonth: 14,
  },
  {
    num: 2,
    dateStr: "Saturday, Nov 21",
    startIso: "2026-11-21T00:00:00Z",
    endIso: "2026-11-21T23:59:59Z",
    multiplier: "2.0x drops",
    odds: "1 in 68,750",
    dayOfMonth: 21,
  },
  {
    num: 3,
    dateStr: "Saturday, Nov 28",
    startIso: "2026-11-28T00:00:00Z",
    endIso: "2026-11-28T23:59:59Z",
    multiplier: "2.0x drops",
    odds: "1 in 68,750",
    dayOfMonth: 28,
  },
];

interface BannerState {
  status: "upcoming" | "live" | "ended";
  title: string;
  subtitle: string;
  badge: string;
  multiplierText: string;
}

function calculateBanner(now: Date): BannerState {
  const nowTime = now.getTime();
  const localMonth = now.getMonth(); // 10 代表 11 月
  const localDate = now.getDate();

  // 1. 优先检查当前是否有任一波次正处于进行中 (Live Now)
  for (const wave of WAVES) {
    const start = new Date(wave.startIso).getTime();
    const end = new Date(wave.endIso).getTime();

    // 满足以下任一条件即视为 LIVE:
    // A. 落在波次的 UTC 绝对时间范围内
    // B. 本地日期在 11 月且刚好是该波次当天 (支持任何本地时区提前进入 00:00)
    const isLive =
      (nowTime >= start && nowTime <= end) ||
      (localMonth === 10 && localDate === wave.dayOfMonth);

    if (isLive) {
      // 计算剩余时间
      const remainingMs = Math.max(0, end - nowTime);
      const remainingHours = Math.floor(remainingMs / (1000 * 60 * 60));
      const remainingMins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
      const endsText = remainingHours > 0 ? `Ends in ~${remainingHours}h ${remainingMins}m` : "Ending soon";

      return {
        status: "live",
        title: `Wave ${wave.num} is LIVE now — ${wave.multiplier}!`,
        subtitle: `${wave.multiplier} active globally today (${wave.odds} odds) • ${endsText}`,
        badge: `LIVE NOW • ${wave.multiplier.toUpperCase()}`,
        multiplierText: wave.multiplier,
      };
    }
  }

  // 2. 检查 Wave 1 尚未开始的情况
  const wave1Start = new Date(WAVES[0].startIso).getTime();
  const isBeforeWave1 =
    nowTime < wave1Start &&
    !(localMonth === 10 && localDate >= 14) &&
    !(localMonth > 10);

  if (isBeforeWave1) {
    const msToStart = Math.max(0, wave1Start - nowTime);
    const hoursToStart = Math.floor(msToStart / (1000 * 60 * 60));
    const minsToStart = Math.floor((msToStart % (1000 * 60 * 60)) / (1000 * 60));

    let countdownPrefix = "";
    if (hoursToStart > 0 && hoursToStart <= 48) {
      countdownPrefix = `Starts in ~${hoursToStart}h ${minsToStart}m • `;
    } else if (hoursToStart === 0 && minsToStart > 0) {
      countdownPrefix = `Starts in ${minsToStart}m • `;
    }

    return {
      status: "upcoming",
      title: "Treasure Hours Wave 1",
      subtitle: `${countdownPrefix}Saturday, Nov 14 • 1.5x drops (1 in 91,667)`,
      badge: "Saturday, Nov 14",
      multiplierText: "1.5x Boost",
    };
  }

  // 3. 检查 Wave 1 结束 ~ Wave 2 开始前
  const wave1End = new Date(WAVES[0].endIso).getTime();
  const wave2Start = new Date(WAVES[1].startIso).getTime();
  const isBetweenWave1And2 =
    (nowTime > wave1End && nowTime < wave2Start) ||
    (localMonth === 10 && localDate > 14 && localDate < 21);

  if (isBetweenWave1And2) {
    return {
      status: "ended",
      title: "Wave 1 ended • Next: Wave 2",
      subtitle: "Starts Saturday, Nov 21 • 2.0x drops (1 in 68,750)",
      badge: "Wave 1 Ended",
      multiplierText: "Next: Nov 21",
    };
  }

  // 4. 检查 Wave 2 结束 ~ Wave 3 开始前
  const wave2End = new Date(WAVES[1].endIso).getTime();
  const wave3Start = new Date(WAVES[2].startIso).getTime();
  const isBetweenWave2And3 =
    (nowTime > wave2End && nowTime < wave3Start) ||
    (localMonth === 10 && localDate > 21 && localDate < 28);

  if (isBetweenWave2And3) {
    return {
      status: "ended",
      title: "Wave 2 ended • Final Wave: Wave 3",
      subtitle: "Starts Saturday, Nov 28 • 2.0x drops (Last Treasure Hours)",
      badge: "Wave 2 Ended",
      multiplierText: "Final: Nov 28",
    };
  }

  // 5. 所有活动均已结束 (11月28日之后)
  return {
    status: "ended",
    title: "Wave 3 ended • Treasure Hours Concluded",
    subtitle: "Standard 1 in 137,500 odds restored until Chapter 8 season switch",
    badge: "Season Ended",
    multiplierText: "Concluded",
  };
}

export function TreasureHoursBanner() {
  // 服务端预渲染初始状态（保障 SSR 纯净与快速出词）
  const [banner, setBanner] = useState<BannerState>({
    status: "upcoming",
    title: "Treasure Hours Wave 1",
    subtitle: "Starts Saturday, Nov 14 • 1.5x drops (1 in 91,667)",
    badge: "Saturday, Nov 14",
    multiplierText: "1.5x Boost",
  });

  useEffect(() => {
    // 允许通过 window / URL 参数进行确定性测试与时间模拟
    const getEffectiveDate = (): Date => {
      try {
        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          const mockParam = params.get("mock_date") || params.get("date") || params.get("now");
          if (mockParam) {
            return new Date(mockParam);
          }
          if ((window as unknown as { __MOCK_TIME__?: string }).__MOCK_TIME__) {
            return new Date((window as unknown as { __MOCK_TIME__: string }).__MOCK_TIME__);
          }
        }
      } catch {}
      return new Date();
    };

    const update = () => {
      const now = getEffectiveDate();
      setBanner(calculateBanner(now));
    };

    // 挂载后立即更新一次
    update();

    // 启用 30 秒心跳自适应定时器，跨过零点时无需手动刷新页面即可实时切换状态
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  if (banner.status === "live") {
    return (
      <Link
        href="/pirate-token-odds"
        className="block p-3.5 rounded-xl bg-[#ffd510]/15 border border-[#ffd510]/50 text-xs text-white shadow-lg shadow-[#ffd510]/10 transition-all hover:border-[#ffd510]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd510] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffd510]"></span>
            </span>
            <div>
              <div className="font-bold text-[#ffd510] flex items-center space-x-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#ffd510]" />
                <span>{banner.title}</span>
              </div>
              <span className="text-[#d4d4d4] text-[11px] block mt-0.5">{banner.subtitle}</span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#121212] bg-[#ffd510] px-2.5 py-1 rounded-md font-bold shrink-0 hidden sm:inline-block">
            {banner.multiplierText}
          </span>
        </div>
      </Link>
    );
  }

  if (banner.status === "ended") {
    return (
      <Link
        href="/pirate-token-odds"
        className="block p-3.5 rounded-xl bg-[#242424] border border-[#333] text-xs text-[#9a9a9a] hover:border-[#444] transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Clock className="w-4 h-4 text-[#888] shrink-0" />
            <div>
              <span className="font-semibold text-white block">{banner.title}</span>
              <span className="text-[11px] text-[#777] block mt-0.5">{banner.subtitle}</span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#333] font-medium shrink-0 hidden sm:inline-block">
            {banner.badge}
          </span>
        </div>
      </Link>
    );
  }

  // upcoming 态 (未开启)
  return (
    <Link
      href="/pirate-token-odds"
      className="block p-3.5 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 text-xs text-white hover:border-[#ffc93c]/50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <Flame className="w-4 h-4 text-[#ffc93c] shrink-0" />
          <div>
            <strong className="text-[#ffc93c]">{banner.title}: </strong>
            <span className="text-[#d4d4d4]">{banner.subtitle}</span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/20 px-2 py-0.5 rounded font-bold shrink-0 hidden sm:inline-block">
          {banner.multiplierText}
        </span>
      </div>
    </Link>
  );
}
