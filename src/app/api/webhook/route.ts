import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    // 生产环境需做签名验签 (Creem HMAC-SHA256 或 Waffo RSA 验签)
    console.log("[Webhook] Received payment notification:", rawBody);

    // 幂等加积分与更新用户会员身份

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
