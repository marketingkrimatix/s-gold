"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

/* ── Step data with separate desktop / mobile positions ────────────── */
const steps = [
  {
    id: 1,
    title: "Visit Our Nearest Branch",
    desc: "Walk in to any SGold branch in Hyderabad, Tirupati, Warangal, or Karimnagar. No appointment needed.",
    /* Desktop — right of curve */
    top: "18%", left: "62%", align: "pl-6 text-left",
    /* Mobile */
    mTop: "14%", mLeft: "62%", mAlign: "pl-4 text-left",
  },
  {
    id: 2,
    title: "XRF Purity Test",
    desc: "Your gold is scanned with German XRF technology — right in front of you. Zero damage, 100% accurate.",
    /* Desktop — left of curve near the top */
    top: "12%", left: "38%", align: "-translate-x-full pr-6 text-right",
    /* Mobile */
    mTop: "10%", mLeft: "38%", mAlign: "-translate-x-full pr-4 text-right",
  },
  {
    id: 3,
    title: "Live Rate Valuation",
    desc: "We calculate your payout at today's MCX rate for your gold's exact purity. You see every number.",
    /* Desktop — left of curve at center crossing */
    top: "48%", left: "42%", align: "-translate-x-full pr-6 text-right",
    /* Mobile */
    mTop: "48%", mLeft: "42%", mAlign: "-translate-x-full pr-4 text-right",
  },
  {
    id: 4,
    title: "KYC Verification",
    desc: "Aadhaar, PAN, or Passport — verified digitally in minutes. No paperwork.",
    /* Desktop — right of curve */
    top: "68%", left: "58%", align: "pl-6 text-left",
    /* Mobile */
    mTop: "70%", mLeft: "58%", mAlign: "pl-4 text-left",
  },
  {
    id: 5,
    title: "Instant Payout",
    desc: "AccepAccept the offer and get paid immediately — cash, UPI, RTGS, or IMPS. Your choice.",
    /* Desktop — left of curve near bottom */
    top: "85%", left: "45%", align: "-translate-x-full pr-6 text-right",
    /* Mobile */
    mTop: "89%", mLeft: "48%", mAlign: "-translate-x-full pr-4 text-right",
  },
];

/*
 * Desktop S-path (viewBox 600 × 1000)
 * ────────────────────────────────────
 * Starts top-right ~(420,60), curves LEFT through the upper half,
 * crosses centre, curves RIGHT through the lower half, ends bottom-left ~(220,940).
 * Horizontal range kept tight (≈150–480) so the shape reads as a true "S".
 */
const DESK_PATH =
  "M 423 103 C 126 -204 -84 508 331 515 C 694 540 529 1111 200 929";

/*
 * Mobile S-path (viewBox 300 × 1000)
 * Narrower version of the same proportions.
 */
const MOB_PATH =
  "M 236 105 C 5 -23 -25 466 150 513 C 344 561 273 992 58 918";

export default function STimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="stimeline" className="relative bg-background w-full h-[300vh]">
      {/* ── Sticky viewport ─────────────────────────────────────────── */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center overflow-hidden">

        {/* Header */}
        <div className="pt-20 md:pt-24 pb-6 md:pb-8 text-center flex-shrink-0">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            How We Buy Your Gold
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
            The SGold Standard
          </h2>
        </div>

        {/* ── S-curve area ──────────────────────────────────────────── */}
        <div className="relative w-full max-w-3xl mx-auto flex-grow">

          {/* ─── DESKTOP ─────────────────────────────────────────────── */}
          <div className="hidden md:block absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Ghost rail */}
              <path
                d={DESK_PATH}
                stroke="var(--divider)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Glowing animated fill */}
              <motion.path
                d={DESK_PATH}
                stroke="url(#gold-grad-desk)"
                strokeWidth="12"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
                className="drop-shadow-[0_0_18px_rgba(233,201,98,0.55)]"
              />
              <defs>
                <linearGradient
                  id="gold-grad-desk"
                  x1="0" y1="0" x2="0" y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#F6E7A1" />
                  <stop offset="50%" stopColor="#E9C962" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>

            {/* Desktop cards */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {steps.map((step) => (
                <div
                  key={`d-${step.id}`}
                  className={`absolute flex flex-col w-64 ${step.align} -translate-y-1/2`}
                  style={{ top: step.top, left: step.left }}
                >
                  <div className="rounded-2xl border border-card-border bg-section-bg p-5 backdrop-blur-xl pointer-events-auto hover:border-card-border-hover transition duration-300 shadow-lg">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                      Step 0{step.id}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-text-primary leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-tertiary">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── MOBILE ──────────────────────────────────────────────── */}
          <div className="md:hidden absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 300 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d={MOB_PATH}
                stroke="var(--divider)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <motion.path
                d={MOB_PATH}
                stroke="url(#gold-grad-mob)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
                className="drop-shadow-[0_0_14px_rgba(233,201,98,0.4)]"
              />
              <defs>
                <linearGradient
                  id="gold-grad-mob"
                  x1="0" y1="0" x2="0" y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#F6E7A1" />
                  <stop offset="50%" stopColor="#E9C962" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mobile cards */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {steps.map((step) => (
                <div
                  key={`m-${step.id}`}
                  className={`absolute flex flex-col w-36 ${step.mAlign} -translate-y-1/2`}
                  style={{ top: step.mTop, left: step.mLeft }}
                >
                  <div className="rounded-xl border border-gold-accent-border bg-section-bg p-3 backdrop-blur-md pointer-events-auto shadow-xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-brand-gold">
                      Step 0{step.id}
                    </p>
                    <h3 className="mt-1 text-[13px] font-semibold text-text-primary leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-[10px] leading-snug text-text-tertiary">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
