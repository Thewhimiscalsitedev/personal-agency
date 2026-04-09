"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      aria-label="Site header"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[--background]/80 backdrop-blur-xl border-b border-[--border]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#main-content"
            aria-label="Aether Innovations — back to top"
            className="text-sm font-semibold tracking-widest uppercase"
          >
            Aether
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation">
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[--muted] hover:text-[--foreground] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-[--foreground] text-[--background] text-sm font-medium hover:opacity-80 transition-opacity duration-200"
            aria-label="Get in touch with us"
          >
            Get in touch
          </a>

          {/* Mobile menu button — expanded later */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-[--foreground]"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
