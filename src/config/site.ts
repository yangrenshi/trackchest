import { SiteConfig } from "@/types";

/**
 * ==============================================================================
 * TrackChest 全站核心配置 (Single Source of Truth)
 * 域名统一为非 www: https://trackchest.com (与 Cloudflare 301 重定向终点完全一致)
 * 核心词: chest tracker fortnite (KD 19.4)
 * ==============================================================================
 */
export const siteConfig: SiteConfig = {
  // 1. 品牌与域名基础信息 (全站统一为非 www)
  name: "TrackChest",
  tagline: "Free Online Fortnite Chest Counter & Tracker",
  // 精确控制在 145~155 字符之间，杜绝 Google SERP 截断
  description: "Track every chest you open in Fortnite. Free online chest tracker & counter for solos or squads — no login, no Epic account needed.",
  domain: "trackchest.com",
  url: "https://trackchest.com",
  author: "TrackChest Studio",
  dashboardStyle: "lite" as "pro" | "lite",
  databaseProvider: "d1" as "d1" | "supabase",
  
  // 2. 联系方式与反馈
  contactEmail: "support@trackchest.com",
  refundEmail: "support@trackchest.com",
  companyAddress: "Independent Fan Project • Fortnite Community Tools",
  
  // 3. 统计分析 (如果未配置真实 ID 则不渲染，杜绝 G-XXXXXXXXXX 占位符暴露)
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  
  // 4. 社交媒体与开源社区
  socials: {
    twitter: "https://x.com/trackchest",
    github: "https://github.com/yangrenshi/trackchest",
    producthunt: "https://www.producthunt.com/products/trackchest",
  },
  
  // 5. 核心卖点网格 (Features)
  features: [
    {
      icon: "Zap",
      title: "Zero-Latency Tap Counter",
      description: "Designed for rapid mobile tapping while in the middle of battle royale matches. Tap once per chest without dropping your controller.",
    },
    {
      icon: "ShieldCheck",
      title: "No Epic Login Required",
      description: "100% safe. We never ask for your Epic Games login, password, or credentials. Zero risk of account bans or leaks.",
    },
    {
      icon: "Layers",
      title: "Multi-Rarity Classification",
      description: "Accurately log Regular Chests, Rare/Mythic Chests, Sprite Chests, Pirate Token chests, and Bunkers with one tap.",
    },
    {
      icon: "Flame",
      title: "Daily Totals & Personal Bests",
      description: "Track match totals, daily personal records, and all-time career numbers. Automatically celebrates your 10, 25, 50, and 100 chest streaks.",
    },
    {
      icon: "HardDrive",
      title: "100% LocalStorage Privacy",
      description: "All numbers are saved directly in your browser. Works seamlessly offline and includes one-click JSON backup export and import.",
    },
    {
      icon: "Users",
      title: "Solo & Squad Ready",
      description: "Compare session totals with your duo or squad mates to see who pulled their weight looting your landing POI.",
    },
  ],
  
  // 6. 定价方案 (第一阶段纯粹 100% 免费)
  pricing: [
    {
      id: "free",
      name: "Community Free Pass",
      price: "$0",
      period: "forever",
      description: "Everything you need to track solo chest routes and daily loot milestones",
      credits: 99999,
      features: [
        "Unlimited tap chest tracking",
        "All chest rarities & token variants",
        "Match, Daily, and All-Time stats",
        "Milestone streak achievements",
        "100% LocalStorage offline storage",
        "JSON data backup and restore",
      ],
      isPopular: true,
      buttonText: "Start Tracking Free",
      buttonHref: "/#tracker-app",
    },
  ],
  
  // 7. FAQ 玩家深度问答 (注入 FAQPage Schema 并完整输出于 HTML)
  faqs: [
    {
      q: "Is TrackChest affiliated with Epic Games or Fortnite?",
      a: "No. TrackChest is an independent, community-driven fan project created by Fortnite players for Fortnite players. It is not endorsed, sponsored, or affiliated with Epic Games, Inc.",
      question: "Is TrackChest affiliated with Epic Games or Fortnite?",
      answer: "No. TrackChest is an independent, community-driven fan project created by Fortnite players for Fortnite players. It is not endorsed, sponsored, or affiliated with Epic Games, Inc.",
    },
    {
      q: "Does TrackChest connect to my Epic Games account automatically?",
      a: "No. Epic Games does not provide a public real-time API for in-game chest opens. TrackChest is designed as a lightweight companion counter that you tap on your phone or second monitor while looting POIs during a match.",
      question: "Does TrackChest connect to my Epic Games account automatically?",
      answer: "No. Epic Games does not provide a public real-time API for in-game chest opens. TrackChest is designed as a lightweight companion counter that you tap on your phone or second monitor while looting POIs during a match.",
    },
    {
      q: "Can I use TrackChest without creating an account?",
      a: "Yes, 100%. You can open the site and start clicking immediately. There are no logins, no email signups, and no passwords required. Your numbers are safely persisted in your browser's LocalStorage.",
      question: "Can I use TrackChest without creating an account?",
      answer: "Yes, 100%. You can open the site and start clicking immediately. There are no logins, no email signups, and no passwords required. Your numbers are safely persisted in your browser's LocalStorage.",
    },
    {
      q: "What is the difference between a Regular Chest and a Rare Chest?",
      a: "In Fortnite, Regular standard chests have a high spawn rate (typically 70-80% per POI) and drop common to rare weapons. Rare (blue glowing) chests have a roughly 2% to 5% spawn chance and guarantee at least a Rare (blue), Epic (purple), or Legendary (gold) weapon, plus high-tier shield potions.",
      question: "What is the difference between a Regular Chest and a Rare Chest?",
      answer: "In Fortnite, Regular standard chests have a high spawn rate (typically 70-80% per POI) and drop common to rare weapons. Rare (blue glowing) chests have a roughly 2% to 5% spawn chance and guarantee at least a Rare (blue), Epic (purple), or Legendary (gold) weapon, plus high-tier shield potions.",
    },
    {
      q: "How do Pirate Token chests and map fragments work?",
      a: "During pirate-themed events and Chapter seasons, Pirate Token chests or Buried Treasure map chests require collecting map items or tokens. They offer higher drop odds for Mythic utility items and gold medallions.",
      question: "How do Pirate Token chests and map fragments work?",
      answer: "During pirate-themed events and Chapter seasons, Pirate Token chests or Buried Treasure map chests require collecting map items or tokens. They offer higher drop odds for Mythic utility items and gold medallions.",
    },
    {
      q: "Will my chest counts be lost if I refresh or close the tab?",
      a: "No. TrackChest continuously saves your state to your device's LocalStorage. Even if you restart your phone or close the browser, your daily total, personal best, and all-time records remain intact. You can also use the 'Backup' button to export a JSON file anytime.",
      question: "Will my chest counts be lost if I refresh or close the tab?",
      answer: "No. TrackChest continuously saves your state to your device's LocalStorage. Even if you restart your phone or close the browser, your daily total, personal best, and all-time records remain intact. You can also use the 'Backup' button to export a JSON file anytime.",
    },
  ],

  // 8. 原生对比配置
  comparison: {
    title: "Fortnite Chest Tracking vs Manual Memory",
    description: "Why competitive players rely on TrackChest instead of guessing their loot count",
    rows: [
      {
        feature: "Zero Distraction Tap Counter",
        us: true,
        competitors: "Pen and paper or alt-tabbing",
      },
      {
        feature: "Epic Account Security (100% Safe)",
        us: true,
        competitors: "Sketchy trackers asking for Epic OAuth",
      },
      {
        feature: "Multi-Rarity Classification",
        us: true,
        competitors: "Generic single +1 tally counters",
      },
      {
        feature: "Milestone Streaks & JSON Backup",
        us: true,
        competitors: false,
      },
    ],
  },
};
