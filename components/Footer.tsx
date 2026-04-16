import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-footer-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] font-bold text-[#330164] shadow-[0_10px_25px_rgba(233,201,98,0.16)]">
              SG
            </div>
            <div>
              <p className="font-semibold text-text-primary">S-Gold</p>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
                Trusted Gold Buyers
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-text-tertiary">
            Transparent valuation, fast payout, and a premium gold-selling
            experience designed around trust.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Company
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <Link href="/" className="block transition hover:text-brand-gold-soft">Home</Link>
            <Link href="/about-us" className="block transition hover:text-brand-gold-soft">About Us</Link>
            <Link href="/sell-gold" className="block transition hover:text-brand-gold-soft">Sell Gold</Link>
            <Link href="/release-pledged-gold" className="block transition hover:text-brand-gold-soft">Release Gold</Link>
            <Link href="/locations" className="block transition hover:text-brand-gold-soft">Locations</Link>
            <Link href="/blog" className="block transition hover:text-brand-gold-soft">Blog</Link>
            <Link href="/contact-us" className="block transition hover:text-brand-gold-soft">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Services
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <p>Sell old gold</p>
            <p>Release pledged gold</p>
            <p>Gold valuation</p>
            <p>Instant payment</p>
          </div>
        </div>

        <div id="contact">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <p>Hyderabad, Telangana</p>
            <p>+91 99999 99999</p>
            <p>support@s-gold.in</p>
            <Link
              href="#"
              className="mt-3 inline-flex rounded-full border border-gold-accent-border bg-card-bg px-4 py-2 text-sm font-medium text-text-primary transition hover:border-brand-gold/50 hover:bg-card-bg-hover"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-divider px-6 py-5 text-center text-sm text-text-muted">
        © 2026 S-Gold. All rights reserved.
      </div>
    </footer>
  );
}
