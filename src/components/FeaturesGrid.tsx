import React from "react";
import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";
import { Crosshair } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-void-950/90 border-t border-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech tracking-wider uppercase mb-2">
            <Crosshair className="w-3.5 h-3.5" />
            <span>OPERATIONAL SPECIFICATIONS</span>
          </div>
          <h2 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            BUILT FOR HIGH-PRESSURE TOURNAMENT PLAY
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
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
                className="relative overflow-hidden p-6 rounded-3xl border border-slate-800/80 bg-void-900/60 backdrop-blur-md hover:border-amber-500/50 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.2)] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-tech text-xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
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
