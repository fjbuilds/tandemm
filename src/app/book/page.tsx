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

interface Source {
  label: string;
  url: string;
}

interface Finding {
  id: string;
  label: string;
  passed: boolean;
  copy: string;
  severity: number;
  evidence?: string;
  sources?: Source[];
}

interface Snapshot {
  title: string | null;
  metaDescription: string | null;
  contactMethodCount: number | null;
  loadSec: string | null;
  faviconUrl: string | null;
  screenshotUrl: string | null;
  domain: string | null;
}

interface MarketShare {
  lostLow: number;
  lostHigh: number;
  competitorRatioLow: number;
  competitorRatioHigh: number;
}

type ScanData = {
  findings: Finding[];
  failCount: number;
  scanId: string | null;
  snapshot?: Snapshot;
  marketShare?: MarketShare | null;
};

type Step = "entry" | "scanning" | "results" | "confirmed";

function normaliseUrlClient(raw: string): string {
  let u = raw.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  return u;
}

function domainFromUrl(raw: string): string | null {
  try {
    return new URL(normaliseUrlClient(raw)).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

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

const SCAN_STATUSES = [
  "Fetching your homepage HTML…",
  "Running Google PageSpeed test (mobile)…",
  "Reading the <title> tag and meta description…",
  "Counting contact channels (phone, form, WhatsApp, chat)…",
  "Scanning for review widgets, schema and testimonial blocks…",
  "Checking your title against local SEO signals…",
];

function ScanTool() {
  const [step, setStep] = useState<Step>("entry");
  const [url, setUrl] = useState("");
  const [findings, setFindings] = useState<Finding[]>([]);
  const [failCount, setFailCount] = useState(0);
  const [scanId, setScanId] = useState<string | null>(null);
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [marketShare, setMarketShare] = useState<MarketShare | null>(null);
  const [statusIndex, setStatusIndex] = useState(0);
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
    setProgressPct(6);
    setStatusIndex(0);
    scanDataRef.current = null;

    // Progress bar creeps forward while the real fetch runs. Caps at 92 until API returns.
    const started = Date.now();
    const progressTimer = setInterval(() => {
      setProgressPct((p) => {
        const elapsed = (Date.now() - started) / 1000;
        const target = Math.min(92, 6 + Math.round(elapsed * 6));
        return p < target ? target : p;
      });
    }, 300);

    // Status text rotates through the actual jobs being done. Slower than the fetch, so it
    // never advertises something the API has already finished.
    const statusTimer = setInterval(() => {
      setStatusIndex((i) => (i + 1) % SCAN_STATUSES.length);
    }, 1600);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: scanUrl }),
      });
      if (!res.ok) throw new Error("Scan failed");
      const data = await res.json();
      scanDataRef.current = {
        findings: data.findings,
        failCount: data.failCount,
        scanId: data.scanId,
        snapshot: data.snapshot,
        marketShare: data.marketShare ?? null,
      };
    } catch {
      scanDataRef.current = { findings: [], failCount: 0, scanId: null };
    }

    clearInterval(progressTimer);
    clearInterval(statusTimer);
    setProgressPct(100);

    const data = scanDataRef.current as ScanData | null;
    if (data) {
      setFindings(data.findings);
      setFailCount(data.failCount);
      setScanId(data.scanId);
      setSnapshot(data.snapshot ?? null);
      setMarketShare(data.marketShare ?? null);
    }

    // Short beat so the progress bar visibly fills before transitioning.
    await new Promise((r) => setTimeout(r, 350));

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

            {step === "scanning" && (() => {
              const dom = domainFromUrl(url);
              const normalised = normaliseUrlClient(url);
              const previewShot = dom
                ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(normalised)}?w=1200&h=800`
                : null;
              const previewFav = dom
                ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dom)}&sz=64`
                : null;
              return (
                <div className="scan-processing">
                  <SitePreview
                    domain={dom}
                    faviconUrl={previewFav}
                    screenshotUrl={previewShot}
                    loading
                  />
                  <div className="scan-processing-header">
                    <div className="scan-progress-bar">
                      <div className="scan-progress-fill" style={{ width: `${progressPct}%` }} />
                    </div>
                    <p className="scan-processing-status">
                      <span className="scan-processing-status-dot" aria-hidden="true" />
                      {SCAN_STATUSES[statusIndex]}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* RESULTS */}
      {(step === "results" || step === "confirmed") && (() => {
        const passCount = findings.filter((f) => f.passed).length;
        const dom = snapshot?.domain ?? domainFromUrl(url);
        const fav =
          snapshot?.faviconUrl ??
          (dom ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dom)}&sz=64` : null);
        let priorityCounter = 0;
        return (
        <section className="scan-results-section">
          <div className="scan-results-inner">

            {/* HERO. 2-col: big message on the left, real screenshot on the right. */}
            <div className="scan-hero-band">
              <div className="scan-hero-band-copy">
                <div className="scan-hero-band-eyebrow">
                  Website Check {dom && <>for <span className="scan-hero-band-domain">{dom}</span></>}
                </div>
                <h2 className="scan-hero-band-title">
                  {failCount === 0
                    ? "You’re on the front foot."
                    : failCount >= 3
                      ? "Your site is quietly losing you jobs."
                      : "There are a few real gaps we can fix."}
                </h2>
                {marketShare && failCount > 0 && (
                  <div className="scan-hero-metric">
                    <div className="scan-hero-metric-num">
                      {marketShare.competitorRatioLow}
                      {marketShare.competitorRatioHigh > marketShare.competitorRatioLow && (
                        <>-{marketShare.competitorRatioHigh}</>
                      )}
                      <span className="scan-hero-metric-denom">/10</span>
                    </div>
                    <p className="scan-hero-metric-copy">
                      of the people searching for your trade in your area right now are choosing a competitor before they get to you.
                    </p>
                    <div className="scan-hero-metric-sub">
                      Roughly <strong>{marketShare.lostLow}
                      {marketShare.lostHigh > marketShare.lostLow ? `-${marketShare.lostHigh}` : ""}%</strong>{" "}
                      of your local search market going elsewhere.
                    </div>
                  </div>
                )}
                {(!marketShare || failCount === 0) && findings.length > 0 && (
                  <div className="scan-hero-metric scan-hero-metric--pass">
                    <div className="scan-hero-metric-num">
                      5<span className="scan-hero-metric-denom">/5</span>
                    </div>
                    <p className="scan-hero-metric-copy">
                      Your site passes every check. That is rare. The website is only half the picture though. The ceiling now is Google Business Profile, review flow and how fast enquiries get answered.
                    </p>
                  </div>
                )}
                <div className="scan-hero-band-score" aria-label={`${passCount} of ${findings.length} checks passing`}>
                  {findings.map((f) => (
                    <span
                      key={f.id}
                      className={cn("scan-hero-band-dot", f.passed ? "is-pass" : "is-fail")}
                      title={`${f.label}: ${f.passed ? "working" : "needs attention"}`}
                    />
                  ))}
                  <span className="scan-hero-band-score-text">
                    {passCount}/{findings.length} working
                  </span>
                </div>
              </div>
              <div className="scan-hero-band-preview">
                <SitePreview domain={dom} faviconUrl={fav} screenshotUrl={snapshot?.screenshotUrl ?? null} />
              </div>
            </div>

            {/* FINDINGS. Priority-numbered fails, dimmed passes below. */}
            <div className="scan-findings-heading">
              <h3>What we found</h3>
              <span className="scan-findings-heading-count">
                {failCount === 0 ? "All 5 working" : `${failCount} of ${findings.length} to fix`}
              </span>
            </div>
            <div className="scan-findings">
              {findings.map((f, i) => {
                if (!f.passed) priorityCounter += 1;
                const priority = !f.passed ? priorityCounter : null;
                return (
                  <div
                    key={f.id}
                    className={cn("scan-finding", f.passed ? "scan-finding--pass" : "scan-finding--fail")}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="scan-finding-lead">
                      <div className="scan-finding-status">
                        {f.passed ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                        ) : priority ? (
                          <span className="scan-finding-priority">{priority}</span>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4M12 16h.01" />
                          </svg>
                        )}
                      </div>
                      <div className="scan-finding-badges">
                        <span className={cn("scan-finding-badge", f.passed ? "is-pass" : "is-fail")}>
                          {f.passed ? "Working" : f.severity >= 5 ? "Critical" : f.severity >= 4 ? "High priority" : "Fix this"}
                        </span>
                      </div>
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
                      {f.sources && f.sources.length > 0 && (
                        <div className="scan-finding-sources">
                          <span className="scan-finding-sources-label">Sources:</span>
                          {f.sources.map((s, si) => (
                            <a
                              key={s.url}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="scan-finding-source-link"
                            >
                              {s.label}
                              {si < (f.sources?.length ?? 0) - 1 ? "," : ""}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Raw scan data. Collapsed by default. Proof that this was a real check. */}
            {snapshot && (snapshot.title || snapshot.metaDescription || snapshot.contactMethodCount !== null || snapshot.loadSec) && (
              <details className="scan-snapshot-details">
                <summary>
                  <span>What we actually read on your site</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <ul className="scan-snapshot-list">
                  {snapshot.title && (
                    <li>
                      <span className="scan-snapshot-key">&lt;title&gt; tag</span>
                      <span className="scan-snapshot-val">&ldquo;{snapshot.title.length > 100 ? snapshot.title.slice(0, 97) + "…" : snapshot.title}&rdquo;</span>
                    </li>
                  )}
                  {snapshot.metaDescription && (
                    <li>
                      <span className="scan-snapshot-key">Meta description</span>
                      <span className="scan-snapshot-val">&ldquo;{snapshot.metaDescription.length > 140 ? snapshot.metaDescription.slice(0, 137) + "…" : snapshot.metaDescription}&rdquo;</span>
                    </li>
                  )}
                  {snapshot.contactMethodCount !== null && (
                    <li>
                      <span className="scan-snapshot-key">Contact methods</span>
                      <span className="scan-snapshot-val">{snapshot.contactMethodCount} detected on homepage</span>
                    </li>
                  )}
                  {snapshot.loadSec && (
                    <li>
                      <span className="scan-snapshot-key">Mobile load</span>
                      <span className="scan-snapshot-val">{snapshot.loadSec}s (Google PageSpeed)</span>
                    </li>
                  )}
                </ul>
              </details>
            )}

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
                      {failCount === 0
                        ? "Let’s talk about how to get you more of your area."
                        : "Let’s talk through how to fix this and bring in more customers."}
                    </h3>
                    <p className="scan-gate-sub">
                      {failCount === 0
                        ? `Leave your number and we will call within 24 hours to walk you through how we help trades like yours win a bigger share of local searches. Specific to ${url.replace(/^https?:\/\//, "")}, no generic pitch.`
                        : `Leave your number and we will call you within 24 hours to talk through what to fix first, in what order, and how we would help you bring in more customers from your area. Specific to ${url.replace(/^https?:\/\//, "")}, no generic pitch.`}
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
                      {submitting ? "Sending..." : "Book my call →"}
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
        );
      })()}
    </>
  );
}

function SitePreview({
  domain,
  faviconUrl,
  screenshotUrl,
  loading = false,
}: {
  domain: string | null;
  faviconUrl: string | null;
  screenshotUrl: string | null;
  loading?: boolean;
}) {
  if (!domain) return null;
  return (
    <div className={cn("site-preview", loading && "site-preview--loading")}>
      <div className="site-preview-chrome">
        <div className="site-preview-chrome-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="site-preview-chrome-bar">
          {faviconUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={faviconUrl} alt="" className="site-preview-favicon" width={16} height={16} />
          )}
          <span className="site-preview-domain">{domain}</span>
        </div>
      </div>
      <div className="site-preview-shot">
        {screenshotUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshotUrl}
              alt={`Screenshot of ${domain}`}
              className="site-preview-shot-img"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {loading && (
              <div className="site-preview-shot-overlay">
                <div className="site-preview-shot-spinner" aria-hidden="true" />
                <span>Rendering live screenshot…</span>
              </div>
            )}
          </>
        ) : (
          <div className="site-preview-shot-fallback">No preview available</div>
        )}
      </div>
    </div>
  );
}
