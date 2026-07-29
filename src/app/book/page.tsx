"use client";

import { CSSProperties, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { cn } from "@/lib/utils";

const bookPaletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

interface Finding {
  id: string;
  label: string;
  passed: boolean;
  copy: string;
  severity: number;
}

type ScanData = { findings: Finding[]; failCount: number; scanId: string | null };

type Step = "entry" | "scanning" | "results" | "confirmed";

const CHECKS = [
  { id: "speed", label: "Mobile page speed" },
  { id: "enquiry", label: "Enquiry capture" },
  { id: "reviews", label: "Reviews and testimonials" },
  { id: "seo", label: "Local SEO signals" },
  { id: "mobile", label: "Mobile usability" },
];

export default function BookPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={bookPaletteOverride}
    >
      <Nav active="book" />
      <Suspense>
        <ScanTool />
      </Suspense>
      <Footer />
    </div>
  );
}

function ScanTool() {
  const [step, setStep] = useState<Step>("entry");
  const [url, setUrl] = useState("");
  const [findings, setFindings] = useState<Finding[]>([]);
  const [failCount, setFailCount] = useState(0);
  const [scanId, setScanId] = useState<string | null>(null);
  const [checkStates, setCheckStates] = useState<Record<string, "waiting" | "running" | "done">>(
    () => Object.fromEntries(CHECKS.map((c) => [c.id, "waiting" as const]))
  );
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [panelUnlocked, setPanelUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const scanDataRef = useRef<ScanData | null>(null);
  const autoStarted = useRef(false);
  const searchParams = useSearchParams();

  const startScan = useCallback(() => {
    if (!url.trim()) return;
    runScan(url.trim());
  }, [url]);

  const runScan = useCallback(async (scanUrl: string) => {
    setStep("scanning");
    setProgressPct(0);
    setCheckStates(Object.fromEntries(CHECKS.map((c) => [c.id, "waiting" as const])));
    scanDataRef.current = null;

    const fetchPromise = fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: scanUrl }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Scan failed");
        return res.json();
      })
      .then((data) => {
        scanDataRef.current = { findings: data.findings, failCount: data.failCount, scanId: data.scanId };
      })
      .catch(() => {
        scanDataRef.current = { findings: [], failCount: 0, scanId: null };
      });

    const staggerDelays = [0, 1800, 3200, 5000, 6800];
    const checkDurations = [1600, 1200, 1500, 1600, 1400];

    for (let i = 0; i < CHECKS.length; i++) {
      await new Promise((r) => setTimeout(r, i === 0 ? 400 : staggerDelays[i] - staggerDelays[i - 1]));
      setCheckStates((prev) => ({ ...prev, [CHECKS[i].id]: "running" }));
      setProgressPct(Math.round(((i * 2 + 1) / (CHECKS.length * 2)) * 100));

      await new Promise((r) => setTimeout(r, checkDurations[i]));
      setCheckStates((prev) => ({ ...prev, [CHECKS[i].id]: "done" }));
      setProgressPct(Math.round(((i * 2 + 2) / (CHECKS.length * 2)) * 100));
    }

    await fetchPromise;

    await new Promise((r) => setTimeout(r, 600));

    const data = scanDataRef.current as ScanData | null;
    if (data) {
      setFindings(data.findings);
      setFailCount(data.failCount);
      setScanId(data.scanId);
    }

    setStep("results");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const paramUrl = searchParams.get("url");
    if (paramUrl && !autoStarted.current) {
      autoStarted.current = true;
      setUrl(paramUrl);
      runScan(paramUrl.trim());
    }
  }, [searchParams, runScan]);

  const submitContact = useCallback(async () => {
    if (!contactName.trim() || !contactPhone.trim()) return;
    setSubmitting(true);

    try {
      await fetch("/api/scan/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scanId,
          name: contactName.trim(),
          phone: contactPhone.trim(),
          bestTime,
          url: url.trim(),
          findings,
        }),
      });
    } catch {
      // still unlock
    }

    setPanelUnlocked(true);
    setSubmitting(false);
    setStep("confirmed");
  }, [contactName, contactPhone, bestTime, scanId, url, findings]);

  return (
    <>
      {/* HERO */}
      {(step === "entry" || step === "scanning") && (
        <section className={cn("scan-hero", step === "scanning" && "scan-hero--scanning")}>
          <div className="scan-hero-inner">
            {step === "entry" && (
              <div className="scan-entry">
                <h1 className="scan-headline">
                  Find out what&rsquo;s costing you jobs
                </h1>
                <p className="scan-subheadline">
                  Enter your website below and we will check it against five things that cost trades businesses work every week.
                </p>
                <form
                  className="scan-url-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    startScan();
                  }}
                >
                  <div className="scan-url-input-wrap">
                    <svg className="scan-url-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                    </svg>
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="yourwebsite.co.uk"
                      className="scan-url-input"
                      autoFocus
                      required
                    />
                  </div>
                  <button type="submit" className="scan-submit-btn" disabled={!url.trim()}>
                    See where I&apos;m losing jobs
                  </button>
                </form>
              </div>
            )}

            {step === "scanning" && (
              <div className="scan-processing">
                <div className="scan-processing-header">
                  <p className="scan-processing-url">Scanning {url}</p>
                  <div className="scan-progress-bar">
                    <div className="scan-progress-fill" style={{ width: `${progressPct}%` }} />
                  </div>
                </div>

                <div className="scan-checklist">
                  {CHECKS.map((check) => (
                    <div key={check.id} className={cn("scan-check-row", `scan-check-row--${checkStates[check.id]}`)}>
                      <div className="scan-check-indicator">
                        {checkStates[check.id] === "waiting" && (
                          <div className="scan-check-dot" />
                        )}
                        {checkStates[check.id] === "running" && (
                          <div className="scan-check-spinner" />
                        )}
                        {checkStates[check.id] === "done" && (
                          <svg className="scan-check-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                        )}
                      </div>
                      <span className="scan-check-label">{check.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* RESULTS */}
      {(step === "results" || step === "confirmed") && (
        <section className="scan-results-section">
          <div className="scan-results-inner">
            <div className="scan-results-header">
              <h2 className="scan-results-title">Your site scan results</h2>
              <p className="scan-results-url">{url}</p>
            </div>

            {/* FINDINGS */}
            <div className="scan-findings">
              {findings.map((f, i) => (
                <div
                  key={f.id}
                  className={cn("scan-finding", f.passed ? "scan-finding--pass" : "scan-finding--fail")}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="scan-finding-status">
                    {f.passed ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                    )}
                  </div>
                  <div className="scan-finding-content">
                    <div className="scan-finding-label">{f.label}</div>
                    <p className="scan-finding-copy">{f.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TALLY */}
            {failCount > 0 && (
              <div className="scan-tally">
                You have {failCount} of 5 issue{failCount !== 1 ? "s" : ""} costing you jobs
              </div>
            )}

            {/* LOCKED PANEL / CONTACT FORM */}
            {!panelUnlocked && step === "results" && (
                <div className="scan-gate">
                  <div className="scan-gate-locked">
                    <div className="scan-gate-lock-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <h3 className="scan-gate-title">
                      See exactly how many jobs this is likely costing you each month, and what to fix first.
                    </h3>
                    <p className="scan-gate-sub">
                      Leave your number and one of our team will call you within 24 hours.
                    </p>
                  </div>

                  <div className="scan-contact-form">
                    <div className="scan-contact-fields">
                      <label className="scan-field">
                        <span className="scan-field-label">Your name</span>
                        <input
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Jane Smith"
                          className="scan-field-input"
                          required
                        />
                      </label>
                      <label className="scan-field">
                        <span className="scan-field-label">Phone number</span>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="07..."
                          className="scan-field-input"
                          required
                        />
                      </label>
                      <label className="scan-field">
                        <span className="scan-field-label">Best time to call</span>
                        <div className="scan-time-options">
                          {["Morning", "Afternoon", "Evening"].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setBestTime(t.toLowerCase())}
                              className={cn(
                                "scan-time-btn",
                                bestTime === t.toLowerCase() && "scan-time-btn--active"
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={submitContact}
                      disabled={!contactName.trim() || !contactPhone.trim() || submitting}
                      className="scan-contact-submit"
                    >
                      {submitting ? "Sending..." : "Show me the full picture"}
                    </button>
                  </div>
                </div>
            )}

            {/* CONFIRMED */}
            {step === "confirmed" && (
              <div className="scan-confirmed">
                <div className="scan-confirmed-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                </div>
                <h3 className="scan-confirmed-title">
                  Thanks, we have got your details.
                </h3>
                <p className="scan-confirmed-body">
                  We will call you within 24 hours to talk you through this.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
