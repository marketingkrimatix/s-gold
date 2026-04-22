import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ChakripuramLocationPage() {
  const steps = [
    { title: "Ultrasonic Cleaning", desc: "Gold ornaments collect dirt or wax over time. We use ultrasonic cleaning to strip away debris for 100% weight accuracy." },
    { title: "Non-Destructive Testing", desc: "Our Karatmeter uses X-ray technology to scan jewelry, identifying exact gold percentage without scratches or damage." },
    { title: "Digital Weight Verification", desc: "We use ISO-certified digital scales accurate up to three decimal places. Every milligram is accounted for fairly." },
    { title: "Net Gold Calculation", desc: "Professional density-check methods accurately subtract the weight of stones or wax, paying only for the net gold content." },
    { title: "Instant Settlement", desc: "Once finalized, payment is initiated immediately via UPI, IMPS, or Cash (within limits) for your convenience." }
  ];

  const services = [
    "Old Gold Jewellery Buyers",
    "Scientific Laser Evaluation",
    "Digital Purity Mapping",
    "ISO-Certified Accurate Weighing",
    "Instant High-Value Settlement"
  ];

  const nearbyAreas = ["Nagaram", "Dammaiguda", "Kushaiguda", "ECIL", "Vampuguda", "Kapra", "Cherlapally", "Rampally"];

  const faqs = [
    {
      question: "Where exactly is the S Gold branch in Chakripuram?",
      answer: "We are located at a prominent spot near the Chakripuram Cross Roads, making it convenient for residents of Dammaiguda and Kushaiguda to visit us safely."
    },
    {
      question: "Do you buy gold coins and bars?",
      answer: "Yes, we buy all forms of 24K gold including coins and bars at the highest current market rates."
    },
    {
      question: "Can I sell old, broken, or damaged jewelry?",
      answer: "Yes, the condition doesn't matter. We value gold based on its scientific purity and net weight."
    },
    {
      question: "How long does the entire process take?",
      answer: "Our streamlined evaluation and payment process typically takes between 15 to 20 minutes."
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
            Locations: Chakripuram
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Sell Gold in Chakripuram – <br />
            <span className="bg-gradient-to-r from-[#F8F5EF] via-[#F6E7A1] to-[#D4AF37] bg-clip-text text-transparent">
              Transparency in North-East Hyderabad.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Experience transparency and high-value returns. S Gold brings a corporate, high-tech standard to Chakripuram, bridging the gap for residents in Nagaram, Dammaiguda, and ECIL.
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

      {/* Trust Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Why Chakripuram Residents Choose S Gold</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              We provide city-best rates without the long commute. Our branch uses German-engineered XRF Laser Analyzers to provide a non-destructive, digital breakdown of your gold's purity.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Scientific accuracy over subjective 'touchstone' tests",
                "Strategic location for Dammaiguda & Nagaram",
                "Immediate high-value payouts via IMPS/RTGS",
                "100% transparent evaluation protocol"
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
            <h3 className="text-2xl font-bold text-text-primary">Financial Flexibility</h3>
            <div className="mt-8 space-y-6">
              {[
                "Fund registration costs for new home construction",
                "Finance professional courses & education fees",
                "Manage business cash flow for local traders",
                "Clear high-interest debt efficiently",
                "Serving Kushaiguda, ECIL & Vampuguda"
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
            <h2 className="text-3xl font-bold text-text-primary">Our 5-Step Scientific Process</h2>
            <p className="mt-4 text-text-secondary">Everything happens right in front of your eyes.</p>
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
            <h2 className="text-3xl font-bold text-text-primary">Serving North-East Hyderabad</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our Chakripuram branch is the primary gold exchange point for the fastest-growing residential pockets, including Nagaram, Dammaiguda, and established colonies in Kushaiguda and ECIL.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[3rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Visit S Gold Chakripuram Today</h2>
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
                      H.No. 1-10-218/7, 1st Floor, Shutter No.1, Above Sri Raja Rajeshwari Book Depot, Chakripuram, Kushaiguda, ECIL Post, Hyderabad, Telangana 500062. <br />
                      <strong>Landmark:</strong> Near Chakripuram Crossroads
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.567890123456!2d78.5812345!3d17.4712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzQwLjQiTiA3OMswMzQnNDAuNCJF!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
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
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">FAQs – Selling Gold in Chakripuram</h2>
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
