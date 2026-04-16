import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            Hyderabad's most trusted <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#F8F5EF] via-[#F6E7A1] to-[#D4AF37] bg-clip-text text-transparent">
              Gold Buyers.
            </span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            S-Gold is committed to offering a premium, secure, and entirely transparent standard for exchanging and releasing gold.
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

      <Footer />
    </main>
  );
}
