import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SeoContentSection() {
  return (
    <article className="py-12 px-4 max-w-4xl mx-auto text-[#d4d4d4] space-y-10 leading-relaxed text-sm">
      <div className="border-b border-[#2e2e2e] pb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Guide to Fortnite Chest Spawns, Odds, and Drop Paths
        </h2>
        <p className="text-sm text-[#9a9a9a] mt-1">
          How competitive players optimize early-game shield RNG and track chest paths.
        </p>
      </div>

      {/* 章节 1 */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-white">
          Why Competitive Players Track Chest Counts
        </h3>
        <p className="text-[#9a9a9a] leading-relaxed">
          In Fortnite Battle Royale, tournament players practice predetermined landing routes known as chest paths. 
          Tracking chest volume per drop helps optimize loadouts before the first storm surge:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white text-xs mb-1">Shield Reliability</h4>
            <p className="text-xs text-[#9a9a9a]">Opening fewer than three chests significantly lowers your odds of achieving 100 Shield before the first contest.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white text-xs mb-1">Squad Distribution</h4>
            <p className="text-xs text-[#9a9a9a]">Team IGLs predict ammunition volume, surge weapons, and mobility items per POI.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white text-xs mb-1">Quest Milestones</h4>
            <p className="text-xs text-[#9a9a9a]">Easily verify progress across 50, 100, and 250 seasonal container quests.</p>
          </div>
        </div>
      </section>

      {/* 章节 2 */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h3 className="text-base font-bold text-white">
          How to Check How Many Chests You Opened in Fortnite
        </h3>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Epic Games does not provide a lifetime chest counter in the lobby Career tab. To verify chest statistics, players use three methods:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[#9a9a9a]">
          <li><strong className="text-white">Milestones Tab:</strong> Navigate to Quests &gt; Milestones in the lobby and check &ldquo;Search Chests or Ammo Boxes&rdquo;.</li>
          <li><strong className="text-white">Match Accolades:</strong> Inspect end-of-game accolades like &ldquo;Chest Specialist&rdquo; (7+ chests in one game).</li>
          <li><strong className="text-white">Live Companion:</strong> Use <Link href="/" className="text-[#ffc93c] underline font-medium">TrackChest</Link> on mobile while playing to log each open with zero delay.</li>
        </ol>
      </section>

      {/* 章节 2.5: 组队协同与赛季保留 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <section className="p-5 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2.5">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#ffc93c]"></span>
            <span>Duos &amp; Squad Co-op Tracking</span>
          </h3>
          <p className="text-xs text-[#9a9a9a] leading-relaxed">
            In competitive team modes, assign designated POI zones to each squad member (e.g. Player 1 sweeps roof attics, Player 2 loots the vault basement). Because TrackChest runs entirely client-side without account lockouts, each teammate keeps a browser tab open to log their sector. Before rotating to zone, the IGL quickly tallies total squad containers to confirm whether shield and surge rifle quotas are met.
          </p>
        </section>

        <section className="p-5 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-2.5">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#49d6ff]"></span>
            <span>Season Resets &amp; Archiving Career Data</span>
          </h3>
          <p className="text-xs text-[#9a9a9a] leading-relaxed">
            Whenever Epic Games rolls out a new Fortnite season, in-game milestone quests reset to zero, wiping your seasonal container tally. With TrackChest, your career logs stay safely preserved in browser LocalStorage. Use the built-in &ldquo;Backup&rdquo; button at the end of each season to export your historical JSON snapshot, allowing you to archive lifetime chest milestones across all Chapters.
          </p>
        </section>
      </div>

      {/* 章节 2.8: 这工具不做什么 (What TrackChest Does NOT Do) */}
      <section className="p-5 sm:p-6 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-3">
        <h3 className="text-base font-bold text-white">
          What This Fortnite Chest Tracker Does NOT Do (Account Safety Guarantee)
        </h3>
        <p className="text-xs text-[#9a9a9a] leading-relaxed">
          Because competitive Fortnite players care deeply about tournament integrity and account security, here is our transparent zero-risk commitment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white mb-1">No Game Memory Injection</h4>
            <p className="text-[11px] text-[#888]">
              This fortnite chest tracker runs completely outside the game. It does not hook into Fortnite game files, read memory addresses, or trigger anti-cheat software (Easy Anti-Cheat / BattlEye).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white mb-1">No Epic Account Login</h4>
            <p className="text-[11px] text-[#888]">
              We never ask for your Epic Games username, email, or OAuth tokens. This fortnite chest tracker companion functions with zero credentials required.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e]">
            <h4 className="font-semibold text-white mb-1">100% Client-Side Storage</h4>
            <p className="text-[11px] text-[#888]">
              All your opened container statistics remain stored exclusively on your own device via private LocalStorage, giving you complete data privacy.
            </p>
          </div>
        </div>
      </section>

      {/* 章节 3: 内链导航 */}
      <section className="space-y-3 pt-2">
        <h3 className="text-base font-bold text-white">
          Related Tools &amp; Guides
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link
            href="/fortnite-chest-counter"
            className="p-3.5 rounded-xl bg-[#1d1d1d] hover:bg-[#242424] border border-[#2e2e2e] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-semibold text-white group-hover:text-[#ffc93c] transition-colors block">
                Fortnite Chest Counter View
              </span>
              <span className="text-[#888] text-[11px]">Multi-column breakdown view for counting crates by category.</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#666] group-hover:text-white shrink-0 ml-2" />
          </Link>

          <Link
            href="/how-to-check-chests"
            className="p-3.5 rounded-xl bg-[#1d1d1d] hover:bg-[#242424] border border-[#2e2e2e] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-semibold text-white group-hover:text-[#ffc93c] transition-colors block">
                How to Check Opened Chests Guide
              </span>
              <span className="text-[#888] text-[11px]">Tutorial on finding milestone stats and match accolades.</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#666] group-hover:text-white shrink-0 ml-2" />
          </Link>

          <Link
            href="/pirate-token-odds"
            className="p-3.5 rounded-xl bg-[#1d1d1d] hover:bg-[#242424] border border-[#2e2e2e] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-semibold text-white group-hover:text-[#ffc93c] transition-colors block">
                Pirate Token Odds Calculator
              </span>
              <span className="text-[#888] text-[11px]">Calculate drop probabilities for pirate event chests and maps.</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#666] group-hover:text-white shrink-0 ml-2" />
          </Link>

          <Link
            href="/chest-types"
            className="p-3.5 rounded-xl bg-[#1d1d1d] hover:bg-[#242424] border border-[#2e2e2e] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-semibold text-white group-hover:text-[#ffc93c] transition-colors block">
                Fortnite Chest Types Encyclopedia
              </span>
              <span className="text-[#888] text-[11px]">Visual guide covering Standard, Rare, Sprite, and Vault Bunkers.</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#666] group-hover:text-white shrink-0 ml-2" />
          </Link>
        </div>
      </section>

      {/* 免责声明 */}
      <section className="pt-6 border-t border-[#2e2e2e] text-[11px] text-[#777] leading-relaxed">
        <p>
          TrackChest is an independent community fan utility tool. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic Games.
        </p>
      </section>
    </article>
  );
}
