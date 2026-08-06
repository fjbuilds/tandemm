"use client";

import { CSSProperties, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { TANDEMM_WHATSAPP } from "@/components/tandemm/ContactOptions";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const INCLUDES = [
  "A website built for your trade and your area.",
  "Hands-on SEO every month, pushing you up Google where you work.",
  "The Tandemm app to take enquiries and run the day from your phone.",
];

export default function StartPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const canSubmit =
    name.trim().length > 1 &&
    /.+@.+\..+/.test(email) &&
    phone.trim().length >= 7 &&
    status !== "sending";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          trade: trade.trim(),
          area: area.trim(),
          source: "start-page",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="pricing" />

      <section className="mx-auto max-w-[1160px] px-6 pb-16 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <Reveal>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(34px,4.6vw,52px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
                Leave your details.
                <br />
                We&rsquo;ll call you within 24 hours.
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
                A real person on the other end. We&rsquo;ll walk you through
                how Tandemm would work for your trade, answer anything you
                want to ask, and pick a start date if it makes sense. No card,
                no commitment.
              </p>
            </Reveal>

            {/* Includes */}
            <Reveal>
              <div className="mt-10 rounded-[var(--radius-lg)] bg-[var(--color-surface-muted)] p-6">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  What you&rsquo;d be getting
                </div>
                <ul className="space-y-2.5">
                  {INCLUDES.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-[var(--color-ink)]"
                    >
                      <svg
                        className="mt-[3px] h-4 w-4 shrink-0 text-[var(--color-accent)]"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[var(--color-ink-muted)]">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5 text-[var(--color-accent)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    90-day money-back promise
                  </span>
                  <span>No contract, cancel anytime</span>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp */}
            <Reveal>
              <div className="mt-8 flex items-center gap-2 text-[14px] text-[var(--color-ink-muted)]">
                <svg
                  className="h-4 w-4 text-[var(--color-ink-muted)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Rather just ask?{" "}
                <a
                  href={TANDEMM_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-accent)] underline underline-offset-2"
                >
                  WhatsApp us &rarr;
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT. FORM */}
          <Reveal>
            <div className="sticky top-[92px]">
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-2)] sm:p-8">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Get in touch
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-[24px] font-extrabold leading-tight tracking-[-0.01em] text-[var(--color-ink)]">
                  Your details, our call.
                </h2>
                <p className="mt-1 text-[13.5px] text-[var(--color-ink-muted)]">
                  We&rsquo;ll ring you within 24 hours.
                </p>

                {status === "sent" ? (
                  <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-6 text-center">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                    </div>
                    <div className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[var(--color-ink)]">
                      Got it. We&rsquo;ll be in touch.
                    </div>
                    <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                      One of the team will call you within one working day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="mt-6 space-y-4">
                    <Field
                      label="Full name"
                      value={name}
                      onChange={setName}
                      placeholder="e.g. James Smith"
                      autoComplete="name"
                      required
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                    <Field
                      label="Mobile"
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                      placeholder="07700 900 000"
                      autoComplete="tel"
                      required
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Trade"
                        value={trade}
                        onChange={setTrade}
                        placeholder="Plumber, electrician…"
                      />
                      <Field
                        label="Area"
                        value={area}
                        onChange={setArea}
                        placeholder="Postcode or town"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="mt-2 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-5 text-[15px] font-semibold text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--color-ink-faint)] disabled:opacity-70"
                    >
                      {status === "sending"
                        ? "Sending…"
                        : "Continue →"}
                    </button>

                    {status === "error" && (
                      <p className="text-[13px] text-red-600">
                        Something went wrong. Please try again, or WhatsApp us.
                      </p>
                    )}
                    <p className="pt-1 text-center text-[12px] text-[var(--color-ink-faint)]">
                      No card, no commitment.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-primary)]"
      />
    </label>
  );
}
