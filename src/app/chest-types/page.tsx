import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CHEST_TYPES } from "@/config/chestTypes";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Types Encyclopedia — Spawns, Rarities & Loot | TrackChest",
  description: "Complete guide to all Fortnite chest types. Learn spawn rates, guaranteed loot tiers, and optimal drop spots for Standard, Rare, Sprite, and Vault chests.",
  alternates: {
    canonical: `${siteConfig.url}/chest-types`,
  },
  openGraph: {
    title: "Fortnite Chest Types Encyclopedia — Spawns, Rarities & Loot",
    description: "Complete guide to all Fortnite chest types: Standard, Rare, Sprite, and Vault chests.",
    url: `${siteConfig.url}/chest-types`,
    siteName: siteConfig.name,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Types Encyclopedia",
    description: "Learn spawn rates and guaranteed drops across all Fortnite chest rarities.",
  },
};

export default function ChestTypesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fortnite Chest Types & Rarities Encyclopedia",
    description: "Overview of all active chest variants and rarities in Fortnite Battle Royale.",
    itemListElement: CHEST_TYPES.map((chest, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: chest.name,
      description: `${chest.rarity} tier chest: ${chest.typicalLoot}. ${chest.oddsNote}`,
    })),
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "rarity-common";
      case "Rare":
        return "rarity-rare";
      case "Epic":
        return "rarity-epic";
      case "Special":
        return "rarity-legendary";
      case "Mythic":
        return "rarity-mythic";
      default:
        return "rarity-common";
    }
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      {/* 专享 ItemList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
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
          Loot Crate Glossary
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Fortnite Chest Types &amp; Rarities
        </h1>
        <p className="text-xs text-[#9a9a9a]">
          An authoritative reference to every chest variant currently active in Fortnite Battle Royale Chapter 6.
        </p>
      </div>

      {/* 6 大宝箱卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {CHEST_TYPES.map((chest) => {
          const rarityClass = getRarityClass(chest.rarity);

          return (
            <div
              key={chest.id}
              className={`p-4 rounded-xl flex flex-col justify-between space-y-3 ${rarityClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wider">
                    {chest.rarity}
                  </span>
                  <span className="text-[10px] font-mono text-[#888]">Spawn: {chest.oddsNote}</span>
                </div>
                <h2 className="text-base font-bold text-white">{chest.name}</h2>
                <p className="text-xs text-[#9a9a9a] mt-1.5 leading-relaxed">
                  <strong className="text-white">Drops:</strong> {chest.typicalLoot}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-end">
                <Link
                  href="/#tracker-app"
                  className="text-xs text-[#ffc93c] hover:underline font-medium"
                >
                  Track in Live Counter &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-6 border-t border-[#2e2e2e] flex items-center justify-between text-xs">
        <Link href="/" className="text-[#ffc93c] hover:underline">
          &larr; Back to Main Tracker
        </Link>
        <Link href="/pirate-token-odds" className="text-[#9a9a9a] hover:text-white underline">
          Pirate Token Odds &rarr;
        </Link>
      </div>
    </div>
  );
}
