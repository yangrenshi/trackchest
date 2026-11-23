import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SEASON_CONFIG } from "@/config/season";

export function ComparisonTable() {
  const namedLocations = [
    {
      name: "Plunder Port",
      tier: "Pirate Harbor",
      description: "Sprawling pirate shipping harbor; dock warehouses, crane platforms, and coastal galleon decks shelter multiple wooden chests. Rotates each season — check before you drop.",
    },
    {
      name: "Busy Bay",
      tier: "Coastal Settlement",
      description: "Dense bayfront settlement; multi-tier seaside buildings, boardwalk shacks, and moored vessels contain rapid chest rotations. Rotates each season — check before you drop.",
    },
    {
      name: "The Chest",
      tier: "Landmark Cache",
      description: "High-value seasonal landmark; concentrated off-spawn containers and rare loot nodes cluster around the monument structure. Rotates each season — check before you drop.",
    },
    {
      name: "Fortune's Fort (Lil' Uzi's Stronghold)",
      tier: "Fortified Stronghold",
      description: "Massive stone fortress; elevated battlements, dungeon corridors, and interior armory nooks house dense chest clusters. Rotates each season — check before you drop.",
    },
    {
      name: "Loot Lagoon (Buggy's Beachhead)",
      tier: "Lagoon Basin",
      description: "Sprawling water basin; grounded pirate vessels, shoreline encampments, and rocky islet nooks feature scattered chest nodes. Rotates each season — check before you drop.",
    },
    {
      name: "Rubber Resort (Friendship Villa)",
      tier: "Beachfront Resort",
      description: "Luxury beachfront compound; multi-floor villa suites, poolside cabanas, and private yacht docks feature high-density chest routes. Rotates each season — check before you drop.",
    },
  ];

  const chestComparisons = [
    {
      type: "Standard Chest",
      rarity: "Common",
      spawnRate: "High (~70%–80%, player-community estimate, not official Epic data)",
      guaranteedLoot: "1 Weapon (Grey to Rare), Ammo, Consumable, 30 Mats",
      bestLocations: "Houses, attics, roofs, barns",
      badgeClass: "rarity-common",
      link: null,
    },
    {
      type: "Rare Chest (Blue Glow)",
      rarity: "Rare",
      spawnRate: "Low (~2%–5%, player-community estimate, not official Epic data)",
      guaranteedLoot: "Guaranteed Blue/Purple/Gold weapon + Big Pot / Chug Splash",
      bestLocations: "High-tier POIs, basements, landmarks",
      badgeClass: "rarity-rare",
      link: null,
    },
    {
      type: "Sprite / Elemental Chest",
      rarity: "Epic",
      spawnRate: "Biome exclusive",
      guaranteedLoot: "Elemental powers, seasonal utility, mobility, shields",
      bestLocations: "Elemental shrines, enchanted zones",
      badgeClass: "rarity-epic",
      link: null,
    },
    {
      type: "Pirate Token (Shop Access)",
      rarity: "Special",
      spawnRate: "1 in 137,500 (community-tracked)",
      guaranteedLoot: "Shop unlock, Golden skin lottery (1 in 1.56M), Mythic loot",
      bestLocations: "Any standard, rare, sprite, or vault container — not Pirate Crates",
      badgeClass: "rarity-legendary",
      link: "/pirate-token-odds",
    },
    {
      type: "Faction Vault Bunkers",
      rarity: "Mythic",
      spawnRate: "100% in vaults",
      guaranteedLoot: "2x Legendary weapons, Medallions, weapon mods",
      bestLocations: "Boss POI vaults, storm bunkers",
      badgeClass: "rarity-mythic",
      link: null,
    },
  ];

  return (
    <section id="comparison" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-16">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Fortnite Chest Tracker: Chest Types &amp; Spawn Odds
        </h2>
        <p className="text-sm text-[#9a9a9a] mt-1">
          Spawn frequencies, guaranteed loot tiers, and optimal POI locations across {SEASON_CONFIG.name} ({SEASON_CONFIG.seasonLiveText}).
        </p>
      </div>

      <div className="rounded-2xl bg-[#1d1d1d] glass-rim overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#2e2e2e] bg-[#161616] text-[#9a9a9a] text-xs font-semibold">
                <th className="py-3 px-4 sm:px-5">Chest Variant</th>
                <th className="py-3 px-4 sm:px-5">Spawn Chance</th>
                <th className="py-3 px-4 sm:px-5">Guaranteed Drops</th>
                <th className="py-3 px-4 sm:px-5">Best Drop Spots</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e2e2e] text-[#d4d4d4]">
              {chestComparisons.map((row, index) => (
                <tr key={index} className="hover:bg-[#242424] transition-colors">
                  <td className="py-3.5 px-4 sm:px-5 font-medium text-white whitespace-nowrap">
                    <div className="flex flex-col">
                      {row.link ? (
                        <Link
                          href={row.link}
                          className="text-[#ffc93c] hover:underline flex items-center space-x-1"
                        >
                          <span>{row.type}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span>{row.type}</span>
                      )}
                      <span className={`inline-block w-fit text-[10px] font-semibold px-2 py-0.5 rounded mt-1 ${row.badgeClass}`}>
                        {row.rarity}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-[#ffc93c] tnum">
                    {row.link ? (
                      <Link href={row.link} className="hover:underline font-bold text-[#ffd510]">
                        {row.spawnRate} &rarr;
                      </Link>
                    ) : (
                      row.spawnRate
                    )}
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-xs text-[#d4d4d4] leading-relaxed">
                    {row.guaranteedLoot}
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 text-xs text-[#9a9a9a]">
                    {row.bestLocations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 新增：当前赛季具名地点宝箱刷新路线与点位透视 */}
      <div id="poi-chest-routes" className="mt-8 pt-8 border-t border-[#262626] space-y-4 scroll-mt-20">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#ffc93c]" />
            <span>{SEASON_CONFIG.chapter} Named POI Chest Routes &amp; Spawn Spots</span>
          </h3>
          <p className="text-xs text-[#9a9a9a] mt-1 leading-relaxed">
            Targeting high-density container drops accelerates your match economy. Compare these commonly reported POI chest clusters across {SEASON_CONFIG.name}, or review the comprehensive visual guides in our <Link href="/chest-types" className="text-[#ffc93c] underline font-medium">Fortnite chest types encyclopedia</Link>:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {namedLocations.map((loc) => (
            <div key={loc.name} className="p-3.5 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc93c]" />
                  <span>{loc.name}</span>
                </span>
                <span className="text-[10px] font-mono text-[#888] bg-[#121212] px-1.5 py-0.5 rounded border border-[#262626]">
                  {loc.tier}
                </span>
              </div>
              <p className="text-[11px] text-[#9a9a9a] leading-relaxed">
                {loc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
