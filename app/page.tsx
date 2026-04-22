'use client';
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import PolygonBackdrop from "@/components/scroll/PolygonBackdrop";
import ScrollShowcase from "@/components/scroll/ScrollShowcase";
import TestimonialsScroll from "@/components/scroll/TestimonialsScroll";
import ParallaxImageStack from "@/components/scroll/ParallaxImageStack";
import { motion } from "framer-motion";
import ClipPolygonCTA from "@/components/scroll/ClipPolygonCTA";
import ServicesSection from "@/components/ServicesSection";
import HeroExchangeBackground from "@/components/hero/HeroExchangeBackground";
import HeroSideAssets from "@/components/hero/HeroSideAssets";
import HeroExchangeMobile from "@/components/hero/HeroExchangeMobile";
import GoldCalculator from "@/components/GoldCalculator";
import GoldRateChart from "@/components/GoldRateChart";
import STimeline from "@/components/scroll/STimeline";
import FAQSection from "@/components/FAQSection";

const trustStats = [
  { value: "10K+", label: "Customers Served" },
  { value: "15 Min", label: "Typical Evaluation" },
  { value: "100%", label: "Transparent Process" },
];

const features = [
  {
    eyebrow: "01",
    title: "Transparent Gold Testing",
    desc: "Every ornament is tested in front of you with clear explanation and zero hidden steps.",
  },
  {
    eyebrow: "02",
    title: "Instant Payment",
    desc: "Accept the offer and receive your payout quickly through cash, UPI, or bank transfer.",
  },
  {
    eyebrow: "03",
    title: "Trusted Local Experience",
    desc: "Designed for Hyderabad customers who want speed, trust, and a premium service flow.",
  },
];

const points = [
  "Certified and expert gold buyers.",
  "Free evaluation of your jewellery.",
  "Spot cash offer or payment through RTGS / IMPS as per your requirement.",
  "Free consultation through phone or online mode.",
  "Each transaction is handled with privacy and security.",
  "No damage or melting of gold jewellery.",
  "We do not remove beads or stones for evaluation.",
];

const homepageFaqs = [
  {
    question: "How is the purity of my gold tested?",
    answer: "We use advanced XRF testing machines to check the purity of your gold right in front of you without the need to melt it, ensuring 100% transparency.",
  },
  {
    question: "How long does the payment process take?",
    answer: "Once you accept our quote, payment is processed instantly via Cash, IMPS, RTGS, or UPI, based on your preference.",
  },
  {
    question: "What documents do I need to sell my gold?",
    answer: "You will need a valid government-issued ID (like an Aadhaar card, PAN card, or Passport) and address proof to comply with our secure processing.",
  },
  {
    question: "Do you buy pledged gold?",
    answer: "Yes, we specialize in helping release pledged gold from banks and pawnbrokers. We handle the paperwork and process, then purchase the gold at live market rates.",
  },
  {
    question: "Is there any hidden fee?",
    answer: "No, we believe in a fully transparent process. The evaluation is free, and there are absolutely no hidden charges or deductions from our final quote.",
  },

];

