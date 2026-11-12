import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { CoreToolSlot } from "@/components/CoreToolSlot";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { SeoContentSection } from "@/components/SeoContentSection";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero 视觉区 */}
      <HeroSection />

      {/* 2. 核心功能交互插槽 (新站做业务只换这个组件) */}
      <CoreToolSlot />

      {/* 3. 核心卖点网格 */}
      <FeaturesGrid />

      {/* 4. 原生对比表格 (针对 GEO 权威引用) */}
      <ComparisonTable />

      {/* 5. 离岸三档定价 */}
      <PricingSection />

      {/* 6. FAQ (Schema 问答) */}
      <FaqSection />

      {/* 7. SSR 1000+ 词深度科普知识库 */}
      <SeoContentSection />
    </div>
  );
}
