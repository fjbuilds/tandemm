"use client";

import { useLayoutEffect, useRef } from "react";

const STATS = [
  { value: "312%", label: "More Enquiries" },
  { value: "4.6x", label: "Conversion Rate" },
  { value: "47", label: "Leads Per Month" },
  { value: "£1.1M", label: "Revenue Generated" },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function BrandTiles() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const diamond0 = useRef<HTMLDivElement>(null);
  const diamond1 = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      rafRef.current = null;
      const outer = outerRef.current;
      const sticky = stickyRef.current;
      if (!outer || !sticky) return;

      const rect = outer.getBoundingClientRect();
      const viewH = window.innerHeight;
      const totalScroll = outer.offsetHeight - viewH;

      // p goes 0→1 as we scroll through the outer container
      const rawP = totalScroll > 0 ? clamp01(-rect.top / totalScroll) : 0;

      // Phase 1 (0–0.35): diamonds slide in from off-screen and meet
      // Phase 2 (0.35–0.65): diamonds merge / hold
      // Phase 3 (0.65–1.0): diamonds fade, cards appear

      const d0 = diamond0.current;
      const d1 = diamond1.current;
      const cards = cardsRef.current;

      if (d0 && d1) {
        // Slide-in phase (0 → 0.3)
        const slideP = easeOutCubic(clamp01(rawP / 0.3));
        const startOffset = 400;
        const x0 = lerp(-startOffset, -17, slideP);
        const x1 = lerp(startOffset, 17, slideP);

        // Fade-out phase (0.35 → 0.5) — fully gone before cards appear
        const fadeP = clamp01((rawP - 0.35) / 0.15);
        const diamondOpacity = 1 - fadeP;
        const diamondScale = lerp(1, 0.6, fadeP);

        d0.style.transform = `translateX(${x0}px) rotate(45deg) scale(${diamondScale})`;
        d0.style.opacity = String(diamondOpacity);
        d1.style.transform = `translateX(${x1}px) rotate(45deg) scale(${diamondScale})`;
        d1.style.opacity = String(diamondOpacity);
      }

      if (cards) {
        // Cards appear after diamonds are gone (0.5 → 0.85)
        const cardP = easeOutCubic(clamp01((rawP - 0.5) / 0.35));
        cards.style.opacity = String(cardP);
        cards.style.transform = `translateY(${lerp(40, 0, cardP)}px)`;

        const cardEls = cards.children;
        for (let i = 0; i < cardEls.length; i++) {
          const stagger = clamp01((rawP - 0.5 - i * 0.05) / 0.3);
          const cp = easeOutCubic(stagger);
          (cardEls[i] as HTMLElement).style.opacity = String(cp);
          (cardEls[i] as HTMLElement).style.transform = `translateY(${lerp(30, 0, cp)}px)`;
        }
      }
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={outerRef} className="brand-tiles-outer">
      <div ref={stickyRef} className="brand-tiles-sticky">
        {/* Diamonds */}
        <div className="brand-tiles-diamonds">
          <div ref={diamond0} className="brand-tile" />
          <div ref={diamond1} className="brand-tile" />
        </div>

        {/* Stat cards */}
        <div ref={cardsRef} className="brand-stat-cards">
          {STATS.map((s) => (
            <div key={s.label} className="brand-stat-card">
              <div className="brand-stat-value">{s.value}</div>
              <div className="brand-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
