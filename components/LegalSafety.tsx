'use client';

import { motion } from "framer-motion";

const legalPoints = [
  {
    title: "Legal Compliance",
    desc: "Every transaction at SGold follows the KYC (Know Your Customer) guidelines mandated by the Government of India. We collect valid ID proof from every customer and issue a printed bill for every sale — creating a full paper trail for your records."
  },
  {
    title: "No Tax on Gold You Sell",
    desc: "As a seller, you are not required to pay GST when selling gold to a registered buyer. Capital gains tax may apply in some cases for investment-grade gold held for long periods — consult a tax advisor if you are selling gold bars or coins of significant value."
  },
  {
    title: "Your Ornaments are Safe",
    desc: "We use XRF testing — a completely non-destructive method. Your ornaments are handled only by our trained staff, never placed in acid, never melted, and returned to you undamaged if you decline our offer."
  },
  {
    title: "Privacy Assured",
    desc: "Every transaction is strictly confidential. Your personal details and transaction value are never shared with any third party."
  }
];

export default function LegalSafety() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="rounded-[3rem] border border-card-border bg-section-bg p-8 lg:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold mb-4">
            Security & Legitimacy
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl mb-6">
            Is It Safe and Legal to Sell Gold in Hyderabad?
          </h2>
          <p className="text-lg text-text-secondary">
            Yes — selling gold in India is completely legal and safe when done through a registered, KYC-compliant buyer like <span className="text-brand-gold-soft font-bold">SGold</span>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          {legalPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-gold transition-colors">{point.title}</h3>
              </div>
              <p className="text-sm leading-7 text-text-secondary border-l border-white/5 pl-4 ml-0.5">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-accent-bg border border-gold-accent-border text-brand-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">100% Secure Process</p>
              <p className="text-xs text-text-tertiary">Registered & Verified Gold Buyers</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-auto px-4 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-tertiary uppercase tracking-widest">
              GST Compliant
            </div>
            <div className="flex h-10 w-auto px-4 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-tertiary uppercase tracking-widest">
              KYC Mandatory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
