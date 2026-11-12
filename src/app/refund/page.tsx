import React from "react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Official 14-day refund and cancellation guidelines for ${siteConfig.name}.`,
};

export default function RefundPage() {
  const lastUpdated = "October 20, 2026";

  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight border-b pb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs text-slate-500">Last Updated: {lastUpdated}</p>

        <section className="space-y-3">
          <p>
            At <strong>{siteConfig.name}</strong>, customer satisfaction is our top priority.
            We want you to feel 100% confident when trying our AI learning platform.
            This policy outlines our transparent guidelines regarding refunds, cancellations, and digital credit adjustments.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. 14-Day Money-Back Guarantee</h2>
          <p>We provide a full refund under the following conditions within <strong>14 calendar days</strong> of your initial purchase:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>System Technical Failure:</strong> If our AI engine repeatedly fails to process valid YouTube transcripts or export decks due to server outages;</li>
            <li><strong>Unused Credit Balances:</strong> If you purchased a subscription or lifetime package and have consumed less than 20% of your allocated credits;</li>
            <li><strong>Accidental Duplicate Charges:</strong> If you were billed multiple times in error for a single transaction.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Non-Refundable Circumstances</h2>
          <p>Refunds cannot be issued in the following scenarios:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>More than 14 days have elapsed since the transaction date;</li>
            <li>The account has heavily consumed and exported substantial numbers of quizzes or flashcards;</li>
            <li>Account suspension caused by violations of our Acceptable Use Policy (e.g. automated abuse).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How to Cancel Recurring Subscriptions</h2>
          <p>
            You can cancel auto-renewal at any time with a single click:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Log in and navigate to your <strong>User Dashboard</strong>;</li>
            <li>Select the <strong>Subscription & Billing</strong> tab;</li>
            <li>Click <strong>&quot;Cancel Subscription&quot;</strong>.</li>
          </ol>
          <p>
            Upon cancellation, you will retain full Pro access and benefits until the end of your current paid billing period. You will never be billed again.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Refund Request Process & Timeframe</h2>
          <p>
            To request a refund, please send an email to <strong>{siteConfig.refundEmail}</strong> with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your account email address;</li>
            <li>Order ID or payment receipt from Creem / Waffo / PayPal;</li>
            <li>A brief description of why you are requesting a refund.</li>
          </ul>
          <p>
            Our billing team will review and respond within <strong>24 business hours</strong>. Approved refunds will be automatically credited back to your original payment method within <strong>3 to 5 business days</strong>.
          </p>
        </section>
      </article>
    </div>
  );
}
