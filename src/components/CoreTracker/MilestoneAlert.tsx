"use client";

import React, { useEffect } from "react";
import { Trophy, X, Sparkles, Award } from "lucide-react";

interface MilestoneAlertProps {
  milestone: number | null;
  onClose: () => void;
}

export function MilestoneAlert({ milestone, onClose }: MilestoneAlertProps) {
  useEffect(() => {
    if (!milestone) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [milestone, onClose]);

  if (!milestone) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-500 max-w-sm w-full p-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-[1.8rem] shadow-[0_0_40px_rgba(245,158,11,0.6)] border-2 border-yellow-100 text-slate-950 flex items-center justify-between">
      <div className="flex items-center space-x-3.5">
        <div className="w-12 h-12 rounded-2xl bg-slate-950/20 backdrop-blur-sm border border-slate-950/30 flex items-center justify-center shrink-0 shadow-inner">
          <Trophy className="w-7 h-7 text-slate-950 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5 font-tech text-[11px] font-black uppercase tracking-widest text-amber-950 bg-black/15 px-2 py-0.5 rounded-full w-fit">
            <Sparkles className="w-3 h-3 fill-amber-950" />
            <span>MILESTONE UNLOCKED</span>
          </div>
          <p className="font-tech text-xl font-black uppercase tracking-tight text-slate-950 mt-0.5 leading-none">
            {milestone} CHESTS OPENED!
          </p>
          <p className="text-xs font-bold text-amber-950/80 mt-0.5">
            Keep crushing your drop routes!
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-black/10 rounded-xl transition-colors text-slate-950"
        aria-label="Close Milestone Notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
