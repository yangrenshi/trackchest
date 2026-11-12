"use client";

import React, { useEffect } from "react";
import { Trophy, X, Sparkles } from "lucide-react";

interface MilestoneAlertProps {
  milestone: number | null;
  onClose: () => void;
}

export function MilestoneAlert({ milestone, onClose }: MilestoneAlertProps) {
  useEffect(() => {
    if (!milestone) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [milestone, onClose]);

  if (!milestone) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-700 max-w-sm w-full p-4 bg-gradient-to-r from-amber-600/90 to-yellow-500/90 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-300/40 text-white flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-white/20 rounded-xl shadow-inner">
          <Trophy className="w-7 h-7 text-yellow-200 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="text-xs uppercase tracking-wider font-extrabold bg-black/30 px-2 py-0.5 rounded-full text-yellow-200">
              Milestone Unlocked!
            </span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          </div>
          <p className="text-sm font-bold mt-0.5">
            You opened <span className="text-xl font-black">{milestone}</span> chests today!
          </p>
          <p className="text-xs text-yellow-100/90">Keep the streak going!</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 hover:bg-black/20 rounded-lg transition-colors text-white/80 hover:text-white"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
