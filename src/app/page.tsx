import React from "react";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/HeroSection";
import { TreasureHoursBanner } from "@/components/TreasureHoursBanner";
import { CoreToolSlot } from "@/components/CoreToolSlot";
import { HowToUseInstructions } from "@/components/HowToUseInstructions";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { SeoContentSection } from "@/components/SeoContentSection";

export default function HomePage() {
  // 首页专享 WebApplication 结构化数据 (核心应用根路径)
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TrackChest - Fortnite Chest Tracker",
    url: siteConfig.url,
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.description,
    featureList: [
      "Real-time tap counter for Fortnite chests",
      "Categorized tracking for Regular, Rare, Sprite, and Vault chests",
      "Session, Daily, and All-Time career totals",
      "LocalStorage offline persistence",
      "Zero login or Epic Games account required",
    ],
  };

  // 首页专享 FAQPage 结构化数据 (与正文 6 条问答严格一致)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question || faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.a,
      },
    })),
  };

  return (
    <div>
      {/* 首页专享 WebApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* 首页专享 FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 实时活动横幅 (三态自适应轮替) */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <TreasureHoursBanner />
      </div>

      {/* 1. Hero 视觉区 */}
      <HeroSection />

      {/* 2. 核心功能交互插槽 (一屏即用) */}
      <CoreToolSlot />

      {/* 3. 250-300 词实操说明 (补齐首页字数与操作指引) */}
      <HowToUseInstructions />

      {/* 4. 核心特点微条 */}
      <FeaturesGrid />

      {/* 5. 原生对比表格 (GEO 权威引用) */}
      <ComparisonTable />

      {/* 6. 100% Free 社区承诺 */}
      <PricingSection />

      {/* 7. FAQ 6 问答 (DOM 中完整输出) */}
      <FaqSection />

      {/* 8. SSR 深度科普与内链矩阵 */}
      <SeoContentSection />
    </div>
  );
}
