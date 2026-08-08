import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 30;

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

interface SiteSnapshot {
  title: string | null;
  metaDescription: string | null;
  contactMethodCount: number | null;
  loadSec: string | null;
  faviconUrl: string | null;
  screenshotUrl: string | null;
  domain: string | null;
}

// Canonical sources used across findings. Real URLs, real primary sources where possible.
const SOURCES = {
  googleSpeed: {
    label: "Google · The need for mobile speed",
    url: "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/",
  },
  webDevVitals: {
    label: "web.dev · Core Web Vitals business impact",
    url: "https://web.dev/case-studies/vodafone",
  },
  googleMobile: {
    label: "Google · Mobile friendliness data",
    url: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-website-load-time-statistics/",
  },
  leadResponse: {
    label: "Harvard Business Review · Lead response times",
    url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  podium: {
    label: "Podium · State of Local Business",
    url: "https://www.podium.com/resources/podium-state-of-local-business-report-2021/",
  },
  brightLocal: {
    label: "BrightLocal · Local Consumer Review Survey",
    url: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  googleLocalIntent: {
    label: "Google · Near me searches",
    url: "https://www.thinkwithgoogle.com/marketing-strategies/search/near-me-searches/",
  },
  googleMicroMoments: {
    label: "Google · I-want-to-go moments",
    url: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/i-want-to-go-micro-moments/",
  },
} satisfies Record<string, Source>;

function estimateMonthlyLoss(findings: Finding[]): { low: number; high: number } | null {
  const totalSeverity = findings.reduce((s, f) => s + (f.passed ? 0 : f.severity), 0);
  if (totalSeverity === 0) return null;
  const low = Math.round((totalSeverity * 180) / 50) * 50;
  const high = Math.round((totalSeverity * 340) / 50) * 50;
  return { low, high };
}

function normaliseUrl(raw: string): string {
  let url = raw.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  return url;
}

function extractDomain(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function extractFavicon(html: string, baseUrl: string): string | null {
  const rels = ["apple-touch-icon", "icon", "shortcut icon"];
  for (const rel of rels) {
    const re = new RegExp(
      `<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`,
      "i",
    );
    const m = html.match(re);
    const href = m?.[1] ?? m?.[2];
    if (href) {
      try {
        return new URL(href, baseUrl).toString();
      } catch {
        continue;
      }
    }
  }
  try {
    return new URL("/favicon.ico", baseUrl).toString();
  } catch {
    return null;
  }
}

function extractMetaDescription(html: string): string | null {
  const m =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  return m?.[1]?.trim() || null;
}

function screenshotFor(url: string): string {
  // WordPress mShots — free, no key, first hit ~10-20s, then cached. Real screenshot service.
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`;
}

async function checkPageSpeed(url: string): Promise<{ speed: Finding; mobile: Finding }> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const endpoint = "https://www.googleapis.com/pagespeedonline/v5/runPagespeedTest";
  const params = new URLSearchParams({
    url,
    strategy: "mobile",
    category: "performance",
    ...(apiKey ? { key: apiKey } : {}),
  });

  try {
    const res = await fetch(`${endpoint}?${params}`, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`PSI ${res.status}`);
    const data = await res.json();

    const fcp = data.lighthouseResult?.audits?.["first-contentful-paint"]?.numericValue;
    const loadMs = fcp ?? data.lighthouseResult?.audits?.["speed-index"]?.numericValue ?? null;
    const loadSec = loadMs ? (loadMs / 1000).toFixed(1) : null;
    const speedPassed = loadMs ? loadMs < 2500 : true;

    const viewportAudit = data.lighthouseResult?.audits?.["viewport"];
    const fontSizeAudit = data.lighthouseResult?.audits?.["font-size"];
    const tapTargetsAudit = data.lighthouseResult?.audits?.["tap-targets"];
    const mobileFails = [viewportAudit, fontSizeAudit, tapTargetsAudit].filter(
      (a) => a && a.score !== null && a.score < 0.9
    );
    const mobilePassed = mobileFails.length === 0;

    return {
      speed: {
        id: "speed",
        label: "Mobile page speed",
        passed: speedPassed,
        copy: loadSec
          ? speedPassed
            ? `Your homepage renders in ${loadSec}s on mobile — under the 2.5s threshold Google flags as a drop-off point. Nothing to fix here.`
            : `Your homepage takes ${loadSec}s to render on mobile. Google's own research found the probability of a mobile visitor bouncing rises 32% when load time goes from 1s to 3s, and 90% by 5s. At ${loadSec}s, a big share of the people clicking your site never actually see it.`
          : "We couldn't measure your page speed — Google PageSpeed couldn't reach the site. That's worth investigating on its own; it may mean bots are being blocked.",
        severity: speedPassed ? 0 : loadMs && loadMs > 5000 ? 5 : 4,
        evidence: loadSec ? `First Contentful Paint: ${loadSec}s on a mid-tier 4G mobile (Google PageSpeed Insights)` : undefined,
        sources: [SOURCES.googleSpeed, SOURCES.webDevVitals],
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: mobilePassed,
        copy: mobilePassed
          ? "Viewport, tap targets and font sizing all pass Google's mobile checks. Nothing to fix here."
          : `Your site fails ${mobileFails.length} of Google's 3 core mobile-usability checks (viewport, tap targets, font sizing). Google's own consumer research shows 61% of people won't return to a mobile site that's hard to use — and with 60%+ of local trade searches now on mobile, that is the majority of your traffic.`,
        severity: mobilePassed ? 0 : 4,
        evidence: mobilePassed
          ? "All 3 Google Lighthouse mobile audits pass"
          : `${mobileFails.length} of 3 Google Lighthouse mobile audits failed`,
        sources: [SOURCES.googleMobile, SOURCES.googleLocalIntent],
      },
    };
  } catch {
    return {
      speed: {
        id: "speed",
        label: "Mobile page speed",
        passed: true,
        copy: "We couldn't run a full PageSpeed test on your site — Google's tool wasn't able to reach it in time. Worth investigating; may just be a timeout on our end.",
        severity: 0,
        sources: [SOURCES.googleSpeed],
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: true,
        copy: "We couldn't run the full mobile audit. Worth checking manually on your phone if you haven't recently.",
        severity: 0,
        sources: [SOURCES.googleMobile],
      },
    };
  }
}

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; TandemmScanner/1.0; +https://tandemm.co.uk)",
        Accept: "text/html",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const text = await res.text();
    return text.slice(0, 200_000);
  } catch {
    return null;
  }
}

