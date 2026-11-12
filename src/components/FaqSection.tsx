"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-tech font-bold uppercase tracking-widest text-amber-400 bg-void-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
          OPERATIONAL INQUIRIES
        </span>
        <h2 className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-sm text-slate-400">
          Everything you need to know about tracking chests, Epic safety, and squad companion features.
        </p>
      </div>

      <div className="space-y-3.5">
        {siteConfig.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const questionText = faq.question || faq.q;
          const answerText = faq.answer || faq.a;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-void-900/80 backdrop-blur-md overflow-hidden transition-all hover:border-slate-700"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-tech text-base sm:text-lg font-bold text-white focus:outline-none tracking-wide"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3 pr-4">
                  <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{questionText}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>

              {/* 
                重要: 6 条答案全部必须渲染在 HTML DOM 中，杜绝因条件渲染导致爬虫抓取不到文本
              */}
              <div
                className={`px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 font-sans ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <p>{answerText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
