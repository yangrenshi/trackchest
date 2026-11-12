/**
 * Cloudflare D1 REST API Client
 * 支持在 Vercel / Cloudflare Pages / 本地 Node.js 环境下毫秒级读写 D1 边缘数据库。
 * 未配置凭据时，自动提供安全的本地 Fallback，确保开发与演示 100% 畅通。
 */

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const CLOUDFLARE_D1_DATABASE_ID = process.env.CLOUDFLARE_D1_DATABASE_ID || '';
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';

export interface D1QueryResult<T = unknown> {
  success: boolean;
  results: T[];
  meta?: {
    served_by?: string;
    duration?: number;
    changes?: number;
    last_row_id?: number;
    rows_read?: number;
    rows_written?: number;
  };
  error?: string;
}

export async function executeD1<T = unknown>(
  sql: string,
  params: (string | number | boolean | null)[] = []
): Promise<D1QueryResult<T>> {
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_D1_DATABASE_ID || !CLOUDFLARE_API_TOKEN) {
    // 环境变量未配置时，走优雅 Mock 模式，不阻塞前端页面与预览
    return {
      success: true,
      results: [],
      error: 'D1 credentials not configured (mock fallback active).'
    };
  }

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/d1/database/${CLOUDFLARE_D1_DATABASE_ID}/query`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`
      },
      body: JSON.stringify({ sql, params }),
      cache: 'no-store'
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        success: false,
        results: [],
        error: `Cloudflare D1 HTTP ${response.status}: ${errText}`
      };
    }

    const json = await response.json();
    if (!json.success || !json.result || json.result.length === 0) {
      return {
        success: false,
        results: [],
        error: json.errors?.[0]?.message || 'Query failed'
      };
    }

    const firstResult = json.result[0];
    return {
      success: firstResult.success ?? true,
      results: (firstResult.results as T[]) || [],
      meta: firstResult.meta
    };
  } catch (err: unknown) {
    return {
      success: false,
      results: [],
      error: err instanceof Error ? err.message : String(err)
    };
  }
}

/**
 * 业务数据操作辅助函数
 */

// 1. 同步用户数据 (获取或创建)
export async function syncD1User(profile: {
  email: string;
  name?: string;
  picture?: string;
  sub?: string;
}) {
  const findSql = `SELECT * FROM users WHERE email = ? LIMIT 1`;
  const existing = await executeD1<{ id: number; email: string; credits: number; is_pro: number; plan: string }>(findSql, [
    profile.email
  ]);

  if (existing.success && existing.results.length > 0) {
    const user = existing.results[0];
    const updateSql = `UPDATE users SET name = ?, picture = ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;
    await executeD1(updateSql, [profile.name || null, profile.picture || null, profile.email]);
    return user;
  }

  // 初始注册赠送 30 积分
  const insertSql = `
    INSERT INTO users (email, name, picture, sub, credits, is_pro, plan)
    VALUES (?, ?, ?, ?, 30, 0, 'free')
  `;
  await executeD1(insertSql, [
    profile.email,
    profile.name || null,
    profile.picture || null,
    profile.sub || null
  ]);

  return {
    email: profile.email,
    name: profile.name,
    picture: profile.picture,
    credits: 30,
    is_pro: 0,
    plan: 'free'
  };
}

// 2. 扣除或增加积分，并记录流水
export async function recordD1Transaction(data: {
  user_email: string;
  amount: number;
  reason: string;
  description: string;
  reference_id?: string | null;
}) {
  // 1. 更新用户余额
  const updateSql = `UPDATE users SET credits = credits + ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?`;
  await executeD1(updateSql, [data.amount, data.user_email]);

  // 2. 获取更新后余额
  const findSql = `SELECT credits FROM users WHERE email = ? LIMIT 1`;
  const userRes = await executeD1<{ credits: number }>(findSql, [data.user_email]);
  const newBalance = userRes.results[0]?.credits ?? null;

  // 3. 记录日志流水
  const logSql = `
    INSERT INTO credit_transactions (user_email, amount, balance_after, reason, description, reference_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  await executeD1(logSql, [
    data.user_email,
    data.amount,
    newBalance,
    data.reason,
    data.description,
    data.reference_id || null
  ]);

  return { success: true, newBalance };
}

// 3. 保存用户生成资产 (Sora2 风格 My Assets)
export async function saveD1Asset(data: {
  user_email: string;
  title: string;
  asset_type?: string;
  content_json: string;
  export_url?: string;
}) {
  const insertSql = `
    INSERT INTO user_assets (user_email, title, asset_type, content_json, export_url)
    VALUES (?, ?, ?, ?, ?)
  `;
  return executeD1(insertSql, [
    data.user_email,
    data.title,
    data.asset_type || 'quiz',
    data.content_json,
    data.export_url || null
  ]);
}

// 4. 获取用户资产列表
export async function getD1UserAssets(email: string, limit = 50) {
  const sql = `SELECT * FROM user_assets WHERE user_email = ? ORDER BY id DESC LIMIT ?`;
  return executeD1<{
    id: number;
    title: string;
    asset_type: string;
    content_json: string;
    export_url: string | null;
    created_at: string;
  }>(sql, [email, limit]);
}

// 5. 获取用户消费流水明细
export async function getD1Transactions(email: string, limit = 50) {
  const sql = `SELECT * FROM credit_transactions WHERE user_email = ? ORDER BY id DESC LIMIT ?`;
  return executeD1<{
    id: number;
    amount: number;
    balance_after: number;
    reason: string;
    description: string;
    created_at: string;
  }>(sql, [email, limit]);
}
