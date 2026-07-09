"use client";

import { ReactNode, useEffect, useRef } from "react";

export function TiltedShowcase({
  children,
  baseTilt = 48,
  maxWidth = "1000px",
  perspective = "2200px",
}: {
  children: ReactNode;
  baseTilt?: number;
  maxWidth?: string;
  perspective?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Mobile is a flatter, near-straight-on card rather than the full desktop
    // tilt: a steep 3D rotation reads as cramped on a narrow screen, and the
    // mouse-parallax that justifies the tilt never fires on touch anyway.
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const effectiveTilt = isMobile ? Math.min(baseTilt, 18) : baseTilt;

    if (prefersReducedMotion) {
      card.style.opacity = "1";
      card.style.transform = `rotateX(${effectiveTilt}deg)`;
      return;
    }

    card.style.opacity = "0";
    card.style.transform = "rotateX(90deg) scale(0.85)";

    const entrance = window.setTimeout(() => {
      card.style.transition =
        "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.opacity = "1";
      card.style.transform = `rotateX(${effectiveTilt}deg) scale(1)`;
    }, 150);

    if (isMobile) {
      return () => window.clearTimeout(entrance);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      card.style.transform = `rotateX(${effectiveTilt + y}deg) rotateZ(${x}deg) scale(1)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearTimeout(entrance);
    };
  }, [baseTilt]);

  return (
    <div className="relative" style={{ perspective, perspectiveOrigin: "50% 8%" }}>
      <div
        ref={cardRef}
        className="mx-auto w-full"
        style={{
          maxWidth,
          transform: `rotateX(${baseTilt}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        <div
          className="mt-1 h-8 rounded-b-[22px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 100%)",
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.5), transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
}
