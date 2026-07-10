"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t: number) {
  return t * t * t;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

const SLIDE_IN_MS = 800;
const HOLD_MS = 400;
const SEPARATE_MS = 600;
const FADE_MS = 400;

export function DiamondLoader() {
  const d0 = useRef<HTMLDivElement>(null);
  const d1 = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const el0 = d0.current;
      const el1 = d1.current;
      const overlay = overlayRef.current;
      if (!el0 || !el1 || !overlay) return;

      // Phase 1: slide in (0 → SLIDE_IN_MS)
      const slideT = clamp01(elapsed / SLIDE_IN_MS);
      const slideP = easeOutCubic(slideT);
      const startOffset = 300;
      let x0 = lerp(-startOffset, -17, slideP);
      let x1 = lerp(startOffset, 17, slideP);
      let scale = 1;
      let diamondOpacity = 1;

      // Phase 2: hold (SLIDE_IN_MS → SLIDE_IN_MS + HOLD_MS)
      // diamonds stay put

      // Phase 3: separate outward (after hold)
      const separateStart = SLIDE_IN_MS + HOLD_MS;
      if (elapsed > separateStart) {
        const sepT = clamp01((elapsed - separateStart) / SEPARATE_MS);
        const sepP = easeInCubic(sepT);
        x0 = lerp(-17, -400, sepP);
        x1 = lerp(17, 400, sepP);
        scale = lerp(1, 0.7, sepP);
        diamondOpacity = 1 - sepP;
      }

      el0.style.transform = `translateX(${x0}px) rotate(45deg) scale(${scale})`;
      el0.style.opacity = String(diamondOpacity);
      el1.style.transform = `translateX(${x1}px) rotate(45deg) scale(${scale})`;
      el1.style.opacity = String(diamondOpacity);

      // Phase 4: overlay fades out
      const fadeStart = separateStart + SEPARATE_MS * 0.3;
      const totalDuration = fadeStart + FADE_MS;
      if (elapsed > fadeStart) {
        const fadeT = clamp01((elapsed - fadeStart) / FADE_MS);
        overlay.style.opacity = String(1 - fadeT);
      }

      if (elapsed < totalDuration) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="diamond-loader-overlay"
    >
      <div className="diamond-loader-diamonds">
        <div ref={d0} className="brand-tile" />
        <div ref={d1} className="brand-tile" />
      </div>
    </div>
  );
}
