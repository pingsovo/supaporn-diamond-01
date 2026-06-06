"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { LUX_SPRING } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

const Sparkle = dynamic(() => import("@/components/Sparkle"), { ssr: false });

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-cream"
    >
      {/* sparkle backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-70 motion-reduce:hidden">
        <Sparkle />
      </div>

      {/* full-height hero image — bleeds to the right edge on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...LUX_SPRING, delay: 0.15 }}
        className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"
      >
        <Image
          src="/products/ring-hand.webp"
          alt="Supaporn Diamond composite cluster ring with a face of nearly five carats"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        {/* fade image into cream on its left edge */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--cream) 0%, rgba(250,250,225,0.0) 28%)",
          }}
        />
      </motion.div>

      {/* warm radial wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 80% 40%, rgba(253,215,154,0.30), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:pt-20">
        {/* copy */}
        <div className="max-w-[42ch]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...LUX_SPRING, delay: 0.1 }}
            className="eyebrow"
          >
            GIA &amp; HRD Certified · Since 1979
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...LUX_SPRING, delay: 0.18 }}
            className="mt-5 font-display text-6xl font-medium leading-[0.95] tracking-tight text-espresso sm:text-7xl lg:text-[5.5rem]"
          >
            The brilliance of a
            <span className="block italic text-gold">Heart &amp; Arrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...LUX_SPRING, delay: 0.26 }}
            className="mt-6 max-w-[46ch] font-body text-base leading-relaxed text-espresso-soft"
          >
            ห้างเพชรทองสุภาพร — we select only Triple-Excellent diamonds, graded by GIA
            and HRD, cut so precisely that hearts and arrows appear under the loupe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...LUX_SPRING, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#collection" variant="gold">
              Explore the Collection
            </Button>
            <Button href="#certification" variant="ghost">
              Our Standard
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...LUX_SPRING, delay: 0.5 }}
            className="mt-10 font-body text-[0.72rem] uppercase tracking-[0.22em] text-espresso-soft"
          >
            Composite Cluster · <span className="text-gold">~5 ct face · F–D · VS</span>
          </motion.p>
        </div>

        {/* mobile / tablet image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...LUX_SPRING, delay: 0.22 }}
          className="relative mx-auto w-full max-w-[520px] lg:hidden"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
            <Image
              src="/products/ring-hand.webp"
              alt="Supaporn Diamond composite cluster ring"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1400px] px-8">
        <div className="gold-rule" />
      </div>
    </section>
  );
}
