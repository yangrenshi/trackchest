"use client";

import React from "react";
import { CHEST_TYPES } from "@/config/chestTypes";
import { ChestType } from "@/types/chest";
import { Plus, Minus, PackageCheck } from "lucide-react";

interface ChestTypeGridProps {
  counts: Record<ChestType, number>;
  onIncrement: (type: ChestType) => void;
  onDecrement: (type: ChestType) => void;
}

export function ChestTypeGrid({ counts, onIncrement, onDecrement }: ChestTypeGridProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <PackageCheck className="w-5 h-5 text-amber-400" />
            <span>Chest Breakdown by Rarity</span>
          </h3>
          <p className="text-xs text-slate-400">
            Tap &apos;+&apos; to record specific loot variants found during your match
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {CHEST_TYPES.map((chest) => {
          const count = counts[chest.id] || 0;
          return (
            <div
              key={chest.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-b ${chest.bgGradient} bg-slate-900/90 border ${chest.borderColor} p-3.5 transition-all duration-200 hover:border-slate-500/50 flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1"
                    style={{ backgroundColor: `${chest.color}25`, color: chest.color }}
                  >
                    {chest.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{chest.name}</h4>
                </div>
                <div
                  className="text-2xl font-black tabular-nums transition-transform"
                  style={{ color: count > 0 ? chest.color : "#94A3B8" }}
                >
                  {count}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-2 mb-3 line-clamp-1">
                {chest.oddsNote}
              </p>

              {/* 增减按钮组 */}
              <div className="flex items-center space-x-2 mt-auto">
                <button
                  type="button"
                  onClick={() => onDecrement(chest.id)}
                  disabled={count <= 0}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label={`Decrease ${chest.name}`}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onIncrement(chest.id)}
                  className="flex-1 py-2 px-3 rounded-xl active:scale-95 text-xs font-bold flex items-center justify-center space-x-1 transition-all shadow-md"
                  style={{
                    backgroundColor: chest.color,
                    color: chest.id === "regular" || chest.id === "cash" ? "#0F172A" : "#FFFFFF",
                  }}
                  aria-label={`Open ${chest.name}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+1 Open</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
