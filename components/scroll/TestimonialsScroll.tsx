"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Smooth and trustworthy",
    body: "I had gold pledged at Muthoot for over a year and the interest was piling up. SGold sent their executive with me, cleared the loan the same day, and paid me the balance instantly. I did not expect it to be this simple.",
    name: "Rajesh M., Kukatpally, Hyderabad",
  },
  {
    title: "Fast payout",
    body: "The entire process — from testing to payment — took less than 20 minutes. The staff explained every step clearly. I got a much better rate than I expected.",
    name: "Lakshmi P., Dilsukhnagar, Hyderabad",
  },
  {
    title: "Easy gold selling experience",
    body: "I was nervous about selling my mother&#39;s jewellery. The team at SGold made the whole experience feel safe and transparent. Zero pressure, no damage to the ornaments.",
    name: "Suresh K., Tirupati",
  },
];

export default function TestimonialsScroll() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            className="flex flex-col rounded-[1.8rem] border border-card-border bg-card-bg p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-card-border-hover"
          >
            <p className="text-sm font-medium text-brand-gold-soft">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">{item.body}</p>
            <div className="mt-auto" >
              <div className="mt-6 h-px w-full bg-divider" />
              <p className="mt-5 text-sm font-semibold text-text-primary">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
