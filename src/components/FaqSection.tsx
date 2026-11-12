"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 max-w-4xl mx-auto px-4 scroll-mt-16">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-[#9a9a9a] mt-1">
          Everything you need to know about tracking chests, accuracy, and Epic account safety.
        </p>
      </div>

      <div className="space-y-2.5">
        {siteConfig.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const questionText = faq.question || faq.q;
          const answerText = faq.answer || faq.a;

          return (
            <div
              key={idx}
              className="rounded-xl border border-[#2e2e2e] bg-[#1d1d1d] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-white focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{questionText}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#9a9a9a] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#ffc93c]" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 pb-4 text-xs text-[#9a9a9a] leading-relaxed border-t border-[#2e2e2e] pt-3 ${
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
