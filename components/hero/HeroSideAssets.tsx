"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FRAME = "h-[240px] w-[240px] xl:h-[260px] xl:w-[260px]";

export default function HeroSideAssets() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[8] hidden 2xl:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`absolute left-[2.5%] top-[29%] ${FRAME}`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/gold2.gif"
            alt="Gold bars"
            fill
            className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.24)]"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut", delay: 0.1 },
          x: { duration: 0.8, ease: "easeOut", delay: 0.1 },
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`absolute right-[2.5%] top-[26%] ${FRAME}`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/cash2.gif"
            alt="Cash stack"
            fill
            className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.24)]"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
