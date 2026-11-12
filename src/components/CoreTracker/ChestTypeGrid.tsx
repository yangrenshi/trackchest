"use client";

import React from "react";
import { CHEST_TYPES } from "@/config/chestTypes";
import { ChestType } from "@/types/chest";
import { Plus, Minus } from "lucide-react";

interface ChestTypeGridProps {
  counts: Record<ChestType, number>;
  onIncrement: (type: ChestType) => void;
  onDecrement: (type: ChestType) => void;
}

export function ChestTypeGrid({ counts, onIncrement, onDecrement }: ChestTypeGridProps) {
  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "rarity-common";
      case "Rare":
        return "rarity-rare";
      case "Epic":
        return "rarity-epic";
      case "Special":
        return "rarity-legendary";
      case "Mythic":
        return "rarity-mythic";
      default:
        return "rarity-common";
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
      {CHEST_TYPES.map((chest) => {
        const count = counts[chest.id] || 0;
        const rarityClass = getRarityClass(chest.rarity);

        return (
          <div
            key={chest.id}
            className={`rounded-xl p-3 flex flex-col justify-between transition-colors ${rarityClass}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-semibold text-[#9a9a9a] uppercase tracking-wider block">
                  {chest.rarity}
                </span>
                <h4 className="text-xs font-semibold text-white mt-0.5">{chest.name}</h4>
              </div>
              <span className="font-mono text-xl font-bold text-white tnum">{count}</span>
            </div>

            <div className="flex items-center space-x-1.5 mt-3 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => onDecrement(chest.id)}
                disabled={count <= 0}
                className="w-7 h-7 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] disabled:opacity-20 flex items-center justify-center text-[#9a9a9a] hover:text-white transition-colors"
                aria-label={`Decrease ${chest.name}`}
              >
                <Minus className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => onIncrement(chest.id)}
                className="flex-1 h-7 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] active:bg-[#ffc93c] active:text-black font-semibold text-xs flex items-center justify-center space-x-1 text-white transition-colors"
                aria-label={`Open ${chest.name}`}
              >
                <Plus className="w-3 h-3" />
                <span>+1</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
