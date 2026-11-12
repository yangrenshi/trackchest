"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Sparkles, ShieldCheck, Zap, ArrowDown, Crosshair } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-6 px-4 md:px-6 overflow-hidden text-center">
      {/* 背景战术光晕球 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 顶部电竞战斗标签 */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-void-900 border border-amber-500/40 text-amber-400 text-xs font-tech font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Crosshair className="w-3.5 h-3.5 text-amber-400 animate-spin duration-3000" />
          <span>FORTNITE COMPANION HUD</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-white font-mono text-[10px] bg-amber-500/30 px-1.5 py-0.2 rounded font-bold">
            CHAPTER 6 META
          </span>
        </div>

        {/* H1 核心词绝对主轴 (包含完整词组 Fortnite Chest Tracker) */}
        <h1 className="font-tech text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-glow-gold">
            FORTNITE CHEST TRACKER
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-slate-200 font-bold mt-2 tracking-normal">
            Track Every Chest You Open
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
          {siteConfig.description}
        </p>

        {/* 核心信任亮点 */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-tech tracking-wider text-slate-400 uppercase mb-6">
          <span className="flex items-center space-x-1.5 bg-void-900 px-3 py-1 rounded-xl border border-slate-800">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>INSTANT TAP • ZERO-LAG</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-void-900 px-3 py-1 rounded-xl border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NO EPIC ACCOUNT LOGIN NEEDED</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-void-900 px-3 py-1 rounded-xl border border-slate-800">
            <span>SOLO &amp; SQUAD SPEED TRACKING</span>
          </span>
        </div>

        {/* 快速滑动指示器 */}
        <div className="flex justify-center">
          <a
            href="#tracker-app"
            className="inline-flex items-center space-x-2 text-xs font-tech uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors animate-bounce font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30"
          >
            <span>LAUNCH LIVE COUNTER</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
