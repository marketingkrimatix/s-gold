import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ManikondaLocationPage() {
  const steps = [
    { title: "Visit a Branch", desc: "Visit our branch in Manikonda or nearby areas with your gold." },
    { title: "Precision Testing", desc: "Get purity checked using advanced testing methods right in front of you." },
    { title: "Live Rate Evaluation", desc: "Receive a valuation based on real-time market rates for maximum value." },
    { title: "Instant Payout", desc: "Get instant payment via Cash, UPI, or Bank Transfer within minutes." }
  ];

  const services = [
    "Old Gold Jewellery Buyers",
    "Pledged Gold Release Support",
    "Scrap Gold Buyers",
    "Gold Coin Buyers",
    "Transparent Evaluation"
  ];

  const nearbyAreas = ["Puppalaguda", "Lanco Hills", "Alkapur Township", "Narsingi", "Gachibowli"];

  const faqs = [
    {
      question: "Where can I sell gold near Puppalaguda in Manikonda?",
      answer: "You can visit SGold for a quick evaluation and instant payment. We serve customers from Puppalaguda, Lanco Hills, and Alkapur Township."
    },
    {
      question: "Is Manikonda a good area to sell gold for IT professionals?",
      answer: "Yes, Manikonda is conveniently located near Gachibowli and the Financial District. Professionals prefer our fast and transparent process that fits their busy schedules."
    },
    {
      question: "Can I sell gold in Manikonda to manage monthly expenses or EMIs?",
      answer: "Absolutely. Selling unused gold is a smart way to access immediate funds without the burden of high-interest loans or repayment stress."
    },
    {
      question: "Can I sell gold near Lanco Hills without a bill?",
      answer: "Yes, no purchase bill is required. You only need a valid ID (Aadhaar, PAN, or Passport) for KYC verification."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Locations: Manikonda
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Sell Gold in Manikonda – <br />
            <span className="bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] bg-clip-text text-transparent">
              Instant Cash Near Puppalaguda & Lanco Hills.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Looking to sell gold in Manikonda without delays? SGold offers a fast, secure, and transparent way to convert your gold into instant cash, trusted by residents across IT hubs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="tel:+919996909999" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3.5 font-semibold text-[#330164] shadow-lg transition hover:-translate-y-1">
              Check Live Rate
            </Link>
            <Link href="https://wa.me/919996909999" className="inline-flex rounded-full border border-card-border bg-card-bg px-8 py-3.5 font-semibold text-text-primary transition hover:bg-card-bg-hover">
              WhatsApp for Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Why People Prefer Selling Gold in Manikonda</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Manikonda is a busy residential and IT-driven locality. Many residents choose to sell gold for immediate financial flexibility, avoiding the interest burden of pledging.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Managing EMIs and monthly expenses",
                "Handling urgent financial needs",
                "Funding lifestyle upgrades",
                "Converting unused jewellery into liquid cash"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2.5rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <h3 className="text-2xl font-bold text-text-primary">Why Manikonda Chooses SGold</h3>
            <div className="mt-8 space-y-6">
              {[
                "No interest burden or repayment stress",
                "Immediate access to cash within minutes",
                "Better value than loan settlements",
                "Ideal for IT professionals & families",
                "Serving Puppalaguda & Alkapur Township"
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-brand-gold font-bold">0{idx + 1}</span>
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">Our Manikonda Branches</h2>
            <p className="mt-4 text-text-secondary">Serving you at two convenient locations.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-card-border bg-card-bg p-8">
              <h3 className="text-xl font-bold text-brand-gold">📍 Branch 1 – O U Colony, Shaikpet</h3>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                1st Floor, Shop No. 8, 8-1-284/OU/144, O U Colony, Shaikpet, Manikonda, Hyderabad, Telangana – 500008 <br />
                <strong>Landmark:</strong> Opposite Trusmile Dental Care
              </p>
            </div>
            <div className="rounded-3xl border border-card-border bg-card-bg p-8">
              <h3 className="text-xl font-bold text-brand-gold">📍 Branch 2 – Lanco Hills Road</h3>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                Flat No. 402, 4th Floor, BRS Plaza, Hanuman Nagar, Lanco Hills Road, Manikonda, Hyderabad, Telangana – 500089 <br />
                <strong>Landmark:</strong> Near Lanco Hills Road / Hanuman Nagar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">Simple 4-Step Process</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative rounded-3xl border border-card-border bg-card-bg p-8 transition hover:bg-card-bg-hover">
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] to-[#D4AF37] text-xl font-bold text-[#330164] shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-text-secondary text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {nearbyAreas.map(loc => (
                <div key={loc} className="rounded-xl border border-card-border bg-surface p-4 text-center">
                  <p className="text-sm font-medium text-text-secondary">{loc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-text-primary">Serving Manikonda & Nearby</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our branches are conveniently reachable from Puppalaguda main road, Lanco Hills residential area, Alkapur Township, Narsingi junction, and the Gachibowli IT corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">FAQs – Selling Gold in Manikonda</h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-card-border bg-card-bg p-6">
              <h3 className="font-semibold text-text-primary">{faq.question}</h3>
              <p className="mt-3 text-sm text-text-tertiary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
