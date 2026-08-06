"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const PRINCIPLES = [
  {
    n: 1,
    title: "Talk straight",
    body: "No jargon walls, no inflated promises. If a channel won't pay back for your area or your budget, we say so before you spend a penny.",
  },
  {
    n: 2,
    title: "Build to convert",
    body: "Fast, clear, honest. Every page has one job: turn a homeowner into an enquiry. No filler, no stock hero shots, no clever animations getting in the way.",
  },
  {
    n: 3,
    title: "Stay after launch",
    body: "A site that stands still loses ground. We keep tuning it, adding pages and earning links, so you stay at the top of Google month after month.",
  },
];

// Hand-drawn portrait illustrations. Simple, warm, character-driven —
// the goal is a "sketched by a mate" feel, not a photorealistic headshot.
function OwenPortrait({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 340"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustrated portrait of Owen"
    >
      <defs>
        <pattern id="owenGrain" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#1B2320" opacity="0.06" />
        </pattern>
      </defs>
      {/* backdrop */}
      <rect width="300" height="340" fill="#F1DCC4" />
      <rect width="300" height="340" fill="url(#owenGrain)" />
      {/* shoulders / shirt */}
      <path
        d="M40 340 C 55 265, 105 245, 150 245 C 195 245, 245 265, 260 340 Z"
        fill="#24425A"
      />
      <path
        d="M120 250 L 150 285 L 180 250"
        fill="none"
        stroke="#1B2320"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* neck */}
      <path
        d="M128 235 L 128 260 Q 150 275 172 260 L 172 235 Z"
        fill="#E8C9A6"
      />
      {/* head */}
      <path
        d="M92 150 C 92 100, 118 78, 150 78 C 182 78, 208 100, 208 150 C 208 195, 188 240, 150 240 C 112 240, 92 195, 92 150 Z"
        fill="#EBD1B1"
        stroke="#1B2320"
        strokeWidth="2.5"
      />
      {/* hair — short crop, textured */}
      <path
        d="M92 138 C 90 95, 118 68, 150 68 C 184 68, 212 92, 210 140 C 205 130, 195 122, 180 120 C 176 108, 158 100, 145 105 C 130 100, 112 108, 104 122 C 98 126, 94 132, 92 138 Z"
        fill="#3A2A1E"
        stroke="#1B2320"
        strokeWidth="2"
      />
      <path d="M104 108 L 112 120" stroke="#1B2320" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M118 100 L 124 116" stroke="#1B2320" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M180 108 L 176 122" stroke="#1B2320" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* eyebrows */}
      <path d="M112 152 Q 122 148 132 152" stroke="#1B2320" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M168 152 Q 178 148 188 152" stroke="#1B2320" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="122" cy="164" r="3" fill="#1B2320" />
      <circle cx="178" cy="164" r="3" fill="#1B2320" />
      {/* nose */}
      <path d="M150 168 L 146 195 Q 150 200 154 195" stroke="#1B2320" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* mouth — small smile */}
      <path d="M134 214 Q 150 226 166 214" stroke="#1B2320" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* beard stubble */}
      <path d="M108 200 Q 150 250 192 200" stroke="#3A2A1E" strokeWidth="1.4" fill="none" opacity="0.35" />
      <path d="M115 210 Q 150 245 185 210" stroke="#3A2A1E" strokeWidth="1.4" fill="none" opacity="0.28" />
      {/* ear */}
      <path d="M92 172 Q 84 178 90 190 Q 94 194 96 190" fill="#EBD1B1" stroke="#1B2320" strokeWidth="2" />
      <path d="M208 172 Q 216 178 210 190 Q 206 194 204 190" fill="#EBD1B1" stroke="#1B2320" strokeWidth="2" />
      {/* name plaque */}
      <rect x="20" y="300" width="90" height="26" rx="4" fill="#1B2320" />
      <text x="65" y="317" textAnchor="middle" fill="#F1DCC4" fontSize="13" fontWeight="700" fontFamily="var(--font-display), serif" letterSpacing="1.5">
        OWEN
      </text>
    </svg>
  );
}

