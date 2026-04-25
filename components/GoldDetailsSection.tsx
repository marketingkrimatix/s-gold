'use client';

import { motion } from "framer-motion";

const goldTypes = [
  {
    title: "Gold Jewellery",
    items: ["Necklaces", "Chains", "Mangalsutras", "Bangles", "Bracelets", "Rings", "Toe rings", "Earrings", "Nose pins", "Anklets"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Antique & Inherited",
    items: ["Vaddanam (waist belt)", "Temple jewellery", "Vintage ornaments from any era"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Broken or Damaged",
    items: ["Bent chains", "Broken bangles", "Damaged earrings"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15.146C2.57 16.479 3.532 18 5.072 18z" />
      </svg>
    )
  },
  {
    title: "Coins and Bars",
    items: ["Gold coins", "Gold bars", "From any bank or jeweller"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function GoldDetailsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-5%] top-[20%] h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl opacity-60" />
        <div className="absolute right-[-5%] bottom-[20%] h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl opacity-60" />
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left Column: What Types of Gold We Buy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold mb-4">
              Our Acceptance
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              What Types of Gold Do We Buy at SGold?
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary">
              SGold buys all types of gold in any condition — you do not need
              hallmarking, original bills, or perfect ornaments to get a fair price.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {goldTypes.map((type) => (
              <div key={type.title} className="group rounded-2xl border border-card-border bg-card-bg p-6 hover-lift">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-accent-bg text-brand-gold-soft border border-gold-accent-border">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{type.title}</h3>
                <ul className={`grid ${type.items.length > 5 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-2`}>
                  {type.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-text-secondary leading-tight">
                      <div className="h-1 w-1 shrink-0 rounded-full bg-brand-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gold-accent-border bg-gold-accent-bg p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-soft mb-2">Purity Accepted</p>
              <p className="text-sm font-medium text-text-primary">18K, 20K, 22K (916 hallmark), and 24K gold</p>
            </div>
            <div className="rounded-2xl border border-gold-accent-border bg-gold-accent-bg p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-soft mb-2">Source Any</p>
              <p className="text-sm font-medium text-text-primary">Gold bought from any jeweller in India or abroad</p>
            </div>
          </div>

          <p className="mt-8 text-sm italic text-text-tertiary border-l-2 border-brand-gold/30 pl-4">
            We evaluate every piece for its gold content — purity and weight — not its appearance or condition. A broken ornament gets the exact same rate as a perfect one.
          </p>
        </motion.div>

        {/* Right Column: Sell Without Bill */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="relative rounded-[2.5rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from via-gradient-section-via to-gradient-section-to p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-accent-bg px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-soft border border-gold-accent-border mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-soft opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-soft"></span>
                </span>
                Confirmed
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl mb-6">
                Can You Sell Gold Without the Original Purchase Bill?
              </h2>

              <div className="mb-8">
                <p className="text-xl font-medium text-brand-gold-soft mb-4">
                  Yes — you can sell your gold at SGold without the original purchase invoice or bill.
                </p>
                <p className="text-base leading-7 text-text-secondary">
                  This is one of the most common concerns customers have, and the answer is straightforward. Our process is designed to be accessible and transparent regardless of paperwork.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card-bg border border-card-border text-brand-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">Documents Needed</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      All you need is a valid government-issued photo ID — Aadhaar Card, PAN Card, or Passport.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card-bg border border-card-border text-brand-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">XRF Purity Test</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Our XRF purity test determines the exact gold content independently of any paperwork, ensuring accuracy and fairness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-sm leading-relaxed text-text-secondary">
                  <span className="text-brand-gold-soft font-semibold italic">Pro Tip:</span> If you do have the original purchase invoice, bringing it can sometimes help us provide a slightly better valuation — but it is never a requirement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
