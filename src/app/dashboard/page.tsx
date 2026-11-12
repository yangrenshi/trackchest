"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ProSaasDashboard } from "@/components/dashboard/ProSaasDashboard";
import { LiteToolDashboard } from "@/components/dashboard/LiteToolDashboard";
import { useAuth } from "@/context/AuthContext";
import { User } from "lucide-react";

export default function DashboardPage() {
  const { user, setLoginModalOpen } = useAuth();

  // 未登录时统一优雅提示
  if (!user) {
    return (
      <div className="py-24 max-w-md mx-auto px-4 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mx-auto">
          <User className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sign In to View Dashboard</h2>
        <p className="text-sm text-slate-500">Access your remaining AI credits, generation history, and invoices.</p>
        <button
          onClick={() => setLoginModalOpen(true)}
          className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold shadow-md"
        >
          Sign In Now
        </button>
      </div>
    );
  }

  // 根据 siteConfig.dashboardStyle 一键无缝切换后台模式
  // 模式 1: "pro" -> Sora2 风格大厂侧边栏后台 (Overview, My Assets, Billing, Credits, Profile)
  // 模式 2: "lite" -> 极速单页轻量工具后台
  if (siteConfig.dashboardStyle === "lite") {
    return <LiteToolDashboard />;
  }

  return <ProSaasDashboard />;
}
