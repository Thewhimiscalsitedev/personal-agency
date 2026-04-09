"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const services = [
  {
    number: "01",
    title: "EAA Compliant Web Design",
    description:
      "The European Accessibility Act is now enforceable. We build sites that meet every requirement out of the box — semantic HTML, WCAG 2.2 AA contrast, keyboard navigation, and full ARIA coverage — so you stay ahead of regulation and never face a fine.",
    tags: ["WCAG 2.2", "ARIA", "Semantic HTML", "EU Compliance"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "3D Scroll Animations",
    description:
      "First impressions are everything. We craft scroll-driven 3-D experiences that feel native to the device — fluid, purposeful, and fast. The kind of interaction that earns the second visit and turns browsers into believers.",
    tags: ["Framer Motion", "Three.js", "WebGL", "GSAP"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Your business shouldn't stop when your team does. We integrate AI-powered workflows that handle leads, content, support, and operations around the clock — cutting overhead while compounding output, 24 hours a day.",
    tags: ["LLM Integration", "Workflow Automation", "AI Agents", "24/7 Ops"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 2a4 4 0 0 1 4 4v5H8V6a4 4 0 0 1 4-4z" />
        <line x1="12" y1="15" x2="12" y2="17" />
      </svg>
    ),
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-[--border] bg-[--background] py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          className="mb-20 flex flex-col gap-5 max-w-2xl"
        >
          <motion.p
            variants={shouldReduceMotion ? {} : fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[--muted]"
          >
            What we do
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={shouldReduceMotion ? {} : fadeUp}
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-[--foreground]"
          >
            Services built for<br />the next decade.
          </motion.h2>
        </motion.div>

        {/* Three-column grid */}
        <motion.ul
          role="list"
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[--border]"
        >
          {services.map((service) => (
            <motion.li
              key={service.number}
              variants={shouldReduceMotion ? {} : fadeUp}
              className="group relative flex flex-col gap-8 bg-[--background] p-10 lg:p-12 overflow-hidden"
            >
              {/* Hover glow — decorative */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,119,198,0.07),transparent)]"
              />

              {/* Top row: number + icon */}
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="text-xs font-mono text-[--muted] tracking-widest"
                >
                  {service.number}
                </span>
                <span className="text-[--muted] group-hover:text-[--foreground] transition-colors duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-[--foreground]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[--muted]">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <ul
                role="list"
                aria-label={`Technologies for ${service.title}`}
                className="flex flex-wrap gap-2"
              >
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border border-[--border] text-[--muted]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Bottom border accent — animates in on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA row */}
        <motion.div
          variants={shouldReduceMotion ? {} : fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[--border] px-8 text-sm font-medium text-[--foreground] hover:bg-[--foreground] hover:text-[--background] transition-colors duration-200"
            aria-label="Discuss your project with us"
          >
            Discuss your project
          </a>
        </motion.div>

      </div>
    </section>
  );
}
