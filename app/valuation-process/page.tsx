import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ValuationProcess() {
  const steps = [
    {
      title: "Scientific Testing",
      desc: "We use high-precision XRF testing machines to check gold purity without any damage or melting. You see the results on the screen in seconds.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Live Market Indexing",
      desc: "Our valuation is synced with global live market rates. We don't use arbitrary shop rates; we use the real value of gold in real-time.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Transparent Math",
      desc: "Total Weight - Impurity Deduction - Nominal Service Fee = Final Quote. Every calculation is explained to you before we proceed.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />

      {/* Hero */}
      <section className="relative px-6 py-16 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-3xl">
          <span className="shimmer-gold rounded-full border border-gold-accent-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-gold-soft">
            Trust Protocol
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
            How We Value <br />
            <span className="bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] bg-clip-text text-transparent">Your Assets</span>
          </h1>
          <p className="mt-6 text-xl text-text-secondary leading-8">
            At SGold, valuation isn't a secret. It's a science. We combine technology,
            market data, and complete transparency to ensure you get the absolute best price.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="hover-lift group rounded-[2.5rem] border border-card-border bg-card-bg p-10 backdrop-blur-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-accent-bg text-brand-gold-soft mb-8 group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h2>
              <p className="text-text-secondary leading-7">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">XRF Technology vs. Traditional Methods</h2>
            <p className="mt-6 text-text-secondary leading-8">
              Most local buyers still use the "Acid Test" or "Touchstone" method, which is subjective and can damage your jewellery. At SGold, we believe in scientific precision.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl border border-card-border bg-card-bg/50">
                <div className="text-red-400 text-xl">✕</div>
                <div>
                  <h4 className="font-bold text-text-primary">Traditional Acid Test</h4>
                  <p className="text-sm text-text-tertiary">Requires scratching the gold on a stone, causing minor weight loss and subjective results based on the buyer's eye.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl border border-brand-gold/20 bg-brand-gold/5">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <h4 className="font-bold text-brand-gold-soft">SGold XRF Analysis</h4>
                  <p className="text-sm text-text-tertiary">Non-destructive X-Ray Fluorescence provides a printed report of every metal present (Silver, Copper, etc.) alongside the exact gold percentage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-card-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent z-10" />
            <div className="aspect-square bg-[#0a0510] flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🔬</div>
                <p className="text-brand-gold font-mono text-sm tracking-tighter uppercase">High Precision Spectrum Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Math Section */}
      <section className="bg-section-bg py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[3rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from to-gradient-section-to p-8 md:p-16 shadow-2xl">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">The Transparency Math</h2>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl border border-card-border bg-card-bg">
                <div>
                  <h3 className="text-xl font-bold text-brand-gold-soft">01. Gross Weight</h3>
                  <p className="text-text-secondary mt-1">We weigh your ornaments on high-precision scales calibrated daily.</p>
                </div>
                <div className="text-3xl font-bold text-text-primary">+ Weight</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl border border-card-border bg-card-bg">
                <div>
                  <h3 className="text-xl font-bold text-red-400">02. Impurity Deduction</h3>
                  <p className="text-text-secondary mt-1">XRF testing determines the exact gold content. Stones/Beads are excluded.</p>
                </div>
                <div className="text-3xl font-bold text-red-400">- Purity Loss</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl border border-brand-gold/30 bg-brand-gold/5">
                <div>
                  <h3 className="text-xl font-bold text-brand-gold">03. Final Valuation</h3>
                  <p className="text-text-secondary mt-1">Net Gold Weight × Live Market Price = Your Payout.</p>
                </div>
                <div className="text-3xl font-bold text-brand-gold">= Your Cash</div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl border border-dashed border-gold-accent-border text-center">
              <h4 className="text-lg font-bold text-text-primary">Our Valuation Guarantee</h4>
              <p className="mt-2 text-sm text-text-tertiary max-w-xl mx-auto">
                If you find a better documented quote for the same purity and weight on the same day, we promise to match or beat it. We are committed to being the highest payer in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
