"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus, RotateCw, Sparkles, Box, Trophy } from "lucide-react";

interface ColumnCount {
  standard: number;
  rare: number;
  sprite: number;
  vault: number;
}

const STORAGE_KEY_CATEGORIZED = "trackchest_categorized_cols_v1";

export function CategorizedCounterView() {
  const [counts, setCounts] = useState<ColumnCount>({
    standard: 0,
    rare: 0,
    sprite: 0,
    vault: 0,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CATEGORIZED);
      if (saved) {
        setCounts(JSON.parse(saved));
      }
    } catch {
      // 容错
    }
  }, []);

  const saveState = (newCounts: ColumnCount) => {
    setCounts(newCounts);
    try {
      localStorage.setItem(STORAGE_KEY_CATEGORIZED, JSON.stringify(newCounts));
    } catch {
      // 容错
    }
  };

  const increment = (col: keyof ColumnCount) => {
    saveState({
      ...counts,
      [col]: counts[col] + 1,
    });
  };

  const decrement = (col: keyof ColumnCount) => {
    if (counts[col] <= 0) return;
    saveState({
      ...counts,
      [col]: counts[col] - 1,
    });
  };

  const resetAll = () => {
    if (window.confirm("Reset all 4 column counters back to zero?")) {
      saveState({
        standard: 0,
        rare: 0,
        sprite: 0,
        vault: 0,
      });
    }
  };

  const totalSum = counts.standard + counts.rare + counts.sprite + counts.vault;

  const columns = [
    {
      key: "standard" as const,
      name: "Standard Chest",
      rarity: "Common",
      color: "#9a9a9a",
      bgClass: "rarity-common",
      btnColor: "bg-[#2b2b2b] hover:bg-[#343434] active:bg-[#404040]",
      desc: "Guaranteed common-rare weapon",
    },
    {
      key: "rare" as const,
      name: "Rare Chest",
      rarity: "Rare (Blue)",
      color: "#49d6ff",
      bgClass: "rarity-rare",
      btnColor: "bg-[#0070ce] hover:bg-[#0084f0] active:bg-[#0060b0]",
      desc: "Guaranteed blue+ weapon & shield",
    },
    {
      key: "sprite" as const,
      name: "Sprite Shrine",
      rarity: "Epic (Purple)",
      color: "#f0a6ff",
      bgClass: "rarity-epic",
      btnColor: "bg-[#7922d9] hover:bg-[#8d2df7] active:bg-[#681cb8]",
      desc: "Elemental powers & utility",
    },
    {
      key: "vault" as const,
      name: "Vault Bunker",
      rarity: "Mythic / Boss",
      color: "#ffd510",
      bgClass: "rarity-mythic",
      btnColor: "bg-[#c4980a] hover:bg-[#deb017] active:bg-[#a88206]",
      desc: "Double gold gear & medallions",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 顶部总计与重置条 */}
      <div className="p-4 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#ffc93c]/10 flex items-center justify-center text-[#ffc93c]">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs text-[#9a9a9a]">Total Multi-Column Opened</span>
            <div className="text-xl font-bold font-mono text-white tnum leading-tight">
              {totalSum} <span className="text-xs font-normal text-[#9a9a9a]">chests</span>
            </div>
          </div>
        </div>

        <button
          onClick={resetAll}
          className="px-3 py-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] text-xs font-medium text-[#9a9a9a] hover:text-white transition-colors flex items-center space-x-1.5"
          title="Reset All Columns"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      {/* 真正的四列分栏并排计数器 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {columns.map((col) => {
          const count = counts[col.key];

          return (
            <div
              key={col.key}
              className={`rounded-2xl p-4 flex flex-col justify-between space-y-4 ${col.bgClass}`}
            >
              {/* 列标头 */}
              <div>
                <span className="text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wider block">
                  {col.rarity}
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">{col.name}</h3>
                <p className="text-[11px] text-[#888] mt-1">{col.desc}</p>
              </div>

              {/* 大数字显示 */}
              <div className="py-2 text-center bg-black/20 rounded-xl border border-white/5">
                <span className="text-4xl font-extrabold font-mono text-white tnum">
                  {count}
                </span>
              </div>

              {/* 核心 +1 与 -1 按键 */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => increment(col.key)}
                  className={`w-full h-14 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-1.5 transition-all shadow-md btn-press ${col.btnColor}`}
                >
                  <Plus className="w-5 h-5" />
                  <span>+1 {col.name.split(" ")[0]}</span>
                </button>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => decrement(col.key)}
                    disabled={count <= 0}
                    className="text-xs text-[#888] hover:text-white disabled:opacity-20 flex items-center space-x-1 py-1 px-2"
                  >
                    <Minus className="w-3 h-3" />
                    <span>Minus 1</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
