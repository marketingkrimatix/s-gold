"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear only after scrolling down at least 1 viewport heights
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initially in case the user reloads partway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          // Using w-14 h-9 with rounded-full creates a small horizontal pill shape
          className="group fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-9 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-110 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900"
          style={{
            background: "linear-gradient(135deg, #F5E6A8, #D4AF37)",
            boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.6)",
          }}
        >
          {/* Subtle glossy highlight on the top half for a premium look */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-full" />
          
          {/* Soft outer glow that intensifies on hover */}
          <div className="absolute inset-0 bg-[#F5E6A8] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 pointer-events-none" />

          {/* Upward Arrow Icon with deep purple color */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2B0A3D"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10 relative transition-transform duration-300 group-hover:-translate-y-1 block"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
