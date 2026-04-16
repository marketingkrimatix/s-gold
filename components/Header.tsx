"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Sell Gold", href: "/sell-gold" },
  { label: "Release Gold", href: "/release-pledged-gold" },
  { label: "Locations", href: "/locations" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-header-bg backdrop-blur-2xl supports-[backdrop-filter]:bg-header-bg-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="glow-soft flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] text-sm font-bold text-[#330164] shadow-[0_10px_30px_rgba(233,201,98,0.20)] transition duration-300 group-hover:scale-105">
            SG
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide text-text-primary">S-Gold</p>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-gold">
              Gold Buyers
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-text-secondary transition hover:text-brand-gold-soft after:absolute after:left-0 after:top-[120%] after:h-px after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card-bg text-text-primary transition hover:border-card-border-hover hover:bg-card-bg-hover"
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {theme === "dark" ? (
                /* Sun icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          <Link
            href="tel:+919999999999"
            className="hidden rounded-full border border-card-border bg-card-bg px-4 py-2 text-sm font-medium text-text-secondary transition hover:border-card-border-hover hover:bg-card-bg-hover sm:inline-flex"
          >
            Call Now
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#2A0848] shadow-[0_12px_30px_rgba(233,201,98,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(233,201,98,0.32)]"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
