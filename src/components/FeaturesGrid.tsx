import React from "react";
import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-20 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Precision Loot Tracking
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Built for High-Stakes Battle Royale Speed
          </h2>
          <p className="text-base text-slate-400">
            Keep track of every single chest without ever touching an Epic Games login or losing focus in your match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, idx) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComp = (Icons as any)[feature.icon] || Icons.Sparkles;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm shadow-sm hover:border-amber-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
