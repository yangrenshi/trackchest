import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Box } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#2e2e2e] text-[#9a9a9a] text-xs mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {/* 品牌 */}
          <div className="space-y-2 col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md bg-[#ffc93c] flex items-center justify-center text-[#121212]">
                <Box className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-logo text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-[#888] text-xs leading-relaxed">
              Fast, zero-login companion counter for Fortnite players.
            </p>
          </div>

          {/* 核心工具 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
              Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#tracker-app" className="hover:text-white transition-colors">
                  Live Tracker
                </Link>
              </li>
              <li>
                <Link href="/fortnite-chest-counter" className="hover:text-white transition-colors">
                  Chest Counter
                </Link>
              </li>
              <li>
                <Link href="/pirate-token-odds" className="hover:text-white transition-colors">
                  Pirate Token Odds
                </Link>
              </li>
              <li>
                <Link href="/chest-types" className="hover:text-white transition-colors">
                  Chest Types
                </Link>
              </li>
            </ul>
          </div>

          {/* 攻略 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
              Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-check-chests" className="hover:text-white transition-colors">
                  How to Check Chests
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-white transition-colors">
                  Spawn Rates
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 合规 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Epic Games 免责声明 */}
        <div className="pt-6 border-t border-[#222] text-[11px] text-[#777] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="max-w-xl">
            TrackChest is an independent community fan tool and is not endorsed, sponsored, or affiliated with Epic Games, Inc. Fortnite is a registered trademark of Epic Games, Inc.
          </p>
          <span className="shrink-0 font-mono">&copy; {currentYear} {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
