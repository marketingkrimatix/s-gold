import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WarangalLocationPage() {
  const steps = [
    { title: "Visit or Appointment", desc: "Visit our Warangal store or book an appointment for a doorstep evaluation." },
    { title: "Instant Testing", desc: "Get your gold tested using Karat meter technology right in front of you." },
    { title: "Instant Payment", desc: "Receive your payment immediately via Cash or Bank Transfer (RTGS/IMPS)." }
  ];

  const services = [
    "Old Gold Jewellery Buyers",
    "Scrap Gold Buyers",
    "Gold Coin Buyers",
    "Broken Gold Buyers",
    "Gold Exchange Options"
  ];

  const locations = ["Hanamakonda", "Kazipet", "Bollikunta", "Arepally", "Inavolu"];

  const testimonials = [
    { name: "John", text: "Best gold buyers in Warangal. Got more price than other shops!" },
    { name: "Anbu", text: "Very transparent process and quick payment" }
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
            Locations: Warangal
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Gold Buyers in Warangal – <br />
            <span className="bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] bg-clip-text text-transparent">
              Get the Highest Price for Your Gold.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Instant Cash for Gold | Trusted Gold Buyers Near You | 100% Transparent Evaluation
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3.5 font-semibold text-[#330164] shadow-lg transition hover:-translate-y-1">
              Get Free Gold Valuation
            </Link>
            <Link href="tel:+919999999999" className="inline-flex rounded-full border border-card-border bg-card-bg px-8 py-3.5 font-semibold text-text-primary transition hover:bg-card-bg-hover">
              Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Sell Your Gold in Warangal with Trust & Transparency</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              At S Gold, we offer the best value for your gold in Warangal. Whether it’s old jewellery, broken ornaments, or unused gold, we ensure:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Instant cash payment",
                "Live gold rate calculation",
                "No hidden charges",
                "Professional testing process"
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
            <p className="mt-8 font-medium text-brand-gold">
              We are committed to giving you the highest market price with complete transparency.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <h3 className="text-2xl font-bold text-text-primary">Why Choose S Gold in Warangal?</h3>
            <div className="mt-8 space-y-6">
              {[
                "Highest gold rate in Warangal",
                "Instant payment (Cash / Bank Transfer)",
                "Karat meter testing (no damage to jewellery)",
                "Trusted by 1000+ customers",
                "Quick process – within 10 minutes"
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
            <h2 className="text-3xl font-bold text-text-primary">Our Gold Buying Services in Warangal</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-card-border bg-card-bg p-6 text-center transition hover:bg-card-bg-hover">
                <p className="text-sm font-semibold text-text-primary">{service}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="tel:+919999999999" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3 text-sm font-bold text-[#2A0848] shadow-lg transition hover:scale-105">
              Call Now for Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Near Warangal Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {locations.map(loc => (
                <div key={loc} className="rounded-xl border border-card-border bg-surface p-4 text-center">
                  <p className="text-sm font-medium text-text-secondary">{loc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-text-primary">Trusted Gold Buyers Near Warangal</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Looking for reliable gold buyers near Warangal? S Gold provides a secure and hassle-free gold selling experience. Our expert team ensures accurate valuation using advanced technology.
            </p>
            <p className="mt-4 text-text-tertiary font-medium">We serve customers across Warangal and surrounding regions.</p>
          </div>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">Sell Your Gold in 3 Simple Steps</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={idx} className="relative rounded-3xl border border-card-border bg-card-bg p-8 transition hover:bg-card-bg-hover">
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] to-[#D4AF37] text-xl font-bold text-[#330164] shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="space-y-12">
          {/* Warangal Branch */}
          <div className="rounded-[3rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary">Ready to Sell Your Gold in Warangal?</h2>
                <p className="mt-4 text-lg text-text-secondary">Get the best price today with S Gold!</p>

                <div className="mt-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Contact Us - Warangal</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                        Shop no 3, First Floor, 8-10-31, Jayaprakash Narayan Road, opposite DCB Bank, above Sangeeta Mobiles, Nandayya Gari Compound, Girmajipet, Warangal, Telangana 506002
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
                        <p className="text-sm font-semibold text-text-primary">099969 09999</p>
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

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Working Hours</p>
                      <p className="text-sm font-semibold text-text-primary">Mon - Sun : 9am to 9pm</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href="tel:+919996909999" className="inline-flex rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-3 text-sm font-bold text-[#2A0848] shadow-lg transition hover:scale-105">
                      Call Now
                    </Link>
                    <Link href="/contact-us" className="inline-flex rounded-full border border-card-border bg-card-bg px-8 py-3 text-sm font-bold text-text-primary transition hover:bg-card-bg-hover">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-[400px] overflow-hidden rounded-[2rem] border border-card-border shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.88172349767!2d79.5932!3d17.9712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sS+Gold%20Warangal!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
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

          {/* Hanamakonda Branch */}
          <div className="rounded-[3rem] border border-card-border bg-card-bg p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Hanamakonda Branch</h3>
                <div className="mt-8 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Contact Us - Hanamakonda</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                        2-2-375, Plot No. 2, Beside Warangal 3D & Arts Studio, 1st Floor, Adjacent to Mee Seva, Kishanpura, Naim Nagar, Hanamkonda, Telangana 506001
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
                        <p className="text-sm font-semibold text-text-primary">099969 09999</p>
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

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Working Hours</p>
                      <p className="text-sm font-semibold text-text-primary">Mon - Sun : 9am to 9pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] overflow-hidden rounded-[2rem] border border-card-border shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8!2d79.5!3d17.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sS+Gold%20Hanamakonda!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">What Our Customers Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <div key={idx} className="rounded-3xl border border-card-border bg-card-bg p-8 shadow-sm">
                <p className="text-lg italic text-text-secondary">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                    {t.name[0]}
                  </div>
                  <p className="font-semibold text-text-primary">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
