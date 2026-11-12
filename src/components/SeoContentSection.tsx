import React from "react";
import Link from "next/link";
import { BookOpen, MapPin, Target, Sparkles, Shield, Compass, HelpCircle, ChevronRight, Crosshair } from "lucide-react";

export function SeoContentSection() {
  return (
    <article className="py-20 px-4 md:px-6 max-w-4xl mx-auto text-slate-300 space-y-14 leading-relaxed font-sans">
      {/* 模块标头 */}
      <div className="border-b border-slate-800/80 pb-10 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-tech font-bold uppercase tracking-widest text-amber-400 bg-void-900 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <BookOpen className="w-4 h-4" />
          <span>TACTICAL LOOT INTELLIGENCE</span>
        </div>
        <h2 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          THE ULTIMATE GUIDE TO FORTNITE CHEST TRACKING &amp; DROP SPAWNS
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Master early-game RNG, optimize competitive drop spots, and track chest routes like FNCS champions.
        </p>
      </div>

      {/* 章节 1: 为什么职业选手要追踪开箱数 */}
      <section className="space-y-4">
        <h3 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2.5">
          <Target className="w-5 h-5 text-amber-400" />
          <span>Why Competitive Players Use a Fortnite Chest Tracker</span>
        </h3>
        <p className="text-sm sm:text-base text-slate-300">
          In Fortnite Battle Royale, the early game is won or lost during the first 90 seconds after landing. 
          Professional tournament players in FNCS and Cash Cups meticulously practice predetermined landing routes—known as <strong>chest paths</strong>. 
          Tracking how many chests you reliably open before encountering the first enemy engagement is crucial for three reasons:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-void-900 border border-slate-800">
            <h4 className="font-tech text-sm uppercase tracking-wider font-bold text-amber-300 mb-1">01. Shield RNG</h4>
            <p className="text-xs text-slate-400">Opening &lt;3 chests severely drops your odds of reaching 100 Shield before early fights.</p>
          </div>
          <div className="p-4 rounded-2xl bg-void-900 border border-slate-800">
            <h4 className="font-tech text-sm uppercase tracking-wider font-bold text-amber-300 mb-1">02. Team Loadout</h4>
            <p className="text-xs text-slate-400">Squad IGLs predict ammo counts, surge guns, and mobility items per POI.</p>
          </div>
          <div className="p-4 rounded-2xl bg-void-900 border border-slate-800">
            <h4 className="font-tech text-sm uppercase tracking-wider font-bold text-amber-300 mb-1">03. Quest XP</h4>
            <p className="text-xs text-slate-400">Easily pace and clear 50, 100, and 250 seasonal chest opening milestones.</p>
          </div>
        </div>
      </section>

      {/* 章节 2: 怎么在游戏里查自己开了多少箱 */}
      <section className="space-y-4 p-6 sm:p-8 rounded-[2rem] bg-void-900 border-2 border-indigo-500/20 shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]">
        <h3 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2.5">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          <span>How to Check How Many Chests You Opened in Fortnite</span>
        </h3>
        <p className="text-sm text-slate-300">
          A common question among players is: <em>&ldquo;How can I check how many chests I opened in my Fortnite career?&rdquo;</em> 
          Unlike eliminations and Victory Royales which are visible in public career tabs, Epic Games does not display a cumulative lifetime chest counter in the main lobby.
        </p>
        <p className="text-sm text-slate-300 font-semibold">
          To verify your chest numbers, players use three distinct methods:
        </p>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-void-850 border border-slate-800 flex items-start space-x-3">
            <div className="font-tech text-lg font-black text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">1</div>
            <div>
              <h4 className="text-sm font-bold text-white">Seasonal Milestones Tab</h4>
              <p className="text-xs text-slate-400 mt-0.5">Head to Quests &gt; Milestones in the lobby. Check the &ldquo;Search Chests or Ammo Boxes&rdquo; counter for active season progress.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-void-850 border border-slate-800 flex items-start space-x-3">
            <div className="font-tech text-lg font-black text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">2</div>
            <div>
              <h4 className="text-sm font-bold text-white">Post-Match Accolades</h4>
              <p className="text-xs text-slate-400 mt-0.5">Inspect your end-of-game accolades for achievements like &ldquo;Chest Specialist&rdquo; (7+ chests in a single game).</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-void-850 border border-slate-800 flex items-start space-x-3">
            <div className="font-tech text-lg font-black text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">3</div>
            <div>
              <h4 className="text-sm font-bold text-white">Live Tracking with TrackChest</h4>
              <p className="text-xs text-slate-400 mt-0.5">Use <Link href="#tracker-app" className="text-amber-400 font-bold underline">TrackChest</Link> on your phone while playing to count per match without waiting for replay replays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 章节 3: 宝箱刷新机制与掉落概率 */}
      <section className="space-y-4">
        <h3 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2.5">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>Fortnite Chest Spawns &amp; Probability Mechanics</span>
        </h3>
        <p className="text-sm text-slate-300">
          In competitive and casual battle royale modes, chest spawn rates range between <strong>70% and 100%</strong> depending on the POI tier. Standard golden chests spawn a weapon (Grey to Rare), matching ammo, one consumable shield or heal, and 30 wood/stone/metal materials.
        </p>
        <p className="text-sm text-slate-300">
          Rare Chests (blue pulsating glow) have an estimated <strong>2.5% to 5% roll chance</strong>, guaranteeing at least an Epic or Legendary item.
        </p>
      </section>

      {/* 章节 4: 内链拓展矩阵 */}
      <section className="p-7 rounded-[2rem] bg-void-900 border border-slate-800 space-y-4">
        <h3 className="font-tech text-xl font-bold uppercase tracking-wide text-white flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>COMPANION CHEST SUITE &amp; GUIDES</span>
        </h3>
        <p className="text-xs text-slate-400">
          Explore specialized sub-tools in our battle royale companion network:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-xs">
          <Link
            href="/fortnite-chest-counter"
            className="p-4 rounded-2xl bg-void-850 hover:bg-void-800 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col group"
          >
            <span className="font-tech text-sm uppercase tracking-wide font-bold text-amber-300 group-hover:text-amber-400">
              Fortnite Chest Counter View &rarr;
            </span>
            <span className="text-slate-400 text-[11px] mt-1">Multi-column breakdown view for counting Standard, Rare, and Vault chests simultaneously.</span>
          </Link>
          <Link
            href="/how-to-check-chests"
            className="p-4 rounded-2xl bg-void-850 hover:bg-void-800 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col group"
          >
            <span className="font-tech text-sm uppercase tracking-wide font-bold text-amber-300 group-hover:text-amber-400">
              How to Check Opened Chests Guide &rarr;
            </span>
            <span className="text-slate-400 text-[11px] mt-1">Full tutorial on viewing your career milestone accolades in-game.</span>
          </Link>
          <Link
            href="/pirate-token-odds"
            className="p-4 rounded-2xl bg-void-850 hover:bg-void-800 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col group"
          >
            <span className="font-tech text-sm uppercase tracking-wide font-bold text-amber-300 group-hover:text-amber-400">
              Pirate Token Odds Calculator &rarr;
            </span>
            <span className="text-slate-400 text-[11px] mt-1">Calculate exact drop probabilities for pirate event chests and treasure maps.</span>
          </Link>
          <Link
            href="/chest-types"
            className="p-4 rounded-2xl bg-void-850 hover:bg-void-800 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col group"
          >
            <span className="font-tech text-sm uppercase tracking-wide font-bold text-amber-300 group-hover:text-amber-400">
              Fortnite Chest Types Encyclopedia &rarr;
            </span>
            <span className="text-slate-400 text-[11px] mt-1">Visual glossary of Standard, Rare, Sprite, and Vault Bunkers.</span>
          </Link>
        </div>
      </section>

      {/* 章节 5: 合规免责声明 */}
      <section className="pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-2">
        <div className="flex items-center space-x-2 text-slate-400 font-tech font-bold uppercase tracking-wider">
          <Shield className="w-4 h-4 text-slate-400" />
          <span>Epic Games Fan Content Policy Compliance</span>
        </div>
        <p className="leading-relaxed">
          TrackChest is an independent, non-commercial fan utility tool. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic Games. TrackChest does not alter game files, inject software, or interact directly with Epic Games servers.
        </p>
      </section>
    </article>
  );
}
