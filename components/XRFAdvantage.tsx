'use client';

import { motion } from "framer-motion";

export default function XRFAdvantage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="rounded-[3rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from to-gradient-section-to p-8 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold mb-4">
            Advanced Valuation
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Why We Use XRF Testing — and Why It Matters for You
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Traditional Method */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Traditional Acid Test</h3>
            </div>

            <p className="text-sm leading-7 text-text-secondary">
              Most local gold buyers in Hyderabad use the acid test to determine purity. The acid test
              scratches your ornament against a testing stone and applies chemicals — it is partially
              destructive, prone to human error, and accurate only to within 2–3 karats (roughly ±10%
              error on a 22K piece).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Destructive', 'High Error Margin', 'Chemical-based'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 text-[10px] uppercase font-bold text-red-400/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SGold Method */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-brand-gold/20 bg-brand-gold/5 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-brand-gold text-[#330164] text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-lg">
              SGold Standard
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">German XRF Technology</h3>
            </div>

            <p className="text-sm leading-7 text-text-secondary">
              SGold uses XRF (X-Ray Fluorescence) technology — the same standard used by banks,
              refineries, and certified assayers worldwide. XRF analyses the exact elemental
              composition of your gold without touching, scratching, or chemically treating the ornament.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-brand-gold/10 pt-6">
              <div className="text-center">
                <p className="text-lg font-bold text-brand-gold-soft">99.9%</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-brand-gold-soft">&lt; 30s</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Time</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-brand-gold-soft">ZERO</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Damage</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-text-secondary font-medium italic">
            The result is a number you can verify — and a price you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
