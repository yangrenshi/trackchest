import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CategorizedCounterView } from "@/components/CategorizedCounterView";
import { ArrowLeft, Users, CheckCircle2, Shield, HardDrive, Swords, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter (Chapter 7)",
  description: "Dedicated 4-column chest tracker Fortnite squads use. Track Standard, Rare, Sprite, and Vault chests in parallel columns with instant tap buttons.",
  alternates: {
    canonical: `${siteConfig.url}/fortnite-chest-counter`,
  },
  openGraph: {
    title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter",
    description: "Dedicated 4-column chest tracker Fortnite squads use to track Standard, Rare, Sprite, and Vault chests in parallel.",
    url: `${siteConfig.url}/fortnite-chest-counter`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Chest Counter — TrackChest 4-Column Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Counter — 4-Column Categorized Loot Counter",
    description: "Dedicated 4-column chest tracker Fortnite squads use for competitive matches.",
    images: [`${siteConfig.url}/opengraph-image`],
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
            Competitive Squad Companion
          </span>
          <span className="text-[11px] font-mono text-[#9a9a9a] bg-[#242424] border border-[#2e2e2e] px-2 py-0.5 rounded">
            Chapter 7 — Treasure Hunters • Updated Nov 13, 2026
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Fortnite Chest Counter — 4-Column Categorized Tally
        </h1>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          This 4-column view is the chest tracker Fortnite squads use when each player loots a designated container tier. Track Standard, Rare Blue, Sprite Shrine, and Boss Vault containers in parallel columns without losing itemized breakdowns.
        </p>
      </div>

      {/* 专享四列独立大按键分栏计数台 */}
      <CategorizedCounterView />

      {/* 4 列计数器实机比赛记分面板截图 */}
      <figure className="my-8 space-y-2.5">
        <div className="rounded-2xl overflow-hidden border border-[#2e2e2e] bg-[#161616] shadow-xl">
          <Image
            src="/images/fortnite-chest-counter-match-hud.svg"
            alt="Fortnite Chest Counter 4-column live match HUD telemetry display showing categorized counts for Standard, Rare, Sprite, and Boss Vault chests"
            width={1200}
            height={675}
            priority
            className="w-full h-auto block"
          />
        </div>
        <figcaption className="text-center text-xs text-[#888]">
          <strong className="text-[#d4d4d4]">Real-time Match HUD Telemetry:</strong> An active 4-column squad session logged at Retail Row (Chapter 7 Treasure Hunters), totaling 20 containers with live Pirate Token probability calculation.
        </figcaption>
      </figure>

      {/* 战术分工四列实操场景 */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Team Role Division Across the 4 Columns
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          In high-tier ranked lobbies and tournament scrims, opening containers as a chaotic free-for-all leads to lopsided ammunition reserves and wasted shield rotations. Competitive squads assign each player a specific container tier:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          {/* 第 1 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9a9a9a]" />
              <h3 className="font-bold text-white">Column 1: Standard Chests (Secondary Fragger)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the entry fragger clearing outer perimeter buildings, residential attics, and rooftops. Their job is vacuuming baseline assault rifles, shotguns, and mini shields to establish early defensive perimeter angles.
            </p>
          </div>

          {/* 第 2 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49d6ff]" />
              <h3 className="font-bold text-white">Column 2: Rare Blue Chests (IGL Priority)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the In-Game Leader (IGL) hitting verified subterranean bunker nodes and weather control stations. Rare chests guarantee Blue-or-better combat weapons, ensuring the squad secures surge tag capability before Zone 2.
            </p>
          </div>

          {/* 第 3 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0a6ff]" />
              <h3 className="font-bold text-white">Column 3: Sprite Shrines (Scout / Rotator)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the designated support or mobility scout who drops on peripheral elemental altars. Tracking these ensures your squad collects required kinetic movement items and utility shards before meeting up at the central POI.
            </p>
          </div>

          {/* 第 4 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd510]" />
              <h3 className="font-bold text-white">Column 4: Boss Vault Bunkers (Heavy Anchor)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the teammate neutralizing NPC bosses, picking up boss keycards, or cracking vault terminals. Records boss chest loot to confirm gold medallions and mythic artillery are secured.
            </p>
          </div>
        </div>
      </section>

      {/* 赛后语音核对 SOP */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3.5">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
          <Swords className="w-4 h-4 text-[#ffc93c]" />
          <span>Squad Pre-Rotation Reconciliation Checklist</span>
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Before your team initiates your first macro rotation out of your home POI, spend 5 seconds running this quick Discord audio check:
        </p>

        <ul className="space-y-2 text-xs text-[#9a9a9a]">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span><strong className="text-white">Container Threshold:</strong> Confirm total team containers opened exceeds 12 chests. Anything less than 12 containers leaves at least one teammate with an incomplete shield stack.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span><strong className="text-white">Surge Firepower:</strong> If Rare Blue Chests equals 0, reallocate high-power assault rifle ammo to your primary long-range beam player before crossing open fields.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span><strong className="text-white">Pirate Token Rolls:</strong> If you looted 15+ containers this match, you contributed valuable rolls toward the 1 in 137,500 Pirate Shop Access Token seasonal jackpot!</span>
          </li>
        </ul>
      </section>

      {/* 存档与重置机制 */}
      <section className="p-5 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2.5 text-xs text-[#9a9a9a]">
        <div className="flex items-center space-x-2 text-white font-bold">
          <HardDrive className="w-4 h-4 text-[#49d6ff]" />
          <span>Local Persistence &amp; Session Management</span>
        </div>
        <p className="leading-relaxed">
          All 4 columns update your browser&apos;s LocalStorage on every single tap. Designed as an offline-ready chest tracker Fortnite duos and trios can run without tab lags, you can refresh the page, close your browser between tournaments, or lock your phone screen without losing count. When starting a fresh competitive set, click &ldquo;Reset All&rdquo; to clear all four columns simultaneously.
        </p>
      </section>

      <div className="pt-4 border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link href="/" className="text-[#ffc93c] hover:underline font-medium">
          &larr; Return to Single-Button Tracker
        </Link>
        <Link href="/pirate-token-odds" className="text-[#9a9a9a] hover:text-white underline">
          Check Pirate Token Drop Odds &rarr;
        </Link>
      </div>
    </div>
  );
}
