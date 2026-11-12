import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(req: Request) {
  try {
    const { planId, userEmail } = await req.json();
    const plan = siteConfig.pricing.find((p) => p.id === planId);

    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // 通用离岸结账路由桩 (支持 Creem / Waffo / PayPal)
    // 实际生产环境下通过 SDK (如 @waffo/pancake-ts 或 Creem API) 创建 Checkout Session
    const mockCheckoutUrl = `${siteConfig.url}/dashboard?checkout_success=true&plan=${planId}`;

    return NextResponse.json({
      success: true,
      checkoutUrl: mockCheckoutUrl,
      provider: plan.paymentProvider || "creem",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
