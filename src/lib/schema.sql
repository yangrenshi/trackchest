-- ==============================================================================
-- Cloudflare D1 Serverless Database Schema (Universal SaaS Template)
-- ==============================================================================

-- 1. 用户表 (Users)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  picture TEXT,
  sub TEXT,
  credits INTEGER DEFAULT 30,
  plan TEXT DEFAULT 'free', -- 'free' | 'pro' | 'lifetime'
  is_pro INTEGER DEFAULT 0,
  subscription_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. 用户生成资产库 (User Assets - 适用 Sora2 风格资产管理)
CREATE TABLE IF NOT EXISTS user_assets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_email TEXT NOT NULL,
  title TEXT NOT NULL,
  asset_type TEXT DEFAULT 'quiz', -- 'quiz' | 'image' | 'video' | 'report' | 'audio'
  content_json TEXT NOT NULL,      -- 结构化生成的 JSON 结果
  export_url TEXT,                 -- 导出的文件链接 (Anki / Markdown / PDF)
  status TEXT DEFAULT 'completed', -- 'completed' | 'processing' | 'failed'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. 积分流水明细表 (Credit Transactions)
CREATE TABLE IF NOT EXISTS credit_transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_email TEXT NOT NULL,
  amount INTEGER NOT NULL,         -- 正数为增加，负数为消耗
  balance_after INTEGER,           -- 变动后的可用余额
  reason TEXT NOT NULL,            -- 'initial_bonus' | 'purchase' | 'generation_consume' | 'refund'
  description TEXT,                -- 人类可读说明
  reference_id TEXT,               -- 关联订单号或任务ID
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. 离岸支付订单表 (Orders - 兼容 Creem / Waffo / PayPal / Stripe)
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT UNIQUE NOT NULL,
  user_email TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  plan_tier TEXT NOT NULL,         -- 'starter' | 'pro_monthly' | 'lifetime'
  payment_provider TEXT DEFAULT 'creem', -- 'creem' | 'waffo' | 'paypal' | 'stripe'
  status TEXT DEFAULT 'pending',   -- 'pending' | 'completed' | 'refunded'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 索引加速
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_assets_email ON user_assets(user_email);
CREATE INDEX IF NOT EXISTS idx_transactions_email ON credit_transactions(user_email);
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
