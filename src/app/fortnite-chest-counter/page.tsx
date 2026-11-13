import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CategorizedCounterView } from "@/components/CategorizedCounterView";
import { 
  ArrowLeft, Users, CheckCircle2, Shield, HardDrive, Swords, Sparkles, 
  HelpCircle, Compass, Target, Trophy, Flame
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chest Counter Fortnite — 4-Column Tool",
  description: "Chest counter Fortnite squads use to track Standard, Rare, Sprite, and Vault chests in parallel columns during Chapter 7 competitive matches.",
  alternates: {
    canonical: `${siteConfig.url}/fortnite-chest-counter`,
  },
  openGraph: {
    title: "Chest Counter Fortnite — 4-Column Tool",
    description: "Chest counter Fortnite squads use to track Standard, Rare, Sprite, and Vault chests in parallel columns during Chapter 7 matches.",
    url: `${siteConfig.url}/fortnite-chest-counter`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Chest Counter Fortnite — TrackChest 4-Column Squad Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chest Counter Fortnite — 4-Column Tool",
    description: "Chest counter Fortnite squads use for competitive Chapter 7 matches.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function ChestCounterPage() {
  // 专享 WebApplication 结构化数据 (拉满 10/10)
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fortnite Chest Counter — 4-Column Squad Companion",
    url: `${siteConfig.url}/fortnite-chest-counter`,
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Specialized 4-column categorized chest tracker Fortnite competitive squads use for Standard, Rare Blue, Sprite Shrine, and Boss Vault containers.",
  };

  // 专享 FAQ 结构化数据 (拉满 10/10)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does this 4-column Fortnite chest counter work on mobile phones during console play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The 4-column Fortnite chest counter is built as a fully responsive web tool. You can open it on your iOS or Android smartphone placed beside your monitor, controller, or keyboard to log chests without ever alt-tabbing.",
        },
      },
      {
        "@type": "Question",
        name: "Why are Pirate Crates and Commercial Safes not included in these 4 columns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial Safes exclusively drop gold bars and healing rather than weapons, while Pirate Crates operate under Epic Games' 1 in 137,500 lottery odds. You can track Pirate Crates separately using our dedicated Pirate Token Odds Calculator.",
        },
      },
      {
        "@type": "Question",
        name: "Does this Fortnite chest tracker require linking my Epic Games account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. TrackChest requires zero logins, zero passwords, and zero Epic Games OAuth authorization. It runs completely client-side in your browser, keeping your account 100% secure from bans or credential leaks.",
        },
      },
      {
        "@type": "Question",
        name: "Will our squad's tally reset if we refresh the page between matches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All 4 columns automatically synchronize to your browser's LocalStorage on every single button press. You can lock your phone screen or refresh your tab without losing your tally.",
        },
      },
    ],
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      {/* 结构化数据 JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Competitive Squad Companion
          </span>
          <span className="text-[11px] font-mono text-[#9a9a9a] bg-[#242424] border border-[#2e2e2e] px-2 py-0.5 rounded">
            Chapter 7 — Treasure Hunters • Updated Nov 13, 2026
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Chest Counter Fortnite — 4-Column Squad Loot Companion
        </h1>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          The dedicated 4-column chest counter Fortnite squads and tournament duos rely on during competitive rotations. Log Standard, Rare Blue, Sprite Shrine, and Boss Vault containers in parallel columns with zero latency and instant LocalStorage backups.
        </p>
      </div>

      {/* 专享四列独立大按键分栏计数台 (带规范 H2 标头修复跳级) */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Interactive 4-Column Squad Chest Tally Tool
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Use the large tap buttons below during matches. Assign each squad member to their respective column or keep this companion open on a secondary screen to log your team&apos;s POI economy in real time.
        </p>
        <CategorizedCounterView />
      </section>

      {/* 4 列计数器实机比赛记分面板截图 (标准 img 标签，全网爬虫直读拉满 5/5) */}
      <figure className="my-8 space-y-2.5">
        <div className="rounded-2xl overflow-hidden border border-[#2e2e2e] bg-[#161616] shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fortnite-chest-counter-match-hud.png"
            alt="Fortnite Chest Counter 4-column live match HUD telemetry display showing categorized counts for Standard, Rare, Sprite, and Boss Vault chests"
            width={1280}
            height={860}
            loading="eager"
            className="w-full h-auto block"
          />
        </div>
        <figcaption className="text-center text-xs text-[#888]">
          <strong className="text-[#d4d4d4]">Real-time Match HUD Telemetry:</strong> An active 4-column squad session logged at Retail Row (Chapter 7 Treasure Hunters), totaling 20 containers with live Pirate Token probability calculation.
        </figcaption>
      </figure>

      {/* 为什么竞技队伍需要 4 列计数器 (充实字数与 2/4/5 词组合密度) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-[#49d6ff]" />
          <h2 className="text-base font-bold text-white">
            Why Competitive Squads Rely on a 4-Column Chest Counter Fortnite Tool
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          While casual players can get by with a simple single-button clicker, competitive tournament trios and ranked squads understand that all containers in Fortnite Battle Royale are not created equal. Opening 15 standard wooden chests gives you plenty of common ammunition and bandages, but it guarantees zero storm surge tags and zero guaranteed high-tier assault rifles. Using a specialized <strong>chest counter fortnite 4-column squad tool</strong> transforms raw looting into actionable tactical telemetry.
        </p>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          In Chapter 7 Treasure Hunters, the map is filled with differentiated loot tiers. By separating your counts into Standard, Rare Blue, Sprite Shrines, and Boss Vaults, your in-game leader (IGL) knows exactly when your team has crossed the statistical threshold required to initiate mid-game rotations without getting caught out-gunned across open fields.
        </p>
      </section>

      {/* 战术分工四列实操场景 */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Team Role Division Across the 4 Columns
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          In high-tier ranked lobbies and tournament scrims, opening containers as a chaotic free-for-all leads to lopsided ammunition reserves and wasted shield rotations. Experienced squads using our <strong>chest counter fortnite squad companion</strong> assign each player a specific container tier:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          {/* 第 1 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9a9a9a]" />
              <h3 className="font-bold text-white">Column 1: Standard Chests (Secondary Fragger Focus)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the entry fragger clearing outer perimeter buildings, residential attics, and rooftops. Their job is vacuuming baseline assault rifles, shotguns, and mini shields to establish early defensive perimeter angles.
            </p>
          </div>

          {/* 第 2 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49d6ff]" />
              <h3 className="font-bold text-white">Column 2: Rare Blue Chests (IGL Loot Priority)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the In-Game Leader (IGL) hitting verified subterranean bunker nodes and weather control stations. Rare chests guarantee Blue-or-better combat weapons, ensuring the squad secures surge tag capability before Zone 2.
            </p>
          </div>

          {/* 第 3 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0a6ff]" />
              <h3 className="font-bold text-white">Column 3: Sprite Shrines (Scout and Rotator Focus)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the designated support or mobility scout who drops on peripheral elemental altars. Tracking these ensures your squad collects required kinetic movement items and utility shards before meeting up at the central POI.
            </p>
          </div>

          {/* 第 4 列分工 */}
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd510]" />
              <h3 className="font-bold text-white">Column 4: Boss Vault Bunkers (Heavy Anchor Assignment)</h3>
            </div>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Assigned to the teammate neutralizing NPC bosses, picking up boss keycards, or cracking vault terminals. Records boss chest loot to confirm gold medallions and mythic artillery are secured.
            </p>
          </div>
        </div>
      </section>

      {/* 4 大列对应容器的掉率与战术价值 (扩充 300+ 词) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-[#10B981]" />
          <h2 className="text-base font-bold text-white">
            Loot Tier Probabilities and Combat Gear per Column
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Understanding the mathematical drop distribution behind each column in our <strong>chest counter fortnite squad tool</strong> prevents costly macro rotation errors:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white">Standard Chests (~70%–80% Active Node Activation, Community Est.)</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Standard chests spawn dynamically each match across residential POIs (roughly 70%–80% node spawn rate based on community estimates). Each container reliably dispenses 1 weapon (Common to Rare tier), 30 building materials in standard Battle Royale modes, 1 recovery item stack, and ammunition. While essential for early off-spawn defense, standard chests rarely yield the purple or gold weapons required for long-range surge trades.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white">Rare Blue Super Chests (~2%–5% Natural Spawn Odds, Community Est.)</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Emitting a distinctive high-pitched musical resonance and cyan glow, Rare Chests replace standard spawn nodes at a roughly 2% to 5% rate based on community estimates. They guarantee at least one Rare (Blue), Epic (Purple), or Legendary (Gold) weapon, alongside guaranteed big shield potions or Chug Splashes. Logging 2 or more Rare Chests in column 2 ensures your squad has at least two primary fighters equipped for immediate team fights.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white">Sprite Shrines and Elemental Containers (Biome Exclusive)</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Located primarily within the enchanted grottos and mystical groves of Chapter 7, Sprite Shrines provide kinetic movement powerups, elemental charms, and utility shards that allow players to cross rivers, scale vertical bluffs, and escape third-party pinch points without expending launch pads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white">Boss Vault Bunkers (100% Guaranteed Behind Keycard Airlocks)</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Secured behind blast doors requiring defeated boss medallions or timed late-game opening cycles, Vault Bunkers house multiple Mythic weapon cases, mod workbenches, and hundreds of gold bars. Logging a Vault clear in column 4 signals that your team has reached peak endgame readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 赛前转移核对与宏观决策阈值 (扩充 250+ 词) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Swords className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Pre-Rotation Reconciliation and Storm Macro Thresholds
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Before your team initiates your first macro rotation out of your drop POI, spend 5 seconds running this quick audio check using our <strong>chest counter fortnite companion</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <span>Threshold 1: 0 to 8 Containers</span>
            </h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              <strong className="text-white">Emergency Status:</strong> Inadequate loot. At least one teammate lacks full 100/100 shield protection or long-range assault capability. Avoid early midpoint engagements; rotate strictly along outer coastline nodes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#eab308]" />
              <span>Threshold 2: 9 to 16 Containers</span>
            </h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              <strong className="text-white">Optimal Readiness:</strong> Baseline combat readiness established. The squad carries sufficient shotgun ammunition, mini shield reserves, and utility to contest Zone 2 elevation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-bold text-white flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Threshold 3: 17+ Containers</span>
            </h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              <strong className="text-white">Endgame Surplus:</strong> Maximum loot saturation. Your team has opened enough containers to roll high-rarity weaponry, build pads, and stack multiple big pots for final circle heal-offs.
            </p>
          </div>
        </div>
      </section>

      {/* 常见问题解答 FAQ (补全字数与搜索长尾) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Frequently Asked Questions About the 4-Column Fortnite Chest Counter
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Does this 4-column counter work on mobile phones during console play?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Yes, 100%. The 4-column interface is built with responsive flexbox and touch-optimized buttons. Whether you play on PC, PlayStation, Xbox, or Nintendo Switch, simply open TrackChest in your mobile phone browser to log containers with zero lag.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Why are Pirate Crates and Commercial Safes excluded from these 4 columns?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Commercial Safes strictly drop gold bars and healing items rather than combat firearms, while Pirate Crates operate under Epic Games&apos; confirmed 1 in 137,500 lottery odds. You can calculate your statistical token odds separately on our dedicated Pirate Token Odds page.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Does this tool require linking my Epic Games account?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              No. TrackChest is an independent community tracker that does not ask for your Epic Games credentials, password, or OAuth tokens. It runs completely offline and locally in your browser.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Will our counts be wiped if our browser tab refreshes?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              No. Every button tap instantly updates your device&apos;s LocalStorage. Even if your phone screen locks or you accidentally refresh between tournament rounds, your counts remain perfectly preserved until you choose to click Reset All.
            </p>
          </div>
        </div>
      </section>

      {/* 存档与重置机制 */}
      <section className="p-5 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2.5 text-xs text-[#9a9a9a]">
        <div className="flex items-center space-x-2 text-white font-bold">
          <HardDrive className="w-4 h-4 text-[#49d6ff]" />
          <h2 className="text-sm font-bold text-white">
            Local Persistence and Squad Session Management
          </h2>
        </div>
        <p className="leading-relaxed">
          All 4 columns update your browser&apos;s LocalStorage on every single tap. Designed as an offline-ready <strong>chest counter fortnite squad companion</strong> you can run without tab lags, you can refresh the page, close your browser between tournaments, or lock your phone screen without losing count. When starting a fresh competitive match set, click &ldquo;Reset All&rdquo; to clear all four columns simultaneously.
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
