/**
 * Centralised Framer Motion variants.
 * All animations respect prefers-reduced-motion via the `useReducedMotion` hook
 * in the consuming component — these variants define the full-motion path.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** 3-D card tilt — used on the Hero visual placeholder */
export const tilt3d = (rotateX: number, rotateY: number) => ({
  rotateX,
  rotateY,
  transition: { type: "spring", stiffness: 200, damping: 30 },
});
