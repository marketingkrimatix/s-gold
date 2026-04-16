"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PolygonBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 0.55, 0.15]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ rotate, y, opacity }}
        className="absolute left-[8%] top-24 h-56 w-56 rounded-[24%] border border-gold-accent-border bg-gradient-to-br from-brand-gold/10 via-brand-gold-rich/5 to-transparent blur-[2px]"
      />
      <motion.div
        style={{ rotate, y: useTransform(scrollYProgress, [0, 1], [0, 110]), opacity }}
        className="absolute right-[10%] top-40 h-72 w-72 rounded-[18%] border border-card-border bg-gradient-to-br from-brand-primary-2/20 via-brand-primary/10 to-transparent"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -18]), opacity }}
        className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-[30%] border border-brand-gold-soft/15 bg-gradient-to-br from-brand-gold-soft/10 to-transparent"
      />
    </div>
  );
}
