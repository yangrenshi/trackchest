"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Zap, Clock, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export function PirateTokenCalculator() {
  const [multiplier, setMultiplier] = useState<1 | 1.5 | 2>(1);
  const [userChests, setUserChests] = useState<number>(100);

  // 基础掉率参数 (Epic Games 官方 2026-11-09 公布)
  const BASE_DENOMINATOR = 137500; // 1 in 137,500
  const effectiveDenominator = BASE_DENOMINATOR / multiplier;
  const singleProb = 1 / effectiveDenominator;

  // 算特定把握度需要的箱数: N = ln(1 - P) / ln(1 - p)
  const getChestsForConfidence = (pConfidence: number) => {
    return Math.round(Math.log(1 - pConfidence) / Math.log(1 - singleProb));
  };

  const chests50 = getChestsForConfidence(0.5);
  const chests90 = getChestsForConfidence(0.9);
  const chests99 = getChestsForConfidence(0.99);

  // 用户当前累积概率: 1 - (1 - p)^N
  const currentCumulativeProb = userChests > 0
    ? (1 - Math.pow(1 - singleProb, userChests)) * 100
    : 0;

  return (
    <div className="space-y-6">
      {/* 1. 官方权威掉率信息板 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2e2e2e]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#49d6ff]" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Official Epic Games Drop Odds
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/10 border border-[#ffc93c]/20 px-2 py-0.5 rounded">
            Chapter 7 — Treasure Hunters
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-[#242424] border border-[#2e2e2e] space-y-1">
            <span className="text-[11px] text-[#9a9a9a] uppercase font-semibold">
              Pirate Shop Access Token
            </span>
            <div className="text-2xl font-black font-mono text-[#ffc93c] tnum">
              1 in 137,500
            </div>
            <p className="text-[11px] text-[#888]">
              Exact rate: <strong className="text-white">0.000007273%</strong> per container searched.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#242424] border border-[#2e2e2e] space-y-1">
            <span className="text-[11px] text-[#9a9a9a] uppercase font-semibold">
              Exclusive Golden Skin Drop
            </span>
            <div className="text-2xl font-black font-mono text-[#ffd510] tnum">
              1 in 1,562,500
            </div>
            <p className="text-[11px] text-[#888]">
              Ultra-rare seasonal cosmetic reward.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-[#777] leading-relaxed">
          * Source: Official Epic Games drop rate telemetry confirmed via Polygon on Nov 9, 2026. Season active Nov 1 – Dec 4, 2026.
        </p>
      </div>

      {/* 2. Treasure Hours 倍率切换与把握率换算表 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-5">
        <div>
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Zap className="w-4 h-4 text-[#ffc93c]" />
            <span>Treasure Hours Multiplier &amp; Milestone Targets</span>
          </h3>
          <p className="text-xs text-[#9a9a9a] mt-1">
            During official Treasure Hours, container drop odds double. Select a multiplier to see required chests and grind hours:
          </p>
        </div>

        {/* 倍率切换按键 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => setMultiplier(1)}
            className={`p-3 rounded-xl border text-left transition-colors ${
              multiplier === 1
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block">Standard Base (1.0x)</span>
            <span className="text-[11px] text-[#888] block mt-0.5">1 in 137,500 (Daily Meta)</span>
          </button>

          <button
            type="button"
            onClick={() => setMultiplier(1.5)}
            className={`p-3 rounded-xl border text-left transition-colors ${
              multiplier === 1.5
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block flex items-center space-x-1">
              <span>Sat, Nov 14 Boost (1.5x)</span>
              <Sparkles className="w-3 h-3 text-[#ffc93c]" />
            </span>
            <span className="text-[11px] text-[#888] block mt-0.5">1 in 91,667 (Wave 1)</span>
          </button>

          <button
            type="button"
            onClick={() => setMultiplier(2)}
            className={`p-3 rounded-xl border text-left transition-colors ${
              multiplier === 2
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block flex items-center space-x-1">
              <span>Sat, Nov 21 &amp; 28 (2.0x)</span>
              <Sparkles className="w-3 h-3 text-[#ffd510]" />
            </span>
            <span className="text-[11px] text-[#888] block mt-0.5">1 in 68,750 (Double Odds)</span>
          </button>
        </div>

        {/* 概率统计表格 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#2e2e2e] rounded-xl overflow-hidden">
            <thead className="bg-[#242424] text-[#9a9a9a] border-b border-[#2e2e2e]">
              <tr>
                <th className="p-3 font-semibold">Confidence Target</th>
                <th className="p-3 font-semibold">Chests Required</th>
                <th className="p-3 font-semibold">Estimated Grind Time (@ 40 chests/hr)</th>
                <th className="p-3 font-semibold">Statistical Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e2e2e] text-[#d4d4d4]">
              <tr className="hover:bg-[#202020]">
                <td className="p-3 font-bold text-white">50% Chance (Median)</td>
                <td className="p-3 font-mono font-bold text-[#ffc93c] tnum">
                  ~{chests50.toLocaleString()} chests
                </td>
                <td className="p-3 font-mono text-[#9a9a9a]">
                  ~{Math.round(chests50 / 40).toLocaleString()} hours
                </td>
                <td className="p-3 text-[11px] text-[#888]">
                  Half of all players searching this amount receive at least 1 token.
                </td>
              </tr>
              <tr className="hover:bg-[#202020]">
                <td className="p-3 font-bold text-white">90% Chance (High Probability)</td>
                <td className="p-3 font-mono font-bold text-white tnum">
                  ~{chests90.toLocaleString()} chests
                </td>
                <td className="p-3 font-mono text-[#9a9a9a]">
                  ~{Math.round(chests90 / 40).toLocaleString()} hours
                </td>
                <td className="p-3 text-[11px] text-[#888]">
                  9 out of 10 players will unlock the token within this range.
                </td>
              </tr>
              <tr className="hover:bg-[#202020]">
                <td className="p-3 font-bold text-white">99% Chance (Near Certainty)</td>
                <td className="p-3 font-mono font-bold text-[#ffd510] tnum">
                  ~{chests99.toLocaleString()} chests
                </td>
                <td className="p-3 font-mono text-[#9a9a9a]">
                  ~{Math.round(chests99 / 40).toLocaleString()} hours
                </td>
                <td className="p-3 text-[11px] text-[#888]">
                  Statistical threshold where 99% of grinders have received the drop.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 互动开箱概率计算器 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <Calculator className="w-4 h-4 text-[#ffc93c]" />
            <span>Interactive Chests-to-Token Odds Simulator</span>
          </h3>
          <p className="text-xs text-[#9a9a9a] mt-0.5">
            Enter your total chests opened this season to calculate your cumulative odds:
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2">
            <label htmlFor="chestsInput" className="text-xs text-white font-medium">
              Chests Opened:
            </label>
            <input
              id="chestsInput"
              type="number"
              min="1"
              max="2000000"
              value={userChests}
              onChange={(e) => setUserChests(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-32 px-3 py-1.5 rounded-lg bg-[#242424] border border-[#2e2e2e] text-white text-sm font-mono focus:border-[#ffc93c] outline-none"
            />
          </div>

          {/* 预设快速填数 */}
          <div className="flex items-center space-x-1.5 text-xs">
            {[100, 500, 2500, 10000, 50000].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setUserChests(preset)}
                className="px-2 py-1 rounded bg-[#242424] hover:bg-[#2e2e2e] text-[#9a9a9a] hover:text-white font-mono text-[11px]"
              >
                +{preset >= 1000 ? `${preset / 1000}k` : preset}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#242424] border border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[11px] text-[#9a9a9a] block">
              Cumulative Chance with {userChests.toLocaleString()} Chests ({multiplier}x Boost)
            </span>
            <div className="text-2xl font-black font-mono text-[#ffc93c] tnum">
              {currentCumulativeProb < 0.0001 && userChests > 0
                ? `< 0.001%`
                : `${currentCumulativeProb.toFixed(3)}%`}
            </div>
          </div>

          <div className="text-right text-xs text-[#9a9a9a]">
            <div>Median target: <span className="font-mono text-white">~{chests50.toLocaleString()}</span> chests</div>
            <div>Remaining to 50%: <span className="font-mono text-[#ffc93c]">{Math.max(0, chests50 - userChests).toLocaleString()}</span> chests</div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs">
          <span className="text-[#888]">
            Want to track your live count as you play?
          </span>
          <Link
            href="/fortnite-chest-counter"
            className="text-[#ffc93c] font-medium hover:underline inline-flex items-center space-x-1"
          >
            <span>Open 4-Column Live Counter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
