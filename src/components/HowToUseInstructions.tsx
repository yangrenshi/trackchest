import React from "react";
import { Keyboard, Layers, RotateCw, Database, Users } from "lucide-react";

export function HowToUseInstructions() {
  const steps = [
    {
      icon: Keyboard,
      title: "Tap or Hit Space",
      desc: "Tap the big +1 button on mobile, or press the SPACE key on PC while looting your drop spot without alt-tabbing away from Fortnite.",
    },
    {
      icon: Layers,
      title: "Categorize Rare Crates",
      desc: "Expand the Rarity Vault to record specific drops like Blue Rare Chests, Sprite Shrines, or Pirate Tokens to evaluate high-tier loot odds.",
    },
    {
      icon: RotateCw,
      title: "New Match vs Daily Streaks",
      desc: "Click 'New Match' between Battle Royale games to clear your session total. Your 24-hour total, daily personal best, and all-time records remain intact.",
    },
    {
      icon: Database,
      title: "100% Offline & JSON Backup",
      desc: "All counters save automatically into your browser's LocalStorage. Click 'Backup' to copy or download your JSON snapshot before clearing cookies.",
    },
    {
      icon: Users,
      title: "Squad Loot Verification",
      desc: "Share the link with duo or squad partners so each player tracks their designated building, verifying total team crates before early rotations.",
    },
  ];

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="p-6 sm:p-7 rounded-2xl bg-[#1d1d1d] border border-[#2e2e2e] space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            How to Use TrackChest in Battle Royale
          </h2>
          <p className="text-xs text-[#9a9a9a] mt-0.5">
            Quick 5-step operational instructions for solo grinders and competitive squads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#242424] border border-[#2e2e2e] space-y-1"
              >
                <div className="flex items-center space-x-2 text-white font-semibold text-xs">
                  <IconComp className="w-3.5 h-3.5 text-[#ffc93c] shrink-0" />
                  <span>{s.title}</span>
                </div>
                <p className="text-xs text-[#9a9a9a] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
