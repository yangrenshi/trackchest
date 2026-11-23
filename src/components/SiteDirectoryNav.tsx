"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Layers, Calculator, BookOpen, Compass, Crosshair } from "lucide-react";
import { SEASON_CONFIG } from "@/config/season";

export function SiteDirectoryNav() {
  const pathname = usePathname();

  const tools = [
    {
      title: "Live Chest Tracker",
      href: "/",
      badge: "Main Tool",
      description: "Zero-latency single-tap companion counter with session, daily, and career local backups.",
      icon: Box,
    },
    {
      title: "4-Column Squad Chest Counter",
      href: "/fortnite-chest-counter",
      badge: "Squad Tool",
      description: "Dedicated 4-column counter tracking Standard, Rare, Sprite, and Boss Vault chests in parallel.",
      icon: Layers,
    },
    {
      title: "Pirate Token Odds Calculator",
      href: "/pirate-token-odds",
      badge: "Odds & Math",
      description: "Community-tracked 1 in 137,500 drop probability simulator, milestone thresholds, and Treasure Hours math.",
      icon: Calculator,
    },
  ];

  const guides = [
    {
      title: "Fortnite Chest Types Encyclopedia",
      href: "/chest-types",
      badge: "Field Guide",
      description: "Tactical breakdown of all 6 Chapter 7 container variants, spawn locations, and loot yields.",
      icon: Compass,
    },
    {
      title: "How to Check Opened Chests Guide",
      href: "/how-to-check-chests",
      badge: "Tutorial",
      description: "Step-by-step tutorial on viewing in-game quest milestones, match accolades, and live counts.",
      icon: BookOpen,
    },
    {
      title: "Fortnite Leekcapper Quest & Drop Guide",
      href: "/leekcapper-fortnite",
      badge: "Quest Guide",
      description: "Chest and floor loot drop rates, pirate galleon locations, and ship boarding quest walkthrough.",
      icon: Crosshair,
    },
  ];

  return (
    <section className="border-t border-[#2e2e2e] bg-[#141414] py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#262626] pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#ffc93c]" />
              <span>TrackChest Tools &amp; Strategy Directory</span>
            </h2>
            <p className="text-xs text-[#8c8c8c] mt-0.5">
              Explore all companion calculators, categorized squad trackers, and {SEASON_CONFIG.chapter} container guides.
            </p>
          </div>
          <div className="text-[11px] font-mono text-[#ffc93c] bg-[#ffc93c]/10 border border-[#ffc93c]/20 px-2.5 py-1 rounded-md shrink-0 w-fit">
            {SEASON_CONFIG.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 工具列表 */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#8c8c8c] uppercase tracking-wider">
              Core Companion Tools
            </h3>
            <div className="space-y-2.5">
              {tools.map((item) => {
                const IconComponent = item.icon;
                const isCurrent = pathname === item.href;

                if (isCurrent) {
                  return (
                    <div
                      key={item.href}
                      className="p-3.5 rounded-xl bg-[#202020] border border-[#ffc93c]/60 flex items-start space-x-3 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ffc93c]/20 text-[#ffc93c] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-xs text-[#ffc93c]">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-semibold text-[#ffc93c] bg-[#ffc93c]/15 border border-[#ffc93c]/30 px-1.5 py-0.5 rounded">
                            Current Page
                          </span>
                        </div>
                        <p className="text-[11px] text-[#a0a0a0] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-3.5 rounded-xl bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#ffc93c]/50 hover:bg-[#202020] transition-colors flex items-start space-x-3 group block"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#262626] group-hover:bg-[#ffc93c]/15 text-[#ffc93c] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-xs text-white group-hover:text-[#ffc93c] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium text-[#777] bg-[#121212] px-1.5 py-0.2 rounded border border-[#262626]">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#8c8c8c] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 攻略列表 */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#8c8c8c] uppercase tracking-wider">
              Strategy &amp; Container Guides
            </h3>
            <div className="space-y-2.5">
              {guides.map((item) => {
                const IconComponent = item.icon;
                const isCurrent = pathname === item.href;

                if (isCurrent) {
                  return (
                    <div
                      key={item.href}
                      className="p-3.5 rounded-xl bg-[#202020] border border-[#49d6ff]/60 flex items-start space-x-3 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#49d6ff]/20 text-[#49d6ff] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-xs text-[#49d6ff]">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-semibold text-[#49d6ff] bg-[#49d6ff]/15 border border-[#49d6ff]/30 px-1.5 py-0.5 rounded">
                            Current Page
                          </span>
                        </div>
                        <p className="text-[11px] text-[#a0a0a0] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-3.5 rounded-xl bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#49d6ff]/50 hover:bg-[#202020] transition-colors flex items-start space-x-3 group block"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#262626] group-hover:bg-[#49d6ff]/15 text-[#49d6ff] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-xs text-white group-hover:text-[#49d6ff] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium text-[#777] bg-[#121212] px-1.5 py-0.2 rounded border border-[#262626]">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#8c8c8c] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* 合规与支持辅助区 */}
        <div className="pt-4 border-t border-[#222] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#777]">
          <span>TrackChest &bull; Free Fortnite Battle Royale Companion</span>
          <div className="flex items-center space-x-4">
            {pathname === "/privacy" ? (
              <span className="text-[#ffc93c] font-semibold cursor-default">Privacy Policy (Current)</span>
            ) : (
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            )}
            {pathname === "/terms" ? (
              <span className="text-[#ffc93c] font-semibold cursor-default">Terms of Service (Current)</span>
            ) : (
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            )}
            {pathname === "/contact" ? (
              <span className="text-[#ffc93c] font-semibold cursor-default">Contact Us (Current)</span>
            ) : (
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
