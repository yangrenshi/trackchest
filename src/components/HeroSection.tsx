import React from "react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="pt-10 pb-4 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-semibold text-[#ffc93c] uppercase tracking-wider block">
          Fortnite Chest Companion
        </span>

        {/* H1 核心词绝对主轴 (TDH 规范对齐) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Fortnite Chest Tracker
          <span className="block text-xl sm:text-2xl font-normal text-[#9a9a9a] mt-1">
            Track Every Chest You Open
          </span>
        </h1>

        <p className="text-sm text-[#9a9a9a] max-w-lg mx-auto pt-1">
          Free online companion counter for solos or squads. Tap to count each open — no login, no Epic account needed.
        </p>
      </div>
    </section>
  );
}
