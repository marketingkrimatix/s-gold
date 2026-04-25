'use client';

import { motion } from "framer-motion";

const purities = [
  {
    karat: "24K",
    percentage: "99.9% pure",
    desc: "The purest form of gold. Usually found in gold bars and coins. Very soft — rarely used in jewellery.",
    color: "from-[#F6E7A1] to-[#E9C962]"
  },
  {
    karat: "22K",
    percentage: "91.6% pure (916 Hallmark)",
    desc: "The most common purity for jewellery in India. The \"916\" hallmark means 91.6% of the ornament is pure gold. Most Indian wedding jewellery is 22K.",
    color: "from-[#E9C962] to-[#D4AF37]"
  },
  {
    karat: "20K",
    percentage: "83.3% pure",
    desc: "Less common in Hyderabad but accepted at SGold.",
    color: "from-[#D4AF37] to-[#B58A28]"
  },
  {
    karat: "18K",
    percentage: "75.0% pure",
    desc: "Popular in designer and studded jewellery. Contains 75% gold and 25% other metals.",
    color: "from-[#B58A28] to-[#8F6317]"
  }
];

export default function GoldPurityAndValue() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Purity Explainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            How Gold Purity Affects Your Payout — 18K, 22K & 24K Explained
          </h2>
          <p className="mt-6 text-base leading-8 text-text-secondary">
            Gold purity is measured in karats (K). The higher the karat, the more pure gold your
            ornament contains — and the higher the value per gram.
          </p>

          <div className="mt-10 space-y-4">
            {purities.map((p) => (
              <div key={p.karat} className="group relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-5 transition-all hover:border-card-border-hover">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-lg font-bold text-[#330164] shadow-lg`}>
                    {p.karat}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{p.karat} Gold <span className="text-brand-gold-soft font-medium text-sm ml-2">({p.percentage})</span></h3>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gold-accent-border bg-gold-accent-bg p-5 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-text-secondary">
              At SGold, we test your exact purity using <span className="text-brand-gold-soft font-semibold">XRF technology</span> and pay you based on the actual gold content — not an estimated or rounded-down figure.
            </p>
          </div>
        </motion.div>

        {/* Value Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="rounded-[2.5rem] border border-card-border bg-section-bg p-8 lg:p-12 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl mb-8">
              How Does SGold Calculate Your Gold's Value?
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-base text-text-secondary mb-6">
                  The price we offer for your gold is based on a simple, transparent formula:
                </p>
                <div className="relative rounded-2xl border border-brand-gold/30 bg-brand-gold/5 p-6 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-brand-gold-soft tracking-tight">
                    Payout = Net Gold Weight (grams) <br className="sm:hidden" /> × Live MCX Rate for Your Purity
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-text-secondary">
                  The <span className="text-text-primary font-semibold">MCX (Multi Commodity Exchange of India)</span> is the official exchange that sets the gold spot price in India — updated throughout the trading day. We use the MCX rate at the time of your visit, not a fixed rate set in the morning.
                </p>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-3">Example Calculation</h4>
                  <p className="text-sm leading-7 text-text-secondary">
                    If you bring a <span className="text-text-primary">10-gram 22K (916 hallmark)</span> gold necklace, the net gold content is <span className="text-brand-gold-soft font-bold">9.16 grams</span> (10g × 91.6%).
                  </p>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    If the live MCX rate for 22K gold is <span className="text-text-primary font-semibold">₹7,200 per gram</span>, your payout is:
                  </p>
                  <p className="mt-4 text-2xl font-bold text-brand-gold-soft">
                    ₹65,952
                  </p>
                  <p className="mt-2 text-xs text-text-tertiary italic">
                    *Calculation shown on screen before any KYC formalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
