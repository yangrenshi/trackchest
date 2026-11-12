"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";

export function PirateTokenCalculator() {
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
    <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[#2e2e2e]">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
          <Calculator className="w-4 h-4 text-[#ffc93c]" />
          <span>Select Crate Tier</span>
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
          <span className="text-[11px] text-[#888] block mt-0.5">Docks &amp; coastal camps</span>
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
          <span className="text-[11px] text-[#888] block mt-0.5">Guaranteed high-tier gold</span>
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
  );
}
