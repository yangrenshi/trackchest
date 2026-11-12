"use client";

import React, { useState, useEffect } from "react";
import { useChestTracker, MILESTONES } from "@/hooks/useChestTracker";
import { ChestTypeGrid } from "./ChestTypeGrid";
import { MilestoneAlert } from "./MilestoneAlert";
import { DataModal } from "./DataModal";
import { 
  RotateCcw, 
  RotateCw, 
  Share2, 
  Database,
  SlidersHorizontal,
  Volume2,
  VolumeX,
} from "lucide-react";

export function ChestMainDashboard() {
  const {
    state,
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
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // 快捷键: Space / 1 快速记录，Z 键撤销
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === "Space" || e.key === "1") {
        e.preventDefault();
        increment("regular");
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        undo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [increment, undo]);

  const handleShareCard = () => {
    const text = `🏆 TrackChest Stats:\n📦 Opened: ${state.todayTotal} chests today\n🔥 Record: ${state.dailyBest} chests\nTrack yours live at trackchest.com!`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const nextMilestone = MILESTONES.find((m) => m > state.todayTotal) || 1000;
  const progressPercent = Math.min(100, Math.round((state.todayTotal / nextMilestone) * 100));

  return (
    <div id="tracker-app" className="w-full max-w-3xl mx-auto scroll-mt-20">
      {/* 里程碑达成弹窗 */}
      <MilestoneAlert milestone={latestMilestone} onClose={dismissMilestone} />

      {/* 备份模态框 */}
      <DataModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        exportData={exportData}
        importData={importData}
      />

      {/* 核心卡片: fortnite.bot 高光玻璃边框 (glass-rim) */}
      <div className="rounded-2xl bg-[#1d1d1d] glass-rim p-5 sm:p-7">
        
        {/* 顶部操作条 (极其安静、专业) */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#2e2e2e]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-[#9a9a9a]">Active Session</span>
            <span className="hidden sm:inline-block text-[11px] text-[#9a9a9a] bg-[#2b2b2b] px-2 py-0.5 rounded font-mono">
              SPACE to count
            </span>
          </div>

          <div className="flex items-center space-x-1.5 text-xs text-[#9a9a9a]">
            {/* 撤销 */}
            <button
              onClick={undo}
              disabled={state.history.length === 0}
              className="px-2.5 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center space-x-1 btn-press"
              title="Undo last open (Ctrl+Z)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Undo</span>
            </button>

            {/* 新战局重置 */}
            <button
              onClick={() => {
                if (window.confirm("Start new match session? (Daily and all-time totals will be preserved)")) {
                  resetSession();
                }
              }}
              className="px-2.5 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] text-[#9a9a9a] hover:text-white transition-colors flex items-center space-x-1 btn-press"
              title="Reset Match Count"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Match</span>
            </button>

            {/* 备份 */}
            <button
              onClick={() => setIsDataModalOpen(true)}
              className="p-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] text-[#9a9a9a] hover:text-white transition-colors btn-press"
              title="Backup Data"
              aria-label="Backup"
            >
              <Database className="w-4 h-4" />
            </button>

            {/* 分享 */}
            <button
              onClick={handleShareCard}
              className="px-2.5 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#343434] text-white transition-colors flex items-center space-x-1 btn-press"
              title="Share Stats"
            >
              <Share2 className="w-3.5 h-3.5 text-[#ffc93c]" />
              <span>{copiedShare ? "Copied" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* 主交互: 仿 lootcounter 极速清晰的主按键 */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => increment("regular")}
            className="flex-1 h-28 sm:h-32 rounded-xl bg-[#ffc93c] hover:bg-[#ffd766] active:bg-[#e0b02e] text-[#121212] font-sans font-bold flex flex-col items-center justify-center btn-press shadow-lg"
            aria-label="Count opened chest"
          >
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              +1 Chest
            </span>
            <span className="text-xs font-semibold text-[#121212]/80 mt-1">
              Tap here or press SPACE
            </span>
          </button>

          {/* 核心三格数字卡 (lootcounter 风格) */}
          <div className="grid grid-cols-3 sm:flex sm:flex-col gap-2.5 sm:w-48">
            <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
              <div className="text-[11px] text-[#9a9a9a]">This Match</div>
              <div className="text-2xl font-bold font-mono text-white tnum">{state.sessionTotal}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
              <div className="text-[11px] text-[#ffc93c]">Today Total</div>
              <div className="text-2xl font-bold font-mono text-[#ffc93c] tnum">{state.todayTotal}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e]">
              <div className="text-[11px] text-[#9a9a9a]">Daily Best</div>
              <div className="text-2xl font-bold font-mono text-white tnum">{state.dailyBest}</div>
            </div>
          </div>
        </div>

        {/* 里程碑进度条 (非常克制) */}
        <div className="p-3 rounded-xl bg-[#242424] border border-[#2e2e2e] mb-5">
          <div className="flex items-center justify-between text-xs text-[#9a9a9a] mb-1.5 font-medium">
            <span>Next Goal: <strong className="text-white">{nextMilestone} Chests</strong></span>
            <span className="text-[#ffc93c] font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#121212] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffc93c] transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 展开细分宝箱 (五档稀有度双色金属) */}
        <div className="pt-4 border-t border-[#2e2e2e]">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="text-xs font-medium text-[#9a9a9a] hover:text-white transition-colors flex items-center space-x-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#ffc93c]" />
              <span>{showBreakdown ? "Hide Rarity Breakdown" : "Log Specific Chest Types (Rare, Sprite, Vault)"}</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm("Wipe all saved counts and start fresh?")) {
                  resetAll();
                }
              }}
              className="text-[11px] text-[#666] hover:text-rose-400 transition-colors"
            >
              Reset All
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
