import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CHEST_TYPES } from "@/config/chestTypes";
import { CoreToolSlot } from "@/components/CoreToolSlot";
import { ArrowLeft, Box, Sparkles, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Counter — Categorized Multi-Chest Counter",
  description: "Free Fortnite chest counter tool. Track standard, rare, and event chests by category with instant tap counting for solos and competitive teams.",
  alternates: {
    canonical: `${siteConfig.url}/fortnite-chest-counter`,
  },
};

export default function ChestCounterPage() {
  return (
    <div className="py-12 px-4 md:px-6 max-w-5xl mx-auto space-y-12">
      {/* 顶部返回首页导航 */}
      <div className="flex items-center space-x-2">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-tech font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors bg-void-900 border border-slate-800 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO MAIN TRACKER</span>
        </Link>
      </div>

      {/* 页面主标题区 */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MULTI-COLUMN CATEGORY COUNTER</span>
        </div>
        <h1 className="font-tech text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          FORTNITE CHEST COUNTER
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Looking for a dedicated <strong className="text-white">chest counter for Fortnite</strong>? Log your opened crates categorized by rarity tiers to calculate your drop rate efficiency.
        </p>
      </div>

      {/* 核心计数工具组件 */}
      <div className="rounded-[2.5rem] p-2 bg-gradient-to-b from-amber-500/20 via-slate-800/20 to-transparent border border-amber-500/30">
        <CoreToolSlot />
      </div>

      {/* 专属科普知识区 */}
      <section className="p-8 rounded-[2rem] bg-void-900 border border-slate-800 space-y-6">
        <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-white">
          Why Use a Categorized Chest Counter Over a Generic Tally?
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Standard tally counters only record a single total. In modern competitive Fortnite, knowing whether you opened 5 standard chests or 3 rare chests determines your expected shield and surge firepower. 
          Our <strong>Fortnite chest counter</strong> allows you to split counts between:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {CHEST_TYPES.map((t) => (
            <div key={t.id} className="p-4 rounded-xl bg-void-850 border border-slate-800 space-y-1">
              <span className="font-tech text-sm font-bold text-amber-300 uppercase">{t.name}</span>
              <p className="text-slate-400">{t.typicalLoot}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Explore our full companion suite:</span>
          <Link href="/" className="text-amber-400 font-bold hover:underline">
            &larr; Return to Home Tracker
          </Link>
        </div>
      </section>
    </div>
  );
}
