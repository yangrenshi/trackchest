"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
  Zap,
  BarChart3,
  FolderOpen,
  CreditCard,
  Settings,
  Shield,
  Download,
  ExternalLink,
  Plus,
  RefreshCw,
  LogOut,
  Home,
  CheckCircle2,
  Trash2,
  Copy
} from "lucide-react";

export function ProSaasDashboard() {
  const { user, logout, addCredits } = useAuth();
  const [activeNav, setActiveNav] = useState<"overview" | "assets" | "billing" | "credits" | "profile">("overview");

  // 模拟资产列表 (Sora2 风格 My Assets)
  const [assets, setAssets] = useState([
    {
      id: "ast_1",
      title: "CS50 Introduction to Computer Science Quiz",
      type: "quiz",
      date: "2026-10-21",
      size: "8 Questions",
      preview: "Covers Binary, Algorithms, and C Language basics."
    },
    {
      id: "ast_2",
      title: "Huberman Lab Focus & Attention Protocol",
      type: "flashcards",
      date: "2026-10-18",
      size: "12 Cards",
      preview: "Dopamine management, 90-minute ultradian cycles."
    },
    {
      id: "ast_3",
      title: "Stanford Machine Learning Lecture 01",
      type: "summary",
      date: "2026-10-15",
      size: "Markdown Doc",
      preview: "Supervised vs Unsupervised learning definitions."
    }
  ]);

  // 模拟积分流水记录
  const mockTransactions = [
    { id: "tx_1", date: "2026-10-21 14:32", desc: "Generated CS50 Quiz", amount: -1, balance: user?.credits ?? 49 },
    { id: "tx_2", date: "2026-10-19 09:15", desc: "Pro Subscription Monthly Refill", amount: +500, balance: 50 },
    { id: "tx_3", date: "2026-10-17 18:00", desc: "Welcome Bonus Credits", amount: +30, balance: 30 },
  ];

  if (!user) return null;

  return (
    <div className="min-h-[85vh] bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* ========================================================================= */}
      {/* 1. 左侧大厂风格固定侧边栏 (Sidebar - 完美吸收 Sora2 架构) */}
      {/* ========================================================================= */}
      <aside className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Brand Logo & Back to Home */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="text-base tracking-tight">{siteConfig.name}</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveNav("overview")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeNav === "overview"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveNav("assets")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeNav === "assets"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              <span>My Assets ({assets.length})</span>
            </button>

            <button
              onClick={() => setActiveNav("billing")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeNav === "billing"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Subscription & Billing</span>
            </button>

            <button
              onClick={() => setActiveNav("credits")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeNav === "credits"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Credits & Usage Log</span>
            </button>

            <button
              onClick={() => setActiveNav("profile")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeNav === "profile"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Profile & Security</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Bottom: User Card & Sign Out */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-3">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover border" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
                {user.name.charAt(0)}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. 右侧主要工作区 (Main Workspace) */}
      {/* ========================================================================= */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-5xl">
        {/* TAB 1: OVERVIEW */}
        {activeNav === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Workspace Overview</h2>
              <p className="text-sm text-slate-500 mt-1">Manage your active subscription, AI quota and recent generations.</p>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Credits</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{user.credits}</span>
                  <span className="text-xs text-brand-600 font-bold">Ready</span>
                </div>
                <button
                  onClick={() => addCredits(50)}
                  className="mt-2 text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Top-up 50 Credits</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Membership</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white capitalize">{user.plan}</span>
                </div>
                <Link href="/#pricing" className="mt-2 text-xs font-semibold text-brand-600 hover:underline block">
                  Upgrade Plan & Features →
                </Link>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Generated Assets</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{assets.length}</span>
                  <span className="text-xs text-slate-400">Stored on D1</span>
                </div>
                <button
                  onClick={() => setActiveNav("assets")}
                  className="mt-2 text-xs font-semibold text-brand-600 hover:underline block"
                >
                  View Assets Library →
                </button>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-brand-500/10">
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Ready to synthesize new content?</h3>
                <p className="text-xs text-brand-100 max-w-lg">
                  Paste any public YouTube lecture or transcript to instantly generate active recall decks.
                </p>
              </div>
              <Link
                href="/#tool"
                className="px-5 py-2.5 rounded-xl bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition-colors shrink-0"
              >
                Open Studio Tool
              </Link>
            </div>
          </div>
        )}

        {/* TAB 2: MY ASSETS (Sora2 风格资产卡片网格) */}
        {activeNav === "assets" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">My Assets Library</h2>
                <p className="text-sm text-slate-500 mt-1">Review, export, and manage your synthesized study decks.</p>
              </div>
              <Link
                href="/#tool"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Generation</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assets.map((ast) => (
                <div
                  key={ast.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3 hover:border-brand-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-0.5 rounded">
                      {ast.type}
                    </span>
                    <span className="text-xs text-slate-400">{ast.date}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{ast.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{ast.preview}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-400">{ast.size}</span>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium">
                        <Download className="w-3.5 h-3.5" />
                        <span>Export</span>
                      </button>
                      <button
                        onClick={() => setAssets(assets.filter((a) => a.id !== ast.id))}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BILLING & SUBSCRIPTIONS */}
        {activeNav === "billing" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Subscription & Invoices</h2>
              <p className="text-sm text-slate-500 mt-1">Manage recurring plans, payment methods, and refund requests.</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">Active Subscription</span>
                  <p className="text-xl font-bold text-slate-900 dark:text-white capitalize">{user.plan} Tier</p>
                  <p className="text-xs text-slate-500">Processed securely via PCI-DSS compliant Merchant of Record.</p>
                </div>
                <Link
                  href="/#pricing"
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold"
                >
                  Change Plan
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <span>Need to cancel recurring renewal?</span>
                <button
                  onClick={() => alert("Your subscription renewal has been successfully stopped. You will keep benefits until current period ends.")}
                  className="text-red-600 hover:underline font-semibold"
                >
                  Cancel Auto-Renew
                </button>
              </div>
            </div>

            {/* Invoices */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-bold text-sm">
                Billing Receipts & Invoices
              </div>
              <div className="p-5 text-center text-xs text-slate-400">
                All payment invoices are sent to <strong>{user.email}</strong> directly upon checkout.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CREDITS LOG */}
        {activeNav === "credits" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Credit Balance & Ledger</h2>
              <p className="text-sm text-slate-500 mt-1">Full transparent record of every AI generation and credit refill.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-xs text-slate-500">
                    <th className="py-3 px-4 font-semibold">Time</th>
                    <th className="py-3 px-4 font-semibold">Activity</th>
                    <th className="py-3 px-4 font-semibold">Amount</th>
                    <th className="py-3 px-4 font-semibold">Ending Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {mockTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/50">
                      <td className="py-3 px-4 text-slate-400">{tx.date}</td>
                      <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">{tx.desc}</td>
                      <td className={`py-3 px-4 font-bold ${tx.amount > 0 ? "text-emerald-500" : "text-slate-600 dark:text-slate-400"}`}>
                        {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold">{tx.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: PROFILE & SECURITY */}
        {activeNav === "profile" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Profile & Compliance</h2>
              <p className="text-sm text-slate-500 mt-1">Manage identity and GDPR personal data erasure requests.</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Registered Email</label>
                <input
                  type="text"
                  disabled
                  value={user.email}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-sm font-mono text-slate-600 dark:text-slate-400"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-red-600">GDPR Right to Be Forgotten</h4>
                  <p className="text-xs text-slate-500">Permanently wipe your account, history, and credit records.</p>
                </div>
                <button
                  onClick={() => alert("To erase all your personal data, please send an automated deletion confirmation to support@domain.com")}
                  className="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold"
                >
                  Request Deletion
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
