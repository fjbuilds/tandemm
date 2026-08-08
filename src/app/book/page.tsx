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
  evidence?: string;
}

interface Snapshot {
  title: string | null;
  contactMethodCount: number | null;
  loadSec: string | null;
}

interface Estimate {
  low: number;
  high: number;
}

type ScanData = {
  findings: Finding[];
  failCount: number;
  scanId: string | null;
  snapshot?: Snapshot;
  estimate?: Estimate | null;
};

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
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
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
        scanDataRef.current = {
          findings: data.findings,
          failCount: data.failCount,
          scanId: data.scanId,
          snapshot: data.snapshot,
          estimate: data.estimate ?? null,
        };
      })
      .catch(() => {
        scanDataRef.current = { findings: [], failCount: 0, scanId: null };
      });

    const staggerDelays = [0, 550, 1100, 1700, 2250];
    const checkDurations = [700, 550, 650, 600, 550];

    for (let i = 0; i < CHECKS.length; i++) {
      await new Promise((r) => setTimeout(r, i === 0 ? 200 : staggerDelays[i] - staggerDelays[i - 1]));
      setCheckStates((prev) => ({ ...prev, [CHECKS[i].id]: "running" }));
      setProgressPct(Math.round(((i * 2 + 1) / (CHECKS.length * 2)) * 100));

      await new Promise((r) => setTimeout(r, checkDurations[i]));
      setCheckStates((prev) => ({ ...prev, [CHECKS[i].id]: "done" }));
      setProgressPct(Math.round(((i * 2 + 2) / (CHECKS.length * 2)) * 100));
    }

    await fetchPromise;

    const data = scanDataRef.current as ScanData | null;
    if (data) {
      setFindings(data.findings);
      setFailCount(data.failCount);
      setScanId(data.scanId);
      setSnapshot(data.snapshot ?? null);
      setEstimate(data.estimate ?? null);
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
                  See what&rsquo;s losing you work.
                </h1>
                <p className="scan-subheadline">
                  Drop your website in. We&rsquo;ll read it live and show you the 5 things that quietly send trade jobs to your competitors.
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
              {snapshot && (snapshot.title || snapshot.contactMethodCount !== null || snapshot.loadSec) && (
                <div className="scan-snapshot">
                  <span className="scan-snapshot-label">What we read on your site</span>
                  <ul className="scan-snapshot-list">
                    {snapshot.title && (
                      <li>
                        <span className="scan-snapshot-key">Homepage title</span>
                        <span className="scan-snapshot-val">&ldquo;{snapshot.title.length > 80 ? snapshot.title.slice(0, 77) + "…" : snapshot.title}&rdquo;</span>
                      </li>
                    )}
                    {snapshot.contactMethodCount !== null && (
                      <li>
                        <span className="scan-snapshot-key">Contact methods</span>
                        <span className="scan-snapshot-val">{snapshot.contactMethodCount} detected</span>
                      </li>
                    )}
                    {snapshot.loadSec && (
                      <li>
                        <span className="scan-snapshot-key">Load time</span>
                        <span className="scan-snapshot-val">{snapshot.loadSec}s on mobile</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* TALLY — money headline, above findings so it lands first */}
            {estimate && failCount > 0 && (
              <div className="scan-tally">
                Estimated <strong>£{estimate.low.toLocaleString()}–£{estimate.high.toLocaleString()}</strong> in jobs slipping away every month.
                <span className="scan-tally-sub">{failCount} of 5 checks failed. Details below.</span>
              </div>
            )}
            {!estimate && failCount === 0 && findings.length > 0 && (
              <div className="scan-tally scan-tally--pass">
                Your site passes all 5 checks. There are still faster ways to win more of your area — worth a chat.
              </div>
            )}

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
                    {f.evidence && (
                      <div className="scan-finding-evidence">
                        <span className="scan-finding-evidence-tag">Evidence</span>
                        <span>{f.evidence}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* LOCKED PANEL / CONTACT FORM */}
            {!panelUnlocked && step === "results" && (
                <div className="scan-gate">
                  <div className="scan-gate-locked">
                    <div className="scan-gate-lock-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2l2.4 6.8L21 10l-5 4.4L17.5 22 12 18.2 6.5 22 8 14.4 3 10l6.6-1.2z" />
                      </svg>
                    </div>
                    <h3 className="scan-gate-title">
                      Want the fix plan?
                    </h3>
                    <p className="scan-gate-sub">
                      Free 15-minute call within 24 hours. We&rsquo;ll walk you through what to fix first, in what order, and what it would recover — for {url.replace(/^https?:\/\//, "")}. No pitch deck, no card, no follow-up spam.
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
                      {submitting ? "Sending..." : "Get my free fix plan →"}
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
