"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ClipPolygonCTA() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Approximate Jeton-like sampled positions
  const edgeRaw = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36, 0.72, 1],
    [100, 78.96, 64.22, 16.86, 0]
  );

  const tipRaw = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36, 0.72, 1],
    [101, 27.78, 19.58, 4.63, 1]
  );

  // Smooth out scroll jitter
  const edgeY = useSpring(edgeRaw, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const tipY = useSpring(tipRaw, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const clipPath = useMotionTemplate`polygon(
    0% -1%,
    100% -1%,
    100% ${edgeY}%,
    50% ${tipY}%,
    50% ${tipY}%,
    0% ${edgeY}%
  )`;

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {/* Under layer — light themed (stays the same in both modes since it's always visible as the reveal) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,201,98,0.22),transparent_22%),linear-gradient(180deg,#fffaf0_0%,#f7edd1_100%)]">
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="mx-auto max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#9D7A16]">
                  Premium Gold Selling Experience
                </p>

                <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#2A0848] sm:text-5xl lg:text-6xl">
                  Instant value, trusted process, plus you.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5C4767] sm:text-lg">
                  It only takes a few minutes to evaluate your gold, receive a fair quote,
                  and get paid transparently.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#2A0848] px-7 py-3.5 text-sm font-semibold text-[#F8F2DE] shadow-[0_14px_34px_rgba(42,8,72,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#330164]"
                  >
                    Get Instant Quote
                  </Link>

                  <Link
                    href="tel:+919999999999"
                    className="inline-flex items-center justify-center rounded-full border border-[#2A0848]/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#2A0848] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Top overlay — dark themed (always dark purple) */}
          <motion.div
            aria-hidden="true"
            style={{
              clipPath,
              WebkitClipPath: clipPath as any,
              willChange: "clip-path",
            }}
            className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-[#330164]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,201,98,0.18),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(246,231,161,0.10),transparent_24%),linear-gradient(180deg,#330164_0%,#22023f_100%)]" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="mx-auto max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F6E7A1]">
                  Trusted S-Gold Experience
                </p>

                <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Sell gold with a premium finish.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                  Clean valuation, market-linked pricing, and a premium service flow
                  built for clarity and speed.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#2A0848] shadow-[0_14px_38px_rgba(233,201,98,0.28)]">
                    Book a Visit
                  </span>

                  <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur">
                    Find a Branch
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
