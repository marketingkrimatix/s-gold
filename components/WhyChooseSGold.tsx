'use client';

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Transparent XRF Testing",
    desc: "Every evaluation is done using certified German-made XRF machines, right in front of you. We never melt your gold, remove beads, or damage ornaments during testing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Highest Market Rate",
    desc: "Our gold pricing is directly linked to live MCX and international gold rates. We do not apply hidden deductions or arbitrary cuts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Instant Payment",
    desc: "Cash, UPI, RTGS, or IMPS — whichever you prefer. Most customers walk out with their payment in under 15 minutes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Privacy & Security",
    desc: "Each transaction is handled with complete confidentiality. Your gold and personal information are always secure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "No Damage to Jewellery",
    desc: "We do not remove beads, stones, or enamel work from your ornaments during evaluation. What you bring in is what you get back if you decline.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Free Consultation",
    desc: "Unsure whether to sell or release? Call us or walk in for a free, no-obligation evaluation and expert advice.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  }
];

export default function WhyChooseSGold() {
  return (
    <section id="why-s-gold" className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-primary/5 blur-[120px] opacity-50" />
      </div>

      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold mb-4">
          The SGold Advantage
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Why Thousands of Hyderabad Customers Choose SGold
        </h2>
        <p className="mt-6 text-base leading-8 text-text-secondary">
          We combine advanced German technology with a commitment to absolute transparency, ensuring you get the highest possible value for your gold.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-[2rem] border border-card-border bg-gradient-to-b from-card-bg to-card-bg/60 p-8 hover-lift backdrop-blur-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-accent-bg text-brand-gold-soft group-hover:bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] group-hover:text-[#330164] transition-all duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">{benefit.title}</h3>
            <p className="text-sm leading-7 text-text-secondary">
              {benefit.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
