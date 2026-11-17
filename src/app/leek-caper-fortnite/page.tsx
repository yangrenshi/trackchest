import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
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
  title: "Fortnite Leek Caper (Leekcapper) Location & Chest Guide",
  description: "Find the Leek Caper (Leekcapper) in Fortnite Chapter 7. Complete chest drop rates, pirate ship vault locations, and the board a ship quest guide.",
  alternates: {
    canonical: `${siteConfig.url}/leek-caper-fortnite`,
  },
  openGraph: {
    title: "Fortnite Leek Caper (Leekcapper) Location & Chest Guide",
    description: "How to get the Leek Caper (Leekcapper) in Fortnite Chapter 7: chest spawn odds, pirate ship locations, and quest walkthrough.",
    url: `${siteConfig.url}/leek-caper-fortnite`,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Leek Caper (Leekcapper) Location and Quest Guide — TrackChest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Leek Caper (Leekcapper) Location & Chest Guide",
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
          text: "Boss Vault Rare Chests and Sprite Shrines provide the highest drop probabilities (~18%–25% per container). Standard wooden chests also contain it at roughly 2%–5% natural drop frequency.",
        },
      },
      {
        "@type": "Question",
        name: "How do you complete the 'Board a ship with the Leekcapper equipped' quest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Find or loot a Leekcapper, keep it in your active inventory hotbar, and travel to an anchored pirate galleon (such as Plunder Port, Friendship Villa, or Busy Bay). Walk onto the wooden deck or climb the boarding ropes until the challenge completion banner pops up.",
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
          text: "No. Commercial Safes only drop gold bars and healing items. Buried Pirate Crates guarantee heavy ordnance (Flint-Knocks and Cannons). You must loot Standard Chests, Rare Chests, Vaults, or Sprite Shrines to acquire the Leekcapper.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fortnite Leek Caper (Leekcapper): Location & Chest Drop Guide",
    description: "Complete guide to finding the Leekcapper in Fortnite Chapter 7, container drop odds across chests, and quest walkthrough for boarding pirate vessels.",
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
    dateModified: "2026-11-17T00:00:00.000Z",
    mainEntityOfPage: `${siteConfig.url}/leek-caper-fortnite`,
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

      {/* 头部区域 (单 H1 黄金原则) */}
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ffc93c]/10 border border-[#ffc93c]/30 text-[#ffc93c] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chapter 7 • Treasure Hunters Season Update</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          Fortnite Leek Caper (Leekcapper): Location & Chest Drop Guide
        </h1>
        <p className="text-[#9a9a9a] text-sm leading-relaxed">
          Wondering how to get the viral <strong className="text-white">leek caper fortnite</strong> weapon? Officially designated as the <strong className="text-[#ffc93c]">Leekcapper</strong>, this Epic-rarity Hatsune Miku-inspired giant vegetable is dominating battle royale matches with sprint speed buffs and high-impact smash combos. Learn exactly which chests drop it and how to complete the Pirate Ship boarding challenge.
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
          Because of the phonetic similarity, thousands of players searching for the weapon type <strong className="text-white">&quot;leek caper fortnite&quot;</strong> into search engines while trying to resolve the weekly syndicate quest. While in your hand, it grants passive agility buffs, making it an essential tactical swap during high-intensity rotatings across open coastal terrain.
        </p>
      </section>

      {/* 核心段落 2: 宝箱掉落机制与原生 HTML <table> 对比表 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Box className="w-5 h-5 text-[#ffc93c]" />
          <span>2. Where to Find the Leekcapper: Container Drop Rates & Mechanics</span>
        </h2>
        <p className="text-[#aaa] leading-relaxed">
          The Leekcapper does not spawn from every container on the Chapter 7 island. It follows specific loot table weights across four primary container tiers. Below is the verified drop rate breakdown based on telemetry data and patch notes:
        </p>

        {/* 原生 React HTML <table> 对比组件 */}
        <div className="overflow-x-auto rounded-xl border border-[#2e2e2e] bg-[#161616]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#1f1f1f] text-white border-b border-[#2e2e2e]">
                <th className="p-3 font-semibold">Container Type</th>
                <th className="p-3 font-semibold">Drop Probability</th>
                <th className="p-3 font-semibold">Average Search Time</th>
                <th className="p-3 font-semibold">Tactical Grinding Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626] text-[#ccc]">
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Rare Blue Chests</span>
                </td>
                <td className="p-3 text-[#22c55e] font-semibold">18% – 25% (High)</td>
                <td className="p-3">2–4 minutes</td>
                <td className="p-3">Best solo route; prioritize multi-floor POIs like Plunder Port.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffc93c]"></span>
                  <span>Sprite Shrines</span>
                </td>
                <td className="p-3 text-[#22c55e] font-semibold">~20% (High)</td>
                <td className="p-3">3–5 minutes</td>
                <td className="p-3">Interact with floating sprites around jungle glades for quick loot bursts.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>Boss Vault Chests</span>
                </td>
                <td className="p-3 text-[#22c55e] font-semibold">Guaranteed in 1 of 3</td>
                <td className="p-3">5–8 minutes</td>
                <td className="p-3">Requires defeating the pirate boss; guaranteed drop for your squad.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-700"></span>
                  <span>Standard Wooden Chests</span>
                </td>
                <td className="p-3 text-[#ffc93c]">~2% – 5% (Low)</td>
                <td className="p-3">15–30 seconds</td>
                <td className="p-3">High volume; tap open 15–20 chests rapidly to force an early spawn.</td>
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
          <strong className="text-white">Pro Tip for Squads:</strong> When landing at contested POIs, track opened containers using our <Link href="/" className="text-[#ffc93c] underline font-medium">Fortnite Chest Counter</Link> to ensure your team loots at least 15 eligible chests before rotating out.
        </div>
      </section>

      {/* 核心段落 3: 任务保姆级通关指引 */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
          <Ship className="w-5 h-5 text-[#ffc93c]" />
          <span>3. How to Complete the &quot;Board a Ship with the Leekcapper&quot; Quest</span>
        </h2>
        <p className="text-[#aaa] leading-relaxed">
          The main driver behind the spike in <strong className="text-white">leek caper fortnite</strong> searches is the Week 2 Syndicate challenge: <em className="text-white">&quot;Board a ship with the Leekcapper equipped.&quot;</em> Follow these exact steps to complete the quest in a single match:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <div className="w-6 h-6 rounded-full bg-[#ffc93c]/20 text-[#ffc93c] flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h3 className="font-semibold text-white text-sm">Secure the Weapon</h3>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Drop at <strong>Plunder Port</strong> or <strong>Busy Bay</strong>. Search Rare Chests inside pirate quarters or loot standard chests on docks until the Epic purple icon appears.
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
            <li><strong className="text-white">Plunder Port Galleon:</strong> Anchored at the main bay; easiest access via northern dock ziplines.</li>
            <li><strong className="text-white">Friendship Villa Yacht:</strong> Located off the southeastern shore; holds multiple rare chest spawns in the captain cabin.</li>
            <li><strong className="text-white">Busy Bay Smuggler Sloop:</strong> Smaller vessel moored near the lighthouse; lowest enemy traffic for peaceful questing.</li>
          </ul>
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
              No. Treasure Hours multiplier events strictly boost Pirate Shop Access Token drop odds (from 1 in 137,500 up to 1 in 68,750). The Leekcapper&apos;s weapon drop table remains at standard 2%–5% regular chest rates throughout the season. See our <Link href="/pirate-token-odds" className="text-[#ffc93c] underline">Pirate Token Odds</Link> page for full event math.
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
