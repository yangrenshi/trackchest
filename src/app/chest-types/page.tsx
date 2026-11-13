import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DETAILED_CHEST_TYPES } from "@/config/chestTypes";
import { ArrowLeft, MapPin, Eye, Compass, AlertCircle, PackageCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Types — Chapter 7 Spawns",
  description: "Chapter 7 chest guide: spawn locations, visual cues and routing for Standard, Rare, Sprite and Vault chests, plus Pirate Crates and Safes.",
  alternates: {
    canonical: `${siteConfig.url}/chest-types`,
  },
  openGraph: {
    title: "Fortnite Chest Types — Chapter 7 Spawns",
    description: "Detailed tactical breakdown of all 6 container variants active in Fortnite Chapter 7.",
    url: `${siteConfig.url}/chest-types`,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Chest Types Encyclopedia — TrackChest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Types — Chapter 7 Spawns",
    description: "Learn tactical spawn details across all Fortnite Chapter 7 chest rarities.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function ChestTypesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fortnite Chest Types & Rarities Encyclopedia (Chapter 7)",
    description: "Comprehensive guide to all active container variants in Fortnite Chapter 7 Treasure Hunters.",
    itemListElement: DETAILED_CHEST_TYPES.map((chest, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: chest.name,
      description:
        chest.id === "pirate"
          ? `${chest.rarity} tier container: ${chest.whereItSpawns} ${chest.typicalLoot} Guarantees high-tier loot but does not roll on the 1 in 137,500 token table.`
          : `${chest.rarity} tier container: ${chest.whereItSpawns} ${chest.typicalLoot}`,
    })),
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-slate-700/40 text-slate-300 border-slate-600/40";
      case "Rare":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
      case "Epic":
        return "bg-purple-500/20 text-purple-300 border-purple-500/40";
      case "Mythic":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "Special":
        return "bg-orange-500/20 text-orange-300 border-orange-500/40";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
            Container Field Guide
          </span>
          <span className="text-[11px] font-mono text-[#9a9a9a] bg-[#242424] border border-[#2e2e2e] px-2 py-0.5 rounded">
            Chapter 7 — Treasure Hunters • Updated Nov 13, 2026
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Fortnite Chest Types &amp; Spawn Tiers Encyclopedia
        </h1>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          A comprehensive tactical guide to every container variant currently active in Fortnite Battle Royale Chapter 7 (Treasure Hunters mini-season, running Nov 1 – Dec 4, 2026). Each entry outlines physical spawn locations, visual/audio identification cues, competitive rerouting utility, and common player misconceptions.
        </p>
      </div>

      {/* 6 大详细宝箱章节 (总字数 750+ 词) */}
      <div className="space-y-6">
        {DETAILED_CHEST_TYPES.map((chest) => {
          const destinationUrl = (chest.id === "regular" || chest.id === "cash" || chest.id === "safe")
            ? "/#tracker-app" 
            : chest.id === "pirate" 
              ? "/pirate-token-odds" 
              : "/fortnite-chest-counter";

          return (
            <article
              key={chest.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-4 hover:border-[#3e3e3e] transition-colors"
            >
              {/* 标头 */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2e2e2e]">
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-1.5 ${getRarityBadge(chest.rarity)}`}>
                    {chest.rarity} Tier &bull; {chest.badge}
                  </span>
                  <h2 className="text-lg font-bold text-white">{chest.name}</h2>
                </div>

                <a
                  href={destinationUrl}
                  className="text-xs text-[#ffc93c] hover:underline font-medium flex items-center space-x-1"
                >
                  <span>
                    {(chest.id === "regular" || chest.id === "cash" || chest.id === "safe")
                      ? "Track in Single Counter"
                      : chest.id === "pirate"
                        ? "Calculate Token Odds"
                        : "Track in 4-Column View"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 战术四大维度 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="space-y-1 p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
                  <span className="font-semibold text-white flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ffc93c] shrink-0" />
                    <span>Where It Spawns</span>
                  </span>
                  <p className="text-[#9a9a9a] leading-relaxed">
                    {chest.whereItSpawns}
                  </p>
                </div>

                <div className="space-y-1 p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
                  <span className="font-semibold text-white flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#49d6ff] shrink-0" />
                    <span>How to Identify</span>
                  </span>
                  <p className="text-[#9a9a9a] leading-relaxed">
                    {chest.howToIdentify}
                  </p>
                </div>

                <div className="space-y-1 p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
                  <span className="font-semibold text-white flex items-center space-x-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>Is It Worth Rerouting?</span>
                  </span>
                  <p className="text-[#9a9a9a] leading-relaxed">
                    {chest.worthRerouting}
                  </p>
                </div>

                <div className="space-y-1 p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
                  <span className="font-semibold text-white flex items-center space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#f0a6ff] shrink-0" />
                    <span>Common Misconceptions</span>
                  </span>
                  <p className="text-[#9a9a9a] leading-relaxed">
                    {chest.commonMisconceptions}
                  </p>
                </div>
              </div>

              {/* 典型掉落条 */}
              <div className="p-3 rounded-xl bg-[#181818] border border-[#282828] flex items-start space-x-2 text-xs">
                <PackageCheck className="w-4 h-4 text-[#ffd510] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-white">Typical Loot Yield: </strong>
                  <span className="text-[#aaa]">{chest.typicalLoot}</span>
                </div>
              </div>

              {/* 4 列计数器排除原因与专项导流提示 */}
              {chest.id === "pirate" && (
                <div className="p-3 rounded-xl bg-[#ffc93c]/10 border border-[#ffc93c]/30 text-xs text-[#d4d4d4] flex flex-wrap items-center justify-between gap-2">
                  <span>
                    <strong className="text-[#ffc93c]">4-Column Note:</strong> Tracked separately because it is not one of the four counter categories (Standard, Rare, Sprite, Vault) — its loot is guaranteed, not rolled.
                  </span>
                  <Link
                    href="/pirate-token-odds"
                    className="text-xs font-semibold text-[#ffd510] underline flex items-center space-x-1"
                  >
                    <span>Track on Pirate Odds Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {(chest.id === "cash" || chest.id === "safe") && (
                <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e] text-xs text-[#9a9a9a]">
                  <strong className="text-white">4-Column Note:</strong> Safes only dispense gold and healing, so they are not counted in the 4-column battle counter.
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* 底部导流 */}
      <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] text-xs text-[#9a9a9a] leading-relaxed">
        <p>
          Ready to log your containers during matches? Use our fast <Link href="/" className="text-[#ffc93c] underline font-medium">chest tracker Fortnite</Link> companion to count single-button opens, or launch the 4-column counter for squad POI breakdowns.
        </p>
      </div>

      <div className="pt-6 border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link href="/fortnite-chest-counter" className="text-[#9a9a9a] hover:text-white underline">
          &larr; Fortnite Chest Counter (4-Column)
        </Link>
        <Link href="/" className="text-[#ffc93c] hover:underline font-medium">
          Main Single Counter
        </Link>
        <Link href="/pirate-token-odds" className="text-[#9a9a9a] hover:text-white underline">
          Pirate Token Odds (Official 1/137.5k) &rarr;
        </Link>
      </div>
    </div>
  );
}
