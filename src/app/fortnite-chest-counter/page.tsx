import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CategorizedCounterView } from "@/components/CategorizedCounterView";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter | TrackChest",
  description: "Dedicated 4-column Fortnite chest counter. Track Standard, Rare, Sprite, and Vault chests in parallel columns with instant tap buttons.",
  alternates: {
    canonical: `${siteConfig.url}/fortnite-chest-counter`,
  },
  openGraph: {
    title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter",
    description: "Dedicated 4-column Fortnite chest counter. Track Standard, Rare, Sprite, and Vault chests in parallel columns.",
    url: `${siteConfig.url}/fortnite-chest-counter`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter",
    description: "Dedicated 4-column Fortnite chest counter for competitive players.",
  },
};

export default function ChestCounterPage() {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
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
          4-Column Parallel Tally
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Fortnite Chest Counter
        </h1>
        <p className="text-xs text-[#9a9a9a]">
          Independent multi-column counter designed for players tracking specific crate categories simultaneously.
        </p>
      </div>

      {/* 专享四列独立大按键分栏计数台 */}
      <CategorizedCounterView />

      {/* 专属科普知识 */}
      <section className="p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h2 className="text-base font-bold text-white">
          Why Use a Multi-Column Counter Over a Single Button?
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          While our homepage focuses on zero-distraction solo speed-tapping, competitive duo and squad teams often assign players specific POI sections (e.g. Player 1 loots standard attics, Player 2 cracks open the underground vault).
        </p>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          With this 4-column categorized counter, your team maintains exact tallies across all four major container rarities without losing individual breakdowns.
        </p>

        <div className="pt-3 border-t border-[#2e2e2e] flex items-center justify-between text-xs">
          <Link href="/" className="text-[#ffc93c] hover:underline">
            &larr; Return to Single-Button Tracker
          </Link>
          <Link href="/chest-types" className="text-[#9a9a9a] hover:text-white underline">
            View Chest Types Encyclopedia &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
