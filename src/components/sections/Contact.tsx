"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <>
      {/* ── CTA ── */}
      <section
        ref={ref}
        id="contact"
        aria-labelledby="contact-heading"
        className="relative border-t border-[--border] bg-[--background] py-40 lg:py-56 overflow-hidden"
      >
        {/* Background radial — decorative */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(120,119,198,0.08),transparent)]"
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center gap-10"
          >
            {/* Eyebrow */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[--muted]"
            >
              Let&rsquo;s work together
            </motion.p>

            {/* Headline */}
            <motion.h2
              id="contact-heading"
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[--foreground]"
            >
              Ready to build for<br className="hidden sm:block" /> the next decade?
            </motion.h2>

            {/* Sub-copy */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="max-w-md text-lg leading-relaxed text-[--muted]"
            >
              Tell us about your project. We&rsquo;ll get back to you within one business day.
            </motion.p>

            {/* CTA button */}
            <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
              <a
                href="mailto:your-email@example.com"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[--foreground] text-[--background] px-10 text-sm font-medium hover:opacity-80 active:scale-95 transition-all duration-200"
                aria-label="Start a project — opens your email client"
              >
                Start a project
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        role="contentinfo"
        aria-label="Site footer"
        className="border-t border-[--border] bg-[--background]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <p className="text-xs text-[--muted]">
            Aether Innovations &copy; 2026
          </p>
          <p className="text-xs text-[--muted]">
            Built in Breda
          </p>
        </div>
      </footer>
    </>
  );
}
