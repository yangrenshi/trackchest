import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // 自动读取构建时的 ISO 时间戳，确保每次版本发布与内容迭代能及时通知搜索引擎重抓
  const buildDate = new Date().toISOString();

  const routes = [
    // 1. 核心首页
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    // 2. 核心内容与独立工具内页
    { path: "/fortnite-chest-counter", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/how-to-check-chests", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/pirate-token-odds", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/chest-types", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/leekcapper-fortnite", priority: 0.7, changeFrequency: "daily" as const },
    // 3. 辅助法务页面
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: buildDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
