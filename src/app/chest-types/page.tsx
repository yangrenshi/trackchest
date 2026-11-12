import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CHEST_TYPES } from "@/config/chestTypes";
import { ArrowLeft, Box, Sparkles, Shield, MapPin, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Types Encyclopedia — Spawns, Rarities & Loot",
  description: "Complete guide to all Fortnite chest types. Learn spawn rates, guaranteed loot tiers, and optimal drop spots for Standard, Rare, Sprite, and Vault chests.",
  alternates: {
    canonical: `${siteConfig.url}/chest-types`,
  },
};

export default function ChestTypesPage() {
  return (
    <div className="py-12 px-4 md:px-6 max-w-5xl mx-auto space-y-12 leading-relaxed font-sans">
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
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase tracking-widest">
          <Box className="w-3.5 h-3.5" />
          <span>LOOT CRATE GLOSSARY</span>
        </div>
        <h1 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          FORTNITE CHEST TYPES &amp; RARITY TIERS
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          An authoritative reference guide to every chest variant currently active in Fortnite Battle Royale Chapter 6.
        </p>
      </div>

      {/* 6 大宝箱详细卡片 */}
      <div className="space-y-6">
        {CHEST_TYPES.map((chest) => (
          <div
            key={chest.id}
            className="p-6 sm:p-8 rounded-[2rem] bg-void-900 border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center space-x-2">
                <span
                  className="font-tech text-xs uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded border"
                  style={{
                    backgroundColor: `${chest.color}15`,
                    borderColor: `${chest.color}40`,
                    color: chest.color,
                  }}
                >
                  {chest.rarity} TIER
                </span>
                <span className="text-xs font-mono text-slate-500">Spawn: {chest.oddsNote}</span>
              </div>
              <h2 className="font-tech text-2xl font-bold uppercase text-white">
                {chest.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-slate-200">Guaranteed Loot:</strong> {chest.typicalLoot}
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/#tracker-app"
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-tech text-xs uppercase tracking-wider font-extrabold bg-void-850 hover:bg-amber-400 hover:text-slate-950 text-slate-200 border border-slate-700 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>TRACK THIS CHEST &rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 底部内链导航 */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <Link href="/" className="text-amber-400 font-bold hover:underline">
          &larr; Back to TrackChest Live Counter
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/fortnite-chest-counter" className="text-slate-400 hover:text-amber-400 underline">
            Chest Counter View
          </Link>
          <Link href="/pirate-token-odds" className="text-slate-400 hover:text-amber-400 underline">
            Pirate Token Odds
          </Link>
        </div>
      </div>
    </div>
  );
}
