"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Box, Menu, X, Sparkles, Crosshair } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-void-950/85 border-b border-slate-800/80 transition-colors shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 group-hover:rotate-3 transition-transform">
            <Box className="w-6 h-6 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-tech text-2xl font-black text-white tracking-wide uppercase leading-none">
              {siteConfig.name}
            </span>
            <span className="font-tech text-[10px] tracking-widest text-amber-400 uppercase font-bold">
              LOOT COUNTER HUD
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 font-tech text-sm uppercase tracking-wider font-bold text-slate-300">
          <Link href="/#tracker-app" className="hover:text-amber-400 transition-colors">
            Live Tracker
          </Link>
          <Link href="/#comparison" className="hover:text-amber-400 transition-colors">
            Spawn Odds
          </Link>
          <Link href="/#features" className="hover:text-amber-400 transition-colors">
            Features
          </Link>
          <Link href="/#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#tracker-app"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-tech text-xs uppercase tracking-wider font-extrabold bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>START TRACKING</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-void-950/98 px-5 pt-3 pb-6 space-y-3 font-tech text-sm tracking-wider uppercase font-bold">
          <Link
            href="/#tracker-app"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400"
          >
            Live Tracker
          </Link>
          <Link
            href="/#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400"
          >
            Spawn Odds
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400"
          >
            FAQ
          </Link>
          <a
            href="#tracker-app"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 text-slate-950 font-black"
          >
            <Sparkles className="w-4 h-4" />
            <span>START TRACKING</span>
          </a>
        </div>
      )}
    </header>
  );
}