function checkEnquiryCapture(html: string): Finding & { methodCount: number } {
  const hasPhone =
    /tel:[+\d]/.test(html) ||
    /(?:call|phone|ring|telephone)\s*(?:us|now|today)/i.test(html);
  const hasForm = /<form[\s>]/i.test(html) && /type=["']?(?:submit|email|tel)/i.test(html);
  const hasChat =
    /tawk\.to|intercom|livechat|drift|crisp|hubspot.*chat|zendesk.*chat|tidio|olark/i.test(html);
  const hasWhatsApp = /wa\.me|whatsapp/i.test(html);
  const hasEmail = /mailto:/i.test(html);

  const methods = { phone: hasPhone, form: hasForm, chat: hasChat, whatsapp: hasWhatsApp, email: hasEmail };
  const present = Object.entries(methods).filter(([, v]) => v).map(([k]) => k);
  const secondary = hasChat || hasWhatsApp || hasEmail;

  const missing: string[] = [];
  if (!hasPhone) missing.push("a visible phone number");
  if (!hasForm) missing.push("an enquiry form");
  if (!secondary) missing.push("a fast-response channel (WhatsApp, chat or email)");

  const passed = missing.length === 0;
  const prettyList = present.length ? present.join(", ") : "none";

  return {
    id: "enquiry",
    label: "Enquiry capture",
    passed,
    copy: passed
      ? `You give customers ${present.length} ways to reach you (${prettyList}). Harvard Business Review's study of 2,241 US companies found firms that contact a lead within 1 hour are 7× more likely to qualify it than those who wait — multiple channels means you can hit that window even when you're on the tools.`
      : `You're missing ${missing.join(" and ")}. Harvard Business Review's research on 2,241 companies found leads contacted within an hour are 7× more likely to convert; those who wait 24 hours are all but done. If the customer can't reach you the way they want, they hit the next Google result within 5 minutes.`,
    severity: passed ? 0 : missing.length >= 2 ? 5 : 3,
    evidence: `${present.length} contact method${present.length !== 1 ? "s" : ""} detected on the homepage${present.length ? ` (${prettyList})` : ""}`,
    methodCount: present.length,
    sources: [SOURCES.leadResponse],
  };
}

function checkReviews(html: string): Finding {
  const hasSchema = /"@type"\s*:\s*"Review"/i.test(html) || /aggregateRating/i.test(html);
  const widgetMatch = html.match(
    /trustpilot|google.?review|feefo|reviews\.io|yotpo|birdeye|podium|checkatrade|trustatrader|mybuilder/i,
  );
  const hasWidget = !!widgetMatch;
  const starGlyphs = /★|⭐|\bstar-rating\b/i.test(html);
  const testimonialSection = /class=["'][^"']*(testimonial|review)[^"']*["']/i.test(html);

  const passed = hasSchema || hasWidget || (starGlyphs && testimonialSection);

  const detected: string[] = [];
  if (hasSchema) detected.push("review schema");
  if (widgetMatch) detected.push(widgetMatch[0].toLowerCase());
  if (testimonialSection) detected.push("testimonial section");

  return {
    id: "reviews",
    label: "Reviews and testimonials",
    passed,
    copy: passed
      ? `Real review proof detected (${detected.join(", ")}). BrightLocal's 2024 survey of 1,097 consumers found 91% now read reviews before choosing a local business — you've got the signal on the page.`
      : "No verifiable review proof on your homepage — no review schema markup, no third-party widget (Google, Trustpilot, Checkatrade, etc.), no dedicated testimonial block. BrightLocal's 2024 survey found 91% of consumers read reviews before choosing a local business, and 43% won't use one under 4 stars. Right now you're asking visitors to take you on faith.",
    severity: passed ? 0 : 4,
    evidence: passed ? `Detected: ${detected.join(", ")}` : "No review widget, schema or testimonial block found in homepage HTML",
    sources: [SOURCES.brightLocal, SOURCES.podium],
  };
}

function checkLocalSeo(html: string, trade?: string, location?: string): Finding & { titleText: string | null } {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const rawTitle = titleMatch?.[1]?.trim() ?? "";
  const title = rawTitle.toLowerCase();

  let hasLocation = false;
  let hasTrade = false;

  if (location) {
    const locTerms = location.toLowerCase().split(/[,\s]+/).filter((t) => t.length > 2);
    hasLocation = locTerms.some((t) => title.includes(t));
  } else {
    const locationPatterns =
      /london|manchester|birmingham|leeds|glasgow|liverpool|edinburgh|bristol|sheffield|cardiff|nottingham|leicester|newcastle|brighton|plymouth|reading|kent|essex|surrey|sussex|hampshire|devon|cornwall|norfolk|suffolk|twickenham|richmond|st\s*margarets|kingston|wimbledon|croydon|hackney|islington|camden|greenwich|barnet|enfield|harrow|bromley|ealing|hounslow|redbridge|havering/i;
    hasLocation = locationPatterns.test(title);
  }

  if (trade) {
    const tradeTerms = trade.toLowerCase().split(/[,\s/]+/).filter((t) => t.length > 2);
    hasTrade = tradeTerms.some((t) => title.includes(t));
  } else {
    const tradePatterns =
      /plumb|electric|roof|build|landscap|paint|decor|joiner|carpent|heating|boiler|kitchen|bathroom|extension|loft|driveway|garden|fencing|tiling|flooring|guttering|drainage|solar|ev.?charg|mechanic|garage|servic|repair|mot|tyre/i;
    hasTrade = tradePatterns.test(title);
  }

  const passed = hasLocation && hasTrade;
  const missingParts: string[] = [];
  if (!hasLocation) missingParts.push(location || "your town or area");
  if (!hasTrade) missingParts.push(trade || "your trade");

  const titleQuote = rawTitle ? `"${rawTitle.length > 90 ? rawTitle.slice(0, 87) + "…" : rawTitle}"` : "empty";

  return {
    id: "seo",
    label: "Local SEO signals",
    passed,
    copy: passed
      ? `Your homepage title (${titleQuote}) names both your trade and your area — exactly what Google looks for on local intent searches. Nothing to fix here.`
      : `Your homepage title reads ${titleQuote}. It doesn't name ${missingParts.join(" or ")}. Google's own research on "near me" and local searches shows 76% of people who search for a local business visit within 24 hours, and 28% of those searches result in a purchase. If your title doesn't say what you do and where, Google shows the competitor whose title does — and you're not in the running for that traffic at all.`,
    severity: passed ? 0 : 4,
    evidence: `Actual <title> tag: ${titleQuote}`,
    titleText: rawTitle || null,
    sources: [SOURCES.googleLocalIntent, SOURCES.googleMicroMoments],
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url: rawUrl, trade, location } = body as {
      url: string;
      trade?: string;
      location?: string;
    };

    if (!rawUrl || typeof rawUrl !== "string") {
      return Response.json({ error: "URL is required" }, { status: 400 });
    }

    const url = normaliseUrl(rawUrl);

    const [psi, html] = await Promise.all([checkPageSpeed(url), fetchHtml(url)]);

    const findings: Finding[] = [psi.speed, psi.mobile];
    const domain = extractDomain(url);
    const snapshot: SiteSnapshot = {
      title: null,
      metaDescription: null,
      contactMethodCount: null,
      loadSec: psi.speed.evidence?.match(/([\d.]+)s/)?.[1] ?? null,
      faviconUrl: null,
      screenshotUrl: screenshotFor(url),
      domain,
    };

    if (html) {
      const enquiry = checkEnquiryCapture(html);
      const reviews = checkReviews(html);
      const seo = checkLocalSeo(html, trade, location);
      findings.push(enquiry, reviews, seo);
      snapshot.title = seo.titleText;
      snapshot.metaDescription = extractMetaDescription(html);
      snapshot.contactMethodCount = enquiry.methodCount;
      snapshot.faviconUrl = extractFavicon(html, url);
    } else {
      findings.push({
        id: "enquiry",
        label: "Enquiry capture",
        passed: true,
        copy: "We couldn't read the homepage HTML to check contact channels. Worth verifying: a visible phone number, a form, and a fast-response channel (WhatsApp/chat/email).",
        severity: 0,
        sources: [SOURCES.leadResponse],
      });
      findings.push({
        id: "reviews",
        label: "Reviews and testimonials",
        passed: true,
        copy: "We couldn't read the homepage HTML to look for review proof. Worth checking that Google reviews, Trustpilot, Checkatrade or a testimonial section is visible.",
        severity: 0,
        sources: [SOURCES.brightLocal],
      });
      findings.push({
        id: "seo",
        label: "Local SEO signals",
        passed: true,
        copy: "We couldn't read the homepage HTML to check the title tag. Worth verifying it names both your trade and your area.",
        severity: 0,
        sources: [SOURCES.googleLocalIntent],
      });
    }

    findings.sort((a, b) => (a.passed === b.passed ? b.severity - a.severity : a.passed ? 1 : -1));
    const failCount = findings.filter((f) => !f.passed).length;
    const estimate = estimateMonthlyLoss(findings);

    let scanId: string | null = null;
    if (supabase) {
      const { data } = await supabase
        .from("scans")
        .insert({
          url,
          trade: trade ?? null,
          location: location ?? null,
          findings,
        })
        .select("id")
        .single();
      scanId = data?.id ?? null;
    }

    return Response.json({ scanId, findings, failCount, url, snapshot, estimate });
  } catch (err) {
    console.error("Scan error:", err);
    return Response.json({ error: "Scan failed" }, { status: 500 });
  }
}
