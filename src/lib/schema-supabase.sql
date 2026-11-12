-- ==============================================================================
-- Supabase (PostgreSQL) Serverless Database Schema (Universal SaaS Template)
-- 适用阶段: 业务规模扩大、用户量激增、需要复杂关联查询与大容量存储时平滑切换
-- ==============================================================================

-- 启用 UUID 扩展
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. 用户档案表 (Profiles / Users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  picture TEXT,
  sub TEXT,
  credits INTEGER DEFAULT 30,
  plan TEXT DEFAULT 'free', -- 'free' | 'pro' | 'lifetime'
  is_pro BOOLEAN DEFAULT FALSE,
  subscription_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 用户生成资产库 (User Assets)
CREATE TABLE IF NOT EXISTS public.user_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT NOT NULL,
  title TEXT NOT NULL,
  asset_type TEXT DEFAULT 'quiz', -- 'quiz' | 'image' | 'video' | 'report' | 'audio'
  content_json JSONB NOT NULL,    -- 使用 Postgres 原生 JSONB 极大加速搜索与分析
  export_url TEXT,
  status TEXT DEFAULT 'completed', -- 'completed' | 'processing' | 'failed'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 积分流水明细表 (Credit Transactions)
CREATE TABLE IF NOT EXISTS public.credit_transactions (
  id BIGSERIAL PRIMARY KEY,
  user_email TEXT NOT NULL,
  amount INTEGER NOT NULL,        -- 正数为充值增加，负数为任务消耗
  balance_after INTEGER,          -- 变动后的余额
  reason TEXT NOT NULL,           -- 'initial_bonus' | 'purchase' | 'generation_consume' | 'refund'
  description TEXT,
  reference_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 离岸支付订单表 (Orders - 兼容 Creem / Waffo / PayPal / Stripe)
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id TEXT UNIQUE NOT NULL,
  user_email TEXT NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  plan_tier TEXT NOT NULL,
  payment_provider TEXT DEFAULT 'creem',
  status TEXT DEFAULT 'pending',  -- 'pending' | 'completed' | 'refunded'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 索引配置
CREATE INDEX IF NOT EXISTS idx_supabase_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_supabase_assets_email ON public.user_assets(user_email);
CREATE INDEX IF NOT EXISTS idx_supabase_transactions_email ON public.credit_transactions(user_email);
CREATE INDEX IF NOT EXISTS idx_supabase_orders_order_id ON public.orders(order_id);

-- 开启行级安全策略 (Row Level Security - RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 允许服务端服务密钥完整读写，允许用户查看自己的数据
CREATE POLICY "Allow public read own data" ON public.users FOR SELECT USING (true);
CREATE POLICY "Allow public insert own assets" ON public.user_assets FOR ALL USING (true);
CREATE POLICY "Allow public read own transactions" ON public.credit_transactions FOR SELECT USING (true);
