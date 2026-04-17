'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Everything you need to know about our gold selling and pledging process.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-[1.5rem] border transition-all duration-300 ${
                isOpen
                  ? 'border-gold-accent-border bg-gradient-to-b from-card-bg to-card-bg/60 shadow-[0_10px_30px_rgba(233,201,98,0.08)]'
                  : 'border-card-border bg-card-bg hover:border-card-border-hover hover:bg-card-bg-hover'
              } backdrop-blur-xl`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none sm:px-8 sm:py-6"
              >
                <span className="text-base font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 border-brand-gold bg-brand-gold/10 text-brand-gold-soft'
                      : 'border-card-border bg-transparent text-text-tertiary'
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-sm leading-7 text-text-secondary sm:px-8 sm:pb-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
