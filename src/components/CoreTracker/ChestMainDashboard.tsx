"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChestTracker, MILESTONES } from "@/hooks/useChestTracker";
import { ChestTypeGrid } from "./ChestTypeGrid";
import { MilestoneAlert } from "./MilestoneAlert";
import { DataModal } from "./DataModal";
import { playChestClickSound, playMilestoneSound } from "@/lib/sound";
import { 
  RotateCcw, 
  RotateCw, 
  Sparkles, 
  Flame, 
  Trophy, 
  Layers, 
  Share2, 
  Database,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  Zap,
  Target,
  Box
} from "lucide-react";

interface FloatingParticle {
  id: number;
  text: string;
  x: number;
  y: number;
}

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
  const [isPressed, setIsPressed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // 连击热度系统
  const [comboCount, setComboCount] = useState(0);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 浮动粒子数组
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // 快捷键支持: Space / 1 快速记录，Z 键撤销
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === "Space" || e.key === "1") {
        e.preventDefault();
        handleTapAction();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        undo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, isMuted, comboCount]);

  // 里程碑音效触发
  useEffect(() => {
    if (latestMilestone) {
      playMilestoneSound(isMuted);
    }
  }, [latestMilestone, isMuted]);

  const handleTapAction = () => {
    increment("regular");
    playChestClickSound(isMuted);

    // 触发按钮压缩微动效
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 120);

    // 连击系统更新
    setComboCount((prev) => {
      const next = prev + 1;
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => {
        setComboCount(0);
      }, 1800);
      return next;
    });

    // 浮动粒子
    const particleTexts = ["+1 CHEST", "+30 WOOD", "CHEST OPENED", "+1", "LOOT SECURED"];
    const randomText = particleTexts[Math.floor(Math.random() * particleTexts.length)];
    const randomOffset = (Math.random() - 0.5) * 80;

    const newParticle: FloatingParticle = {
      id: Date.now() + Math.random(),
      text: randomText,
      x: randomOffset,
      y: 0,
    };

    setParticles((prev) => [...prev.slice(-8), newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 750);
  };

  const handleShareCard = () => {
    const text = `🏆 TrackChest Stats:\n📦 Opened: ${state.todayTotal} chests today\n🔥 Record: ${state.dailyBest} chests\nTrack yours live at trackchest.com!`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  // 下一个里程碑进度
  const nextMilestone = MILESTONES.find((m) => m > state.todayTotal) || 1000;
  const progressPercent = Math.min(100, Math.round((state.todayTotal / nextMilestone) * 100));

  return (
    <div id="tracker-app" className="w-full max-w-4xl mx-auto scroll-mt-20">
      {/* 里程碑达成弹窗 */}
      <MilestoneAlert milestone={latestMilestone} onClose={dismissMilestone} />

      {/* 备份模态框 */}
      <DataModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        exportData={exportData}
        importData={importData}
      />

      {/* 战术反应堆外壳 (Tactical Reactor Housing) */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-void-900 via-void-950 to-black border-2 border-amber-500/30 shadow-[0_0_50px_-10px_rgba(245,158,11,0.25)] backdrop-blur-2xl p-5 sm:p-8">
        
        {/* 顶部战术微光饰条 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* 顶部战术 HUD 工具条 */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>
            <div className="flex items-center space-x-2">
              <span className="font-tech text-sm uppercase tracking-widest font-bold text-slate-200">
                TACTICAL COUNTER ONLINE
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-amber-400/90 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                KEY: [SPACE]
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* 静音开关 */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-xl bg-void-850 hover:bg-void-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-all active:scale-95"
              title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
              aria-label="Sound Toggle"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>

            {/* 撤销按钮 */}
            <button
              onClick={undo}
              disabled={state.history.length === 0}
              className="px-2.5 py-1.5 rounded-xl bg-void-850 hover:bg-void-800 text-slate-300 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center space-x-1.5 font-tech text-xs tracking-wider active:scale-95"
              title="Undo last open (Ctrl+Z)"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>UNDO</span>
            </button>

            {/* 本场新局重置 */}
            <button
              onClick={() => {
                if (window.confirm("Start new match session? (Daily and all-time totals will be preserved)")) {
                  resetSession();
                }
              }}
              className="px-2.5 py-1.5 rounded-xl bg-void-850 hover:bg-void-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-all font-tech text-xs tracking-wider active:scale-95"
              title="Start New Match"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">NEW MATCH</span>
            </button>

            {/* 备份恢复 */}
            <button
              onClick={() => setIsDataModalOpen(true)}
              className="p-2 rounded-xl bg-void-850 hover:bg-void-800 text-slate-300 border border-slate-800 transition-all active:scale-95"
              title="Backup or Restore Counts"
            >
              <Database className="w-4 h-4 text-indigo-400" />
            </button>

            {/* 分享战绩 */}
            <button
              onClick={handleShareCard}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 hover:from-amber-500/30 hover:to-yellow-500/20 border border-amber-500/40 text-amber-300 font-tech text-xs tracking-wider font-bold transition-all flex items-center space-x-1.5 active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{copiedShare ? "COPIED!" : "SHARE"}</span>
            </button>
          </div>
        </div>

        {/* 战术 HUD 遥测 4 宫格 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-7">
          {/* 1. 本场战绩 */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-void-850 to-void-900 border border-slate-800 hover:border-slate-700 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-tech tracking-wider uppercase mb-1">
              <span className="flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>THIS MATCH</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 group-hover:animate-ping" />
            </div>
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
              {state.sessionTotal}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Current Drop</span>
          </div>

          {/* 2. 今日总计 (高亮核心) */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-void-850 to-void-900 border-2 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] group">
            <div className="flex items-center justify-between text-amber-300 text-xs font-tech tracking-wider uppercase mb-1">
              <span className="flex items-center space-x-1 font-bold">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>TODAY TOTAL</span>
              </span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono font-bold">
                24H
              </span>
            </div>
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight tabular-nums text-glow-gold">
              {state.todayTotal}
            </div>
            <span className="text-[10px] text-amber-300/80 font-mono">Chests Today</span>
          </div>

          {/* 3. 单日最高纪录 */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-void-850 to-void-900 border border-slate-800 hover:border-slate-700 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-tech tracking-wider uppercase mb-1">
              <span className="flex items-center space-x-1">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                <span>DAILY RECORD</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            </div>
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
              {state.dailyBest}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Personal Best</span>
          </div>

          {/* 4. 生涯总数 */}
          <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-void-850 to-void-900 border border-slate-800 hover:border-slate-700 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-tech tracking-wider uppercase mb-1">
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>CAREER CHESTS</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
            </div>
            <div className="font-tech text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
              {state.allTimeTotal}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">All-Time Count</span>
          </div>
        </div>

        {/* 里程碑战术指示器 */}
        <div className="mb-8 p-3 rounded-2xl bg-void-850/80 border border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-tech tracking-wider text-slate-400 mb-2">
            <span className="flex items-center space-x-1.5">
              <Target className="w-4 h-4 text-amber-400" />
              <span>NEXT MILESTONE TIER: <strong className="text-amber-400 font-bold">{nextMilestone} CHESTS</strong></span>
            </span>
            <span className="font-mono text-amber-400 font-bold">{progressPercent}% COMPLETED</span>
          </div>
          <div className="w-full h-2 bg-void-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-full transition-all duration-300 shadow-[0_0_12px_#F59E0B]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 核心主角: 战术反应堆按压开箱核心 (The Chest Reactor) */}
        <div className="my-8 flex flex-col items-center justify-center relative">
          
          {/* 浮动微粒子渲染容器 */}
          <div className="absolute -top-10 pointer-events-none z-30 flex justify-center w-full">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute font-tech font-extrabold text-base tracking-wider text-amber-300 text-glow-gold animate-float-up pointer-events-none select-none bg-black/50 px-2 py-0.5 rounded-lg border border-amber-400/40"
                style={{ transform: `translateX(${p.x}px)` }}
              >
                {p.text}
              </div>
            ))}
          </div>

          {/* 连击状态横幅 (Combo Streak) */}
          {comboCount >= 2 && (
            <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/20 via-amber-500/30 to-rose-500/20 border border-amber-400 text-amber-300 text-xs font-tech font-extrabold tracking-widest animate-bounce">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>LOOT STREAK x{comboCount}!</span>
            </div>
          )}

          {/* 核心大按键 */}
          <div className="relative group p-2">
            {/* 呼吸外光晕 */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-500/30 via-yellow-400/40 to-amber-600/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse-ring pointer-events-none" />

            <button
              ref={buttonRef}
              type="button"
              onClick={handleTapAction}
              className={`relative z-10 w-full max-w-lg h-40 sm:h-48 px-8 rounded-[2.2rem] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-[0_12px_40px_rgba(245,158,11,0.45)] flex flex-col items-center justify-center transition-all duration-100 select-none border-4 border-yellow-200/90 active:scale-[0.97] active:shadow-inner ${
                isPressed ? "scale-[0.97] brightness-125" : "hover:scale-[1.01] hover:brightness-105"
              }`}
              aria-label="Tap to track chest open"
            >
              {/* 装饰战术微标 */}
              <div className="flex items-center space-x-2 font-tech font-black text-xs uppercase tracking-[0.25em] text-amber-950 mb-1">
                <Box className="w-4 h-4 fill-amber-950" />
                <span>TAP TO OPEN CHEST</span>
              </div>

              {/* 震撼主字样 */}
              <div className="font-tech text-6xl sm:text-7xl font-black tracking-tight text-slate-950 drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
                +1 CHEST
              </div>

              {/* 辅助指示文案 */}
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-950/80 mt-1">
                <span>PRESS [SPACE] OR TAP</span>
                <span>•</span>
                <span>FAST &amp; ZERO-LAG</span>
              </div>
            </button>
          </div>
        </div>

        {/* 细分宝箱战利品卡槽 (展开与收起) */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="flex items-center space-x-2 text-xs font-tech uppercase tracking-wider font-bold text-slate-300 hover:text-amber-400 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>{showBreakdown ? "COLLAPSE RARITY VAULT" : "EXPAND RARITY VAULT (RARE, SPRITE, TOKENS)"}</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm("WARNING: Wipe all saved history and start completely fresh?")) {
                  resetAll();
                }
              }}
              className="text-[11px] font-mono text-slate-500 hover:text-rose-400 transition-colors"
            >
              [RESET ALL DATA]
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
