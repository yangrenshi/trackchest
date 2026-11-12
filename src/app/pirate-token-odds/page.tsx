"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";

export default function PirateTokenOddsPage() {
  const [chestTier, setChestTier] = useState<"standard" | "buried" | "mythic">("buried");

  const calculateOdds = () => {
    switch (chestTier) {
      case "mythic":
        return {
          mythicWeapon: 85,
          legendaryWeapon: 98,
          fullShield: 90,
          goldAverage: 350,
        };
      case "buried":
        return {
          mythicWeapon: 42,
          legendaryWeapon: 80,
          fullShield: 95,
          goldAverage: 220,
        };
      default:
        return {
          mythicWeapon: 12,
          legendaryWeapon: 45,
          fullShield: 70,
          goldAverage: 120,
        };
    }
  };

  const odds = calculateOdds();

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#9a9a9a] hover:text-white transition-colors bg-[#1d1d1d] border border-[#2e2e2e] px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Tracker</span>
        </Link>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
          Event Drop Simulator
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Pirate Token Odds Calculator
        </h1>
        <p className="text-xs text-[#9a9a9a]">
          Loot probabilities of Fortnite Pirate Token crates, Buried Treasure maps, and rare drops.
        </p>
      </div>

      {/* 计算器 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#2e2e2e]">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Select Crate Tier
          </h2>
          <span className="text-[11px] font-mono text-[#ffc93c]">Chapter 6 Meta</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => setChestTier("standard")}
            className={`p-3 rounded-xl border text-left transition-colors ${
              chestTier === "standard"
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block">Standard Pirate Crate</span>
            <span className="text-[11px] text-[#888] block mt-0.5">Docks &amp; camps</span>
          </button>

          <button
            type="button"
            onClick={() => setChestTier("buried")}
            className={`p-3 rounded-xl border text-left transition-colors ${
              chestTier === "buried"
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block">Buried Treasure (X-Mark)</span>
            <span className="text-[11px] text-[#888] block mt-0.5">Requires Treasure Map</span>
          </button>

          <button
            type="button"
            onClick={() => setChestTier("mythic")}
            className={`p-3 rounded-xl border text-left transition-colors ${
              chestTier === "mythic"
                ? "bg-[#2b2b2b] border-[#ffc93c] text-white"
                : "bg-[#181818] border-[#2e2e2e] text-[#9a9a9a] hover:border-[#3e3e3e]"
            }`}
          >
            <span className="text-xs font-semibold text-white block">Medallion Vault</span>
            <span className="text-[11px] text-[#888] block mt-0.5">High tier gold loot</span>
          </button>
        </div>

        {/* 概率展示 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-[#2e2e2e]">
          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <span className="text-[11px] text-[#9a9a9a] block">Mythic Weapon</span>
            <span className="text-2xl font-bold font-mono text-[#ffc93c] tnum">{odds.mythicWeapon}%</span>
          </div>

          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <span className="text-[11px] text-[#9a9a9a] block">Legendary Drop</span>
            <span className="text-2xl font-bold font-mono text-white tnum">{odds.legendaryWeapon}%</span>
          </div>

          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <span className="text-[11px] text-[#9a9a9a] block">Full 100 Shield</span>
            <span className="text-2xl font-bold font-mono text-white tnum">{odds.fullShield}%</span>
          </div>

          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <span className="text-[11px] text-[#9a9a9a] block">Average Gold</span>
            <span className="text-2xl font-bold font-mono text-white tnum">~{odds.goldAverage}</span>
          </div>
        </div>
      </div>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-white">
          Understanding Pirate Event Tokens in Fortnite
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          During special events in Fortnite Chapter seasons, Pirate Token crates and Treasure Maps provide substantial competitive advantages. 
          When carrying a Treasure Map, following the golden beam of light leads directly to buried sand mounds where digging unearths a Pirate Chest with near-guaranteed Legendary weapons and maximum healing stacks.
        </p>
      </section>

      <div className="pt-6 border-t border-[#2e2e2e] flex items-center justify-between text-xs">
        <Link href="/" className="text-[#ffc93c] hover:underline">
          &larr; Back to Main Live Counter
        </Link>
        <Link href="/chest-types" className="text-[#9a9a9a] hover:text-white underline">
          View All Chest Types &rarr;
        </Link>
      </div>
    </div>
  );
}
