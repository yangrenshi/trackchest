"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface WaveState {
  status: "upcoming" | "live" | "ended";
  waveNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  multiplierText: string;
}

export function TreasureHoursBanner() {
  // 默认服务端预渲染状态（对应当前时间 2026-11-13：Wave 1 未开启）
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
      const year = now.getFullYear();
      const month = now.getMonth(); // 10 代表 11 月 (0-indexed)
      const date = now.getDate();

      // UTC 日期 fallback
      const utcYear = now.getUTCFullYear();
      const utcMonth = now.getUTCMonth();
      const utcDate = now.getUTCDate();

      // 只要本地或 UTC 达到 2026年11月14日
      const isWave1Today = (year === 2026 && month === 10 && date === 14) || (utcYear === 2026 && utcMonth === 10 && utcDate === 14);
      // 达到 2026年11月21日
      const isWave2Today = (year === 2026 && month === 10 && date === 21) || (utcYear === 2026 && utcMonth === 10 && utcDate === 21);
      // 达到 2026年11月28日
      const isWave3Today = (year === 2026 && month === 10 && date === 28) || (utcYear === 2026 && utcMonth === 10 && utcDate === 28);

      const currentTime = now.getTime();
      const wave1EndTimestamp = new Date("2026-11-15T08:00:00Z").getTime();
      const wave2StartTimestamp = new Date("2026-11-21T00:00:00Z").getTime();
      const wave2EndTimestamp = new Date("2026-11-22T08:00:00Z").getTime();
      const wave3StartTimestamp = new Date("2026-11-28T00:00:00Z").getTime();
      const wave3EndTimestamp = new Date("2026-11-29T08:00:00Z").getTime();

      // 1. Wave 1 进行中
      if (isWave1Today) {
        return {
          status: "live",
          waveNumber: 1,
          title: "Wave 1 is live — 1.5x active",
          subtitle: "1.5x drop rate live globally today (1 in 91,667 odds)",
          badge: "LIVE NOW • 1.5x",
          multiplierText: "1.5x Active",
        };
      }

      // 2. Wave 1 前
      if (currentTime < new Date("2026-11-14T00:00:00").getTime()) {
        return {
          status: "upcoming",
          waveNumber: 1,
          title: "Treasure Hours Wave 1",
          subtitle: "Starts Saturday, Nov 14 • 1.5x drops (1 in 91,667)",
          badge: "Saturday, Nov 14",
          multiplierText: "1.5x Boost",
        };
      }

      // 3. Wave 2 进行中
      if (isWave2Today) {
        return {
          status: "live",
          waveNumber: 2,
          title: "Wave 2 is live — 2.0x Double Odds",
          subtitle: "2.0x double drop rate active globally today (1 in 68,750)",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Active",
        };
      }

      // 4. Wave 1 结束，Wave 2 前
      if (currentTime >= wave1EndTimestamp && currentTime < wave2StartTimestamp) {
        return {
          status: "ended",
          waveNumber: 1,
          title: "Wave 1 ended • Next: Wave 2",
          subtitle: "Starts Saturday, Nov 21 • 2.0x double odds (1 in 68,750)",
          badge: "Next: Nov 21",
          multiplierText: "Wave 1 Ended",
        };
      }

      // 5. Wave 3 进行中
      if (isWave3Today) {
        return {
          status: "live",
          waveNumber: 3,
          title: "Final Wave 3 is live — 2.0x peak",
          subtitle: "Last Treasure Hours of Chapter 7 active today (1 in 68,750)",
          badge: "LIVE NOW • 2.0x",
          multiplierText: "2.0x Peak",
        };
      }

      // 6. Wave 2 结束，Wave 3 前
      if (currentTime >= wave2EndTimestamp && currentTime < wave3StartTimestamp) {
        return {
          status: "ended",
          waveNumber: 2,
          title: "Wave 2 ended • Final Wave: Wave 3",
          subtitle: "Starts Saturday, Nov 28 • 2.0x final boost (Last Treasure Hours)",
          badge: "Final: Nov 28",
          multiplierText: "Wave 2 Ended",
        };
      }

      // 7. 三波全部结束 (28号之后)
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
      <Link
        href="/pirate-token-odds"
        className="block p-3.5 rounded-xl bg-[#ffd510]/15 border border-[#ffd510]/40 text-xs text-white shadow-lg shadow-[#ffd510]/5 transition-all hover:border-[#ffd510]"
      >
        <div className="flex items-center justify-between">
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
      </Link>
    );
  }

  if (waveState.status === "ended") {
    return (
      <Link
        href="/pirate-token-odds"
        className="block p-3.5 rounded-xl bg-[#242424] border border-[#333] text-xs text-[#9a9a9a] hover:border-[#444] transition-colors"
      >
        <div className="flex items-center justify-between">
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
      </Link>
    );
  }

  // upcoming 态 (包括默认渲染)
  return (
    <Link
      href="/pirate-token-odds"
      className="block p-3.5 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 text-xs text-white hover:border-[#ffc93c]/50 transition-colors"
    >
      <div className="flex items-center justify-between">
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
    </Link>
  );
}
