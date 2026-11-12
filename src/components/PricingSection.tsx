import React from "react";
import { Check, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const freePerks = [
    "Unlimited tap chest counting",
    "All chest rarities & token variants",
    "Session, daily, and career records",
    "LocalStorage offline privacy",
    "1-Click JSON data backup & restore",
  ];

  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <div className="rounded-2xl bg-[#1d1d1d] glass-rim p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#ffc93c]">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Free Community Tool</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            No Subscription. No Paywalls.
          </h3>
          <p className="text-xs text-[#9a9a9a] max-w-md">
            TrackChest is an open companion designed for battle royale players. All current and upcoming solo features remain free forever.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-xs text-[#d4d4d4]">
            {freePerks.map((perk, i) => (
              <span key={i} className="flex items-center space-x-1">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <a
            href="#tracker-app"
            className="px-5 py-2.5 rounded-lg bg-[#ffc93c] hover:bg-[#ffd766] text-[#121212] font-semibold text-xs transition-colors btn-press inline-block"
          >
            Start Tracking
          </a>
        </div>
      </div>
    </section>
  );
}
