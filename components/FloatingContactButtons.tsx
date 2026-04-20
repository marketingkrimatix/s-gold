"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingContactButtons() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-6 md:right-10 z-50 flex flex-col gap-4 w-14 items-center pointer-events-none transition-all duration-500 ease-in-out ${
        isScrolled ? "bottom-20 md:bottom-24" : "bottom-6 md:bottom-10"
      }`}
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919996909999" // Placeholder number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:brightness-110 outline-none focus-visible:ring-2 focus-visible:ring-green-500 shadow-lg shadow-green-500/30"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900/90 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-800">
          Chat with Us
          {/* Tooltip Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90" />
        </span>

        {/* WhatsApp SVG */}
        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" className="text-white z-10 w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+919996909999" // Placeholder number
        aria-label="Call Us"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:brightness-110 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] shadow-lg shadow-[#D4AF37]/30"
        style={{
          background: "linear-gradient(135deg, #F5E6A8, #D4AF37)",
          boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.6)",
        }}
      >
        {/* Subtle glossy highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-full" />
        
        {/* Soft outer glow that intensifies on hover */}
        <div className="absolute inset-0 bg-[#F5E6A8] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 pointer-events-none" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900/90 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-800">
          Call Us
          {/* Tooltip Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90" />
        </span>

        {/* Phone SVG */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2B0A3D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-12 block"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.a>
    </div>
  );
}
