"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { key: "found", label: "Get found", tag: "Website + SEO" },
  { key: "enquiry", label: "Win the enquiry", tag: "Duo app" },
  { key: "quote", label: "Send the quote", tag: "Duo app" },
  { key: "paid", label: "Get paid", tag: "Duo app" },
] as const;

const CYCLE_MS = 2900;

export function HeroStages() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % STAGES.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hs" aria-hidden="true">
      <div className="hs-glow" />
      <div className="hs-card">
        {/* header: stage rail */}
        <div className="hs-rail">
          {STAGES.map((s, i) => (
            <div
              key={s.key}
              className={`hs-rail-item ${i === active ? "is-active" : ""} ${
                i < active ? "is-done" : ""
              }`}
            >
              <span className="hs-rail-dot" />
              <span className="hs-rail-label">{s.label}</span>
            </div>
          ))}
          <div
            className="hs-rail-fill"
            style={{ width: `${(active / (STAGES.length - 1)) * 100}%` }}
          />
        </div>

        {/* stage stage */}
        <div className="hs-stage">
          {/* STAGE 1 — get found */}
          <div className={`hs-panel ${active === 0 ? "is-in" : ""}`}>
            <div className="hs-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <span>emergency plumber near me</span>
            </div>
            <div className="hs-result hs-result--you">
              <span className="hs-result-rank">1</span>
              <div className="hs-result-body">
                <div className="hs-result-name">Your Business Ltd</div>
                <div className="hs-result-meta">
                  <span className="hs-stars">★★★★★</span> 4.9 (127) · Open now
                </div>
              </div>
              <span className="hs-result-badge">You</span>
            </div>
            <div className="hs-result hs-result--muted">
              <span className="hs-result-rank">2</span>
              <div className="hs-result-body">
                <div className="hs-result-name">Competitor Plumbing</div>
                <div className="hs-result-meta">4.4 (58) · Closes 6pm</div>
              </div>
            </div>
            <div className="hs-result hs-result--muted">
              <span className="hs-result-rank">3</span>
              <div className="hs-result-body">
                <div className="hs-result-name">Drains &amp; Co</div>
                <div className="hs-result-meta">4.1 (33) · Closed</div>
              </div>
            </div>
          </div>

          {/* STAGE 2 — enquiry lands */}
          <div className={`hs-panel ${active === 1 ? "is-in" : ""}`}>
            <div className="hs-ping">
              <span className="hs-ping-dot" />
              New enquiry · from your website
            </div>
            <div className="hs-lead">
              <div className="hs-lead-avatar">EW</div>
              <div className="hs-lead-body">
                <div className="hs-lead-name">Emma Wilson</div>
                <div className="hs-lead-job">Bathroom refit · Wandsworth</div>
              </div>
              <div className="hs-lead-val">£6,800</div>
            </div>
            <div className="hs-lead-detail">
              &ldquo;Full refit, looking to start in the next few weeks. Happy
              to send photos.&rdquo;
            </div>
            <div className="hs-actions">
              <span className="hs-btn hs-btn--primary">Call back</span>
              <span className="hs-btn">Quote</span>
            </div>
          </div>

          {/* STAGE 3 — quote sent */}
          <div className={`hs-panel ${active === 2 ? "is-in" : ""}`}>
            <div className="hs-doc-head">
              <span>Quote #1042</span>
              <span className="hs-chip hs-chip--sent">Sent</span>
            </div>
            <div className="hs-doc-to">Emma Wilson · Bathroom refit</div>
            <div className="hs-doc-row">
              <span>Labour &amp; fitting</span>
              <span>£1,350</span>
            </div>
            <div className="hs-doc-row">
              <span>Materials</span>
              <span>£450</span>
            </div>
            <div className="hs-doc-total">
              <span>Total</span>
              <strong>£1,800</strong>
            </div>
            <div className="hs-doc-note">
              <span className="hs-tick">✓</span> Auto-chased until she replies
            </div>
          </div>

          {/* STAGE 4 — paid + review */}
          <div className={`hs-panel ${active === 3 ? "is-in" : ""}`}>
            <div className="hs-doc-head">
              <span>Invoice #1042</span>
              <span className="hs-chip hs-chip--paid">Paid</span>
            </div>
            <div className="hs-paid-amount">£1,800</div>
            <div className="hs-paid-note">
              <span className="hs-tick">✓</span> Straight to your account
            </div>
            <div className="hs-review">
              <div className="hs-review-stars">★★★★★</div>
              <div className="hs-review-text">
                Review request sent automatically — so the next job finds you
                too.
              </div>
            </div>
          </div>
        </div>

        {/* footer caption */}
        <div className="hs-caption">
          <span className="hs-caption-tag">{STAGES[active].tag}</span>
          <span className="hs-caption-label">{STAGES[active].label}</span>
        </div>
      </div>
    </div>
  );
}
