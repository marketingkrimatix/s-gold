"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const items = [
  {
    label: "Evaluate",
    title: "Transparent gold testing in front of you",
    desc: "We check purity and weight clearly so customers understand every step before any offer is made.",
    stat: "Live purity check",
    src: "/2.jpeg",
  },
  {
    label: "Quote",
    title: "Receive a fair quote based on current rates",
    desc: "Turn valuation into confidence with a fast, premium quoting experience built for clarity and trust.",
    stat: "Market-linked pricing",
    src: "/3.jpeg",
  },
  {
    label: "Get Paid",
    title: "Accept and receive instant payment",
    desc: "Finish the visit quickly with cash, UPI, or bank transfer through a clean, high-trust service flow.",
    stat: "Instant payout",
    src: "/4.jpeg",
  },
];

function PhoneCard({
  title,
  desc,
  stat,
  src,
  progress,
  rate,
}: {
  title: string;
  desc: string;
  stat: string;
  src: string;
  progress: any;
  rate: string;
}) {
  const y = useTransform(progress, [0, 1], [50, -50]);
  const rotate = useTransform(progress, [0, 1], [-6, 6]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="relative mx-auto w-full max-w-md rounded-[2.2rem] border border-card-border bg-gradient-to-br from-gradient-section-from via-gradient-section-to to-gradient-section-from p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="rounded-[1.8rem] border border-gold-accent-border bg-card-bg p-5 backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full bg-divider" />
          <div className="rounded-full border border-gold-accent-border bg-gold-accent-bg px-3 py-1 text-xs font-medium text-brand-gold-soft">
            {stat}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-card-border bg-gradient-to-b from-gradient-section-from to-gradient-section-to p-5">
          <div className="relative mb-4 h-44 rounded-[1.25rem] bg-gradient-to-br from-brand-gold-soft/20 via-brand-gold/10 to-brand-primary-2/20" >
          <Image
            src={src}
            alt="Gold valuation"
            fill
            className="object-cover rounded-xl"
          /></div>
          <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{desc}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-card-border bg-card-bg p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Rate</p>
              <p className="mt-2 text-lg font-semibold text-text-primary">₹ {rate}</p>
            </div>
            <div className="rounded-2xl border border-card-border bg-card-bg p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Status</p>
              <p className="mt-2 text-lg font-semibold text-text-primary">Ready</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [rate, setRate] = useState<string>("7,2XX");

  useEffect(() => {
    fetch("/api/gold-rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.rate24kPerGram) {
          setRate(data.rate24kPerGram.toLocaleString("en-IN", { maximumFractionDigits: 0 }));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const firstOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.75], [0, 1, 0]);
  const thirdOpacity = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="relative h-[300vh] lg:h-[260vh]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-brand-gold">
              Simple Gold Loan Process
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
              From gold evaluation to instant cash
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-text-secondary">
              Our transparent process ensures every customer understands how their gold is valued, quoted, and converted into cash.
            </p>

            <div className="mt-10 space-y-5 hidden sm:block">
              <motion.div style={{ opacity: firstOpacity }} className="rounded-3xl border border-card-border bg-card-bg p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Evaluate</p>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">{items[0].title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{items[0].desc}</p>
              </motion.div>

              <motion.div style={{ opacity: secondOpacity }} className="rounded-3xl border border-card-border bg-card-bg p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Quote</p>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">{items[1].title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{items[1].desc}</p>
              </motion.div>

              <motion.div style={{ opacity: thirdOpacity }} className="rounded-3xl border border-card-border bg-card-bg p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Get Paid</p>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">{items[2].title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{items[2].desc}</p>
              </motion.div>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-12 lg:mt-0 min-h-[420px]">
            <motion.div style={{ opacity: firstOpacity }} className="absolute inset-0 flex items-center justify-center">
              <PhoneCard
                title={items[0].title}
                desc={items[0].desc}
                stat={items[0].stat}
                src={items[0].src}
                progress={scrollYProgress}
                rate={rate}
              />
            </motion.div>

            <motion.div style={{ opacity: secondOpacity }} className="absolute inset-0 flex items-center justify-center">
              <PhoneCard
                title={items[1].title}
                desc={items[1].desc}
                stat={items[1].stat}
                src={items[1].src}
                progress={scrollYProgress}
                rate={rate}
              />
            </motion.div>

            <motion.div style={{ opacity: thirdOpacity }} className="absolute inset-0 flex items-center justify-center">
              <PhoneCard
                title={items[2].title}
                desc={items[2].desc}
                stat={items[2].stat}
                src={items[2].src}
                progress={scrollYProgress}
                rate={rate}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
