"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CallScriptDemo } from "./CallScriptDemo";
import { IconArrowRight } from "./Icons";

export function TopoHero() {
  const groupRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const baseRotateX = isMobile ? 14 : 36;
    const baseRotateZ = isMobile ? 0 : -13;

    if (prefersReducedMotion) {
      group.style.opacity = "1";
      group.style.transform = `rotateX(${baseRotateX}deg) rotateZ(${baseRotateZ}deg)`;
      return;
    }

    group.style.opacity = "0";
    group.style.transform = "rotateX(90deg) scale(0.85)";

    const entrance = window.setTimeout(() => {
      group.style.transition =
        "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
      group.style.opacity = "1";
      group.style.transform = `rotateX(${baseRotateX}deg) rotateZ(${baseRotateZ}deg) scale(1)`;
    }, 150);

    if (isMobile) {
      return () => window.clearTimeout(entrance);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 45;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      group.style.transform = `rotateX(${baseRotateX + y}deg) rotateZ(${baseRotateZ + x}deg) scale(1)`;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 0.6;
        layer.style.setProperty("--parallax-x", `${x * depth}px`);
        layer.style.setProperty("--parallax-y", `${y * depth}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearTimeout(entrance);
    };
  }, []);

  return (
    <section className="dark relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-background">
      {/* Grain texture */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <filter id="topo-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves={2} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05]"
        style={{ filter: "url(#topo-grain)" }}
        aria-hidden="true"
      />

      {/* Radar contour rings */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 46px, color-mix(in srgb, var(--primary) 30%, transparent) 47px, transparent 48px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 1400px 900px at 50% 40%, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Label grid overlay */}
      <div className="pointer-events-none relative z-10 grid grid-rows-[1fr_auto] gap-8 px-6 py-8 sm:px-10 sm:py-10 md:flex-1 lg:px-16">
        <h1
          className="mix-blend-difference self-start text-[12vw] font-bold leading-[0.88] tracking-tight text-foreground sm:text-[7vw] lg:text-[5.5vw]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Give every rep
          <br />
          your best rep&apos;s playbook.
        </h1>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/product"
            className="pointer-events-auto inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
          >
            See how it works
            <IconArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="pointer-events-auto inline-flex w-fit cursor-pointer items-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform duration-200 ease-out hover:-translate-y-1"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%)",
            }}
          >
            Book a demo
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Layered 3D product stack */}
      <div
        className="pointer-events-none relative mt-8 flex justify-center px-6 pb-8 md:absolute md:inset-0 md:z-[5] md:mt-0 md:items-end md:justify-center md:px-0 md:pb-14"
        style={{ perspective: "1800px", perspectiveOrigin: "50% 65%" }}
      >
        <div
          ref={groupRef}
          className="relative"
          style={{
            width: "min(88vw, 460px)",
            height: "min(52vh, 420px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={(el) => {
              layersRef.current[0] = el;
            }}
            className="absolute inset-0 rounded-2xl border border-border bg-card p-6 opacity-45 blur-[1px]"
            style={{
              transform:
                "translateZ(-70px) translate(calc(-34px + var(--parallax-x, 0px)), calc(-26px + var(--parallax-y, 0px))) rotateZ(-5deg)",
            }}
          >
            <p className="text-sm font-semibold text-card-foreground">
              Manager analytics
            </p>
            <div className="mt-5 space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-primary/50" />
              <div className="h-2 w-1/2 rounded-full bg-primary/35" />
              <div className="h-2 w-5/6 rounded-full bg-primary/25" />
            </div>
          </div>

          <div
            ref={(el) => {
              layersRef.current[1] = el;
            }}
            className="absolute inset-0 rounded-2xl border border-border bg-card p-6 opacity-70"
            style={{
              transform:
                "translateZ(-25px) translate(calc(-14px + var(--parallax-x, 0px)), calc(-10px + var(--parallax-y, 0px))) rotateZ(-2deg)",
            }}
          >
            <p className="text-sm font-semibold text-card-foreground">
              Live transcript
            </p>
            <div className="mt-4 space-y-2.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <p>[00:12] Rep: got 30 seconds before you go?</p>
              <p>[00:15] Prospect: is this a sales call?</p>
              <p>[00:16] Prompt: reframe as discovery, not pitch</p>
            </div>
          </div>

          <div
            ref={(el) => {
              layersRef.current[2] = el;
            }}
            className="pointer-events-auto absolute inset-0"
            style={{
              transform:
                "translateZ(35px) translate(calc(14px + var(--parallax-x, 0px)), calc(12px + var(--parallax-y, 0px)))",
            }}
          >
            <CallScriptDemo className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
