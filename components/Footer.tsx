import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-footer-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] font-bold text-[#330164] shadow-[0_10px_25px_rgba(233,201,98,0.16)]">
              SG
            </div>
            <div>
              <p className="font-semibold text-text-primary">S Gold</p>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
                Trusted Gold Buyers
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-text-tertiary">
            Transparent valuation, fast payout, and a premium gold-selling
            experience designed around trust.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100093794177149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-card-bg text-text-secondary transition hover:border-brand-gold/50 hover:bg-card-bg-hover hover:text-brand-gold"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link
              href="https://www.instagram.com/oldgoldbuyers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-card-bg text-text-secondary transition hover:border-brand-gold/50 hover:bg-card-bg-hover hover:text-brand-gold"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCHAqwZeTfRbPQgIksLs-_Kw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-card-bg text-text-secondary transition hover:border-brand-gold/50 hover:bg-card-bg-hover hover:text-brand-gold"
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </Link>
          </div>
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
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Trust & Growth
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <Link href="/valuation-process" className="block transition hover:text-brand-gold-soft">Valuation Process</Link>
            <Link href="/referral-program" className="block transition hover:text-brand-gold-soft">Referral Program</Link>
            <Link href="/why-us" className="block transition hover:text-brand-gold-soft">Why S Gold</Link>
            <Link href="/blog" className="block transition hover:text-brand-gold-soft">Blog</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Legal
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <Link href="/privacy-policy" className="block transition hover:text-brand-gold-soft">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block transition hover:text-brand-gold-soft">Terms & Conditions</Link>
          </div>
        </div>

        <div id="contact">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <p>Hyderabad, Telangana</p>
            <p>+91 99969 09999</p>
            <p>support@s-gold.in</p>
            <Link
              href="/contact-us"
              className="mt-3 inline-flex rounded-full border border-gold-accent-border bg-card-bg px-4 py-2 text-sm font-medium text-text-primary transition hover:border-brand-gold/50 hover:bg-card-bg-hover"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-divider px-6 py-5 text-center text-sm text-text-muted">
        © 2026 S Gold. All rights reserved.
      </div>
    </footer>
  );
}
