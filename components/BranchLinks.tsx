'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
  "Khairatabad", "Kukatpally", "Manikonda", "Dilsukhnagar", "Uppal", "AS Rao Nagar",
   "Anandbagh", "Nallagandla", "Karwan", "Habsiguda", "Jubilee Hills", "LB Nagar", "Suchitra", "Champapet", "Bowenpally"
];

export default function BranchLinks() {
  return (
    <section id="locations" className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Sell Gold Near You — SGold Branches Across Hyderabad
        </h2>
        <p className="mt-6 text-base leading-8 text-text-secondary max-w-3xl mx-auto">
          With 13 branches across Hyderabad, a trusted SGold experience is never more than a few minutes away. Click your nearest area to find branch address, opening hours, and directions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {areas.map((area, index) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between group rounded-xl border border-card-border bg-card-bg px-5 py-4 transition-all duration-300 hover:border-brand-gold/40 hover:bg-brand-gold/5 hover:-translate-y-1"
            >
              <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                Sell Gold in {area}
              </span>
              <svg className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-soft transition-colors uppercase tracking-widest"
        >
          View All Branch Locations
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
