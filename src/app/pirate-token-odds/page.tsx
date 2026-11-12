"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Compass, Sparkles, Calculator, Flame, Shield, RefreshCw } from "lucide-react";

export default function PirateTokenOddsPage() {
  const [tokensInvested, setTokensInvested] = useState<number>(3);
  const [chestTier, setChestTier] = useState<"standard" | "buried" | "mythic">("buried");

  // 掉落概率模型
  const calculateOdds = () => {
    switch (chestTier) {
      case "mythic":
        return {
          mythicWeapon: 85,
          legendaryWeapon: 98,
          fullShield: 90,
          goldAverage: 350,
          flintKnock: 65,
        };
      case "buried":
        return {
          mythicWeapon: 42,
          legendaryWeapon: 80,
          fullShield: 95,
          goldAverage: 220,
          flintKnock: 45,
        };
      default:
        return {
          mythicWeapon: 12,
          legendaryWeapon: 45,
          fullShield: 70,
          goldAverage: 120,
          flintKnock: 25,
        };
    }
  };

  const odds = calculateOdds();

  return (
    <div className="py-12 px-4 md:px-6 max-w-4xl mx-auto space-y-12 leading-relaxed font-sans">
      {/* 顶部返回导航 */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-tech font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors bg-void-900 border border-slate-800 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO TRACKCHEST HOME</span>
        </Link>
      </div>

      {/* 标头区 */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-orange-500/30 text-orange-400 text-xs font-tech font-bold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" />
          <span>EVENT DROP SIMULATOR</span>
        </div>
        <h1 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          PIRATE TOKEN ODDS CALCULATOR
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Calculate the statistical loot probabilities of Fortnite Pirate Token chests, Buried Treasure maps, and cannon drops.
        </p>
      </div>

      {/* 交互式计算器卡片 */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-void-900 border-2 border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.15)] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 className="font-tech text-xl font-bold uppercase text-white flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-orange-400" />
            <span>SELECT TOKEN TYPE &amp; MAP TIER</span>
          </h2>
          <span className="font-tech text-xs uppercase tracking-wider text-orange-400 bg-orange-950/40 border border-orange-500/30 px-2 py-0.5 rounded">
            UPDATED STATS
          </span>
        </div>

        {/* 宝箱档位选择 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setChestTier("standard")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              chestTier === "standard"
                ? "bg-orange-500/20 border-orange-400 text-white shadow-lg"
                : "bg-void-850 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="font-tech text-xs uppercase tracking-wider font-bold block mb-1">Standard Pirate Crate</span>
            <span className="text-xs text-slate-300">Found near docks and pirate camps</span>
          </button>

          <button
            type="button"
            onClick={() => setChestTier("buried")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              chestTier === "buried"
                ? "bg-orange-500/20 border-orange-400 text-white shadow-lg"
                : "bg-void-850 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="font-tech text-xs uppercase tracking-wider font-bold block mb-1">Buried Treasure (X-Mark)</span>
            <span className="text-xs text-slate-300">Requires Treasure Map item</span>
          </button>

          <button
            type="button"
            onClick={() => setChestTier("mythic")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              chestTier === "mythic"
                ? "bg-orange-500/20 border-orange-400 text-white shadow-lg"
                : "bg-void-850 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="font-tech text-xs uppercase tracking-wider font-bold block mb-1">Cursed Medallion Vault</span>
            <span className="text-xs text-slate-300">Guaranteed maximum high tier loot</span>
          </button>
        </div>

        {/* 概率展示看板 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-void-850 border border-slate-800">
            <span className="text-[11px] text-slate-400 font-mono block mb-1">Mythic Weapon</span>
            <span className="font-tech text-3xl font-extrabold text-amber-400">{odds.mythicWeapon}%</span>
          </div>

          <div className="p-4 rounded-xl bg-void-850 border border-slate-800">
            <span className="text-[11px] text-slate-400 font-mono block mb-1">Legendary Drop</span>
            <span className="font-tech text-3xl font-extrabold text-orange-400">{odds.legendaryWeapon}%</span>
          </div>

          <div className="p-4 rounded-xl bg-void-850 border border-slate-800">
            <span className="text-[11px] text-slate-400 font-mono block mb-1">Full 100 Shield</span>
            <span className="font-tech text-3xl font-extrabold text-sky-400">{odds.fullShield}%</span>
          </div>

          <div className="p-4 rounded-xl bg-void-850 border border-slate-800">
            <span className="text-[11px] text-slate-400 font-mono block mb-1">Average Gold</span>
            <span className="font-tech text-3xl font-extrabold text-yellow-300">~{odds.goldAverage}</span>
          </div>
        </div>
      </div>

      {/* 科普说明 */}
      <section className="space-y-4">
        <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-white">
          Understanding Pirate Event Tokens in Fortnite
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          During special events in Fortnite Chapter seasons, Pirate Token crates and Treasure Maps provide substantial competitive advantages. 
          When carrying a Treasure Map, following the golden beam of light leads directly to buried sand mounds where digging unearths a Pirate Chest with near-guaranteed Legendary weapons and maximum healing stacks.
        </p>
      </section>

      {/* 底部内链回跳 */}
      <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs">
        <Link href="/" className="text-amber-400 font-bold hover:underline">
          &larr; Back to Main Live Counter
        </Link>
        <Link href="/chest-types" className="text-slate-400 hover:text-amber-400 underline">
          View All Fortnite Chest Types &rarr;
        </Link>
      </div>
    </div>
  );
}
