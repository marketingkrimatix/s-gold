import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const aboutUsFaqs = [
  {
    question: "Who are you and what do you do?",
    answer: "S Gold is one of Hyderabad’s most trusted gold buyers, offering a secure, premium, and transparent experience for selling and releasing gold.",
  },
  {
    question: "What makes your gold buying service trustworthy?",
    answer: "We focus on complete transparency, secure transactions, and accurate gold evaluation using certified XRF technology, ensuring customers get fair value.",
  },
  {
    question: "What is your mission?",
    answer: "Our mission is to simplify the gold-selling process by eliminating confusing pricing and unclear practices, and providing accurate purity testing using advanced XRF machines.",
  },
  {
    question: "How do you ensure accurate gold testing?",
    answer: "We use certified German-technology XRF machines to provide precise purity readings instantly in front of customers.",
  },
  {
    question: "Is your gold evaluation process transparent?",
    answer: "Yes, we maintain 100% transparency by testing gold right in front of you and clearly explaining the valuation process.",
  },
  {
    question: "What kind of environment do you provide for customers?",
    answer: "We provide a highly secure and premium environment where customers feel safe, respected, and comfortable throughout the evaluation and payment process.",
  },
  {
    question: "Why should I choose your service over others?",
    answer: "Unlike many others, we offer certified testing, transparent pricing, secure handling, and a premium customer experience, making us a trusted choice in Hyderabad.",
  }
];


export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />

      <section className="relative px-6 py-20 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
          <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-brand-primary-2/20 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            About Us
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-5xl">
            Hyderabad's most trusted <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#F8F5EF] via-[#F6E7A1] to-[#D4AF37] bg-clip-text text-transparent">
              Gold Buyers.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            S Gold is committed to offering a premium, secure, and entirely transparent standard for exchanging and releasing gold.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-text-primary">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              The gold-selling industry is often cluttered with confusing pricing and opaque practices.
              Our mission is to streamline this process by using certified German-technology XRF machines
              to provide an exact purity reading right in front of your eyes.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              We take pride in providing a highly secure and premium environment where our
              customers feel valued and respected throughout the entire evaluation and payout process.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-brand-gold-soft">XRF</p>
                <p className="mt-1 text-sm text-text-tertiary">Certified Testing</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card-bg p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-brand-gold-soft">100%</p>
                <p className="mt-1 text-sm text-text-tertiary">Transparency</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-3xl bg-gradient-to-tr from-gradient-section-from to-gradient-section-via p-1">
            <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-background">
              <p className="text-text-muted text-sm">Brand Journey Imagery Goes Here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section-bg)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">About S Gold</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              We are known as the best jewellery buyers in Hyderabad & we offer the best price in the market.
              Being one of the best-certified gold buyers in Hyderabad exchanging gold for cash, we make payment
              after proper evaluation of your jewellery. Our expert professionals will guide you through the
              simple and transparent process of selling gold jewellery.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-text-primary">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold">
                    <svg className="h-6 w-6 text-[#2A0848]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Trusted Legacy
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-text-secondary">
                  <p className="flex-auto">
                    S Gold was established 10 years ago in Hyderabad and has since become a trusted name in the gold buying market.
                    We strive towards providing the best service to our customers in a secure environment with complete confidence and privacy ensured.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-text-primary">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold">
                    <svg className="h-6 w-6 text-[#2A0848]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Best Payouts
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-text-secondary">
                  <p className="flex-auto">
                    Our team strives towards providing the best payouts by implementing proper buying practices.
                    At S Gold Finance, we buy your gold assets and pay instant cash. We also help our customers
                    to release their pledged gold and jewellery from banks, pawnshops, and other financiers.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <FAQSection faqs={aboutUsFaqs} />

      <Footer />
    </main>
  );
}
