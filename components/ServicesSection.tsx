import Link from "next/link";
import PolygonBackdrop from "./scroll/PolygonBackdrop";
import Image from "next/image";

const services = [
  {
    title: "Sell Gold",
    description:
      "If you have gold jewellery that you do not use anymore, you can sell it for instant cash at S Gold.",
    href: "/sell-gold",
    badge: "Instant Cash",
    src: "/3.jpeg",
  },
  {
    title: "Release Pledged Gold",
    description:
      "If your gold is pledged at a bank, pawnshop, or pawnbroker, S Gold can help release it and buy it back for cash.",
    href: "/release-pledged-gold",
    badge: "End-to-End Help",
    src: "/2.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <PolygonBackdrop />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-52 w-52 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
          Our Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Solutions built around your gold needs
        </h2>
        <p className="mt-4 text-base leading-7 text-text-secondary sm:text-lg">
          Clear services, transparent process, and a premium experience from valuation to payout.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[2rem] border border-card-border bg-gradient-to-br from-card-bg to-card-bg/60 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-card-border-hover"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,201,98,0.10),transparent_22%)] opacity-80" />
            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] text-lg font-bold text-[#330164] shadow-[0_10px_25px_rgba(233,201,98,0.22)]">
                  {index + 1}
                </div>

                <span className="rounded-full border border-gold-accent-border bg-gold-accent-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-soft">
                  {service.badge}
                </span>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src={service.src}
                  alt="Gold valuation"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-text-primary">
                {service.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#2A0848] shadow-[0_12px_30px_rgba(233,201,98,0.24)] transition duration-300 hover:scale-[1.02]"
                >
                  Explore Service
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-card-border bg-card-bg px-5 py-3 text-sm font-medium text-text-secondary transition duration-300 hover:border-card-border-hover hover:bg-card-bg-hover"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
