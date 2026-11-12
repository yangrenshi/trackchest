"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Sparkles, ShieldCheck, Zap, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-6 px-4 md:px-6 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        {/* 顶部标签 */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fortnite Chest Counter & Tracker</span>
          <span className="bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded-full text-[10px] font-black">
            Free
          </span>
        </div>

        {/* H1 核心词绝对主轴 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Track Every Chest You Open in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            Fortnite
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* 核心信任亮点 */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400 mb-6">
          <span className="flex items-center space-x-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Instant Tap • No Lag</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No Epic Login Needed</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center space-x-1.5">
            <span>Solo & Squad Ready</span>
          </span>
        </div>

        {/* 快速滑动指示器 */}
        <div className="flex justify-center">
          <a
            href="#tracker-app"
            className="inline-flex items-center space-x-1 text-xs text-amber-400 hover:text-amber-300 transition-colors animate-bounce font-semibold"
          >
            <span>Jump to Counter</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
