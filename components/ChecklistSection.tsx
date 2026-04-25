"use client";

import { motion } from "framer-motion";

const checklistItems = [
  {
    title: "Original Identity Proof",
    desc: "Aadhaar Card, PAN Card, or Passport (Government Issued ID).",
    icon: "🪪"
  },
  {
    title: "Address Proof",
    desc: "Voter ID, Electricity Bill, or Gas Connection Bill.",
    icon: "🏠"
  },
  {
    title: "Original Invoice",
    desc: "Original gold purchase bill if available (helps in better valuation).",
    icon: "🧾"
  },
  {
    title: "Bank Details",
    desc: "Bank Passbook or Cancelled Cheque for instant RTGS/IMPS transfer.",
    icon: "🏦"
  }
];

export default function ChecklistSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Preparation</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">What to Bring With You</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            To ensure a smooth and instant transaction, please carry the following documents
            when you visit our SGold branch.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {checklistItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl border border-card-border bg-card-bg p-6 hover-lift"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold-accent-border bg-gold-accent-bg p-6 text-center">
          <p className="text-sm font-medium text-text-primary">
            💡 <span className="text-brand-gold-soft">Pro Tip:</span> Bringing the original purchase invoice can often help us provide an even better valuation for your gold.
          </p>
        </div>
      </div>
    </section>
  );
}
