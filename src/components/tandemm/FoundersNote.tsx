"use client";

import Link from "next/link";
import { Reveal } from "@/components/tandemm/Reveal";

/**
 * Small trust anchor for the home page — a signed note from Owen and FJ
 * making it plain who the "human" behind the site actually is. Kept
 * visually distinct from the About page's founder cards (circular
 * avatars, personal tone, single band).
 */
export function FoundersNote() {
  return (
    <section className="px-6 pb-6 pt-2 sm:pb-10 sm:pt-4">
      <div className="mx-auto max-w-[760px]">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
            {/* faces */}
            <div className="flex flex-shrink-0 items-center -space-x-2">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/brand/team/owen.jpg"
                alt="Owen Harris, co-founder of Tandemm"
                className="h-14 w-14 rounded-full object-cover grayscale ring-2 ring-[var(--color-canvas)] sm:h-[60px] sm:w-[60px]"
              />
              <img
                src="/brand/team/fj.jpg"
                alt="FJ, co-founder of Tandemm"
                className="h-14 w-14 rounded-full object-cover grayscale ring-2 ring-[var(--color-canvas)] sm:h-[60px] sm:w-[60px]"
              />
              {/* eslint-enable @next/next/no-img-element */}
            </div>

            <div className="flex-1">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                It&rsquo;s just the two of us
              </div>
              <p className="max-w-[520px] font-[family-name:var(--font-display)] text-[16px] leading-[1.4] font-semibold text-[var(--color-ink)] sm:text-[17px]">
                Owen runs design and SEO. FJ runs paid ads. Both of us
                answer the phone.{" "}
                <Link
                  href="/about"
                  className="whitespace-nowrap text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  About us &rarr;
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
