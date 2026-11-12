"use client";

import React from "react";
import { CHEST_TYPES } from "@/config/chestTypes";
import { ChestType } from "@/types/chest";
import { Plus, Minus, Shield, Sparkles } from "lucide-react";

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
          <h3 className="text-sm font-tech uppercase tracking-widest font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>RARITY CLASSIFICATION VAULT</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Log specific drops encountered at POIs to calculate precise rarity frequencies
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
        {CHEST_TYPES.map((chest) => {
          const count = counts[chest.id] || 0;
          return (
            <div
              key={chest.id}
              className="relative overflow-hidden rounded-2xl bg-void-900 border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between p-4 shadow-lg group"
              style={{
                borderColor: count > 0 ? `${chest.color}70` : "rgba(51, 65, 85, 0.4)",
                boxShadow: count > 0 ? `0 0 20px -5px ${chest.color}25` : "none",
              }}
            >
              {/* 顶部微渐变条 */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-70"
                style={{ backgroundColor: chest.color }}
              />

              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="inline-block text-[10px] font-tech font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border mb-1.5"
                    style={{
                      borderColor: `${chest.color}40`,
                      backgroundColor: `${chest.color}15`,
                      color: chest.color,
                    }}
                  >
                    {chest.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {chest.name}
                  </h4>
                </div>

                {/* 计数指示器 */}
                <div
                  className="font-tech text-3xl font-extrabold tabular-nums transition-transform"
                  style={{ color: count > 0 ? chest.color : "#64748B" }}
                >
                  {count}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-2 mb-3.5 line-clamp-2 leading-relaxed">
                {chest.oddsNote}
              </p>

              {/* 增减交互按钮组 */}
              <div className="flex items-center space-x-2 mt-auto pt-2 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onDecrement(chest.id)}
                  disabled={count <= 0}
                  className="p-2 rounded-xl bg-void-850 hover:bg-void-800 active:scale-95 text-slate-300 border border-slate-800 disabled:opacity-20 disabled:pointer-events-none transition-all"
                  aria-label={`Decrease ${chest.name}`}
                  title="Minus 1"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onIncrement(chest.id)}
                  className="flex-1 py-2 px-3 rounded-xl active:scale-95 font-tech text-xs uppercase tracking-wider font-extrabold flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  style={{
                    backgroundColor: chest.color,
                    color: chest.id === "regular" || chest.id === "cash" ? "#0F172A" : "#FFFFFF",
                  }}
                  aria-label={`Open ${chest.name}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+1 OPEN</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
