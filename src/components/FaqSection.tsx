"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Got Questions?
        </span>
        <h2 className="text-3xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-400">
          Everything you need to know about tracking chests, Epic safety, and squad rooms.
        </p>
      </div>

      <div className="space-y-3">
        {siteConfig.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-sm sm:text-base focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.question || faq.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer || faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
