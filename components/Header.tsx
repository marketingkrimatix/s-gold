"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type ChildNavItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: ChildNavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Sell Gold", href: "/sell-gold" },
  { label: "Release Gold", href: "/release-pledged-gold" },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Tirupati", href: "/locations/tirupati" },
      { label: "Warangal", href: "/locations/warangal" },
      { label: "Karimnagar", href: "/locations/karimnagar" },
    ],
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [desktopLocationsOpen, setDesktopLocationsOpen] = useState(false);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileLocationsOpen(false);
  };

  const openDesktopLocationsMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setDesktopLocationsOpen(true);
  };

  const closeDesktopLocationsMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setDesktopLocationsOpen(false);
    }, 120);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-divider)] bg-[var(--color-header-bg)]/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-[var(--color-header-bg-blur)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3" onClick={closeMenu}>
            {/* <div className="glow-soft flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-brand-gold)]/30 bg-gradient-to-br from-[var(--color-brand-gold-soft)] via-[var(--color-brand-gold)] to-[var(--color-brand-gold-rich)] text-sm font-bold text-[var(--color-brand-primary)] shadow-[0_10px_30px_rgba(233,201,98,0.20)] transition duration-300 group-hover:scale-105">
              SG
            </div> */}
            <div className="glow-soft flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] text-sm font-bold text-[#330164] shadow-[0_10px_30px_rgba(233,201,98,0.20)] transition duration-300 group-hover:scale-105">
              SG
            </div>

            <div>
              <p className="text-lg font-semibold tracking-wide text-[var(--color-text-primary)]">
                S-Gold
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-brand-gold)]">
                Gold Buyers
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                    onMouseEnter={openDesktopLocationsMenu}
                    onMouseLeave={closeDesktopLocationsMenu}
                  >
                    <button
                      type="button"
                      onClick={() => setDesktopLocationsOpen((prev) => !prev)}
                      aria-expanded={desktopLocationsOpen}
                      aria-label="Toggle locations menu"
                      className="flex items-center gap-2"
                    >
                      <span className="relative text-sm font-medium text-[var(--color-text-secondary)] transition hover:text-[var(--color-brand-gold-soft)] after:absolute after:left-0 after:top-[120%] after:h-px after:w-0 after:bg-[var(--color-brand-gold)] after:transition-all after:duration-300 group-hover:after:w-full group-hover:text-[var(--color-brand-gold-soft)]">
                        {item.label}
                      </span>

                      <svg
                        className={`h-4 w-4 text-[var(--color-text-secondary)] transition-all duration-300 group-hover:text-[var(--color-brand-gold-soft)] ${
                          desktopLocationsOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          d="M5 7.5 10 12.5 15 7.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div className="absolute left-0 top-full h-4 w-72" />

                    <div
                      className={`absolute left-0 top-[calc(100%+12px)] z-50 w-72 origin-top rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-surface)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.20)] transition-all duration-200 ${
                        desktopLocationsOpen
                          ? "pointer-events-auto visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="mb-2 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-brand-gold)]"
                      >
                        <span>All Locations</span>
                        <span className="text-[var(--color-brand-gold)]/80">↗</span>
                      </Link>

                      <div className="h-px bg-[var(--color-divider)]" />

                      <div className="mt-2 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-brand-gold)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium text-[var(--color-text-secondary)] transition hover:text-[var(--color-brand-gold-soft)] after:absolute after:left-0 after:top-[120%] after:h-px after:w-0 after:bg-[var(--color-brand-gold)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-primary)] transition hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-bg-hover)]"
                aria-label="Toggle theme"
                id="theme-toggle"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}

            <Link
              href="tel:+919999999999"
              className="hidden rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-text-primary)] sm:inline-flex"
            >
              Call Now
            </Link>

            {/* <Link
              href="/contact-us"
              className="hidden items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-gold-soft)] via-[var(--color-brand-gold)] to-[var(--color-brand-gold-rich)] px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-primary)] shadow-[0_12px_30px_rgba(233,201,98,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(233,201,98,0.32)] sm:inline-flex"
            >
              Get Instant Quote
            </Link> */}
            <Link
              href="/contact-us"
              className="hidden items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#2A0848] shadow-[0_12px_30px_rgba(233,201,98,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(233,201,98,0.32)] sm:inline-flex"
            >
              Get Instant Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-primary)] transition hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-bg-hover)] lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>

              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile / tablet panel */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[var(--color-divider)] bg-[var(--color-header-bg)]/95 px-4 pb-4 pt-4 backdrop-blur-2xl sm:px-6">
            <div className="rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  if (item.children) {
                    return (
                      <div key={item.label}>
                        <div className="flex items-center gap-2">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="flex-1 rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-brand-gold)]"
                            style={{
                              transitionDelay: mobileMenuOpen ? `${index * 40}ms` : "0ms",
                            }}
                          >
                            {item.label}
                          </Link>

                          <button
                            type="button"
                            aria-label="Toggle locations submenu"
                            aria-expanded={mobileLocationsOpen}
                            onClick={() => setMobileLocationsOpen((prev) => !prev)}
                            className="flex h-11 w-11 items-center justify-center rounded-2xl text-[var(--color-text-primary)] transition hover:bg-[var(--color-card-bg-hover)]"
                          >
                            <svg
                              className={`h-4 w-4 transition-transform duration-300 ${
                                mobileLocationsOpen ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <path
                                d="M5 7.5 10 12.5 15 7.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <div
                          className={`grid transition-all duration-300 ${
                            mobileLocationsOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-70"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="mt-1 space-y-1 pl-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-brand-gold)]"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-brand-gold)]"
                      style={{
                        transitionDelay: mobileMenuOpen ? `${index * 40}ms` : "0ms",
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="translate-x-0 text-[var(--color-brand-gold)]/70 transition duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Link
                  href="tel:+919999999999"
                  onClick={closeMenu}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-bg-hover)] hover:text-[var(--color-text-primary)]"
                >
                  Call Now
                </Link>

                <Link
                  href="/contact-us"
                  onClick={closeMenu}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#2A0848] shadow-[0_16px_40px_rgba(233,201,98,0.32)] transition duration-300 hover:-translate-y-0.5"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}