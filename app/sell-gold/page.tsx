import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldCalculator from "@/components/GoldCalculator";
import FAQSection from "@/components/FAQSection";

const SellGoldFaqs = [
  {
    question: "What types of gold can I sell?",
    answer: "You can sell unused jewellery, broken ornaments, and gold coins. We evaluate all types of gold assets with precision using modern XRF technology."
  },
  {
    question: "How do you determine the value of my gold?",
    answer: "We use advanced XRF technology to accurately test the purity and value of your gold based on current live market rates."
  },
  {
    question: "Can I estimate my gold value before selling?",
    answer: "Yes, you can use our gold calculator by entering the weight in grams and selecting the purity (such as 22K) to get an estimated value."
  },
  {
    question: "What is the process to sell my gold?",
    answer: "The process is simple: visit a branch with your gold and ID, get a live valuation in front of you, and receive instant payment after accepting the offer."
  },
  {
    question: "Do I need to visit a branch to sell my gold?",
    answer: "Yes, you need to visit one of our secure branches with your gold and a valid government-issued ID for verification and processing."
  },
  {
    question: "Will my gold be damaged during testing?",
    answer: "No, we use non-destructive XRF testing methods, so your gold is not melted or damaged during evaluation."
  },
  {
    question: "How long does the valuation process take?",
    answer: "The valuation is done instantly in front of you, ensuring a quick and transparent process."
  },
  {
    question: "How do I receive my payment?",
    answer: "Once you accept the offer based on live market rates, you receive immediate payment through secure methods."
  }
];

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

      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Sell Gold</h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-text-secondary">
                <p>
                  If you have gold jewellery that you do not use anymore you can sell the same for instant cash at S Gold. 
                  We are known as the best gold buyer in Hyderabad & we offer the best price in the market. 
                  Gold is an asset that comes handy in times of financial crises where you can sell your jewellery 
                  to fulfill your financial requirements.
                </p>
                <p>
                  Apart from this, you may want to sell old jewellery to replace it with new, trending designer jewellery – 
                  its the perfect way to upgrade! Sell your old gold at S Gold and convert it into cash in hand, instantly. 
                  At S Gold, we guarantee fair evaluation and pricing of your gold as we are the best place to take gold for cash.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">Get Cash for Gold</h2>
              <div className="mt-6 space-y-6 text-base leading-7 text-text-secondary">
                <p>
                  In Hyderabad, there are many outlets that buy and sell gold jewelry for cash, but S Gold sets the standard 
                  for offering the best prices for selling gold jewelry, backed by transparency and trust built over the years. 
                  We are a one-stop solution for all your gold and funds-against-gold related queries.
                </p>
                <p>
                  S Gold boasts a simple, transparent, and clear process for evaluating your gold and offers you the best value in return. 
                  The most sensible way to sell jewellery is to calculate how much amount you take home after the sale. 
                  If you compare prices across competitors, you will find that our rates are among the best in Telangana.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6">
                <h3 className="text-lg font-bold text-brand-gold">Instant Cash for Gold</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Exchange your Jewellery bought from any jeweler & get the best rate in cash instantly.
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-wider text-text-tertiary">
                  *Offer only across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala and North Region *conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<FAQSection faqs={SellGoldFaqs} />

      <Footer />
    </main>
  );
}
