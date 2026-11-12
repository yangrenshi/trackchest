import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Check How Many Chests You Opened in Fortnite (Full Guide) | TrackChest",
  description: "Learn how to check how many chests you opened in Fortnite. Step-by-step tutorial on viewing milestone quests, match accolades, and live companion tracking.",
  alternates: {
    canonical: `${siteConfig.url}/how-to-check-chests`,
  },
  openGraph: {
    title: "How to Check How Many Chests You Opened in Fortnite (Full Guide)",
    description: "Step-by-step tutorial on checking your Fortnite chest statistics, quest milestones, and accolades.",
    url: `${siteConfig.url}/how-to-check-chests`,
    siteName: siteConfig.name,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Check How Many Chests You Opened in Fortnite",
    description: "Find out how many chests you have searched across Battle Royale seasons.",
  },
};

export default function HowToCheckChestsPage() {
  return (
    <article className="py-10 px-4 max-w-3xl mx-auto space-y-8 leading-relaxed text-sm text-[#d4d4d4]">
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
        <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
          Fortnite Stats Tutorial
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          How to Check How Many Chests You Opened in Fortnite
        </h1>
        <p className="text-xs text-[#9a9a9a]">
          Everything you need to know about finding your career chest statistics, seasonal milestones, and live tracking.
        </p>
      </div>

      {/* 快速解答 */}
      <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2">
        <h2 className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider">
          Quick Answer
        </h2>
        <p className="text-xs text-[#d4d4d4] leading-relaxed">
          <strong className="text-white">Epic Games does not display a public lifetime chest counter in the lobby profile.</strong> 
          Your public Career tab only records Victory Royales, Top 10s, and total eliminations. 
          To track chest statistics, players use <strong>Seasonal Milestones</strong>, <strong>Post-Match Accolades</strong>, or companion tools like <Link href="/" className="text-[#ffc93c] underline">TrackChest</Link>.
        </p>
      </div>

      {/* 步骤 1 */}
      <section className="space-y-2">
        <h2 className="text-base font-bold text-white flex items-center space-x-2">
          <span className="w-6 h-6 rounded-md bg-[#2b2b2b] text-white text-xs flex items-center justify-center font-mono">1</span>
          <span>Checking the Seasonal Milestones Tab</span>
        </h2>
        <p className="text-xs text-[#9a9a9a]">
          For the currently active season, container progress is tracked under Milestones:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-xs text-[#9a9a9a]">
          <li>Launch Fortnite and stay in the main Battle Royale Lobby.</li>
          <li>Click on the <strong>Quests</strong> icon at the top navigation bar.</li>
          <li>Select the <strong>Milestones</strong> category on the left sidebar.</li>
          <li>Scroll to the objective named <strong>&ldquo;Search Chests or Ammo Boxes&rdquo;</strong>.</li>
          <li>Your progress is displayed (e.g. <em>142 / 250</em>). Each completed tier awards bonus XP.</li>
        </ol>
      </section>

      {/* 步骤 2 */}
      <section className="space-y-2">
        <h2 className="text-base font-bold text-white flex items-center space-x-2">
          <span className="w-6 h-6 rounded-md bg-[#2b2b2b] text-white text-xs flex items-center justify-center font-mono">2</span>
          <span>Inspecting Post-Match Accolades</span>
        </h2>
        <p className="text-xs text-[#9a9a9a]">
          At the end of each Battle Royale match, accolades reveal chest badges:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-[#9a9a9a]">
          <li><strong>Chest Specialist:</strong> Awarded for opening 7+ chests in a single game.</li>
          <li><strong>Chest Expert:</strong> Awarded for opening 12+ chests in a single game.</li>
          <li><strong>Vault Raider:</strong> Awarded for accessing and opening all chests inside a boss vault.</li>
        </ul>
      </section>

      {/* 步骤 3 */}
      <section className="space-y-2">
        <h2 className="text-base font-bold text-white flex items-center space-x-2">
          <span className="w-6 h-6 rounded-md bg-[#2b2b2b] text-white text-xs flex items-center justify-center font-mono">3</span>
          <span>Live Counting with TrackChest</span>
        </h2>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Because quest counters reset every season and combine ammo boxes with chests, players keep <Link href="/" className="text-[#ffc93c] underline">TrackChest</Link> open on a phone or second display. Tap to record each open, keeping your session, daily, and career records permanently in local storage.
        </p>
      </section>

      <div className="pt-6 border-t border-[#2e2e2e] flex items-center justify-between text-xs">
        <Link href="/" className="text-[#ffc93c] font-medium hover:underline">
          &larr; Open Live Counter
        </Link>
        <Link href="/fortnite-chest-counter" className="text-[#9a9a9a] hover:text-white underline">
          Categorized Counter &rarr;
        </Link>
      </div>
    </article>
  );
}
