"use client";

const CHART_POINTS = [22, 28, 26, 34, 40, 44, 52, 58, 64, 70, 78, 88];

function buildChartPath(values: number[], width: number, height: number) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildAreaPath(values: number[], width: number, height: number) {
  const line = buildChartPath(values, width, height);
  return `${line} L${width.toFixed(1)},${height.toFixed(1)} L0,${height.toFixed(1)} Z`;
}

export function HeroVisual() {
  const chartLine = buildChartPath(CHART_POINTS, 380, 90);
  const chartArea = buildAreaPath(CHART_POINTS, 380, 90);

  return (
    <div className="hero-visual">
      <div className="hero-visual-browser">
        {/* Browser chrome */}
        <div className="hero-visual-chrome">
          <div className="hero-visual-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-visual-url">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              aria-hidden="true"
              fill="none"
            >
              <path
                d="M8.5 5.5V4a2.5 2.5 0 1 0-5 0v1.5M3 5.5h6v4.25H3z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            tandemm.co.uk/report
          </div>
          <span className="hero-visual-live">Live</span>
        </div>

        {/* Report body */}
        <div className="hero-visual-body">
          {/* Report heading */}
          <div className="hero-visual-report-head">
            <div>
              <div className="hero-visual-eyebrow">Growth audit</div>
              <div className="hero-visual-title">
                Marlow &amp; Co Electrical
              </div>
            </div>
            <div className="hero-visual-score">
              <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="var(--color-hairline)"
                  strokeWidth="4"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="var(--color-success)"
                  strokeWidth="4"
                  strokeDasharray="150.8 150.8"
                  strokeDashoffset="6"
                  strokeLinecap="round"
                  transform="rotate(-90 28 28)"
                />
              </svg>
              <div className="hero-visual-score-value">
                <span>96</span>
                <span>Score</span>
              </div>
            </div>
          </div>

          {/* Metric row */}
          <div className="hero-visual-metrics">
            <div className="hero-visual-metric">
              <div className="hero-visual-metric-label">Enquiries / mo</div>
              <div className="hero-visual-metric-value">47</div>
              <div className="hero-visual-metric-delta hero-visual-metric-delta--up">
                +312%
              </div>
            </div>
            <div className="hero-visual-metric">
              <div className="hero-visual-metric-label">Load time</div>
              <div className="hero-visual-metric-value">1.1s</div>
              <div className="hero-visual-metric-delta hero-visual-metric-delta--up">
                −68%
              </div>
            </div>
            <div className="hero-visual-metric">
              <div className="hero-visual-metric-label">Conversion</div>
              <div className="hero-visual-metric-value">4.6x</div>
              <div className="hero-visual-metric-delta hero-visual-metric-delta--up">
                +360%
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="hero-visual-chart">
            <div className="hero-visual-chart-head">
              <div>
                <div className="hero-visual-chart-title">
                  Enquiries — last 12 weeks
                </div>
                <div className="hero-visual-chart-sub">
                  Compounding, week after week
                </div>
              </div>
              <div className="hero-visual-chart-tag">▲ 4× baseline</div>
            </div>
            <svg
              viewBox="0 0 380 90"
              preserveAspectRatio="none"
              className="hero-visual-chart-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroChartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0.28"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path d={chartArea} fill="url(#heroChartFill)" />
              <path
                d={chartLine}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
