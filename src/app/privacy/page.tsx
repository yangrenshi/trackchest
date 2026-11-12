import React from "react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Official Privacy Policy and data protection terms for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  const lastUpdated = "November 12, 2026";

  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight border-b border-slate-800 pb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last Updated: {lastUpdated}</p>

        <section className="space-y-3">
          <p>
            Welcome to <strong>{siteConfig.name}</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), accessible via <strong>{siteConfig.url}</strong>.
            We respect your privacy and are committed to ensuring you enjoy a transparent, safe, and anonymous gaming companion experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Zero Login &amp; LocalStorage Policy</h2>
          <p>
            TrackChest does <strong>NOT</strong> require user registration, email sign-up, or login with your Epic Games account. 
            All chest counts, session streaks, and daily records are stored exclusively in your local web browser&apos;s <strong>LocalStorage</strong>. 
            We do not transmit your gaming counters to remote servers or third-party databases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. No Affiliation with Epic Games</h2>
          <p>
            TrackChest is an independent community fan utility. We do not inject code into your Fortnite client, do not hook into game memory, and do not communicate with Epic Games game servers. 
            Using TrackChest is 100% compliant with standard fair play and carries zero risk of in-game penalties or bans.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Analytics &amp; Cookies</h2>
          <p>
            We may use privacy-preserving, non-identifying telemetry (such as standard Google Analytics 4) to monitor overall page views, aggregate crash diagnostics, and improve mobile button responsiveness. You can block telemetry using any standard browser tracking protection.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Contact Us</h2>
          <p>
            If you have questions about our privacy practices, feel free to reach out to us at <strong>{siteConfig.contactEmail}</strong>.
          </p>
        </section>
      </article>
    </div>
  );
}
