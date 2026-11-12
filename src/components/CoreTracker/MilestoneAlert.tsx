"use client";

import React, { useEffect } from "react";
import { Trophy, X } from "lucide-react";

interface MilestoneAlertProps {
  milestone: number | null;
  onClose: () => void;
}

export function MilestoneAlert({ milestone, onClose }: MilestoneAlertProps) {
  useEffect(() => {
    if (!milestone) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [milestone, onClose]);

  if (!milestone) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full p-4 bg-[#1d1d1d] border border-[#ffc93c] rounded-xl shadow-2xl text-white flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg bg-[#ffc93c]/10 flex items-center justify-center text-[#ffc93c] shrink-0">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-semibold text-[#ffc93c] uppercase tracking-wider block">
            Milestone Reached
          </span>
          <p className="text-sm font-bold text-white mt-0.5">
            {milestone} Chests Opened Today!
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-1 hover:bg-[#2b2b2b] rounded-lg transition-colors text-[#9a9a9a] hover:text-white"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
