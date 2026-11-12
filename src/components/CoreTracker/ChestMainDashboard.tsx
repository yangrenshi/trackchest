"use client";

import React, { useState, useEffect } from "react";
import { useChestTracker, MILESTONES } from "@/hooks/useChestTracker";
import { ChestTypeGrid } from "./ChestTypeGrid";
import { MilestoneAlert } from "./MilestoneAlert";
import { DataModal } from "./DataModal";
import { 
  RotateCcw, 
  RotateCw, 
  Sparkles, 
  Flame, 
  Trophy, 
  Layers, 
  Share2, 
  Database,
  SlidersHorizontal
} from "lucide-react";

export function ChestMainDashboard() {
  const {
    state,
    isLoaded,
    latestMilestone,
    increment,
    decrement,
    undo,
    resetSession,
    resetAll,
    exportData,
    importData,
    dismissMilestone,
  } = useChestTracker();

  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(true);
  const [copiedShare, setCopiedShare] = useState(false);
  const [tapEffect, setTapEffect] = useState(false);

  // 快捷键支持: Space / 1 快速记录，Z 键撤销
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 避免输入框内触发
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === "Space" || e.key === "1") {
        e.preventDefault();
        increment("regular");
        triggerTapVisual();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        undo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [increment, undo]);

  const triggerTapVisual = () => {
    setTapEffect(true);
    setTimeout(() => setTapEffect(false), 150);
  };

  const handleMainTap = () => {
    increment("regular");
    triggerTapVisual();
  };

  const handleShareCard = () => {
    const text = `🏆 My Fortnite Chest Stats today:\n📦 Opened: ${state.todayTotal} chests\n🔥 Daily Record: ${state.dailyBest} chests\nTrack yours free at TrackChest.com!`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  if (!isLoaded) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900/60 border border-slate-800 animate-pulse text-center text-slate-500">
        Loading TrackChest counter...
      </div>
    );
  }

  // 下一个里程碑计算
  const nextMilestone = MILESTONES.find((m) => m > state.todayTotal) || 1000;
  const progressPercent = Math.min(100, Math.round((state.todayTotal / nextMilestone) * 100));

  return (
    <div id="tracker-app" className="w-full max-w-4xl mx-auto scroll-mt-24">
      {/* 里程碑达成通知 */}
      <MilestoneAlert milestone={latestMilestone} onClose={dismissMilestone} />

      {/* 数据导出导入模态框 */}
      <DataModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        exportData={exportData}
        importData={importData}
      />

      {/* 核心卡片主容器 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-amber-500/20 shadow-2xl shadow-amber-950/20 backdrop-blur-xl p-5 md:p-8">
        {/* 背景光晕装饰 */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 顶部工具栏 */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-300">Live Solo & Squad Tracker</span>
            <span className="hidden sm:inline-block text-[11px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
              Shortcut: [Space] to +1
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={undo}
              disabled={state.history.length === 0}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center space-x-1.5 text-xs font-medium"
              title="Undo last tap (Ctrl+Z)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Undo</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm("Reset current match session back to 0? (Daily total will be preserved)")) {
                  resetSession();
                }
              }}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-400 hover:text-slate-200 transition-all text-xs font-medium flex items-center space-x-1"
              title="Clear Match Counter"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Match</span>
            </button>

            <button
              onClick={() => setIsDataModalOpen(true)}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-300 transition-all text-xs font-medium flex items-center space-x-1"
              title="Backup and Restore Data"
            >
              <Database className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Backup</span>
            </button>

            <button
              onClick={handleShareCard}
              className="py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold transition-all flex items-center space-x-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? "Stats Copied!" : "Share Stats"}</span>
            </button>
          </div>
        </div>

        {/* 关键统计 4 宫格 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>This Match</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {state.sessionTotal}
            </div>
            <span className="text-[10px] text-slate-500">Current game</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-center space-x-1.5 text-amber-300 text-xs mb-1 font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Today Total</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">
              {state.todayTotal}
            </div>
            <span className="text-[10px] text-amber-300/80">Chests opened today</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>Daily Best</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {state.dailyBest}
            </div>
            <span className="text-[10px] text-slate-500">Single day record</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>All-Time Total</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {state.allTimeTotal}
            </div>
            <span className="text-[10px] text-slate-500">Career chests</span>
          </div>
        </div>

        {/* 里程碑进度条 */}
        <div className="mb-6 px-1">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span className="flex items-center space-x-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Next Milestone Goal: <strong className="text-white">{nextMilestone} Chests</strong></span>
            </span>
            <span className="text-amber-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-300 shadow-sm shadow-amber-500/50"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 核心交互主角: 超大移动端手持点按按钮 */}
        <div className="my-6 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={handleMainTap}
            className={`w-full max-w-md h-36 sm:h-44 rounded-3xl bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 active:from-yellow-600 active:to-amber-700 text-slate-950 shadow-2xl shadow-amber-500/30 flex flex-col items-center justify-center transition-all duration-150 select-none group border-2 border-yellow-200/50 ${
              tapEffect ? "scale-95 brightness-110 shadow-inner" : "hover:scale-[1.01]"
            }`}
            aria-label="Tap to count opened chest"
          >
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-amber-950/80 mb-1">
              <Sparkles className="w-4 h-4 text-amber-950 animate-spin duration-3000" />
              <span>Tap to Track Chest</span>
            </div>
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-950 tabular-nums">
              +1 CHEST
            </div>
            <p className="text-xs font-bold text-amber-950/70 mt-1">
              Solos & Squads • No Epic Login Needed
            </p>
          </button>
        </div>

        {/* 展开/收起细分宝箱类型 */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>{showBreakdown ? "Hide Chest Rarity Breakdown" : "Show Chest Rarity Breakdown (Rare, Sprite, Token)"}</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm("Danger: Clear all local counts and history entirely?")) {
                  resetAll();
                }
              }}
              className="text-[11px] text-slate-500 hover:text-rose-400 transition-colors"
            >
              Reset All Data
            </button>
          </div>

          {showBreakdown && (
            <ChestTypeGrid
              counts={state.counts}
              onIncrement={increment}
              onDecrement={decrement}
            />
          )}
        </div>
      </div>
    </div>
  );
}
