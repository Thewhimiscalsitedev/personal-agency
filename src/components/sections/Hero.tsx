"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroVisual from "@/components/ui/HeroVisual";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven parallax for the headline text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-headline"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background noise texture — decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[--background]"
      >
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-32">

          {/* ── Left column: copy ── */}
          <motion.div
            style={{ y: textY, opacity }}
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[--muted]"
              aria-label="Agency tagline"
            >
              Digital Craft Studio
            </motion.p>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[--foreground]"
            >
              We build things{" "}
              <em className="not-italic text-[--muted]">worth</em>{" "}
              experiencing.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="max-w-md text-lg leading-relaxed text-[--muted]"
            >
              Strategy, design, and engineering — unified. We partner with
              ambitious brands to create digital products that set the standard.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={shouldReduceMotion ? {} : fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[--foreground] text-[--background] px-7 text-sm font-medium hover:opacity-80 transition-opacity duration-200"
                aria-label="View our selected work"
              >
                View our work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[--border] px-7 text-sm font-medium text-[--foreground] hover:bg-[--foreground] hover:text-[--background] transition-colors duration-200"
                aria-label="Start a project with us"
              >
                Start a project
              </a>
            </motion.div>

            {/* Social proof / metrics */}
            <motion.dl
              variants={shouldReduceMotion ? {} : fadeUp}
              className="flex flex-wrap gap-8 pt-4 border-t border-[--border]"
            >
              {[
                { value: "99/100", label: "Speed Score" },
                { value: "Yes", label: "EAA Compliant" },
                { value: "Breda", label: "Built in" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="text-xs text-[--muted] tracking-wide">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ── Right column: 3-D visual ── */}
          <motion.div
            variants={shouldReduceMotion ? {} : {
              hidden: { opacity: 0, scale: 0.94 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="relative h-[480px] lg:h-[600px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-[--muted]">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[--muted] to-transparent"
        />
      </motion.div>
    </section>
  );
}
