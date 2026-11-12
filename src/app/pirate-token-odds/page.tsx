import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PirateTokenCalculator } from "@/components/PirateTokenCalculator";
import { ArrowLeft, Compass, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Pirate Token Odds Calculator — Fortnite Chest Drop Rates | TrackChest",
  description: "Calculate exact drop odds for Fortnite Pirate Token chests, Buried Treasure maps, and Medallion vaults. Chapter 6 updated loot odds simulator.",
  alternates: {
    canonical: `${siteConfig.url}/pirate-token-odds`,
  },
  openGraph: {
    title: "Pirate Token Odds Calculator — Fortnite Chest Drop Rates",
    description: "Calculate exact drop odds for Fortnite Pirate Token chests, Buried Treasure maps, and Medallion vaults.",
    url: `${siteConfig.url}/pirate-token-odds`,
    siteName: siteConfig.name,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirate Token Odds Calculator — Fortnite Chest Drop Rates",
    description: "Calculate exact drop odds for Fortnite Pirate Token chests and Buried Treasure maps.",
  },
};

export default function PirateTokenOddsPage() {
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
          Simulate statistical loot probabilities for Fortnite Pirate Token chests, Buried Treasure X-marks, and Cursed Vaults.
        </p>
      </div>

      {/* 交互式计算器客户端插槽 */}
      <PirateTokenCalculator />

      {/* 深度科普知识 */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <h2 className="text-base font-bold text-white">
          How Pirate Token Chests &amp; Treasure Maps Work in Fortnite
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          During pirate-themed collaborations and seasonal events in Fortnite Chapter seasons, special pirate currency tokens and Buried Treasure maps enter the active loot pool. Understanding the mechanics behind these items is key for maximizing tournament and ranked game value:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-semibold text-white">Buried Treasure Maps</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              When picked up, a golden beam of light connects your player model to an X-mark buried in the ground. Digging the mound unearths a Pirate Chest with near-guaranteed Legendary weapons and double shield stacks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-semibold text-white">Cursed Medallion Vaults</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              Pirate NPC bosses guard locked vaults requiring medallion keys. These vaults hold the highest probability (85%+) for Mythic artillery and maximum gold bar caches.
            </p>
          </div>
        </div>
      </section>

      {/* 策略建议 */}
      <section className="p-5 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          Competitive Strategy for Pirate Crates
        </h2>
        <ul className="space-y-2 text-xs text-[#9a9a9a]">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Prioritize digging buried maps outside the storm circle during Mid-Game rotations.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Carry mobility items (Flint-Knock or Shockwaves) to escape ambushers camping treasure locations.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Use our live counter to record total pirate chests opened across your seasonal matches.</span>
          </li>
        </ul>
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
