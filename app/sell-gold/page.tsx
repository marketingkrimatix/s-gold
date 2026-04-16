import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldCalculator from "@/components/GoldCalculator";

export default function SellGoldPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="relative px-6 py-20 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-5%] top-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-[100px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
                Sell Gold
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
                Get the best possible <br />
                rate for your old gold.
              </h1>
              <p className="mt-6 text-lg text-text-secondary">
                Whether it's unused jewellery, broken ornaments, or gold coins, we evaluate your assets with precision using modern XRF technology and offer instant payout.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#calculator" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-6 py-3 font-semibold text-[#330164] transition hover:-translate-y-1">
                  Check Valuation
                </a>
              </div>
            </div>
            <div id="calculator" className="lg:pl-10">
              <GoldCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
         <div className="mb-12 text-center">
             <h2 className="text-3xl font-semibold text-text-primary">How to sell your gold</h2>
             <p className="mt-4 text-text-tertiary">A straightforward, transparent 3-step process.</p>
         </div>

         <div className="grid gap-6 md:grid-cols-3">
             {[
               { step: "01", title: "Visit a Branch", desc: "Bring your gold and a valid government ID to any of our secure branches." },
               { step: "02", title: "Live Valuation", desc: "We test the gold right in front of you without melting or damaging it." },
               { step: "03", title: "Instant Payout", desc: "Accept our offer based on live market rates and receive immediate payment." }
             ].map(item => (
                <div key={item.step} className="rounded-2xl border border-card-border bg-card-bg p-8 transition hover:bg-card-bg-hover">
                   <p className="text-4xl font-bold text-brand-gold/20">{item.step}</p>
                   <h3 className="mt-4 text-xl font-semibold text-text-primary">{item.title}</h3>
                   <p className="mt-2 text-sm text-text-tertiary">{item.desc}</p>
                </div>
             ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}