export default function HomePage() {
  const [rate, setRate] = useState<string>("7,2XX");

  useEffect(() => {
    fetch("/api/gold-rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.rate24kPerGram) {
          setRate(data.rate24kPerGram.toLocaleString("en-IN", { maximumFractionDigits: 0 }));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-text-primary">
      <Header />

      <section className="relative overflow-hidden">
        <PolygonBackdrop />
        <div className="absolute inset-0 z-[1]">
          <div className="float-slow absolute left-[-6%] top-12 h-72 w-72 rounded-full bg-brand-gold/16 blur-3xl" />
          <div className="float-slow absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-brand-primary-2/35 blur-3xl [animation-delay:1.2s]" />
          <div className="float-slow absolute bottom-[-4rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-gold-rich/10 blur-3xl [animation-delay:2.1s]" />
        </div>

        <HeroExchangeBackground />
        <HeroSideAssets />

        <div className="relative z-[10] mx-auto grid max-w-7xl items-center gap-14 px-6 py-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="fade-up">

            <HeroExchangeMobile />

            <div className="shimmer-gold mb-6 inline-flex rounded-full border border-gold-accent-border px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-brand-gold-soft">
              Trusted Gold Buyers in Hyderabad
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Sell pledged gold with a
              <span className="bg-gradient-to-r from-brand-primary-2 via-brand-gold to-brand-gold-rich bg-clip-text text-transparent dark:from-[#F8F5EF] dark:via-[#F6E7A1] dark:to-[#D4AF37]">
                {" "}premium, fast
              </span>
              {" "}experience.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
              Instant valuation, transparent pricing, and a modern trust-first
              experience built for customers who want clarity and speed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#2A0848] shadow-[0_12px_35px_rgba(233,201,98,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(233,201,98,0.34)]"
              >
                Get Instant Quote
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-card-border bg-card-bg px-6 py-3.5 text-sm font-medium text-text-secondary backdrop-blur transition duration-300 hover:border-card-border-hover hover:bg-card-bg-hover hover:text-text-primary"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {trustStats.map((item) => (
                <div
                  key={item.label}
                  className="hover-lift rounded-2xl border border-card-border bg-card-bg p-4 backdrop-blur-md"
                >
                  <p className="text-xl font-semibold text-brand-gold-soft">{item.value}</p>
                  <p className="mt-1 text-xs text-text-tertiary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up-delay-1 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-gold/18 to-brand-primary-2/22 blur-2xl" />
            <div className="relative rounded-[2rem] border border-card-border bg-card-bg p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from via-gradient-section-to to-gradient-section-from p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
                      Live Experience
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-text-primary">
                      Trusted. Clear. Instant.
                    </h2>
                  </div>
                  <div className="rounded-full border border-gold-accent-border bg-gold-accent-bg px-4 py-2 text-sm text-brand-gold-soft">
                    Premium
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "XRF purity testing in front of you",
                    "Highest-value pricing based on live rates",
                    "Instant payout options",
                    "Clean, mobile-friendly service flow",
                  ].map((item) => (
                    <div
                      key={item}
                      className="hover-lift flex items-center gap-3 rounded-2xl border border-card-border bg-card-bg px-4 py-4"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-gold-soft to-brand-gold-rich dark:from-[#F6E7A1] dark:to-[#D4AF37]" />
                      <p className="text-sm text-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-gold-accent-border bg-gold-accent-bg p-5">
                  <p className="text-sm font-medium text-brand-gold-soft">Today's Gold Rate</p>
                  <p className="mt-2 text-3xl font-semibold text-text-primary">₹ {rate} / gram</p>
                  <p className="mt-1 text-sm text-text-tertiary">
                    Reserve this area for your live gold calculator and estimate tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <GoldCalculator />
          </div>
          <div className="lg:col-span-2">
            <GoldRateChart />
          </div>
        </div>
      </section>

      <STimeline />

      <ScrollShowcase />

      <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-card-border bg-section-bg p-8"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">Secure & Trusted</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">Instant Cash Against Your Gold</h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Pledge your gold jewellery and receive quick cash with transparent valuation and secure handling. Our trusted process ensures your gold is safely stored while you get the financial support you need, with flexible repayment options and competitive interest rates.
            </p>
          </motion.div>

          <ParallaxImageStack />
        </div>
      </section>

      <ClipPolygonCTA />

      <section className="relative overflow-hidden bg-[var(--color-section-bg)] px-6 py-16 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8%] top-8 h-64 w-64 rounded-full bg-[var(--color-gold-accent-bg)] blur-3xl" />
          <div className="absolute right-[-10%] top-24 h-72 w-72 rounded-full bg-[color:var(--brand-primary)]/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="fade-up">
            <div className="mb-5 inline-flex rounded-full border border-[var(--color-gold-accent-border)] bg-[var(--color-gold-accent-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
              Still confused where to sell gold?
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Trusted gold selling, made simple and secure.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              Get a free evaluation, a fair spot cash offer, and a smooth process
              without damage to your jewellery. You can also choose RTGS or IMPS,
              depending on what works best for you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand-gold-soft)] via-[var(--brand-gold)] to-[var(--brand-gold-rich)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-primary)] shadow-[0_12px_35px_rgba(233,201,98,0.22)] transition duration-300 hover:-translate-y-1"
              >
                Get Free Evaluation
              </Link>

              <Link
                href="tel:+919996909999"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-6 py-3.5 text-sm font-medium text-[var(--color-text-primary)] backdrop-blur transition duration-300 hover:border-[var(--color-card-border-hover)] hover:bg-[var(--color-card-bg-hover)]"
              >
                Call for Free Consultation
              </Link>
            </div>
          </div>

          <div className="fade-up-delay-1">
            <div className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {points.map((point, index) => (
                  <div
                    key={point}
                    className="hover-lift flex min-h-[78px] items-start gap-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 py-2.5"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-accent-bg)] text-xs font-semibold text-[var(--brand-gold-rich)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[var(--color-gold-accent-border)] bg-[var(--color-gold-accent-bg)] px-4 py-4">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  Why customers trust us
                </p>
                <p className="mt-1.5 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Transparent evaluation, secure handling, and payout options that match your comfort and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-6 rounded-[2rem] border border-card-border bg-card-bg p-6 backdrop-blur-xl md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-brand-gold">Why S Gold</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">
              Modern trust, not old-style clutter
            </h2>
          </div>
          <div className="flex items-center text-sm leading-7 text-text-secondary md:col-span-2">
            The experience is designed to feel clear and premium from the first click:
            quick value proposition, visible trust, simple actions, and no confusion.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-gold">
            Core Benefits
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
            Everything customers need to trust the process
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="hover-lift rounded-[1.8rem] border border-card-border bg-gradient-to-b from-card-bg to-card-bg/60 p-6 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-brand-gold">
                {item.eyebrow}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-card-border bg-section-bg p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">Simple steps, premium flow</h2>

            <div className="mt-8 space-y-4">
              {[
                "Visit your nearest S Gold branch.",
                "Get purity and weight tested transparently in front of you.",
                "Accept the quote and receive instant payment.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="hover-lift flex gap-4 rounded-2xl border border-card-border bg-card-bg p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] to-[#D4AF37] font-semibold text-[#330164]">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-sm text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="branches" className="rounded-[2rem] border border-gold-accent-border bg-gradient-to-br from-gradient-section-from to-gradient-section-to p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-gold-soft">Nearby branches</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">Find a branch and walk in</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-text-secondary">
              With multiple branches across Hyderabad, a trusted gold-selling experience is always within reach.
            </p>

            <div className="mt-8 grid gap-4">
              {["Khairatabad", "Karwan", "Kukatpally"].map((branch) => (
                <div
                  key={branch}
                  className="hover-lift flex items-center justify-between rounded-2xl border border-card-border bg-card-bg px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-text-primary">{branch}</p>
                    <p className="text-sm text-text-tertiary">Premium branch experience</p>
                  </div>
                  <span className="rounded-full border border-gold-accent-border bg-gold-accent-bg px-3 py-1 text-xs font-medium text-brand-gold-soft">
                    Open
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsScroll />

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <div className="rounded-[2.2rem] border border-gold-accent-border bg-gradient-to-r from-gradient-section-from via-gradient-section-via to-gradient-section-to px-8 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">
                Ready to sell?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
                Turn trust into action with one clear next step
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
                Sell gold or release your pledge with confidence. Visit us in-store for a transparent, premium experience that puts you first.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#330164] transition hover:-translate-y-1"
              >
                Book a Visit
              </Link>
              <Link
                href="tel:+919999999999"
                className="inline-flex items-center justify-center rounded-full border border-card-border bg-card-bg px-6 py-3.5 text-sm font-medium text-text-primary"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={homepageFaqs} />
      <Footer />
    </main>
  );
}
