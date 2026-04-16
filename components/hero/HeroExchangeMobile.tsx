"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroExchangeMobile() {
  return (
    <div className="relative z-[3] mx-auto mb-6 block w-full max-w-md px-2 2xl:hidden">
      <div className="flex items-center justify-between gap-3 px-2">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-24 w-24 shrink-0"
        >
          <Image
            src="/gold2.gif"
            alt="Gold bars"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <div className="relative flex-1">
          <div className="relative h-[44px] w-full">
            {/* Base line */}
            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E9C962] via-[#F6E7A1] to-[#8BFF72]" />

            {/* Moving glow */}
            <motion.div
              animate={{ left: ["0%", "calc(100% - 58px)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 h-4 w-[58px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E9C962]/0 via-[#FFF2B8] to-[#8BFF72]/0"
              style={{ filter: "blur(6px)" }}
            />

            {/* Moving bright core */}
            <motion.div
              animate={{ left: ["0%", "calc(100% - 44px)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 h-[4px] w-[44px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E9C962] via-[#FFF2B8] to-[#8BFF72]"
            />

            {/* Arrow head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {/* <div className="h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-[#8BFF72]" /> */}
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-24 w-24 shrink-0"
        >
          <Image
            src="/cash2.gif"
            alt="Cash stack"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
