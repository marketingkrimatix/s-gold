import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
            Let's get in touch
          </h1>
          <p className="mt-6 text-lg text-text-tertiary">
            Have questions about selling your gold or releasing pledged gold? Our team of experts is ready to help you with transparent advice.
          </p>
          
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Head Office</h3>
              <p className="mt-2 text-text-tertiary text-sm">
                 Plot No. 6, Nilayam, Siva Sai Apartment,<br/>
                 Khairatabad Rd, opp. SBI Bank, Khairatabad,<br/>
                 Hyderabad, Telangana 500004
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Phone & WhatsApp</h3>
              <p className="mt-2 text-brand-gold font-medium">+91 99969 09999</p>
              <p className="text-brand-gold font-medium">+91 91664 64916</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Email</h3>
              <p className="mt-2 text-brand-gold font-medium">support@s-gold.in</p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 rounded-[2rem] border border-card-border bg-card-bg p-8 lg:p-12 backdrop-blur-xl">
           <form className="flex flex-col gap-6">
              <div>
                <label className="text-sm text-text-tertiary block mb-2">Name</label>
                <input type="text" className="w-full rounded-xl border border-card-border bg-input-bg px-4 py-3 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm text-text-tertiary block mb-2">Phone Number</label>
                <input type="tel" className="w-full rounded-xl border border-card-border bg-input-bg px-4 py-3 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="text-sm text-text-tertiary block mb-2">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-card-border bg-input-bg px-4 py-3 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50" placeholder="How can we help you?" />
              </div>
              <button type="button" className="mt-4 rounded-full bg-gradient-to-r from-[#F6E7A1] to-[#D4AF37] px-6 py-4 font-semibold text-[#330164] transition hover:-translate-y-1">
                 Send Message
              </button>
           </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
