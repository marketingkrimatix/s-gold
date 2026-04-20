import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReferralProgram() {
  const benefits = [
    {
      title: "Earn Instant Rewards",
      desc: "Get a referral bonus for every successful gold sale completed by your referred friend.",
      icon: "💰"
    },
    {
      title: "No Limit on Earnings",
      desc: "The more people you refer, the more you earn. There is absolutely no cap on your potential rewards.",
      icon: "🚀"
    },
    {
      title: "Trusted by Many",
      desc: "Refer your friends to a brand they can trust for transparency and the highest gold prices.",
      icon: "🤝"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="relative px-6 py-24 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/15 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Community</p>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
            S-Gold <span className="text-brand-gold">Referral</span> Program
          </h1>
          <p className="mt-6 text-xl text-text-secondary leading-8">
            Share the trust, earn the rewards. Help your friends get the best price for their gold 
            and earn an instant bonus when they complete a transaction.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-card-border bg-card-bg p-8 hover-lift text-center">
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{benefit.title}</h3>
              <p className="text-text-secondary leading-7">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* How it Works Step-by-Step */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-text-primary text-center">How to Participate</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed border-gold-accent-border -z-10" />
            
            {[
              { step: "01", title: "Get Your Code", desc: "Visit any S-Gold branch and ask for your unique referral ID." },
              { step: "02", title: "Share with Friends", desc: "Give your code to friends looking to sell gold or release pledges." },
              { step: "03", title: "They Transact", desc: "When they use your code during their transaction, our system logs it." },
              { step: "04", title: "You Get Paid", desc: "Receive your referral bonus instantly via UPI or bank transfer." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-gold text-brand-primary font-bold mb-6 border-4 border-background shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-text-tertiary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Referral FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Who can join the program?", a: "Anyone who has successfully transacted with S-Gold or is a registered member can join." },
              { q: "When do I receive the payout?", a: "Referral bonuses are processed within 24 hours of the referred customer completing their transaction." },
              { q: "Is there a limit to referrals?", a: "No! You can refer as many people as you want and earn for every single successful transaction." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-card-border bg-card-bg/30">
                <h4 className="font-bold text-brand-gold-soft">{faq.q}</h4>
                <p className="mt-2 text-text-secondary text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[3rem] border border-gold-accent-border bg-gradient-to-r from-brand-primary/20 to-brand-gold/10 p-12 text-center">
          <h2 className="text-3xl font-bold text-text-primary">Ready to start referring?</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Contact your nearest branch to get your unique referral code and start earning today. 
            Rewards are processed instantly upon successful transactions.
          </p>
          <div className="mt-10">
            <a href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-bold text-brand-primary shadow-lg hover:scale-105 transition">
              Get Your Referral Code
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
