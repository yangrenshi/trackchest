import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SEASON_CONFIG } from "@/config/season";
import { TreasureHoursBanner } from "@/components/TreasureHoursBanner";
import { 
  ArrowLeft, 
  Sparkles, 
  Compass, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Ship, 
  Crosshair,
  ExternalLink,
  Box
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fortnite Leekcapper — Location & Drop Guide",
  description: "Find the Leekcapper in Fortnite Chapter 7. Complete chest and floor loot drop rates, pirate ship locations, and the board a ship quest guide.",
  alternates: {
    canonical: `${siteConfig.url}/leekcapper-fortnite`,
  },
  openGraph: {
    title: "Fortnite Leekcapper — Location & Drop Guide",
    description: "How to get the Leekcapper in Fortnite Chapter 7: chest and floor loot spawn odds, pirate ship locations, and quest walkthrough.",
    url: `${siteConfig.url}/leekcapper-fortnite`,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Leekcapper Location and Quest Guide — TrackChest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Leekcapper — Location & Drop Guide",
    description: "Where to find the Leekcapper in Fortnite: container drop rates and board a ship quest guide.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function LeekCaperFortnitePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it spelled 'Leek Caper' or 'Leekcapper' in Fortnite?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The official in-game weapon name is the Leekcapper. 'Leek caper' is a common phonetic misspelling and search query used by players searching for its quest objectives and spawn locations.",
        },
      },
      {
        "@type": "Question",
        name: "What chests have the highest chance to drop the Leekcapper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard Chests and Floor Loot combined represent the most reliable way to find it across the island due to their sheer volume. Rare Blue Chests and Vaults also contain it in their high-tier loot tables.",
        },
      },
      {
        "@type": "Question",
        name: "How do you complete the 'Board a ship with the Leekcapper equipped' quest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Find or loot a Leekcapper, keep it in your active inventory hotbar, and travel to an anchored pirate galleon or vessel along the coast. Walk onto the wooden deck or climb the boarding ropes until the challenge completion banner pops up.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Leekcapper use shotgun shells or medium bullets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Leekcapper is an Epic-rarity melee weapon with an internal durability gauge instead of ammunition. Light attacks and charged smashes consume durability points until the weapon breaks.",
        },
      },
      {
        "@type": "Question",
        name: "Can you get the Leekcapper from Commercial Safes or Buried Pirate Crates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Commercial Safes only drop gold bars and healing items. Buried Pirate Crates guarantee heavy ordnance (Flint-Knocks and Cannons). You must loot Standard Chests, Rare Chests, Vaults, or Floor Loot to acquire the Leekcapper.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fortnite Leekcapper: Location & Chest Drop Guide",
    description: "Complete guide to finding the Leekcapper in Fortnite Chapter 7, container and floor loot drop odds, and quest walkthrough for boarding pirate vessels.",
    author: {
      "@type": "Organization",
      name: "TrackChest Studio",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    datePublished: "2026-11-17T00:00:00.000Z",
    dateModified: "2026-11-23T00:00:00.000Z",
    mainEntityOfPage: `${siteConfig.url}/leekcapper-fortnite`,
  };

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      {/* 结构化数据 Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 顶部返回导航 */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#9a9a9a] hover:text-white transition-colors bg-[#1d1d1d] border border-[#2e2e2e] px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Chest Tracker</span>
        </Link>
      </div>

      {/* 实时活动预告横幅 */}
      <TreasureHoursBanner />

      {/* 头部区域 (单 H1 黄金原则) */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
            {SEASON_CONFIG.chapter} • {SEASON_CONFIG.theme} Season Update ({SEASON_CONFIG.shortDateRange})
          </span>
          <span className="text-[11px] font-mono text-[#9a9a9a] bg-[#242424] border border-[#2e2e2e] px-2 py-0.5 rounded">
            Updated {SEASON_CONFIG.lastUpdated}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          Fortnite Leekcapper: Location &amp; Chest Drop Guide
        </h1>
        <p className="text-[#9a9a9a] text-sm leading-relaxed">
          Wondering how to get the viral <strong className="text-white">Leekcapper</strong> in Fortnite (often searched as <em>leek caper</em>)? This Epic-rarity Hatsune Miku-inspired giant vegetable is dominating Battle Royale matches with sprint speed buffs and high-impact smash combos. Learn exactly which containers and floor loot nodes spawn it, and how to complete the Pirate Ship boarding challenge.
        </p>
      </header>

      {/* 核心段落 1: Q-A-D-L 结论先行权威定义框 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Zap className="w-5 h-5 text-[#ffc93c]" />
          <span>1. What Is the &quot;Leek Caper&quot; in Fortnite? (The Leekcapper Explained)</span>
        </h2>
        
        {/* GEO 权威定义框 */}
        <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#ffc93c]">
            Fast Answer / Definition
          </div>
          <p className="text-sm leading-relaxed text-[#eaeaea]">
            The <strong className="text-white">Leekcapper</strong> (widely searched as the <em>leek caper</em>) is an Epic-rarity melee weapon in Fortnite Chapter 7 that enables players to sprint faster, negate fall damage, and launch enemies with charged smashes without consuming firearm ammunition. It serves as a pirate-themed reskin of the classic Kneecapper bat, styled after Hatsune Miku&apos;s iconic spring onion.
          </p>
        </div>

        <p className="text-[#aaa] leading-relaxed">
          Because of its phonetic pronunciation, the weapon is widely referred to in the community as the <strong className="text-white">&quot;leek caper&quot;</strong> while completing the weekly syndicate challenge. While held, it grants passive sprint and agility buffs, making it an essential tactical swap during high-intensity rotations across open coastal terrain.
        </p>
      </section>

      {/* 核心段落 2: 宝箱掉落机制与原生 HTML <table> 对比表 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Box className="w-5 h-5 text-[#ffc93c]" />
          <span>2. Where to Find the Leekcapper: Container &amp; Floor Loot Drop Rates</span>
        </h2>
        <p className="text-[#aaa] leading-relaxed">
          In the Chapter 7 general Battle Royale loot pool, the Leekcapper drops across three main sources: <strong>Floor Loot, Standard Chests, and Rare Chests</strong>. The most reliable way to secure it in any match is the combined volume of residential Chests and Floor Loot. Below is an overview based on player-community observations:
        </p>

        <div className="p-3 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] text-xs text-[#9a9a9a] leading-relaxed">
          <strong className="text-white">Note on Container Rates vs. Weapon Odds:</strong> The percentages below reflect container spawn frequencies across the island, not the Leekcapper&apos;s specific drop rate. As an Epic-rarity weapon, exact Leekcapper drop odds have no reliable public data; this table serves strictly to evaluate which spawn source offers the highest relative search efficiency.
        </div>

        {/* 原生 React HTML <table> 对比组件 */}
        <div className="overflow-x-auto rounded-xl border border-[#2e2e2e] bg-[#161616]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#1f1f1f] text-white border-b border-[#2e2e2e]">
                <th className="p-3 font-semibold">Spawn Source</th>
                <th className="p-3 font-semibold">Container Spawn Rate</th>
                <th className="p-3 font-semibold">Average Search Time</th>
                <th className="p-3 font-semibold">Tactical Grinding Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626] text-[#ccc]">
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Floor Loot (Ground Spawns)</span>
                </td>
                <td className="p-3 text-[#22c55e] font-semibold">Active Node Spawn</td>
                <td className="p-3">Immediate (on drop)</td>
                <td className="p-3">Inspect floor spawns inside residential attics, roofs, and pirate docks.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-700"></span>
                  <span>Standard Wooden Chests</span>
                </td>
                <td className="p-3 text-[#22c55e] font-semibold">~70%–80% (High Volume, player-community estimate, not official Epic data)</td>
                <td className="p-3">15–30 seconds</td>
                <td className="p-3">High volume — more chests means more rolls, each one independent. Most common source due to map density.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Rare Blue Chests</span>
                </td>
                <td className="p-3 text-[#ffc93c]">~2%–5% (Low Spawn Rate, player-community estimate, not official Epic data)</td>
                <td className="p-3">2–4 minutes</td>
                <td className="p-3">Worth targeting dense multi-floor POIs and coastal docks for guaranteed rare weapon rolls alongside Leekcapper potential.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffc93c]"></span>
                  <span>Sprite Shrines</span>
                </td>
                <td className="p-3 text-[#aaa]">Biome Exclusive</td>
                <td className="p-3">3–5 minutes</td>
                <td className="p-3">Interact with floating sprites around jungle glades for quick auxiliary loot bursts.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>Island Vault Bunkers</span>
                </td>
                <td className="p-3 text-[#aaa]">Vault Exclusive</td>
                <td className="p-3">5–8 minutes</td>
                <td className="p-3">Requires a Vault Key found in chests; grants access to multiple Rare Chests and a guaranteed Sprite Chest at the lock-marked vault.</td>
              </tr>
              <tr className="bg-[#141414] text-[#777]">
                <td className="p-3 font-medium line-through">Commercial Safes</td>
                <td className="p-3 text-red-400 font-semibold">0% (Excluded)</td>
                <td className="p-3">—</td>
                <td className="p-3">Safes only spawn gold bars and chug splashes; skip when searching.</td>
              </tr>
              <tr className="bg-[#141414] text-[#777]">
                <td className="p-3 font-medium line-through">Buried Pirate Crates</td>
                <td className="p-3 text-red-400 font-semibold">0% (Excluded)</td>
                <td className="p-3">—</td>
                <td className="p-3">Only dispenses Flint-Knocks and Cannons; does not roll melee weapons.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-lg bg-[#242424] border border-[#2e2e2e] text-xs text-[#9a9a9a]">
          <strong className="text-white">Pro Tip for Squads:</strong> When landing at contested POIs, track opened containers using our <Link href="/" className="text-[#ffc93c] underline font-medium">Fortnite Chest Counter</Link> or the <Link href="/fortnite-chest-counter" className="text-[#ffc93c] underline font-medium">4-column squad counter</Link>. For visual identification cues across every loot container tier, check our <Link href="/chest-types" className="text-[#ffc93c] underline font-medium">Fortnite chest types encyclopedia</Link>.
        </div>
      </section>

      {/* 核心段落 3: 任务保姆级通关指引 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Ship className="w-5 h-5 text-[#ffc93c]" />
          <span>3. How to Complete the &quot;Board a Ship with the Leekcapper&quot; Quest</span>
        </h2>
        <p className="text-[#aaa] leading-relaxed">
          Most players hunt for the weapon to complete the Week 2 Syndicate challenge: <em className="text-white">&quot;Board a ship with the Leekcapper equipped.&quot;</em> Follow these exact steps to complete the quest in a single match:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="w-6 h-6 rounded-full bg-[#ffc93c]/20 text-[#ffc93c] flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h3 className="font-semibold text-white text-sm">Secure the Weapon</h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Drop at <strong>coastal docks or galleon anchorages</strong>. Search Rare Chests inside pirate quarters or loot standard chests on docks until the Epic purple icon appears.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="w-6 h-6 rounded-full bg-[#ffc93c]/20 text-[#ffc93c] flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h3 className="font-semibold text-white text-sm">Equip into Active Hand</h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Ensure the Leekcapper is in your <strong>active holding slot</strong>, not just stashed in your backpack hotbar. Your character model must visibly hold the giant green leek.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="w-6 h-6 rounded-full bg-[#ffc93c]/20 text-[#ffc93c] flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h3 className="font-semibold text-white text-sm">Step Onto the Deck</h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Use ziplines or jump onto any anchored pirate galleon deck. Once your boots touch the wooden main deck, the 25,000 XP notification will trigger instantly.
            </p>
          </div>
        </div>

        {/* 核心海盗船点位 */}
        <div className="p-4 rounded-xl bg-[#181818] border border-[#2a2a2a] space-y-2">
          <h3 className="font-semibold text-white text-xs flex items-center space-x-1.5">
            <Compass className="w-4 h-4 text-[#ffc93c]" />
            <span>Eligible Ship Locations Across Chapter 7</span>
          </h3>
          <ul className="text-xs text-[#aaa] space-y-1 list-disc list-inside">
            <li><strong className="text-white">Plunder Port Galleons:</strong> Multiple pirate vessels anchored along the main port harbor; easiest access via dock ziplines and boarding ropes.</li>
            <li><strong className="text-white">Friendship Villa Duck Yacht:</strong> Distinctive yacht floating near the resort waterfront; holds multiple rare chest spawns across the deck and cabin.</li>
            <li><strong className="text-white">Busy Bay Moored Sloop:</strong> Coastal vessel anchored inside the bay waters; lowest enemy traffic for peaceful questing.</li>
          </ul>
        </div>

        <div className="p-3 rounded-lg bg-[#242424] border border-[#2e2e2e] text-xs text-[#9a9a9a]">
          <strong className="text-white">Milestone Tracking Tip:</strong> After claiming your 25,000 XP reward, verify your seasonal container milestones and accolades using our tutorial on <Link href="/how-to-check-chests" className="text-[#ffc93c] underline font-medium">how to check opened chests in Fortnite</Link>.
        </div>
      </section>

      {/* 核心段落 4: 武器数值与战斗技巧 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Crosshair className="w-5 h-5 text-[#ffc93c]" />
          <span>4. Leekcapper Weapon Stats, Combos, and Durability Mechanics</span>
        </h2>
        <p className="text-[#aaa] leading-relaxed">
          Beyond the quest, the Leekcapper is an S-tier mobility tool for zero build and battle royale rotations. Unlike guns, it relies on an internal durability gauge rather than heavy bullets:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] space-y-1">
            <span className="text-[#888] block">Light Attack Combo</span>
            <span className="text-white font-bold text-sm">35 &bull; 35 &bull; 65 Damage</span>
            <p className="text-[#999] pt-1">
              Rapid 3-hit swinging combo with low endlag. Great for finishing off cracked opponents who push inside close buildings.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] space-y-1">
            <span className="text-[#888] block">Charged Smash</span>
            <span className="text-white font-bold text-sm">90 Damage + Massive Knockback</span>
            <p className="text-[#999] pt-1">
              Hold the fire button for 1.2 seconds to charge. Releases an explosive shockwave that sends enemies flying off high structures or storm edges.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] space-y-1">
            <span className="text-[#888] block">Sprint & Mobility Buff</span>
            <span className="text-white font-bold text-sm">+15% Speed & Zero Fall Damage</span>
            <p className="text-[#999] pt-1">
              Holding the weapon while sprinting increases running speed and automatically cancels fall damage when leaping off cliffs or roofs.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] space-y-1">
            <span className="text-[#888] block">Durability Gauge</span>
            <span className="text-white font-bold text-sm">100 Charges (Non-Repairable)</span>
            <p className="text-[#999] pt-1">
              Each light swing costs 1 charge; charged smashes consume 3 charges. Sprinting does not deplete durability. Once broken, the item dissolves.
            </p>
          </div>
        </div>
      </section>

      {/* 核心段落 5: 常见问答 FAQ (匹配 FAQPage Schema) */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-[#ffc93c]" />
          <span>5. Frequently Asked Questions (FAQ)</span>
        </h2>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white text-sm">
              Is it spelled &quot;Leek Caper&quot; or &quot;Leekcapper&quot; in Fortnite?
            </h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              The official game title is the <strong>Leekcapper</strong>. Players frequently search for <em>&quot;leek caper fortnite&quot;</em> because the audio cues and phonetic pronunciation resemble a heist (&quot;caper&quot;) or a play on the baseball term &quot;kneecapper&quot;. Both terms refer to the exact same weapon.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white text-sm">
              Can you find the Leekcapper in Team Rumble or Creative maps?
            </h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              No. Quest progression and official battle royale weapon drops are locked to core Battle Royale, Zero Build, and Ranked playlists. Custom Creative island chests do not count toward syndicate quest completion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white text-sm">
              Does opening chests during Treasure Hours boost Leekcapper drop rates?
            </h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              No. Treasure Hours multiplier events strictly boost Pirate Shop Access Token drop odds (from 1 in 137,500 up to 1 in 68,750). The Leekcapper&apos;s weapon drop table follows standard Battle Royale loot pool rules across Chests and Floor Loot throughout the season. See our <Link href="/pirate-token-odds" className="text-[#ffc93c] underline">Pirate Token Odds</Link> page for full event math.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white text-sm">
              Can teammates duplicate or share the Leekcapper to complete the quest?
            </h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Yes! Once one player boards the ship and receives the 25,000 XP reward, they can immediately drop the Leekcapper on the ship deck for their squadmates to pick up and complete the challenge sequentially.
            </p>
          </div>
        </div>
      </section>

      {/* 底部内链与工具导流 */}
      <footer className="pt-6 border-t border-[#2e2e2e] space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#1c1c1c] to-[#252525] border border-[#333] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-[#ffc93c] uppercase tracking-wider">
              Loot Smarter in Chapter 7
            </div>
            <div className="text-sm font-semibold text-white">
              Track Every Chest Open with Our Free Online Tool
            </div>
            <p className="text-xs text-[#888]">
              Log standard, rare, sprite, and vault containers during battle royale matches without logging into Epic Games.
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-[#ffc93c] text-black font-bold text-xs hover:bg-[#ffe17d] transition-colors whitespace-nowrap"
          >
            Launch Chest Counter
          </Link>
        </div>

        {/* 站内四层内链网格 */}
        <div className="text-xs text-[#777] flex flex-wrap gap-4 justify-center sm:justify-start pt-2">
          <Link href="/chest-types" className="hover:text-white transition-colors">
            &bull; All 6 Chest Types & Loot Tiers
          </Link>
          <Link href="/pirate-token-odds" className="hover:text-white transition-colors">
            &bull; Pirate Token 1 in 137,500 Simulator
          </Link>
          <Link href="/fortnite-chest-counter" className="hover:text-white transition-colors">
            &bull; Dedicated Squad 4-Column Counter
          </Link>
          <Link href="/how-to-check-chests" className="hover:text-white transition-colors">
            &bull; How to Check Opened Chests
          </Link>
        </div>
      </footer>
    </div>
  );
}
