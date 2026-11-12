"use client";

import React from "react";
import { Check, ShieldAlert, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const chestComparisons = [
    {
      type: "Standard Chest",
      rarity: "Common",
      spawnRate: "70% – 85% at POIs",
      guaranteedLoot: "1 Weapon (Grey to Rare), 1 Ammo, 1 Consumable, 30 Wood/Stone/Metal",
      bestLocations: "Residential houses, attics, roofs, barns",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      type: "Rare Chest (Blue Glow)",
      rarity: "Rare / Epic",
      spawnRate: "2% – 5% natural upgrade",
      guaranteedLoot: "Guaranteed Blue or higher weapon (Epic/Legendary), Big Pots / Chug Splash",
      bestLocations: "High-tier POIs, underground basements, landmarks",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      type: "Sprite / Elemental Chest",
      rarity: "Epic / Mythic",
      spawnRate: "Biome-dependent (Enchanted spots)",
      guaranteedLoot: "Elemental powers, seasonal utility, mobility items, shields",
      bestLocations: "Elemental shrines, enchanted forests, river bends",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      type: "Pirate Token / Treasure Chest",
      rarity: "Special Event",
      spawnRate: "Map fragment or quest token required",
      guaranteedLoot: "Mythic or Legendary weapon, full shield stack, hundreds of gold bars",
      bestLocations: "Buried X-marks-the-spot locations, pirate coves",
      badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      type: "Faction Vault Chest",
      rarity: "Mythic / Boss",
      spawnRate: "100% inside active vaults",
      guaranteedLoot: "2x Legendary weapons, Medallions, weapon mods, heavy ammo",
      bestLocations: "Boss POI vaults, underground weather bunkers (late storm)",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          In-Depth Loot Meta
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
          Fortnite Chest Types & Spawn Rate Comparison
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
          Compare spawn odds, guaranteed drops, and optimal looting routes across all Chapter 6 chest variants.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[11px]">
              <th className="py-4 px-4 sm:px-6 font-bold">Chest Type</th>
              <th className="py-4 px-4 sm:px-6 font-bold">Spawn Odds</th>
              <th className="py-4 px-4 sm:px-6 font-bold">Guaranteed Drops</th>
              <th className="py-4 px-4 sm:px-6 font-bold">Optimal Hotspots</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {chestComparisons.map((row, index) => (
              <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                  <div className="flex flex-col">
                    <span>{row.type}</span>
                    <span className={`inline-block w-fit text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-1 ${row.badgeColor}`}>
                      {row.rarity}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-300 font-mono text-xs">
                  {row.spawnRate}
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-300 leading-relaxed">
                  {row.guaranteedLoot}
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-400">
                  {row.bestLocations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
        <span>* Spawn percentages are based on competitive tournament data and seasonal patch notes.</span>
        <span className="hidden sm:inline">Chapter 6 Meta Verified</span>
      </div>
    </section>
  );
}
