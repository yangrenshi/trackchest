import React from "react";
import { Zap, ShieldCheck, Flame, HardDrive } from "lucide-react";

export function FeaturesGrid() {
  const highlights = [
    { icon: Zap, label: "Zero-Latency Tap Counter" },
    { icon: ShieldCheck, label: "No Epic Account Login" },
    { icon: Flame, label: "Daily Streaks & Records" },
    { icon: HardDrive, label: "100% Offline LocalStorage" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {highlights.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#1d1d1d] border border-[#2e2e2e] flex items-center space-x-2 text-xs font-medium text-[#9a9a9a]"
            >
              <IconComp className="w-4 h-4 text-[#ffc93c] shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
