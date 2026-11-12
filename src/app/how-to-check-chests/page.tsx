import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft, BookOpen, Check, HelpCircle, Sparkles, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Check How Many Chests You Opened in Fortnite (Full Guide)",
  description: "Learn how to check how many chests you opened in Fortnite. Step-by-step tutorial on viewing milestone quests, match accolades, and live companion tracking.",
  alternates: {
    canonical: `${siteConfig.url}/how-to-check-chests`,
  },
};

export default function HowToCheckChestsPage() {
  return (
    <article className="py-12 px-4 md:px-6 max-w-4xl mx-auto space-y-10 leading-relaxed font-sans">
      {/* 顶部返回导航 */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-tech font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors bg-void-900 border border-slate-800 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO TRACKCHEST HOME</span>
        </Link>
      </div>

      {/* 标头区 */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" />
          <span>FORTNITE STATS TUTORIAL</span>
        </div>
        <h1 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          HOW TO CHECK HOW MANY CHESTS YOU OPENED IN FORTNITE
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Everything you need to know about finding your career chest statistics, seasonal milestones, and live tracking methods.
        </p>
      </div>

      {/* 快速解答框 */}
      <div className="p-6 rounded-3xl bg-void-900 border-2 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)] space-y-3">
        <h2 className="font-tech text-lg font-bold uppercase text-amber-400 flex items-center space-x-2">
          <Zap className="w-4 h-4" />
          <span>QUICK ANSWER: CAN YOU SEE LIFETIME CHESTS IN FORTNITE?</span>
        </h2>
        <p className="text-sm text-slate-200">
          <strong>No, Epic Games does not show a public lifetime chest counter in the lobby profile.</strong> 
          Your public Career Profile tab only tracks Victory Royales, Top 10s, and total eliminations. 
          To track chest statistics, players use <strong>Seasonal Milestones</strong>, <strong>Post-Match Accolades</strong>, or <strong>Live Companion Counters</strong> like <Link href="/" className="text-amber-400 underline font-bold">TrackChest</Link>.
        </p>
      </div>

      {/* 步骤 1 */}
      <section className="space-y-4">
        <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-mono text-sm flex items-center justify-center font-bold">1</span>
          <span>Method 1: Checking Seasonal Milestones Tab</span>
        </h2>
        <p className="text-sm text-slate-300">
          For the currently active season, Epic Games tracks how many containers you have searched under the Milestones tab:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-400">
          <li>Launch Fortnite and stay in the main <strong>Battle Royale Lobby</strong>.</li>
          <li>Click on the <strong>Quests</strong> icon at the top navigation bar (or press your designated Quests hotkey).</li>
          <li>Select the <strong>Milestones</strong> category on the left sidebar.</li>
          <li>Scroll to the objective named <strong>&ldquo;Search Chests or Ammo Boxes&rdquo;</strong>.</li>
          <li>Here you will see your exact progress (e.g. <em>142 / 250</em>). Each tier completion awards bonus Battle Pass XP.</li>
        </ol>
      </section>

      {/* 步骤 2 */}
      <section className="space-y-4">
        <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-mono text-sm flex items-center justify-center font-bold">2</span>
          <span>Method 2: Inspecting Post-Match Accolades</span>
        </h2>
        <p className="text-sm text-slate-300">
          At the end of each Battle Royale match, the game reveals accolades earned during that specific round. Look for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-slate-400">
          <li><strong>Chest Specialist:</strong> Awarded when you open 7 or more standard or rare chests in a single game.</li>
          <li><strong>Chest Expert:</strong> Awarded for opening 12+ chests across a match.</li>
          <li><strong>Vault Raider:</strong> Awarded for accessing and opening all chests inside a boss vault.</li>
        </ul>
      </section>

      {/* 步骤 3 */}
      <section className="space-y-4">
        <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-white flex items-center space-x-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-mono text-sm flex items-center justify-center font-bold">3</span>
          <span>Method 3: Live Real-Time Counting with TrackChest</span>
        </h2>
        <p className="text-sm text-slate-300">
          Because in-game quest numbers reset every season and bundle ammo boxes together with chests, competitive players keep <Link href="/" className="text-amber-400 font-bold underline">TrackChest</Link> open on a phone or second display.
        </p>
        <p className="text-sm text-slate-300">
          With TrackChest, you simply tap the screen each time you loot a crate. It maintains your <strong>current match session</strong>, <strong>today&apos;s total</strong>, <strong>single-day personal best</strong>, and <strong>career all-time counter</strong> automatically in your local browser storage.
        </p>
      </section>

      {/* 底部内链回跳 */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-tech font-extrabold uppercase tracking-wider text-sm text-center shadow-lg hover:bg-amber-300 transition-colors"
        >
          Open TrackChest Live Counter &rarr;
        </Link>
        <Link
          href="/fortnite-chest-counter"
          className="text-xs text-slate-400 hover:text-amber-400 underline font-semibold"
        >
          Or view the Categorized Chest Counter
        </Link>
      </div>
    </article>
  );
}
