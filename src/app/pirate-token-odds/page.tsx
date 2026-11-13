import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PirateTokenCalculator } from "@/components/PirateTokenCalculator";
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Pirate Token Odds Calculator — Official Fortnite Drop Rates (Chapter 7)",
  description: "Official Epic Games drop rates for Fortnite Pirate Shop Access tokens (1 in 137,500) and Golden skin (1 in 1,562,500). Calculate required chests and Treasure Hours odds.",
  alternates: {
    canonical: `${siteConfig.url}/pirate-token-odds`,
  },
  openGraph: {
    title: "Pirate Token Odds Calculator — Official Fortnite Drop Rates",
    description: "Calculate required chests and grind hours for the 1 in 137,500 Pirate Token drop. Updated for Chapter 7 Treasure Hunters.",
    url: `${siteConfig.url}/pirate-token-odds`,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Pirate Token Drop Odds Calculator — TrackChest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirate Token Odds Calculator — Official Fortnite Drop Rates",
    description: "Official 1 in 137,500 token odds and Treasure Hours multiplier calculator.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function PirateTokenOddsPage() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fortnite Pirate Token Odds Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    url: `${siteConfig.url}/pirate-token-odds`,
    description: "Official Epic Games statistical odds simulator for Pirate Shop Access tokens (1 in 137,500) and Treasure Hours double-odds events.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      {/* 专享 SoftwareApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
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
            Official Epic Games Drop Rates
          </span>
          <span className="text-[11px] font-mono text-[#9a9a9a] bg-[#242424] border border-[#2e2e2e] px-2 py-0.5 rounded">
            Updated Nov 13, 2026 • Chapter 7 Treasure Hunters
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Fortnite Pirate Token Odds Calculator
        </h1>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          On November 9, 2026, Epic Games officially revealed the confirmed drop probabilities for the Chapter 7 Treasure Hunters mini-season (Nov 1 – Dec 4, 2026). Use this calculator to simulate how many containers you must loot for a 50%, 90%, or 99% statistical guarantee.
        </p>
      </div>

      {/* 交互式计算器客户端插槽 */}
      <PirateTokenCalculator />

      {/* 官方公布事实与背景 */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <h2 className="text-base font-bold text-white flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#49d6ff]" />
          <span>The Math Behind the 1 in 137,500 Drop Rate</span>
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          In the Chapter 7 Treasure Hunters collaboration season, opening regular or rare chests grants a tiny statistical probability of rolling the coveted <strong className="text-white">Pirate Shop Access Token</strong>. According to official Epic Games telemetry confirmed via Polygon on Nov 9, 2026:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white">Why 137,500 Chests Does Not Equal 100%</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              Because container opens follow a Bernoulli trial process, searching 137,500 chests only gives you an approximately <strong className="text-white">63.2%</strong> cumulative probability of receiving at least one token. You need roughly <strong>95,300 chests</strong> just to reach a 50/50 coinflip!
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white">Ultra-Rare Golden Skin (1 in 1.56M)</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              The season-exclusive Golden Skin variant drops at 1 per 1,562,500 chests. Across the entire global playerbase, only a few hundred accounts are projected to unlock this skin organically before Chapter 8 launches on December 4.
            </p>
          </div>
        </div>
      </section>

      {/* Treasure Hours 活动日程 */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3.5">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Official Treasure Hours Event Schedule
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Epic has designated three official Treasure Hours windows where token drop multipliers are activated globally. Grinding during these peak hours drastically reduces the required chest threshold:
        </p>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e] flex items-center justify-between">
            <div>
              <span className="font-bold text-white flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-[#ffc93c]" />
                <span>Wave 1: November 14, 2026 (Tomorrow)</span>
              </span>
              <span className="text-[#888] text-[11px] block mt-0.5">
                1.5x Multiplier &bull; Drop rate boosted to 1 in 91,667 &bull; 50% target drops to ~63,500 chests
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-[#ffc93c] bg-[#ffc93c]/10 px-2 py-1 rounded">
              1.5x Boost
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e] flex items-center justify-between">
            <div>
              <span className="font-bold text-white">Wave 2: November 21, 2026</span>
              <span className="text-[#888] text-[11px] block mt-0.5">
                2.0x Double Odds &bull; Drop rate boosted to 1 in 68,750 &bull; 50% target drops to ~47,700 chests
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-[#ffd510] bg-[#ffd510]/10 px-2 py-1 rounded">
              2.0x Peak
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e] flex items-center justify-between">
            <div>
              <span className="font-bold text-white">Wave 3: November 28, 2026 (Season Finale)</span>
              <span className="text-[#888] text-[11px] block mt-0.5">
                2.0x Double Odds &bull; Last chance weekend before Chapter 8 season switch
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-[#ffd510] bg-[#ffd510]/10 px-2 py-1 rounded">
              2.0x Peak
            </span>
          </div>
        </div>
      </section>

      {/* 怎么用计数器统计 */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          How to Use TrackChest as a Fortnite Pirate Token Tracker
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Because Fortnite does not show your progress toward the 137,500 container milestone in real-time, competitive players use our companion tools while playing:
        </p>
        <ul className="space-y-2 text-xs text-[#9a9a9a]">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Open <Link href="/fortnite-chest-counter" className="text-[#ffc93c] underline font-medium">Fortnite Chest Counter (4-Column View)</Link> on your second monitor or phone.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Tap the corresponding button for Standard, Rare, or Sprite containers as you loot POIs.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Plug your current tally into this calculator to track exactly how close you are to the median 50% threshold.</span>
          </li>
        </ul>
      </section>

      <div className="pt-6 border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link href="/fortnite-chest-counter" className="text-[#ffc93c] hover:underline font-medium">
          &larr; Open 4-Column Chest Counter
        </Link>
        <Link href="/" className="text-[#9a9a9a] hover:text-white underline">
          Main Tracker
        </Link>
        <Link href="/chest-types" className="text-[#9a9a9a] hover:text-white underline">
          Chest Types Encyclopedia &rarr;
        </Link>
      </div>
    </div>
  );
}
