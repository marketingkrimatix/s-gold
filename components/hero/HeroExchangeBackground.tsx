"use client";

import { motion } from "framer-motion";

export default function HeroExchangeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden 2xl:block">
      <div className="absolute inset-x-[10%] top-[56%] -translate-y-1/2">
        <div className="relative h-[120px] w-full">
          {/* soft transparent base rail */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-gold/18 via-brand-gold-soft/28 to-[#8BFF72]/18" />

          {/* faint secondary glow rail */}
          <div
            className="absolute left-0 right-0 top-1/2 h-[14px] -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-gold/0 via-brand-gold-soft/12 to-[#8BFF72]/0"
            style={{ filter: "blur(10px)" }}
          />

          {/* moving glow sweep */}
          <motion.div
            animate={{ left: ["0%", "calc(100% - 160px)"] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 h-12 w-[160px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E9C962]/0 via-[#FFF3BF]/55 to-[#8BFF72]/0"
            style={{ filter: "blur(12px)" }}
          />

          {/* moving bright core */}
          <motion.div
            animate={{ left: ["0%", "calc(100% - 120px)"] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 h-[3px] w-[120px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E9C962]/65 via-[#FFF6CF] to-[#8BFF72]/75"
          />

          {/* end arrow head with slight transparency */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            {/* <div className="h-0 w-0 border-y-[14px] border-l-[24px] border-y-transparent border-l-[#8BFF72]/70" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
