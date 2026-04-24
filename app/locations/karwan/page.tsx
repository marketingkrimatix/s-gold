import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KarwanLocationPage() {
  const steps = [
    { title: "Ultrasonic Cleaning", desc: "Gold accumulated with dust or oils is cleaned via ultrasonic technology for 100% accurate metal weight." },
    { title: "High-Precision Weighing", desc: "We use ISO-certified scales accurate up to three decimal places. Every milligram counts toward your true value." },
    { title: "XRF Laser Purity Analysis", desc: "Our Karatmeter uses non-destructive X-rays to scan metal, providing a digital report without any scratches." },
    { title: "Net Gold Valuation", desc: "Scientific density-check methods accurately subtract the weight of stones or wax, paying for the net gold content." },
    { title: "Instant Settlement", desc: "Once the final quote is approved, we initiate payment via IMPS, UPI, or Cash (within limits) immediately." }
  ];

  const services = [
    "Old Gold Jewellery Buyers",
    "Scientific Purity Analysis",
    "Digital Weight Verification",
    "Net Gold Valuation",
    "Instant Fund Settlement"
  ];

  const nearbyAreas = ["Mehdipatnam", "Langar Houz", "Golconda", "Attapur", "Rajendra Nagar", "Ziaguda", "Puranapul"];

  const faqs = [
    {
      question: "Where exactly is the S Gold branch in Karwan?",
      answer: "We are located in a prominent area of Karwan, close to the Karwan Post Office and the main commercial road, ensuring safe and easy access."
    },
    {
      question: "Do you buy gold coins and bars?",
      answer: "Yes, we buy gold in all forms including coins and bars at the highest current 24K market rates."
    },
    {
      question: "Is the testing process safe for my jewelry?",
      answer: "Absolutely. Our German XRF laser testing is 100% non-destructive. We never file, scratch, or melt your ornaments for evaluation."
    },
    {
      question: "How do you handle 'Kundan' or 'Temple' jewelry with many stones?",
      answer: "We use professional density-check methods to accurately estimate and subtract stone weight, ensuring you are paid fairly for the net gold content."
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
            Locations: Karwan
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Sell Gold in Karwan – <br />
            <span className="bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] bg-clip-text text-transparent">
              Modern Standards in a Historic Hub.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Bringing transparency to a historic neighborhood. S Gold Karwan offers a professional, corporate environment where your assets are valued with scientific precision.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="tel:+919996909999" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3.5 font-semibold text-[#330164] shadow-lg transition hover:-translate-y-1">
              Check Today's Rate
            </Link>
            <Link href="https://wa.me/919996909999" className="inline-flex rounded-full border border-card-border bg-card-bg px-8 py-3.5 font-semibold text-text-primary transition hover:bg-card-bg-hover">
              WhatsApp for Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Eliminating Guesswork in Valuation</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              While traditional goldsmiths are part of Karwan's charm, they often lack the technology for accurate valuation. S Gold replaces the 'deduction culture' with scientific mapping and molecular-level scanning.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "No arbitrary deductions for 'melting' or 'wastage'",
                "German-engineered XRF Laser Analyzers",
                "Digital purity reports with 0.1 Karat precision",
                "Safe, private, and CCTV-monitored space"
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
            <h3 className="text-2xl font-bold text-text-primary">Strategic Asset Management</h3>
            <div className="mt-8 space-y-6">
              {[
                "Bridge business gaps with instant capital",
                "Fund higher education milestones",
                "Liquidate gold for real estate investments",
                "Clear high-interest debt effectively",
                "Serving Mehdipatnam, Toli Chowki & Attapur"
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

      {/* Steps Section */}
      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">The S Gold 5-Point Scientific Process</h2>
            <p className="mt-4 text-text-secondary">Everything happens right before your eyes.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {steps.map((step, idx) => (
              <div key={idx} className="relative rounded-3xl border border-card-border bg-card-bg p-8 transition hover:bg-card-bg-hover">
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] to-[#D4AF37] text-xl font-bold text-[#330164] shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-text-secondary text-xs">{step.desc}</p>
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
            <h2 className="text-3xl font-bold text-text-primary">Serving the West-Central Corridor</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Karwan's infrastructure makes it the ideal gold exchange point for residents of Mehdipatnam, Langar Houz, Golconda, Attapur, and Ziaguda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[3rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Visit S Gold Karwan Today</h2>
              <p className="mt-4 text-lg text-text-secondary">Dignified, professional, and highly profitable gold-selling.</p>

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
                      Jaffar Guda, Satnarayan Nagar, Karwan, Hyderabad, Telangana 500006. <br />
                      <strong>Landmark:</strong> Near Karwan Junction
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567890123456!2d78.4312345!3d17.3712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQwLjQiTiA3OMKwMjUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
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
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">FAQs – Selling Gold in Karwan</h2>
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
