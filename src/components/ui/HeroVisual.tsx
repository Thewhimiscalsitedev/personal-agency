"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Spring-based mouse tracking — soft stiffness for a natural lag
  const rawX = useSpring(0, { stiffness: 120, damping: 28 });
  const rawY = useSpring(0, { stiffness: 120, damping: 28 });

  // Map normalised [-0.5, 0.5] cursor position to subtle rotation degrees
  const rotateY = useTransform(rawX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(rawY, [-0.5, 0.5], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Ambient glow — decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sky-400/10 blur-[80px]" />
      </div>

      {/*
        Outer motion div: owns the 3-D rotation + scale.
        No overflow-hidden here — clipping kills the transform effect.
      */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={shouldReduceMotion ? {} : { scale: hovered ? 1.02 : 1 }}
        style={
          shouldReduceMotion
            ? {}
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        transition={{ type: "spring", stiffness: 180, damping: 26 }}
        className="relative w-full max-w-lg aspect-[4/3] rounded-3xl cursor-crosshair"
        aria-label="Hero image"
      >
        {/* Inner wrapper clips the image to rounded corners without breaking the 3-D plane */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="Hero visual — a high-end render representing our craft"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Gradient vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          />
        </div>

        {/* Specular highlights — sit on top of the clipping layer, on the 3-D plane */}
        <div aria-hidden="true" className="absolute inset-0 rounded-3xl pointer-events-none">
          {/* Top edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {/* Bottom edge */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          {/* Outer border ring */}
          <div className="absolute inset-0 rounded-3xl border border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}
