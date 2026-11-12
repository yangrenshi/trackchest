"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Box, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/90 backdrop-blur-md border-b border-[#2e2e2e]">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#ffc93c] flex items-center justify-center text-[#121212]">
            <Box className="w-4 h-4 fill-current" />
          </div>
          <span className="font-logo text-xl font-bold tracking-wide text-white">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-xs font-medium text-[#9a9a9a]">
          <Link href="/#tracker-app" className="hover:text-white transition-colors">
            Tracker
          </Link>
          <Link href="/#comparison" className="hover:text-white transition-colors">
            Spawn Odds
          </Link>
          <Link href="/fortnite-chest-counter" className="hover:text-white transition-colors">
            Counter View
          </Link>
          <Link href="/pirate-token-odds" className="hover:text-white transition-colors">
            Token Odds
          </Link>
          <Link href="/#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action */}
        <div className="hidden sm:flex items-center space-x-2">
          <a
            href="#tracker-app"
            className="px-3.5 py-1.5 rounded-lg bg-[#ffc93c] hover:bg-[#ffd766] text-[#121212] font-semibold text-xs transition-colors btn-press"
          >
            Open Counter
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 text-[#9a9a9a] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#2e2e2e] bg-[#1d1d1d] px-4 py-3 space-y-2 text-xs font-medium">
          <Link
            href="/#tracker-app"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-white"
          >
            Live Tracker
          </Link>
          <Link
            href="/#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#9a9a9a] hover:text-white"
          >
            Spawn Odds
          </Link>
          <Link
            href="/fortnite-chest-counter"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#9a9a9a] hover:text-white"
          >
            Counter View
          </Link>
          <Link
            href="/pirate-token-odds"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#9a9a9a] hover:text-white"
          >
            Token Odds
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#9a9a9a] hover:text-white"
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
