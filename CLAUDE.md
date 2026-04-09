# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

## Architecture

**One-page portfolio** — a single `page.tsx` that composes all sections vertically. Each section lives in `src/components/sections/` and is independently animated.

```
src/
  app/
    layout.tsx         # Root layout: fonts, metadata, skip-link
    page.tsx           # Composes Header + all sections in order
    globals.css        # CSS custom properties, :focus-visible, skip-link, reduced-motion reset
  components/
    layout/
      Header.tsx       # Fixed nav, scroll-aware frosted glass, EAA-compliant
    sections/
      Hero.tsx         # Scroll-driven parallax + stagger animations
    ui/
      HeroVisual.tsx   # Mouse-tracking 3-D card (replace inner content with real asset)
  lib/
    motion.ts          # Shared Framer Motion variants (fadeUp, scaleReveal, staggerContainer…)
```

## Key conventions

**Animations**: All variants live in `src/lib/motion.ts`. Every animated component must call `useReducedMotion()` and pass `initial={shouldReduceMotion ? false : "hidden"}` so motion is disabled for users who request it (EAA / WCAG 2.3.3).

**Accessibility (EAA)**:
- Every `<section>` needs either `aria-labelledby` pointing to a heading or `aria-label`.
- Interactive elements require visible `:focus-visible` styles (defined globally) — do not suppress outlines.
- Decorative elements get `aria-hidden="true"` and `focusable="false"`.
- The skip-link (`#main-content`) must remain in `layout.tsx`.
- Use `<dl>`/`<dt>`/`<dd>` for stat/metric groups, not divs with spans.
- Color contrast: foreground (`#0a0a0a`) on background (`#ffffff`) = 19.6:1. Muted text (`#6b7280`) on white = 4.6:1 — minimum AA. Do not go lower.

**Styling**: Tailwind utility classes + CSS custom properties (`var(--foreground)`, `var(--muted)`, `var(--border)`, `var(--background)`). Dark mode is handled via `@media (prefers-color-scheme: dark)` in `globals.css` — no `.dark` class toggling.

**3-D card placeholder** (`HeroVisual.tsx`): The inner content between the "Inner depth layer" comments is the drop-zone for the real 3-D asset (Next.js `<Image>`, `<canvas>`, or a Three.js canvas). The mouse-tracking, glow, and tilt logic are already wired.
