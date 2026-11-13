"use client";

import React, { useState, useEffect } from "react";
import { Flame, Sparkles, CheckCircle2, Clock } from "lucide-react";

interface WaveState {
  status: "upcoming" | "live" | "ended";
  waveNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  multiplierText: string;
  colorTheme: "amber" | "yellow" | "gray";
}

export function TreasureHoursBanner() {
  // 默认服务端预渲染状态（对应 2026-11-13 当前时间：Wave 1 未开启）
  const [waveState, setWaveState] = useState<WaveState>({
    status: "upcoming",
    waveNumber: 1,
    title: "Treasure Hours Wave 1: Saturday, Nov 14 — 1.5x token drops upcoming",
    subtitle: "Starts Saturday globally • Drop rate boosted to 1 in 91,667 (~63,500 chests for 50% target)",
    badge: "Upcoming • Sat Nov 14",
    multiplierText: "1.5x Boost",
    colorTheme: "amber",
  });

  useEffect(() => {
    const calculateState = (): WaveState => {
      const now = new Date();
      // 获取当前年、月、日（以 UTC 或用户本地日期均可，使用当前实际时间戳比较）
      // Wave 1: 2026-11-14 (UTC)
      const wave1Start = new Date("2026-11-14T00:00:00Z").getTime();
      const wave1End = new Date("2026-11-14T23:59:59Z").getTime();

      // Wave 2: 2026-11-21 (UTC)
      const wave2Start = new Date("2026-11-21T00:00:00Z").getTime();
      const wave2End = new Date("2026-11-21T23:59:59Z").getTime();

      // Wave 3: 2026-11-28 (UTC)
      const wave3Start = new Date("2026-11-28T00:00:00Z").getTime();
      const wave3End = new Date("2026-11-28T23:59:59Z").getTime();

      const currentTime = now.getTime();

      // 1. Wave 1 前
      if (currentTime < wave1Start) {
        return {
          status: "upcoming",
          waveNumber: 1,
          title: "Treasure Hours Wave 1: Saturday, Nov 14 — 1.5x token drops upcoming",
          subtitle: "Starts Saturday globally • Drop rate boosted to 1 in 91,667 (~63,500 chests for 50% target)",
          badge: "Upcoming • Sat Nov 14",
          multiplierText: "1.5x Boost",
          colorTheme: "amber",
        };
      }

      // 2. Wave 1 进行中
      if (currentTime >= wave1Start && currentTime <= wave1End) {
        return {
          status: "live",
          waveNumber: 1,
          title: "Wave 1 is live now — 1.5x drop rate active globally!",
          subtitle: "Active today only • 1 in 91,667 boosted odds live across all chests",
          badge: "LIVE NOW • 1.5x",
          multiplierText: "1.5x Multiplier",
          colorTheme: "yellow",
        };
      }

      // 3. Wave 1 结束，Wave 2 前
      if (currentTime > wave1End && currentTime < wave2Start) {
        return {
          status: "upcoming",
          waveNumber: 2,
          title: "Wave 1 ended • Next: Treasure Hours Wave 2 on Saturday, Nov 21",
          subtitle: "Wave 2 features 2.0x Double Odds (1 in 68,750) • Starts Saturday, Nov 21, 2026",
          badge: "Next: Wave 2 (Nov 21)",
          multiplierText: "2.0x Boost",
          colorTheme: "amber",
        };
      }

      // 4. Wave 2 进行中
      if (currentTime >= wave2Start && currentTime <= wave2End) {
        return {
          status: "live",
          waveNumber: 2,
          title: "Wave 2 is live now — 2.0x Double Odds active globally!",
          subtitle: "Active today only • 1 in 68,750 double drop odds live across all chests",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Double Odds",
          colorTheme: "yellow",
        };
      }

      // 5. Wave 2 结束，Wave 3 前
      if (currentTime > wave2End && currentTime < wave3Start) {
        return {
          status: "upcoming",
          waveNumber: 3,
          title: "Wave 2 ended • Final Wave: Treasure Hours Wave 3 on Saturday, Nov 28",
          subtitle: "Last Treasure Hours weekend before Chapter 8 season switch • Starts Saturday, Nov 28, 2026",
          badge: "Final Wave: Nov 28",
          multiplierText: "2.0x Boost",
          colorTheme: "amber",
        };
      }

      // 6. Wave 3 进行中
      if (currentTime >= wave3Start && currentTime <= wave3End) {
        return {
          status: "live",
          waveNumber: 3,
          title: "Final Wave 3 is live now — 2.0x peak boost active globally!",
          subtitle: "Last Treasure Hours of Chapter 7 • 1 in 68,750 odds active until midnight",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Final Push",
          colorTheme: "yellow",
        };
      }

      // 7. 三波全部结束
      return {
        status: "ended",
        waveNumber: 3,
        title: "Treasure Hours events concluded (Chapter 7 Treasure Hunters)",
        subtitle: "Standard 1 in 137,500 odds restored until Chapter 8 season switch",
        badge: "Concluded",
        multiplierText: "1 in 137,500",
        colorTheme: "gray",
      };
    };

    setWaveState(calculateState());
  }, []);

  if (waveState.status === "live") {
    return (
      <div className="p-3.5 rounded-xl bg-[#ffd510]/15 border border-[#ffd510]/40 flex items-center justify-between text-xs text-white shadow-lg shadow-[#ffd510]/5 transition-all">
        <div className="flex items-center space-x-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd510] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffd510]"></span>
          </span>
          <div>
            <div className="font-bold text-[#ffd510] flex items-center space-x-1.5">
              <span>{waveState.title}</span>
            </div>
            <span className="text-[#bbb] text-[11px] block mt-0.5">{waveState.subtitle}</span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#121212] bg-[#ffd510] px-2.5 py-1 rounded-md font-bold shrink-0 hidden sm:inline-block">
          {waveState.multiplierText}
        </span>
      </div>
    );
  }

  if (waveState.status === "ended") {
    return (
      <div className="p-3.5 rounded-xl bg-[#242424] border border-[#333] flex items-center justify-between text-xs text-[#9a9a9a]">
        <div className="flex items-center space-x-2.5">
          <Clock className="w-4 h-4 text-[#888] shrink-0" />
          <div>
            <span className="font-semibold text-white block">{waveState.title}</span>
            <span className="text-[11px] text-[#777] block mt-0.5">{waveState.subtitle}</span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#333] font-medium shrink-0 hidden sm:inline-block">
          {waveState.badge}
        </span>
      </div>
    );
  }

  // upcoming 态 (包括默认状态)
  return (
    <div className="p-3.5 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 flex items-center justify-between text-xs text-white">
      <div className="flex items-center space-x-2.5">
        <Flame className="w-4 h-4 text-[#ffc93c] shrink-0" />
        <div>
          <span className="font-bold text-[#ffc93c] block">{waveState.title}</span>
          <span className="text-[#aaa] text-[11px] block mt-0.5">{waveState.subtitle}</span>
        </div>
      </div>
      <span className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/20 px-2 py-0.5 rounded font-bold shrink-0 hidden sm:inline-block">
        {waveState.multiplierText}
      </span>
    </div>
  );
}
