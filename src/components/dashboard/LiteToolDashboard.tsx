"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Zap, User, CreditCard, History, Download, ExternalLink } from "lucide-react";

export function LiteToolDashboard() {
  const { user, addCredits } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "billing">("overview");

  if (!user) return null;

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 animate-in fade-in">
      {/* User Header */}
      <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{user.name}</h2>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 px-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
          <div>
            <span className="block text-xs font-semibold text-slate-400">Balance</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
              <Zap className="w-4 h-4 fill-current text-brand-500" />
              {user.credits} Credits
            </span>
          </div>
          <button
            onClick={() => addCredits(50)}
            className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold"
          >
            + Top-up
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 text-sm font-semibold">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-3 ${activeTab === "overview" ? "border-b-2 border-brand-600 text-brand-600" : "text-slate-500"}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`pb-3 ${activeTab === "history" ? "border-b-2 border-brand-600 text-brand-600" : "text-slate-500"}`}
        >
          Recent Generations
        </button>
        <button
          onClick={() => setActiveTab("billing")}
          className={`pb-3 ${activeTab === "billing" ? "border-b-2 border-brand-600 text-brand-600" : "text-slate-500"}`}
        >
          Billing & Plans
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Current Tier</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white capitalize">{user.plan} User</p>
            <p className="text-xs text-slate-500">Each task consumes 1 credit.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Start New Task</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Active Recall Studio</p>
            <Link href="/#tool" className="text-xs text-brand-600 hover:underline block">
              Open Tool →
            </Link>
          </div>
        </div>
      )}

      {activeTab === "history" && (
        <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-500">
          Your synthesized quiz decks are stored safely. Access your exported Anki/Markdown packages here.
        </div>
      )}

      {activeTab === "billing" && (
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="font-bold text-base">Subscription Plan</h3>
          <p className="text-xs text-slate-500">You are currently using the {user.plan} plan.</p>
          <Link href="/#pricing" className="inline-block px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold">
            Upgrade Plan
          </Link>
        </div>
      )}
    </div>
  );
}
