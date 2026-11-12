import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CHEST_TYPES } from "@/config/chestTypes";
import { CoreToolSlot } from "@/components/CoreToolSlot";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Counter — Categorized Multi-Chest Counter",
  description: "Free Fortnite chest counter tool. Track standard, rare, and event chests by category with instant tap counting for solos and competitive teams.",
  alternates: {
    canonical: `${siteConfig.url}/fortnite-chest-counter`,
  },
};

export default function ChestCounterPage() {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-10">
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
          Categorized Multi-Crate Counter
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Fortnite Chest Counter
        </h1>
        <p className="text-sm text-[#9a9a9a] max-w-2xl">
          Log your opened crates categorized by rarity tiers to calculate your drop rate efficiency and shield probability.
        </p>
      </div>

      <CoreToolSlot />

      <section className="p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-4">
        <h2 className="text-lg font-bold text-white">
          Why Use a Categorized Chest Counter Over a Generic Tally?
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Standard tally counters only record a single total. In modern competitive Fortnite, knowing whether you opened 5 standard chests or 3 rare chests determines your expected shield and surge firepower. 
          Our categorized counter splits counts between:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {CHEST_TYPES.map((t) => (
            <div key={t.id} className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e] space-y-1">
              <span className="font-semibold text-white block">{t.name}</span>
              <p className="text-[#9a9a9a] text-[11px]">{t.typicalLoot}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-[#2e2e2e] flex items-center justify-between text-xs text-[#9a9a9a]">
          <span>Explore our full companion suite:</span>
          <Link href="/" className="text-[#ffc93c] hover:underline">
            &larr; Return to Home Tracker
          </Link>
        </div>
      </section>
    </div>
  );
}
