"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock } from "lucide-react";

interface WaveState {
  status: "upcoming" | "live" | "ended";
  waveNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  multiplierText: string;
}

export function TreasureHoursBanner() {
  // 默认服务端渲染状态（对应 2026-11-13 当前时间：Wave 1 未开始）
  const [waveState, setWaveState] = useState<WaveState>({
    status: "upcoming",
    waveNumber: 1,
    title: "Treasure Hours Wave 1",
    subtitle: "Starts Saturday, Nov 14 • 1.5x drops (1 in 91,667)",
    badge: "Saturday, Nov 14",
    multiplierText: "1.5x Boost",
  });

  useEffect(() => {
    const calculateState = (): WaveState => {
      const now = new Date();
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
          title: "Treasure Hours Wave 1",
          subtitle: "Starts Saturday, Nov 14 • 1.5x drops (1 in 91,667)",
          badge: "Saturday, Nov 14",
          multiplierText: "1.5x Boost",
        };
      }

      // 2. Wave 1 进行中
      if (currentTime >= wave1Start && currentTime <= wave1End) {
        return {
          status: "live",
          waveNumber: 1,
          title: "Wave 1 is live now",
          subtitle: "1.5x drop rate active globally today (1 in 91,667 odds)",
          badge: "LIVE NOW • 1.5x",
          multiplierText: "1.5x Active",
        };
      }

      // 3. Wave 1 结束，Wave 2 前
      if (currentTime > wave1End && currentTime < wave2Start) {
        return {
          status: "upcoming",
          waveNumber: 2,
          title: "Wave 1 ended • Next: Wave 2",
          subtitle: "Starts Saturday, Nov 21 • 2.0x double odds (1 in 68,750)",
          badge: "Next: Nov 21",
          multiplierText: "2.0x Double Odds",
        };
      }

      // 4. Wave 2 进行中
      if (currentTime >= wave2Start && currentTime <= wave2End) {
        return {
          status: "live",
          waveNumber: 2,
          title: "Wave 2 is live now",
          subtitle: "2.0x double drop rate active globally today (1 in 68,750)",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Active",
        };
      }

      // 5. Wave 2 结束，Wave 3 前
      if (currentTime > wave2End && currentTime < wave3Start) {
        return {
          status: "upcoming",
          waveNumber: 3,
          title: "Wave 2 ended • Final Wave: Wave 3",
          subtitle: "Starts Saturday, Nov 28 • 2.0x final boost (Last Treasure Hours)",
          badge: "Final: Nov 28",
          multiplierText: "2.0x Final Push",
        };
      }

      // 6. Wave 3 进行中
      if (currentTime >= wave3Start && currentTime <= wave3End) {
        return {
          status: "live",
          waveNumber: 3,
          title: "Final Wave 3 is live now",
          subtitle: "2.0x double drop odds active today (Last Treasure Hours of Chapter 7)",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Peak",
        };
      }

      // 7. 三波全部结束
      return {
        status: "ended",
        waveNumber: 3,
        title: "Treasure Hours ended",
        subtitle: "Standard 1 in 137,500 odds restored until Chapter 8 season switch",
        badge: "Season Ended",
        multiplierText: "1 in 137,500",
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
            <span className="text-[#d4d4d4] text-[11px] block mt-0.5">{waveState.subtitle}</span>
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

  // upcoming 态 (包括默认渲染)
  return (
    <div className="p-3.5 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 flex items-center justify-between text-xs text-white">
      <div className="flex items-center space-x-2.5">
        <Flame className="w-4 h-4 text-[#ffc93c] shrink-0" />
        <div>
          <strong className="text-[#ffc93c]">{waveState.title}: </strong>
          <span className="text-[#d4d4d4]">{waveState.subtitle}</span>
        </div>
      </div>
      <span className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/20 px-2 py-0.5 rounded font-bold shrink-0 hidden sm:inline-block">
        {waveState.multiplierText}
      </span>
    </div>
  );
}
