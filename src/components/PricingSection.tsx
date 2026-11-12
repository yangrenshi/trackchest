"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Check, Sparkles, Zap } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-void-950 border-t border-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-void-900 border border-amber-500/30 text-amber-400 text-xs font-tech tracking-wider uppercase mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PASS TIERS</span>
          </div>
          <h2 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            100% FREE FOREVER FOR ALL PLAYERS
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Use the full tracker with zero paywalls. Optional squad sync coming in Chapter 6 Season 2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[2rem] p-7 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? "bg-void-900 border-2 border-amber-500 shadow-[0_0_35px_-5px_rgba(245,158,11,0.3)] scale-105 z-10"
                  : "bg-void-900/60 border border-slate-800 shadow-sm hover:border-slate-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full font-tech text-xs tracking-wider uppercase font-black bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>COMMUNITY PASS • ACTIVE</span>
                </div>
              )}

              <div>
                <h3 className="font-tech text-2xl font-bold uppercase tracking-wide text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px] leading-relaxed">
                  {plan.description}
                </p>

                <div className="mt-4 mb-6 flex items-baseline gap-1.5">
                  <span className="font-tech text-5xl font-black text-amber-400 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="font-tech text-sm uppercase text-slate-400 font-bold">{plan.period}</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800/80">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={plan.buttonHref || "/#tracker-app"}
                  className={`block w-full py-3.5 px-4 rounded-xl font-tech text-sm uppercase tracking-wider font-extrabold text-center transition-all ${
                    plan.isPopular
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/25 active:scale-95"
                      : "bg-void-850 hover:bg-void-800 text-slate-300 border border-slate-800"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
