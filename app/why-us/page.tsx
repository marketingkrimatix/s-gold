'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsScroll from "@/components/scroll/TestimonialsScroll";

const features = [
  {
    eyebrow: "01",
    title: "Transparent Gold Testing",
    desc: "Every ornament is tested in front of you with clear explanation and zero hidden steps.",
  },
  {
    eyebrow: "02",
    title: "Instant Payment",
    desc: "Accept the offer and receive your payout quickly through cash, UPI, or bank transfer.",
  },
  {
    eyebrow: "03",
    title: "Trusted Local Experience",
    desc: "Designed for Hyderabad customers who want speed, trust, and a premium service flow.",
  },
];

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-text-primary">
      <Header />
      <section id="why-us" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-6 rounded-[2rem] border border-card-border bg-card-bg p-6 backdrop-blur-xl md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-brand-gold">Why S-Gold</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">
              Modern trust, not old-style clutter
            </h2>
          </div>
          <div className="flex items-center text-sm leading-7 text-text-secondary md:col-span-2">
            The experience is designed to feel clear and premium from the first click:
            quick value proposition, visible trust, simple actions, and no confusion.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-gold">
            Core Benefits
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
            Everything customers need to trust the process
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="hover-lift rounded-[1.8rem] border border-card-border bg-gradient-to-b from-card-bg to-card-bg/60 p-6 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-brand-gold">
                {item.eyebrow}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust by the Numbers */}
      <section className="bg-section-bg py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Happy Customers", value: "50K+" },
              { label: "Gold Evaluated", value: "2 Tons+" },
              { label: "Branches", value: "15+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-brand-gold mb-2">{stat.value}</p>
                <p className="text-sm text-text-tertiary uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
         <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2.5rem] border border-card-border bg-card-bg p-10">
               <h3 className="text-2xl font-bold text-text-primary mb-6">Our Payout Excellence</h3>
               <ul className="space-y-4">
                  {[
                    "Spot Cash payments (under regulatory limits)",
                    "Instant IMPS / RTGS for large amounts",
                    "No hidden service charges or commission",
                    "UPI transfers for smaller, quick payouts"
                  ].map(p => (
                    <li key={p} className="flex items-center gap-3 text-text-secondary">
                      <span className="text-brand-gold">→</span> {p}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="rounded-[2.5rem] border border-card-border bg-card-bg p-10">
               <h3 className="text-2xl font-bold text-text-primary mb-6">Unmatched Security</h3>
               <ul className="space-y-4">
                  {[
                    "CCTV monitored testing areas",
                    "Secure, high-grade vault storage",
                    "Fully insured gold handling",
                    "Privacy-first customer verification"
                  ].map(p => (
                    <li key={p} className="flex items-center gap-3 text-text-secondary">
                      <span className="text-brand-gold">→</span> {p}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-card-border bg-section-bg p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">Simple steps, premium flow</h2>

            <div className="mt-8 space-y-4">
              {[
                "Visit your nearest S-Gold branch.",
                "Get purity and weight tested transparently in front of you.",
                "Accept the quote and receive instant payment.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="hover-lift flex gap-4 rounded-2xl border border-card-border bg-card-bg p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] to-[#D4AF37] font-semibold text-[#330164]">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-sm text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="branches" className="rounded-[2rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from to-gradient-section-to p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-gold-soft">Nearby branches</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">Find a branch and walk in</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-text-secondary">
              With multiple branches across Hyderabad, a trusted gold-selling experience is always within reach.
            </p>

            <div className="mt-8 grid gap-4">
              {["Khairatabad", "Karwan", "Kukatpally"].map((branch) => (
                <div
                  key={branch}
                  className="hover-lift flex items-center justify-between rounded-2xl border border-card-border bg-card-bg px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-text-primary">{branch}</p>
                    <p className="text-sm text-text-tertiary">Premium branch experience</p>
                  </div>
                  <span className="rounded-full border border-gold-accent-border bg-gold-accent-bg px-3 py-1 text-xs font-medium text-brand-gold-soft">
                    Open
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsScroll />
      <Footer />
    </main>
  );
}