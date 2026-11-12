import React from "react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service and Community Disclaimer for ${siteConfig.name}.`,
};

export default function TermsPage() {
  const lastUpdated = "November 12, 2026";

  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight border-b border-slate-800 pb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">Last Updated: {lastUpdated}</p>

        <section className="space-y-3">
          <p>
            By accessing or using <strong>{siteConfig.name}</strong> (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
            If you do not agree, please do not use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Fan Content Disclaimer</h2>
          <p>
            TrackChest is an independent fan-created utility tool. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic Games, Inc.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Free Use &amp; Availability</h2>
          <p>
            The core chest tracker is provided &quot;as is&quot; without warranties of any kind. 
            Because data is saved locally on your client machine, clearing your browser storage will wipe your stored counters unless you have used our JSON export feature.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Acceptable Use</h2>
          <p>
            You agree not to attempt to scrape, attack, or compromise our web application servers. TrackChest is strictly for personal and non-commercial gaming companion use.
          </p>
        </section>
      </article>
    </div>
  );
}
