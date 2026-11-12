/**
 * ==============================================================================
 * 统一数据库门面适配器 (Universal Database Adapter Facade)
 * ==============================================================================
 * 出海双引擎策略：
 * 1. 起步期 (MVP / 验证新词)：使用 Cloudflare D1 (0 成本、超快 Serverless SQLite)
 * 2. 增长期 (用户量激增 / 复杂关联)：一键切换为 Supabase (PostgreSQL + RLS + 强大生态)
 * 3. 未配置环境凭证时：自动走本地 Mock / Fallback，保证开发与预览零阻塞！
 * ==============================================================================
 */

import { siteConfig } from "@/config/site";
import * as d1 from "./d1";
import * as supabase from "./supabase";

export type DatabaseProvider = "d1" | "supabase";

// 优先读取环境变量，其次读取 siteConfig.databaseProvider，默认为 "d1"
export const currentProvider: DatabaseProvider = 
  (process.env.DATABASE_PROVIDER as DatabaseProvider) ||
  siteConfig.databaseProvider ||
  "d1";

export const db = {
  provider: currentProvider,

  // 1. 同步或创建用户
  async syncUser(profile: { email: string; name?: string; picture?: string; sub?: string }) {
    if (currentProvider === "supabase" && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return supabase.syncSupabaseUser(profile);
    }
    return d1.syncD1User(profile);
  },

  // 2. 变更积分并记录流水
  async recordTransaction(data: {
    user_email: string;
    amount: number;
    reason: string;
    description: string;
    reference_id?: string | null;
  }) {
    if (currentProvider === "supabase" && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return supabase.recordSupabaseTransaction(data);
    }
    return d1.recordD1Transaction(data);
  },

  // 3. 保存生成资产 (Sora2 风格 My Assets)
  async saveAsset(data: {
    user_email: string;
    title: string;
    asset_type?: string;
    content_json: string;
    export_url?: string;
  }) {
    if (currentProvider === "supabase" && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return supabase.saveSupabaseAsset(data);
    }
    return d1.saveD1Asset(data);
  },

  // 4. 获取用户资产列表
  async getUserAssets(email: string, limit = 50) {
    if (currentProvider === "supabase" && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return supabase.getSupabaseUserAssets(email, limit);
    }
    return d1.getD1UserAssets(email, limit);
  },

  // 5. 获取流水账单明细
  async getTransactions(email: string, limit = 50) {
    if (currentProvider === "supabase" && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return supabase.getSupabaseTransactions(email, limit);
    }
    return d1.getD1Transactions(email, limit);
  }
};
