"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock, Radio } from "lucide-react";
import Link from "next/link";
import { getTreasureBannerState, TreasureBannerState } from "@/config/treasureHours";

export function TreasureHoursBanner() {
  // 服务端及初次挂载均基于同一份统一日期逻辑自动计算
  const [banner, setBanner] = useState<TreasureBannerState>(() => getTreasureBannerState(new Date()));

  useEffect(() => {
    const update = () => {
      let current = new Date();
      try {
        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          const mock = params.get("date") || params.get("mock_date") || params.get("now");
          if (mock) {
            current = new Date(mock);
          } else if ((window as unknown as { __MOCK_TIME__?: string }).__MOCK_TIME__) {
            current = new Date((window as unknown as { __MOCK_TIME__: string }).__MOCK_TIME__);
          }
        }
      } catch {}
      setBanner(getTreasureBannerState(current));
    };

    update();
    // 10 秒心跳自检时钟，本地或 UTC 跨过零点时零延迟自动流转
    const timer = setInterval(update, 10000);
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
                <span>{banner.mainText}</span>
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#121212] bg-[#ffd510] px-2.5 py-1 rounded-md font-bold shrink-0 hidden sm:inline-block">
            {banner.badgeText}
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
              <span className="font-semibold text-white block">{banner.mainText}</span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#333] font-medium shrink-0 hidden sm:inline-block">
            {banner.badgeText}
          </span>
        </div>
      </Link>
    );
  }

  // 1. upcoming 态 (现在到 14 日 00:00)
  return (
    <Link
      href="/pirate-token-odds"
      className="block p-3.5 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 text-xs text-white hover:border-[#ffc93c]/50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <Flame className="w-4 h-4 text-[#ffc93c] shrink-0" />
          <div>
            <strong className="text-white">{banner.mainText}</strong>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/20 px-2 py-0.5 rounded font-bold shrink-0 hidden sm:inline-block">
          {banner.badgeText}
        </span>
      </div>
    </Link>
  );
}
