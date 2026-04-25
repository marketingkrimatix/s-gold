'use client';

import { motion } from "framer-motion";

const steps = [
  {
    title: "Share Pledge Receipt Details",
    desc: "Contact us via phone or WhatsApp with your original pledge receipt, total outstanding loan amount, lender name, and branch location."
  },
  {
    title: "Same-Day Appointment",
    desc: "We confirm the appointment and the release amount. Our executive is assigned to your case immediately."
  },
  {
    title: "Joint Visit to the Lender",
    desc: "Our representative meets you at the bank or pawnbroker — SBI, HDFC, Muthoot, Manappuram, or any registered lender in Hyderabad."
  },
  {
    title: "Loan Clearance",
    desc: "We pay the outstanding loan + any accrued interest directly to the lender on your behalf. You do not need to bring any cash."
  },
  {
    title: "Gold Release",
    desc: "Your pledged gold is returned by the lender. Our representative takes custody and brings it back to the nearest SGold branch."
  },
  {
    title: "XRF Purity Test",
    desc: "We test your gold's exact purity using our German XRF machine — right in front of you."
  },
  {
    title: "Final Offer",
    desc: "We calculate the current market value and present a detailed breakdown — loan amount paid + balance owed to you."
  },
  {
    title: "Instant Payment",
    desc: "You receive the balance via cash, UPI, RTGS, or IMPS before you leave the branch."
  }
];

export default function PledgeReleaseProcess() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold mb-4">
          Pledge Release
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          How SGold Releases Your Pledged Gold — Step by Step
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl border border-card-border bg-card-bg p-6 hover-lift"
          >
            <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F6E7A1] to-[#D4AF37] text-sm font-bold text-[#330164] shadow-xl border-4 border-background">
              {index + 1}
            </div>

            <h3 className="mt-4 text-lg font-bold text-text-primary mb-3 leading-tight group-hover:text-brand-gold-soft transition-colors">
              {step.title}
            </h3>
            <p className="text-sm leading-6 text-text-secondary">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border border-gold-accent-border bg-gold-accent-bg p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card-bg text-brand-gold-soft">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-text-primary leading-relaxed text-center sm:text-left">
            We handle the complete paperwork and coordination with the bank. Our goal is to make the release process as smooth and stress-free as possible for you.
          </p>
        </div>
      </div>
    </section>
  );
}
