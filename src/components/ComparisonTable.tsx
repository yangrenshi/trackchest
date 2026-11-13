import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ComparisonTable() {
  const chestComparisons = [
    {
      type: "Standard Chest",
      rarity: "Common",
      spawnRate: "High (~70%–80% community est.)",
      guaranteedLoot: "1 Weapon (Grey to Rare), Ammo, Consumable, 30 Mats",
      bestLocations: "Houses, attics, roofs, barns",
      badgeClass: "rarity-common",
      link: null,
    },
    {
      type: "Rare Chest (Blue Glow)",
      rarity: "Rare",
      spawnRate: "Low (~2%–5% community est.)",
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
      spawnRate: "1 in 137,500 (Official)",
      guaranteedLoot: "Shop unlock, Golden skin lottery (1 in 1.56M), Mythic loot",
      bestLocations: "Any regular / rare container or buried map spot",
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
          Spawn frequencies, guaranteed loot tiers, and optimal POI locations across Chapter 7 Treasure Hunters (Season live Nov 1 – Dec 4, 2026).
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
    </section>
  );
}
