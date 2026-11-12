import React from "react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Community Feedback",
  description: `Contact the team behind ${siteConfig.name} for feature suggestions and questions.`,
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Get in Touch
        </h1>
        <p className="text-sm text-slate-400">
          Have feedback on chest spawn rates, suggestion for new tools, or found a bug? We love hearing from fellow Fortnite players.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Direct Email</h3>
          <p className="text-xs text-slate-400 mb-4">We reply to community suggestions within 24 hours.</p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 underline"
          >
            {siteConfig.contactEmail}
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Open Source &amp; Code</h3>
          <p className="text-xs text-slate-400 mb-4">Track our open roadmap and request features.</p>
          <a
            href={siteConfig.socials?.github || "https://github.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
