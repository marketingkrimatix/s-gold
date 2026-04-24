import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ChecklistSection from "@/components/ChecklistSection";

const ReleasePledgedGoldFaqs = [
  {
    question: "What is pledged gold release service?",
    answer: "Our pledged gold release service helps you clear your outstanding loan with banks or pawnbrokers, retrieve your gold, and receive the remaining value after evaluation."
  },
  {
    question: "How does the pledged gold release process work?",
    answer: "The process includes sharing your pledge details, a joint visit with our executive, clearing your dues, retrieving your gold, and final evaluation with instant settlement."
  },
  {
    question: "What details do I need to provide?",
    answer: "You need to share your pledge receipt details, total loan amount, and the location of the bank or pawnbroker."
  },
  {
    question: "Will someone assist me during the process?",
    answer: "Yes, our executive will accompany you to the bank or financier to ensure a smooth and secure release process."
  },
  {
    question: "Do you directly pay the loan amount?",
    answer: "Yes, we clear your pending dues directly with the bank or pawnbroker so your gold can be released instantly."
  },
  {
    question: "How do I receive the remaining value?",
    answer: "After evaluation, we deduct the loan amount paid and provide you with the remaining value as instant cash or preferred payment method."
  },
  {
    question: "Is the process safe and transparent?",
    answer: "Yes, the entire process is secure, transparent, and handled professionally to ensure your trust and convenience."
  }
]

export default function ReleasePledgedGoldPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="relative overflow-hidden px-6 py-20 lg:px-8">
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
      
      <section className="relative overflow-hidden bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Release Pledged Gold & Buy</h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-text-secondary">
                <p>
                  Do you have any gold pledged at a bank, a pawnshop or pawnbroker? Are you searching for jewellers 
                  that will release pledged gold and buy it back for cash? 
                </p>
                <p>
                  S Gold is the best jewellery buyer in Hyderabad that can help you to release pledged gold and 
                  offer money for gold. You need not worry about anything during this process. We will take care 
                  of everything from releasing your pledged gold to offering you the best price for your gold.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-card-border bg-card-bg p-8 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:p-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Customer-First Approach</h3>
                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    S Gold attaches extreme importance towards customer gratification and this helps us in 
                    providing various gold related services to our customers.
                  </p>
                </div>
                
                <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6">
                  <p className="text-base leading-7 text-text-primary">
                    We are one of the few registered outfits in Hyderabad offering the 
                    <span className="font-semibold text-brand-gold"> Release of Pledged Gold</span> and 
                    purchase of gold in Hyderabad by helping customers release their gold. 
                    Moreover, we are also among the few who buy gold after its release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChecklistSection />

      <FAQSection faqs={ReleasePledgedGoldFaqs} />

      <Footer />
    </main>
  );
}
