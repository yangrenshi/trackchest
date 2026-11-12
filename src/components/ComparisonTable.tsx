"use client";

import React from "react";
import { Sparkles, Shield, Compass, Crosshair, Award } from "lucide-react";

export function ComparisonTable() {
  const chestComparisons = [
    {
      type: "Standard Chest",
      rarity: "Common",
      spawnRate: "70% – 85% at POIs",
      guaranteedLoot: "1 Weapon (Grey to Rare), Ammo, Consumable, 30 Mats",
      bestLocations: "Residential houses, attics, roofs, barns",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      accentGlow: "rgba(245, 158, 11, 0.2)",
    },
    {
      type: "Rare Chest (Blue Glow)",
      rarity: "Rare / Epic",
      spawnRate: "2% – 5% natural upgrade",
      guaranteedLoot: "Guaranteed Blue/Purple/Gold weapon + Big Pots/Chug Splash",
      bestLocations: "High-tier POIs, underground basements, landmarks",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      accentGlow: "rgba(56, 189, 248, 0.2)",
    },
    {
      type: "Sprite / Elemental Chest",
      rarity: "Epic / Mythic",
      spawnRate: "Enchanted biome exclusive",
      guaranteedLoot: "Elemental powers, seasonal utility, mobility, shields",
      bestLocations: "Elemental shrines, enchanted forests, river bends",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      accentGlow: "rgba(16, 185, 129, 0.2)",
    },
    {
      type: "Pirate Token Chest",
      rarity: "Special Event",
      spawnRate: "Map fragment or quest token required",
      guaranteedLoot: "Mythic weapon, full shield stack, 200+ Gold Bars",
      bestLocations: "Buried X-marks-the-spot locations, pirate coves",
      badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
      accentGlow: "rgba(249, 115, 22, 0.2)",
    },
    {
      type: "Faction Vault Bunkers",
      rarity: "Mythic / Boss",
      spawnRate: "100% inside active vaults",
      guaranteedLoot: "2x Legendary weapons, Medallions, weapon mods, heavy ammo",
      bestLocations: "Boss POI vaults, underground storm bunkers",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      accentGlow: "rgba(168, 85, 247, 0.2)",
    },
  ];

  return (
    <section id="comparison" className="py-16 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech tracking-wider uppercase mb-3">
          <Crosshair className="w-3.5 h-3.5" />
          <span>CLASSIFIED LOOT DOSSIER</span>
        </div>
        <h2 className="font-tech text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
          FORTNITE CHEST TYPES &amp; SPAWN PROBABILITY
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
          Real-time spawn frequencies, guaranteed drop tiers, and tactical routing data.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-void-900/90 shadow-2xl backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-void-950 font-tech text-xs tracking-wider uppercase text-slate-400">
                <th className="py-4 px-5 sm:px-6 font-bold">Chest Classification</th>
                <th className="py-4 px-5 sm:px-6 font-bold">Spawn Odds</th>
                <th className="py-4 px-5 sm:px-6 font-bold">Guaranteed Loot Drops</th>
                <th className="py-4 px-5 sm:px-6 font-bold">Optimal Hotspots</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans text-slate-300">
              {chestComparisons.map((row, index) => (
                <tr key={index} className="hover:bg-void-850/50 transition-colors group">
                  <td className="py-4 px-5 sm:px-6 font-bold text-white whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-tech text-base tracking-wide text-white group-hover:text-amber-400 transition-colors">
                        {row.type}
                      </span>
                      <span className={`inline-block w-fit font-tech text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded border mt-1 ${row.badgeColor}`}>
                        {row.rarity}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 sm:px-6 font-mono text-xs text-amber-300">
                    {row.spawnRate}
                  </td>
                  <td className="py-4 px-5 sm:px-6 text-slate-300 leading-relaxed max-w-xs">
                    {row.guaranteedLoot}
                  </td>
                  <td className="py-4 px-5 sm:px-6 text-slate-400 text-xs">
                    {row.bestLocations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500 px-2">
        <span>* Verified telemetry across competitive FNCS match datasets.</span>
        <span className="hidden sm:inline-block text-amber-400/80">TRACKCHEST COMPANION MATRIX</span>
      </div>
    </section>
  );
}