function FJPortrait({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 340"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustrated portrait of FJ"
    >
      <defs>
        <pattern id="fjGrain" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#1B2320" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="300" height="340" fill="#C9D6D0" />
      <rect width="300" height="340" fill="url(#fjGrain)" />
      {/* shoulders — different colour to differentiate */}
      <path
        d="M40 340 C 55 265, 105 245, 150 245 C 195 245, 245 265, 260 340 Z"
        fill="#A9551F"
      />
      {/* collar — open neck tee */}
      <path
        d="M128 250 Q 150 268 172 250"
        fill="none"
        stroke="#1B2320"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* neck */}
      <path
        d="M128 235 L 128 260 Q 150 275 172 260 L 172 235 Z"
        fill="#D6B08A"
      />
      {/* head — slightly narrower jaw */}
      <path
        d="M94 148 C 94 98, 120 76, 150 76 C 180 76, 206 98, 206 148 C 206 200, 184 238, 150 238 C 116 238, 94 200, 94 148 Z"
        fill="#DAB48F"
        stroke="#1B2320"
        strokeWidth="2.5"
      />
      {/* hair — swept, longer on top */}
      <path
        d="M96 140 C 92 92, 122 62, 156 66 C 190 70, 210 96, 208 138 C 200 118, 188 108, 172 110 C 160 92, 132 92, 118 108 C 108 114, 100 126, 96 140 Z"
        fill="#1B1512"
        stroke="#1B2320"
        strokeWidth="2"
      />
      {/* hair sweep line */}
      <path
        d="M108 120 Q 145 92, 200 118"
        stroke="#1B2320"
        strokeWidth="1.4"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M112 128 Q 150 108, 198 128"
        stroke="#1B2320"
        strokeWidth="1.2"
        fill="none"
        opacity="0.4"
      />
      {/* eyebrows */}
      <path d="M112 154 Q 122 149 132 154" stroke="#1B2320" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M168 154 Q 178 149 188 154" stroke="#1B2320" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="122" cy="166" r="3" fill="#1B2320" />
      <circle cx="178" cy="166" r="3" fill="#1B2320" />
      {/* nose */}
      <path d="M150 172 L 145 198 Q 150 204 155 198" stroke="#1B2320" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* mouth — subtle grin */}
      <path d="M132 216 Q 150 224 168 216" stroke="#1B2320" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* full beard */}
      <path
        d="M100 190 Q 108 240, 150 246 Q 192 240, 200 190 Q 190 220, 168 216 Q 150 224, 132 216 Q 110 220, 100 190 Z"
        fill="#1B1512"
        opacity="0.9"
        stroke="#1B2320"
        strokeWidth="1.5"
      />
      {/* moustache */}
      <path
        d="M124 208 Q 150 200, 176 208 Q 168 214, 150 214 Q 132 214, 124 208 Z"
        fill="#1B1512"
      />
      {/* ears */}
      <path d="M94 172 Q 86 178 92 190 Q 96 194 98 190" fill="#DAB48F" stroke="#1B2320" strokeWidth="2" />
      <path d="M206 172 Q 214 178 208 190 Q 204 194 202 190" fill="#DAB48F" stroke="#1B2320" strokeWidth="2" />
      {/* name plaque */}
      <rect x="20" y="300" width="70" height="26" rx="4" fill="#1B2320" />
      <text x="55" y="317" textAnchor="middle" fill="#C9D6D0" fontSize="13" fontWeight="700" fontFamily="var(--font-display), serif" letterSpacing="1.5">
        FJ
      </text>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="about" />

      {/* ── HERO ── */}
      <section className="px-6 pb-14 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              About
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Two of us. Built for trades.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              We only work with tradespeople. Not gyms, not clinics,
              not restaurants. Every hour we spend, every page we build,
              every ad we run, is inside one industry &mdash; so we get good at it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)]">
              <OwenPortrait className="block h-auto w-full" />
              <div className="px-7 py-6 sm:px-8 sm:py-7">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Co-founder &mdash; Growth &amp; Ads
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-bold leading-tight sm:text-[24px]">
                  Owen Harris
                </h3>
                <p className="text-[15.5px] leading-[1.62] text-[var(--color-ink-muted)]">
                  Owen runs the paid side &mdash; Google, Local Services, the
                  tracking behind it. Seven years inside agencies before this,
                  most of it burning other people&rsquo;s budgets on trade
                  accounts nobody was paying proper attention to. He&rsquo;s
                  the one on the phone when your cost-per-lead moves.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)]">
              <FJPortrait className="block h-auto w-full" />
              <div className="px-7 py-6 sm:px-8 sm:py-7">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Co-founder &mdash; Sites &amp; SEO
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-bold leading-tight sm:text-[24px]">
                  FJ
                </h3>
                <p className="text-[15.5px] leading-[1.62] text-[var(--color-ink-muted)]">
                  FJ builds the sites and does the ranking work &mdash; the
                  page structure, the local SEO, the quiet grind that puts
                  you top of Google in your town. Design background,
                  developer hands, and a stubborn streak about page speed.
                  If it loads slow, he doesn&rsquo;t sleep.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Why we started this
            </div>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              We watched people we love do brilliant work &mdash; and still fight for the next job.
            </h2>
          </Reveal>

          <div className="space-y-6 text-[16.5px] leading-[1.7] text-[var(--color-ink)]">
            <Reveal>
              <p>
                Both of us grew up around trades. Uncles on the tools, mates
                who went out on their own after their apprenticeship, family
                members quoting jobs in the evenings after a full day on site.
                Good work. Fair prices. Repeat customers who&rsquo;d recommend
                them to anyone.
              </p>
            </Reveal>
            <Reveal>
              <p>
                And still, every winter, the same conversation. &ldquo;It&rsquo;s
                gone quiet.&rdquo; &ldquo;I&rsquo;m chasing quotes that never come
                back.&rdquo; &ldquo;The bloke down the road with the bad reviews is
                somehow rammed.&rdquo; The problem was never the work. It was
                that nobody in their town knew they existed until a neighbour
                happened to mention them.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Meanwhile we were sat in agencies watching trade accounts get
                treated like an afterthought &mdash; template sites, ads run by
                whoever was free that week, no one who&rsquo;d ever set foot on a
                job. So we left, put our heads down, and built the thing we
                wished those family members had five years ago.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DISARM SECTION ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 className="mb-3 text-center font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              &ldquo;I&rsquo;ve been burned by marketing lads before.&rdquo;
            </h2>
            <p className="mx-auto mb-12 max-w-[560px] text-center text-[16.5px] leading-[1.6] text-[var(--color-ink-muted)]">
              Fair. Most trades we speak to have. Here&rsquo;s how we&rsquo;re
              different &mdash; and if you don&rsquo;t buy it, don&rsquo;t sign anything.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                q: "“They signed me up then vanished.”",
                a: "One of us is on your account &mdash; not a junior, not a rota. Same number every time.",
              },
              {
                q: "“I paid for a site I can’t change.”",
                a: "You own everything. Domain, site, ad account. If we ever part ways, it all leaves with you.",
              },
              {
                q: "“I’ve no idea what they actually did.”",
                a: "One dashboard. Every call, every form, every job, traced back to what caused it. Look any time.",
              },
              {
                q: "“The leads were rubbish.”",
                a: "We tune the ads and the forms to filter out tyre-kickers, and we sit with you monthly to check the ones that came through.",
              },
              {
                q: "“I’m too old-school for all this.”",
                a: "Cool. You keep doing the work. We handle the phone-ringing part and explain it in plain English when you want to know.",
              },
              {
                q: "“It’s another monthly bill.”",
                a: "It is. And if the jobs it brings in don’t cover it many times over inside the first quarter, we tell you and we stop.",
              },
            ].map((item) => (
              <Reveal key={item.q}>
                <div className="h-full rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-6 py-6">
                  <p className="mb-2 font-[family-name:var(--font-display)] text-[16px] font-bold leading-snug text-[var(--color-ink)]">
                    {item.q}
                  </p>
                  <p className="text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              How we work
            </div>
            <h2 className="max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Three rules we don&rsquo;t break.
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.n}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-t border-[var(--color-hairline)] py-7 first:border-t-0 first:pt-0 sm:gap-x-8 sm:py-9">
                  <span className="font-[family-name:var(--font-display)] text-[clamp(38px,9vw,64px)] font-extrabold leading-[0.8] tracking-[-0.03em] text-[var(--color-accent)]/25">
                    {String(p.n).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold sm:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="max-w-[520px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)] sm:text-[15.5px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Have a look at what&rsquo;s actually costing you jobs.
              </h2>
              <p className="mx-auto mt-4 max-w-[500px] text-[15.5px] leading-[1.55] opacity-80">
                Free 20-minute call. One of us, not a salesperson. We tell you
                what we&rsquo;d change and whether it&rsquo;s worth changing.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/book"
                  variant="secondary"
                  className="border-white/25 bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Book the call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
