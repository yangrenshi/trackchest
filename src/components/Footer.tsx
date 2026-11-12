"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Box, ShieldAlert } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* 品牌简介 */}
          <div className="space-y-3.5 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                <Box className="w-4 h-4 fill-slate-950" />
              </div>
              <span className="font-tech text-2xl font-black text-white tracking-wide uppercase">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              The free, lightweight, zero-login Fortnite chest tracker and loot counter for solos and competitive squads.
            </p>
          </div>

          {/* 核心工具 */}
          <div>
            <h4 className="font-tech text-sm uppercase tracking-widest text-slate-200 font-bold mb-3.5">
              Chest Tools
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <Link href="/#tracker-app" className="hover:text-amber-400 transition-colors">
                  Live Chest Tracker
                </Link>
              </li>
              <li>
                <Link href="/fortnite-chest-counter" className="hover:text-amber-400 transition-colors">
                  Categorized Chest Counter
                </Link>
              </li>
              <li>
                <Link href="/pirate-token-odds" className="hover:text-amber-400 transition-colors">
                  Pirate Token Odds
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-amber-400 transition-colors">
                  Chest Spawn Odds
                </Link>
              </li>
            </ul>
          </div>

          {/* 攻略与指南 */}
          <div>
            <h4 className="font-tech text-sm uppercase tracking-widest text-slate-200 font-bold mb-3.5">
              Guides &amp; Strategy
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <Link href="/how-to-check-chests" className="hover:text-amber-400 transition-colors">
                  How to Check Chests
                </Link>
              </li>
              <li>
                <Link href="/chest-types" className="hover:text-amber-400 transition-colors">
                  Chest Types Rarity Guide
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.socials?.github || "https://github.com/yangrenshi/trackchest"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Open Source GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* 法律与合规 */}
          <div>
            <h4 className="font-tech text-sm uppercase tracking-widest text-slate-200 font-bold mb-3.5">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Epic Games 免责声明核心合规区 */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <div className="max-w-2xl leading-relaxed flex items-start space-x-2.5">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> TrackChest is an independent community fan tool and is not endorsed, sponsored, affiliated with, or associated with Epic Games, Inc. Fortnite is a registered trademark of Epic Games, Inc. All trademarks and registered trademarks are the property of their respective owners.
            </p>
          </div>
          <div className="shrink-0 text-slate-500 font-mono">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
