"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ParallaxImageStack() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [70, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="relative min-h-[420px]">

      {/* Image 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-0 top-8 h-56 w-52 overflow-hidden rounded-[1.75rem] border border-card-border"
      >
        <Image
          src="/1.jpeg"
          alt="Gold buying branch"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-38 top-24 h-64 w-56 overflow-hidden rounded-[1.75rem] border border-gold-accent-border shadow-2xl"
      >
        <Image
          src="/2.jpeg"
          alt="Gold testing process"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute right-2 top-10 h-52 w-44 overflow-hidden rounded-[1.75rem] border border-card-border"
      >
        <Image
          src="/3.jpeg"
          alt="Gold valuation"
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>

    </div>
  );
}