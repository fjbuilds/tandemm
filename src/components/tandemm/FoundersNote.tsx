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
    <section className="v2-section-pad px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-[760px]">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-6 py-8 sm:px-10 sm:py-10">
            {/* faces */}
            <div className="mb-5 flex items-center justify-center gap-3">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/brand/team/owen.jpg"
                alt="Owen Harris, co-founder of Tandemm"
                className="h-16 w-16 rounded-full object-cover grayscale ring-2 ring-[var(--color-canvas)] sm:h-[72px] sm:w-[72px]"
              />
              <img
                src="/brand/team/fj.jpg"
                alt="FJ, co-founder of Tandemm"
                className="h-16 w-16 rounded-full object-cover grayscale ring-2 ring-[var(--color-canvas)] sm:h-[72px] sm:w-[72px]"
              />
              {/* eslint-enable @next/next/no-img-element */}
            </div>

            <div className="text-center">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Who you&rsquo;re dealing with
              </div>
              <p className="mx-auto max-w-[520px] font-[family-name:var(--font-display)] text-[18px] leading-[1.4] font-semibold text-[var(--color-ink)] sm:text-[20px]">
                It&rsquo;s just the two of us. You&rsquo;ll speak to Owen or
                FJ &mdash; every call, every check&#8209;in. Not a rota, not a junior.
              </p>
              <p className="mx-auto mt-3 max-w-[500px] text-[14px] leading-[1.6] text-[var(--color-ink-muted)]">
                Owen runs design and SEO. FJ runs paid ads. Both of us handle
                new-client calls. Same numbers, same people, every month.
              </p>
              <div className="mt-5 text-[13px] font-semibold text-[var(--color-ink-muted)]">
                &mdash; Owen &amp; FJ&nbsp;&middot;&nbsp;
                <Link
                  href="/about"
                  className="text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  more about us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
