import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DilshuknagarLocationPage() {
  const steps = [
    { title: "Walk-in Visit", desc: "Visit our Dilsukhnagar branch with your gold jewellery and valid ID proof." },
    { title: "Transparent Evaluation", desc: "Get your gold evaluated transparently for purity and weight in full view." },
    { title: "Live Market Pricing", desc: "Receive a quote based on current live market rates without guesswork." },
    { title: "Instant Payout", desc: "Choose between instant cash or same-day bank transfer (IMPS/NEFT/RTGS)." }
  ];

  const services = [
    "Old Gold Jewellery Buyers",
    "Pledged Gold Release Support",
    "Scrap Gold Purchasing",
    "Same-day Bank Transfers",
    "Honest Purity Testing"
  ];

  const nearbyAreas = ["Chaitanyapuri", "Kothapet", "Moosarambagh", "Saidabad", "Malakpet"];

  const faqs = [
    {
      question: "What is today’s gold rate in Dilsukhnagar?",
      answer: "Gold prices fluctuate based on market conditions. At S-Gold Dilsukhnagar, gold is evaluated using the live market rate at the exact time of testing."
    },
    {
      question: "Can I sell broken or old gold jewellery at this branch?",
      answer: "Yes, we buy all types of gold including necklaces, bangles, rings, and broken or damaged gold items."
    },
    {
      question: "Is instant cash available at S-Gold Dilsukhnagar?",
      answer: "Yes, we provide instant cash for your gold (within government limits) or same-day bank transfers for your convenience."
    },
    {
      question: "Do I need bills to sell gold?",
      answer: "No, purchase bills are not mandatory. A valid government-issued ID proof is sufficient for the transaction."
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
            Locations: Dilshuknagar
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Sell Gold in Dilshuknagar, Hyderabad – <br />
            <span className="bg-gradient-to-r from-[#F8F5EF] via-[#F6E7A1] to-[#D4AF37] bg-clip-text text-transparent">
              Get Instant Cash at Best Rates.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Looking to sell gold in Dilshuknagar? S-Gold is a trusted gold-buying branch offering a transparent, secure, and hassle-free experience in East Hyderabad's busiest hub.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="tel:+919996909999" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3.5 font-semibold text-[#330164] shadow-lg transition hover:-translate-y-1">
              Call Now for Rate
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
            <h2 className="text-3xl font-bold text-text-primary">Trusted Gold Buyers in Dilsukhnagar</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Dilsukhnagar is the commercial heart of East Hyderabad. Residents here prefer dealing with established buyers who offer honest pricing and transparent valuation without pressure tactics.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Ethical gold-buying practices",
                "Transparent purity testing in your view",
                "Live market-based pricing",
                "Immediate same-day payout options"
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
            <h3 className="text-2xl font-bold text-text-primary">Dilsukhnagar Branch Highlights</h3>
            <div className="mt-8 space-y-6">
              {[
                "Prime location near Dilsukhnagar Metro",
                "Excellent road & metro connectivity",
                "Professional and experienced valuation team",
                "Serving Chaitanyapuri, Kothapet & Saidabad",
                "Trusted brand with multiple city branches"
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

      {/* Services Section */}
      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">Our Core Services</h2>
            <p className="mt-4 text-text-secondary">Complete solutions for selling your precious assets.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-card-border bg-card-bg p-6 text-center transition hover:bg-card-bg-hover">
                <p className="text-sm font-semibold text-text-primary">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">How to Sell Gold in Dilsukhnagar</h2>
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
            <h2 className="text-3xl font-bold text-text-primary">Serving East Hyderabad</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our branch is a convenient destination for customers from Chaitanyapuri, Kothapet, Moosarambagh, Saidabad, Malakpet, and nearby areas, ensuring they can sell gold safely and confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[3rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Visit S-Gold Dilsukhnagar Today</h2>
              <p className="mt-4 text-lg text-text-secondary">East Hyderabad's most trusted gold buying destination.</p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Address</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                      Pillar no 4-102, 1st Floor, Sathya Sadhan, Durga Nagar, Krishna Nagar, Dilshuknagar, Hyderabad, Telangana 500060. <br />
                      <strong>Landmark:</strong> Near Dilsukhnagar Metro Station
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Call Us</p>
                      <p className="text-sm font-semibold text-text-primary">+91 99969 09999</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Email</p>
                      <p className="text-sm font-semibold text-text-primary">support@s-gold.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] overflow-hidden rounded-[2rem] border border-card-border shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567890123456!2d78.5212345!3d17.3712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQwLjQiTiA3OMswMzEnNDAuNCJF!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">FAQs – Selling Gold in Dilsukhnagar</h2>
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
