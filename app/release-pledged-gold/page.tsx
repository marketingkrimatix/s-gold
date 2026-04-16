import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReleasePledgedGoldPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="relative px-6 py-20 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-brand-primary-2/30 blur-[120px]" />
        </div>
        
        <div className="relative z-[1] mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Release Pledged Gold
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Struggling with high interest on pledged gold? Release it today.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-tertiary">
            We help you clear your debts with banks or pawnbrokers. We pay the release amount, retrieve your gold, evaluate it fairly, and give you the remaining value in instant cash.
          </p>
          <div className="mt-10 flex justify-center">
             <a href="/contact-us" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3.5 font-semibold text-[#330164] transition hover:-translate-y-1">
               Get Help Releasing Gold
             </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
         <div className="space-y-8 rounded-3xl border border-card-border bg-card-bg p-8 md:p-12">
            {[
              { title: "Share Details", desc: "Let us know the pledge receipt details, total loan amount, and location." },
              { title: "Joint Visit", desc: "Our executive will accompany you to the bank/financier." },
              { title: "We Pay & Release", desc: "We clear your pending dues so your gold is released instantly." },
              { title: "Final Evaluation", desc: "Back at our office, we evaluate the gold and settle the final difference with you." }
            ].map((step, idx) => (
               <div key={idx} className="flex gap-6">
                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] to-[#D4AF37] text-lg font-bold text-[#330164]">
                    {idx + 1}
                 </div>
                 <div>
                    <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-2 text-text-secondary">{step.desc}</p>
                 </div>
               </div>
            ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}
