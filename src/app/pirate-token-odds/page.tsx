import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PirateTokenCalculator } from "@/components/PirateTokenCalculator";
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Flame, Box, HelpCircle, AlertTriangle, Coins } from "lucide-react";
import { TreasureHoursBanner } from "@/components/TreasureHoursBanner";

export const metadata: Metadata = {
  title: "Fortnite Pirate Token Odds — Drop Rates",
  description: "Epic's official Pirate Token odds: 1 in 137,500. See how many chests you need for 50%, 90% and 99% — plus Treasure Hours multipliers.",
  alternates: {
    canonical: `${siteConfig.url}/pirate-token-odds`,
  },
  openGraph: {
    title: "Fortnite Pirate Token Odds — Drop Rates",
    description: "Epic's official Pirate Token odds: 1 in 137,500. Calculate required chests and Treasure Hours odds.",
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
    title: "Fortnite Pirate Token Odds — Drop Rates",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does opening chests in Creative mode or Team Rumble count toward Pirate Token odds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Pirate Tokens strictly drop in core Battle Royale, Zero Build, and competitive ranked modes. Containers opened in custom Creative maps, Team Rumble, or Party Royale do not roll on the 1 in 137,500 loot table.",
        },
      },
      {
        "@type": "Question",
        name: "Is there bad luck protection or a guaranteed pity timer for Pirate Tokens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Epic Games confirmed that every eligible container open is an independent Bernoulli trial. There is zero cumulative bad luck protection or pity counter—opening 137,500 chests gives roughly a 63.2% statistical chance, never a 100% guarantee.",
        },
      },
      {
        "@type": "Question",
        name: "Can squad teammates trade or share a Pirate Token once found?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pirate Tokens drop as physical in-game items that can be pinged and picked up by any squad member before the match concludes. Once collected into your inventory, accessing the secret pirate shop unlocks purchases for that specific match session.",
        },
      },
      {
        "@type": "Question",
        name: "Does buying the Chapter 7 Battle Pass boost your base Pirate Token odds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The baseline 1 in 137,500 drop probability is identical for all players regardless of Battle Pass ownership, account level, or cosmetic loadout. The only official boost occurs during designated Treasure Hours events.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to unspent Pirate Tokens when Chapter 7 ends on December 4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All unspent Pirate Tokens expire immediately when servers shut down for Chapter 8 maintenance on December 4–5, 2026. Tokens do not convert to V-Bucks or carry forward into the next season, though redeemed cosmetics remain permanent.",
        },
      },
    ],
  };

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-10 text-sm text-[#d4d4d4]">
      {/* 专享 SoftwareApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {/* 专享 FAQPage JSON-LD */}
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

      {/* 实时活动预告横幅（根据当前日期三态自动切换） */}
      <TreasureHoursBanner />

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
          On November 9, 2026, Epic Games officially revealed the confirmed drop probabilities for the Chapter 7 Treasure Hunters mini-season (Nov 1 – Dec 4, 2026). Understanding the mathematical <strong>pirate token odds</strong> allows competitive players to simulate realistic looting requirements across standard matches and weekend boost windows.
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
          In the Chapter 7 Treasure Hunters collaboration season, opening regular or rare chests grants a tiny statistical probability of rolling the coveted <strong className="text-white">Pirate Shop Access Token</strong>. According to Epic&apos;s official drop rates, reported by Polygon on Nov 9, 2026:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white">Why 137,500 Chests Does Not Equal 100%</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              Because container opens follow a Bernoulli trial process, searching 137,500 chests only gives you an approximately <strong className="text-white">63.2%</strong> cumulative probability of receiving at least one token. You need exactly <strong className="text-white">95,307 chests</strong> (roughly 2,383 hours for a solo grinder at 40 chests/hr) just to reach the 50/50 median coinflip!
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1.5">
            <h3 className="font-semibold text-white">Ultra-Rare Golden Skin (1 in 1.56M)</h3>
            <p className="text-[#9a9a9a] text-[11px] leading-relaxed">
              The season-exclusive Golden Skin variant drops at 1 per 1,562,500 chests. Epic has not disclosed how many accounts will unlock it organically before Chapter 8 launches on December 4, making it one of the rarest cosmetic drops in Fortnite history.
            </p>
          </div>
        </div>
      </section>

      {/* ① 哪些容器参与 1/137,500 的抽取 (深度澄清玩家高频疑惑) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Box className="w-4 h-4 text-[#10B981]" />
          <h2 className="text-base font-bold text-white">
            Which Containers Qualify for Pirate Token Odds (1 in 137,500)
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          A common misconception among players heading into weekend scrims is that only special event chests trigger the drop roll. Under Epic Games&apos; confirmed architecture, the baseline <strong>pirate token odds</strong> apply across multiple standard Battle Royale container tiers:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <span>Standard Wooden Chests (Eligible — Vast Majority of Map Volume, Community Est.)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Yes, standard wooden chests absolutely count! Because residential rooftops, attics, and warehouses are densely packed with wooden containers, standard chests represent the vast majority of all container spawns across the island (~75% of total spawns based on community estimates). Opening 20 standard chests grants 20 independent rolls against the baseline 1 in 137,500 rate.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49d6ff]" />
              <span>Rare Blue Chests &amp; Sprite Shrines (Eligible)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Rare blue chests and biome-exclusive Sprite Shrines also trigger the standard roll upon opening. While they guarantee superior weapons or kinetic movement shards, their underlying token roll mechanics operate on the exact same baseline odds as regular wooden containers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd510]" />
              <span>Boss Vault Containers (Eligible)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Large weapon chests located inside keycard-locked Boss Vault Bunkers are fully eligible. Clearing out a high-tier vault grants multiple high-value rolls alongside medallion loot and mod bench access.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span>Safes &amp; Cash Registers (EXCLUDED from Odds)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Commercial Safes, cash registers, produce boxes, and ammunition crates do NOT roll on the Pirate Token table. Safes strictly dispense gold bars and healing items. What about Buried Pirate Crates? Those are dug up after locating a pirate map and contain guaranteed high-tier loot rather than granting the initial access token.
            </p>
          </div>
        </div>
      </section>

      {/* ② Treasure Hours 期间概率换算 (1 in 91,667 与 1 in 68,750 独立成段) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Treasure Hours Multiplier Breakdown: 1 in 91,667 vs 1 in 68,750
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          During official weekend Treasure Hours, container drop odds are boosted significantly. Taking advantage of these limited-time windows drastically compresses the cumulative grinding hours required:
        </p>

        <div className="space-y-3.5 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Flame className="w-4 h-4 text-[#ffc93c]" />
              <span>Wave 1 Boost: The 1 in 91,667 Milestone (1.5x Multiplier)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              During Treasure Hours Wave 1 on Saturday, November 14, 2026, the baseline probability increases by 50% from 1/137,500 to exactly <strong className="text-white">1 in 91,667</strong> (0.000010909%). In practical gameplay terms, the 50% statistical confidence threshold drops from 95,307 chests down to <strong className="text-[#ffc93c]">63,538 chests</strong>. Calculated against the standard solo baseline of 40 chests/hour, this 1.5x boost saves roughly 795 solo grinding hours (reducing required time from 2,383 down to 1,588 hours); for a coordinated four-player squad looting together at a combined rate of ~120 to 160 chests per hour, it cuts over 200 to 265 team match hours off the median grind.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Flame className="w-4 h-4 text-[#ffd510]" />
              <span>Waves 2 &amp; 3 Peak: The 1 in 68,750 Double Odds (2.0x Multiplier)</span>
            </h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              For Wave 2 (Saturday, November 21) and the final Wave 3 (Saturday, November 28), Epic activates maximum 2.0x double odds, boosting the probability to <strong className="text-white">1 in 68,750</strong> (0.000014545%). At this double rate, reaching the 50% median target drops to exactly <strong className="text-[#ffd510]">47,655 chests</strong> (~1,191 hours @ 40 chests/hr), while the 90% high-probability boundary drops from 316,604 chests down to exactly <strong className="text-white">158,302 chests</strong> (~3,958 hours @ 40 chests/hr), and 99% near-certainty requires 316,604 chests. This represents the absolute highest statistical return on time invested during the entire Chapter 7 campaign.
            </p>
          </div>
        </div>
      </section>

      {/* ③ 赛季 12 月 4 日结束后代币会怎样 */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <Coins className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            What Happens to Pirate Tokens When Chapter 7 Concludes on December 4
          </h2>
        </div>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          The Chapter 7 Treasure Hunters mini-season operates on an expedited schedule running from November 1 to December 4–5, 2026. Because Pirate Tokens are tied directly to seasonal event mechanics, players must adhere to specific end-of-season rules:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white">Expiration Without Carry-Over</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Any unspent Pirate Tokens will expire permanently when the Chapter 8 seasonal update goes live on December 4–5, 2026. Tokens do not roll over into your inventory for future seasons, nor will they convert into V-Bucks or Battle Pass stars. If you secure a token during a match, ensure you utilize it immediately at the secret shop rather than postponing your redemption.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
            <h3 className="font-bold text-white">Permanent Account Cosmetic Retention</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              While the tokens themselves are ephemeral, all cosmetic rewards redeemed through the Pirate Shop—including the ultra-rare 1 in 1.56M Golden Skin variant, weapon wraps, and lobby tracks—are bound permanently to your Epic Games Locker. Because this mini-season is non-recurring, items earned will likely stand among the rarest legacy cosmetics in Fortnite history.
            </p>
          </div>
        </div>
      </section>

      {/* ④ 常见问题解答 FAQ (4~5条，口径与全站统一) */}
      <section className="space-y-4 pt-4 border-t border-[#2e2e2e]">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-4 h-4 text-[#ffc93c]" />
          <h2 className="text-base font-bold text-white">
            Frequently Asked Questions About Pirate Token Odds
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Does opening chests in Creative mode or Team Rumble count toward token odds?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              No. Pirate Tokens strictly drop in core Battle Royale, Zero Build, and ranked matchmaking. Custom Creative maps, private islands, and Team Rumble respawn modes do not utilize the 1 in 137,500 loot drop table.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Is there bad luck protection or a guaranteed pity timer in Fortnite?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              No. Epic Games confirmed that every container open is an independent Bernoulli event. There is no cumulative pity counter. Searching 137,500 chests gives roughly a 63.2% mathematical chance, never a 100% guarantee.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Can teammates share or ping a Pirate Token once it drops?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Yes. The token spawns as physical in-game loot that can be marked with danger/item pings. Any teammate can pick it up and carry it to access the hidden pirate vendor during that match.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">Does purchasing the Chapter 7 Battle Pass boost your drop probability?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              No. The baseline 1 in 137,500 drop rate is identical across all accounts. The only official way to increase your drop odds is logging in during the scheduled weekend Treasure Hours events.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-1">
            <h3 className="font-bold text-white">What is the fastest looting route to maximize Pirate Token odds?</h3>
            <p className="text-[#9a9a9a] leading-relaxed text-[11px]">
              Land at high-density suburban POIs (like Retail Row or Pleasant Park) where building clusters offer 20 to 30 wooden chests in close proximity. Use our companion counter to record your tally as you loot before rotating along coastline nodes.
            </p>
          </div>
        </div>
      </section>

      {/* 怎么用计数器统计 */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          How to Track Your Progress Against Official Pirate Token Odds
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Because Fortnite does not show your progress toward the 137,500 container milestone in real-time, competitive players use our companion tools while playing:
        </p>
        <ul className="space-y-2 text-xs text-[#9a9a9a]">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Open <Link href="/fortnite-chest-counter" className="text-[#ffc93c] underline font-medium">Chest Counter Fortnite (4-Column Tool)</Link> on your second monitor or phone.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Tap the button for Standard, Rare, Sprite, or Vault containers as you loot POIs.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc93c] shrink-0 mt-0.5" />
            <span>Plug your cumulative session tally into this calculator to track exactly how close you are to reaching the 50% median threshold.</span>
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
