"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Transparent &amp; Free
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            100% Free Forever for Solo Players
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Use the full tracker with zero paywalls. Optional squad sync coming in Chapter 6 Season 2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? "bg-slate-900 border-2 border-amber-500 shadow-xl shadow-amber-500/10 scale-105 z-10"
                  : "bg-slate-900/60 border border-slate-800 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>ACTIVE FREE PLAN</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                  {plan.description}
                </p>

                <div className="mt-4 mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
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
                  className={`block w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all ${
                    plan.isPopular
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200"
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
