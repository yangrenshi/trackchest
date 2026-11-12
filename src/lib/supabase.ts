/**
 * Supabase Serverless Client & Operation Methods
 * 支持通过 Supabase REST API 直接与 PostgreSQL 数据库通信，
 * 无需额外捆绑重型依赖，保持 Next.js 极速构建。
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

async function fetchSupabase(path: string, options: RequestInit = {}) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return { data: null, error: 'Supabase credentials not configured' };
  }

  const endpoint = `${SUPABASE_URL}/rest/v1/${path}`;
  const headers = {
    'apikey': SUPABASE_SERVICE_KEY,
    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...(options.headers || {}),
  };

  try {
    const res = await fetch(endpoint, { ...options, headers, cache: 'no-store' });
    if (!res.ok) {
      const err = await res.text();
      return { data: null, error: `Supabase Error: ${err}` };
    }
    const data = await res.json();
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err.message };
  }
}

// 1. 同步用户数据
export async function syncSupabaseUser(profile: {
  email: string;
  name?: string;
  picture?: string;
  sub?: string;
}) {
  const { data: existing } = await fetchSupabase(`users?email=eq.${encodeURIComponent(profile.email)}&select=*`);
  if (existing && existing.length > 0) {
    return existing[0];
  }

  // 插入新用户并赠送 30 积分
  const { data: created } = await fetchSupabase('users', {
    method: 'POST',
    body: JSON.stringify({
      email: profile.email,
      name: profile.name || null,
      picture: profile.picture || null,
      sub: profile.sub || null,
      credits: 30,
      plan: 'free',
      is_pro: false
    })
  });

  return created ? created[0] : null;
}

// 2. 记录积分流水
export async function recordSupabaseTransaction(data: {
  user_email: string;
  amount: number;
  reason: string;
  description: string;
  reference_id?: string | null;
}) {
  // 1. 查找用户当前积分
  const { data: users } = await fetchSupabase(`users?email=eq.${encodeURIComponent(data.user_email)}&select=credits`);
  const currentCredits = users && users[0] ? users[0].credits : 0;
  const newBalance = currentCredits + data.amount;

  // 2. 更新积分
  await fetchSupabase(`users?email=eq.${encodeURIComponent(data.user_email)}`, {
    method: 'PATCH',
    body: JSON.stringify({ credits: newBalance, updated_at: new Date().toISOString() })
  });

  // 3. 记录日志流水
  await fetchSupabase('credit_transactions', {
    method: 'POST',
    body: JSON.stringify({
      user_email: data.user_email,
      amount: data.amount,
      balance_after: newBalance,
      reason: data.reason,
      description: data.description,
      reference_id: data.reference_id || null
    })
  });

  return { success: true, newBalance };
}

// 3. 保存资产
export async function saveSupabaseAsset(data: {
  user_email: string;
  title: string;
  asset_type?: string;
  content_json: string;
  export_url?: string;
}) {
  return fetchSupabase('user_assets', {
    method: 'POST',
    body: JSON.stringify({
      user_email: data.user_email,
      title: data.title,
      asset_type: data.asset_type || 'quiz',
      content_json: typeof data.content_json === 'string' ? JSON.parse(data.content_json) : data.content_json,
      export_url: data.export_url || null,
      status: 'completed'
    })
  });
}

// 4. 获取用户资产列表
export async function getSupabaseUserAssets(email: string, limit = 50) {
  const { data } = await fetchSupabase(`user_assets?user_email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=${limit}&select=*`);
  return { success: true, results: data || [] };
}

// 5. 获取流水账单
export async function getSupabaseTransactions(email: string, limit = 50) {
  const { data } = await fetchSupabase(`credit_transactions?user_email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=${limit}&select=*`);
  return { success: true, results: data || [] };
}
