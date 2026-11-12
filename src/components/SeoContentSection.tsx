import React from "react";
import Link from "next/link";
import { BookOpen, MapPin, Target, Sparkles, Shield, Compass, HelpCircle } from "lucide-react";

export function SeoContentSection() {
  return (
    <article className="py-16 px-4 md:px-6 max-w-4xl mx-auto text-slate-300 space-y-12 leading-relaxed">
      {/* 模块标头 */}
      <div className="border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Fortnite Loot Guide & Strategic Knowledge Base</span>
        </div>
        <h2 className="text-3xl font-black text-white tracking-tight">
          The Ultimate Guide to Fortnite Chest Tracking, Spawn Odds, and Loot Routes
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Master your early-game RNG, optimize competitive drop spots, and track your chest opens like FNCS pros.
        </p>
      </div>

      {/* 章节 1: 为什么职业选手要追踪开箱数 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Target className="w-5 h-5 text-amber-400" />
          <span>Why Competitive Players Use a Fortnite Chest Tracker</span>
        </h3>
        <p className="text-sm">
          In Fortnite Battle Royale, the early game is won or lost during the first 90 seconds after landing. 
          Professional tournament players in FNCS and Cash Cups meticulously practice predetermined landing routes—known as <strong>chest paths</strong>. 
          Tracking how many chests you reliably open before encountering the first enemy engagement is crucial for several strategic reasons:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
          <li>
            <strong className="text-slate-200">Shield RNG Mitigation:</strong> Opening fewer than three chests at your POI drastically lowers your probability of having full 100 Shield before the first storm surge or contest.
          </li>
          <li>
            <strong className="text-slate-200">Loadout Consistency:</strong> Knowing your team opens an average of 14 chests per drop allows your squad IGL (In-Game Leader) to predict ammunition counts, surge weapon access, and mobility item distribution.
          </li>
          <li>
            <strong className="text-slate-200">Milestone & Quest Progression:</strong> Many seasonal battle pass quests and milestone XP rewards require opening 50, 100, or 250 chests throughout each Chapter.
          </li>
        </ul>
      </section>

      {/* 章节 2: 怎么在游戏里查自己开了多少箱 */}
      <section className="space-y-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          <span>How to Check How Many Chests You Opened in Fortnite</span>
        </h3>
        <p className="text-sm">
          A common question among players is: <em>&ldquo;How can I check how many chests I opened in my Fortnite career?&rdquo;</em> 
          Unlike eliminations and Victory Royales which are tracked in public career tabs, Epic Games does not display a cumulative real-time lifetime chest counter in the lobby.
        </p>
        <p className="text-sm">
          To verify your chest numbers, players traditionally rely on three methods:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-400">
          <li>
            <strong className="text-slate-200">Seasonal Milestones Tab:</strong> Navigate to Quests &gt; Milestones in the Fortnite lobby. Look for &ldquo;Search Chests or Ammo Boxes&rdquo;. This shows your progress for the current active season, capped at specific milestone tiers.
          </li>
          <li>
            <strong className="text-slate-200">Post-Match Accolades Screen:</strong> At the end of every Battle Royale game, inspect your match accolades for badges such as &ldquo;Chest Specialist&rdquo; (opened 7+ chests in one match) or &ldquo;Loot Hoarder&rdquo;.
          </li>
          <li>
            <strong className="text-slate-200">Live Companion Tracking with TrackChest:</strong> Because in-game tools reset each season or lack match-by-match precision, players use <Link href="#tracker-app" className="text-amber-400 underline font-semibold">TrackChest</Link> on a phone or second display to tap and count in real time without having to wait for the replay file to render.
          </li>
        </ol>
      </section>

      {/* 章节 3: 宝箱刷新机制与掉落概率 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>Understanding Fortnite Chest Spawns &amp; Probability Mechanics</span>
        </h3>
        <p className="text-sm">
          Over Fortnite&apos;s history, Epic Games has adjusted chest spawn rates several times. 
          While Chapter 1 featured a variable spawn rate that occasionally dropped to 50%–70%, modern competitive and casual modes typically guarantee between <strong>70% and 100%</strong> spawn density depending on the designated POI tier:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 mb-1">Standard Golden Chests</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every standard chest generates guaranteed loot containing one primary weapon ranging from Common (Grey) to Rare (Blue), accompanied by matching ammo, one healing or utility consumable (Bandages, Mini Shields, or Medkits), and 30 building materials.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-sm font-bold text-blue-400 mb-1">Rare Blue Chests</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rare Chests have a recognizable pulsating blue glow and distinctive humming sound. Any standard chest location has an estimated <strong>2.5% to 5% upgrade roll</strong> into a Rare Chest upon match initialization, guaranteeing at least an Epic or Legendary item.
            </p>
          </div>
        </div>
      </section>

      {/* 章节 4: Pirate Token 与隐藏宝箱几率 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Compass className="w-5 h-5 text-orange-400" />
          <span>Pirate Token Odds &amp; Buried Treasure Spawns</span>
        </h3>
        <p className="text-sm">
          Special seasonal events—such as Pirate collaborations and Treasure Map events—introduce secondary currency tokens and buried map objectives. 
          Opening Pirate Token chests gives players access to high-tier vaulted artillery, Flint-Knock mobility, and doubloon payouts. 
          Tracking how many token chests you open per match provides valuable telemetry for optimizing event battle pass progression before the season ends.
        </p>
      </section>

      {/* 章节 5: 前 8 个页面内链矩阵 (SEO Hub & Spoke 架构) */}
      <section className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-amber-400" />
          <span>Explore More Fortnite Loot &amp; Chest Tools</span>
        </h3>
        <p className="text-xs text-slate-400">
          Navigate our companion resources and deep-dive guides to enhance your battle royale gameplay:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link
            href="/fortnite-chest-counter"
            className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/40 transition-colors flex flex-col"
          >
            <span className="font-bold text-amber-300">Fortnite Chest Counter View</span>
            <span className="text-slate-400 text-[11px] mt-0.5">Multi-column categorized view for counting Standard, Rare, and Vault chests simultaneously.</span>
          </Link>
          <Link
            href="/how-to-check-chests"
            className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/40 transition-colors flex flex-col"
          >
            <span className="font-bold text-amber-300">How to Check Opened Chests Guide</span>
            <span className="text-slate-400 text-[11px] mt-0.5">Step-by-step tutorial on viewing your seasonal milestone stats and accolades in-game.</span>
          </Link>
          <Link
            href="/pirate-token-odds"
            className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/40 transition-colors flex flex-col"
          >
            <span className="font-bold text-amber-300">Pirate Token Odds Calculator</span>
            <span className="text-slate-400 text-[11px] mt-0.5">Calculate exact drop probabilities for pirate event chests and buried treasure maps.</span>
          </Link>
          <Link
            href="/chest-types"
            className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/40 transition-colors flex flex-col"
          >
            <span className="font-bold text-amber-300">Fortnite Chest Types Encyclopedia</span>
            <span className="text-slate-400 text-[11px] mt-0.5">Full visual glossary of Standard, Rare, Elemental Sprite, Bunkers, and Vault chests.</span>
          </Link>
        </div>
      </section>

      {/* 章节 6: 商标与合规声明 */}
      <section className="pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-2">
        <div className="flex items-center space-x-2 text-slate-400 font-semibold">
          <Shield className="w-4 h-4 text-slate-400" />
          <span>Epic Games Fan Content Policy Compliance</span>
        </div>
        <p className="leading-relaxed">
          TrackChest is an independent, non-commercial fan-created utility tool. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic Games. TrackChest does not alter game files, inject software, or interact directly with Epic Games servers.
        </p>
      </section>
    </article>
  );
}
