import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // 使用固定的静态内容发布与修订日期，杜绝每次爬虫抓取动态刷新时间戳
  const LAST_UPDATED = "2026-11-12T00:00:00.000Z";

  const routes = [
    // 1. 核心首页
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    // 2. 核心内容与独立工具内页
    { path: "/fortnite-chest-counter", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/how-to-check-chests", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/pirate-token-odds", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/chest-types", priority: 0.8, changeFrequency: "weekly" as const },
    // 3. 辅助法务页面
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
