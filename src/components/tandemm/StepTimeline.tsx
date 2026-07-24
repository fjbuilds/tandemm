"use client";

import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Step = {
  index: string;
  when: string;
  title: string;
  body: string;
  visual: ReactNode;
};

const StepArtDiagnosis = () => (
  <div className="step-art step-art--diagnosis">
    <div className="step-art-doc">
      <div className="step-art-doc-head">
        <span>Tandemm</span>
        <span className="step-art-badge">Audit</span>
      </div>
      <div className="step-art-score">
        <span className="step-art-score-num">62</span>
        <span className="step-art-score-den">/ 100</span>
      </div>
      <div className="step-art-bars">
        <span style={{ width: "72%" }} />
        <span style={{ width: "48%" }} />
        <span style={{ width: "84%" }} />
      </div>
    </div>
  </div>
);

const StepArtCall = () => (
  <div className="step-art step-art--call">
    <div className="step-art-avatars">
      <span className="step-art-av" />
      <span className="step-art-av" />
      <span className="step-art-av" />
    </div>
    <div className="step-art-callbar">
      <span className="step-art-callbar-dot" />
      Live · 24 minutes
    </div>
  </div>
);

const StepArtPhotos = () => (
  <div className="step-art step-art--photos">
    <div className="step-art-photo" />
    <div className="step-art-photo" />
    <div className="step-art-photo" />
    <div className="step-art-photo" />
  </div>
);

const StepArtPreview = () => (
  <div className="step-art step-art--preview">
    <div className="step-art-browser">
      <div className="step-art-browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="step-art-browser-body">
        <div className="step-art-browser-nav" />
        <div className="step-art-browser-hero" />
        <div className="step-art-browser-copy">
          <span style={{ width: "80%" }} />
          <span style={{ width: "60%" }} />
          <span style={{ width: "40%" }} />
        </div>
      </div>
    </div>
  </div>
);

const StepArtLive = () => (
  <div className="step-art step-art--live">
    <div className="step-art-desktop">
      <div className="step-art-desktop-screen">
        <div className="step-art-desktop-nav" />
        <div className="step-art-desktop-hero" />
        <div className="step-art-desktop-grid">
          <span /> <span /> <span />
        </div>
      </div>
      <div className="step-art-desktop-stand" />
    </div>
    <div className="step-art-mobile">
      <div className="step-art-mobile-notch" />
      <div className="step-art-mobile-hero" />
      <div className="step-art-mobile-cta" />
    </div>
    <div className="step-art-app">
      <div className="step-art-app-header">
        <span className="step-art-app-brand" />
        <span className="step-art-app-dot" />
      </div>
      <div className="step-art-app-card">
        <span className="step-art-app-card-title" />
        <span className="step-art-app-card-sub" />
      </div>
      <div className="step-art-app-card step-art-app-card--muted">
        <span className="step-art-app-card-title" />
        <span className="step-art-app-card-sub" />
      </div>
      <div className="step-art-app-fab" />
    </div>
  </div>
);

const STEPS: Step[] = [
  {
    index: "01",
    when: "Day one · 2 minutes",
    title: "Free Diagnosis Audit",
    body: "Drop your URL, we score your site, ads and local rankings by hand. Yours to keep either way.",
    visual: <StepArtDiagnosis />,
  },
  {
    index: "02",
    when: "Within 24 hours",
    title: "A real conversation",
    body: "20 minutes with a Tandemm strategist. We walk your findings together and plan the fix.",
    visual: <StepArtCall />,
  },
  {
    index: "03",
    when: "Quick 5 minutes",
    title: "Share your work",
    body: "Send us the photos and the story. We handle the copy, the layout and the tone of voice.",
    visual: <StepArtPhotos />,
  },
  {
    index: "04",
    when: "Inside 7 days",
    title: "Your site preview lands",
    body: "A proper working preview, not a wireframe. Feedback goes in, we polish, then go live.",
    visual: <StepArtPreview />,
  },
  {
    index: "05",
    when: "Live and ongoing",
    title: "Website, mobile and app, all in Tandemm",
    body: "Your homeowner sees a fast site on any device. You see every enquiry in the app the moment it lands.",
    visual: <StepArtLive />,
  },
];

export function StepTimeline() {
  return (
    <div className="step-timeline">
      {STEPS.map((s, i) => {
        const align = i % 2 === 0 ? "left" : "right";
        return (
          <Reveal key={s.index}>
            <div className={`step-row step-row--${align}`}>
              <div className="step-row-copy">
                <div className="step-row-when">{s.when}</div>
                <div className="step-row-index">Step {s.index}</div>
                <h3 className="step-row-title">{s.title}</h3>
                <p className="step-row-body">{s.body}</p>
              </div>
              <div className="step-row-visual">{s.visual}</div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
