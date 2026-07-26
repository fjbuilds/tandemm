"use client";

import { CSSProperties, useCallback, useRef, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
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

type Step = "entry" | "scanning" | "results" | "confirmed";

const SCAN_MESSAGES = [
  "Checking your mobile speed",
  "Reviewing how customers can reach you",
  "Looking for reviews and testimonials",
  "Checking your visibility in local search",
  "Scoring your results",
];

export default function BookPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={bookPaletteOverride}
    >
      <Nav active="book" />
      <ScanTool />
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
  const [scanMsg, setScanMsg] = useState(SCAN_MESSAGES[0]);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [panelUnlocked, setPanelUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const msgInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScan = useCallback(async () => {
    if (!url.trim()) return;
    setStep("scanning");

    let msgIdx = 0;
    msgInterval.current = setInterval(() => {
      msgIdx = (msgIdx + 1) % SCAN_MESSAGES.length;
      setScanMsg(SCAN_MESSAGES[msgIdx]);
    }, 1600);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) throw new Error("Scan failed");

      const data = await res.json();
      setFindings(data.findings);
      setFailCount(data.failCount);
      setScanId(data.scanId);
    } catch {
      setFindings([]);
      setFailCount(0);
    } finally {
      if (msgInterval.current) clearInterval(msgInterval.current);
      setTimeout(() => {
        setStep("results");
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 400);
    }
  }, [url]);

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
        <section className="scan-hero">
          <div className="scan-hero-inner">
            {step === "entry" && (
              <Reveal>
                <div className="scan-entry">
                  <h1 className="scan-headline">
                    Find out what&rsquo;s costing you jobs
                  </h1>
                  <p className="scan-subheadline">
                    Enter your website below and see it in seconds.
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
                      Scan my site
                    </button>
                  </form>
                </div>
              </Reveal>
            )}

            {step === "scanning" && (
              <div className="scan-processing">
                <div className="scan-spinner">
                  <div className="scan-spinner-ring" />
                  <div className="scan-spinner-diamond" />
                </div>
                <p className="scan-processing-url">{url}</p>
                <p className="scan-processing-msg">{scanMsg}</p>
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
                      Leave your number and we will walk you through it.
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
