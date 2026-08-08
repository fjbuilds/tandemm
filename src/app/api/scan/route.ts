import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 30;

interface Finding {
  id: string;
  label: string;
  passed: boolean;
  copy: string;
  severity: number;
  evidence?: string;
}

interface SiteSnapshot {
  title: string | null;
  contactMethodCount: number | null;
  loadSec: string | null;
}

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
            ? `Your homepage renders in ${loadSec}s on mobile, comfortably under the 2.5s threshold where visitor drop-off starts. Keep it there (Google/SOASTA, 2017).`
            : `Your homepage takes ${loadSec}s to render on mobile. 53% of visitors leave a page that takes over 3 seconds, and each extra second cuts conversions by up to 20% (Google/SOASTA, 2017). At your load time, roughly half your traffic is bouncing before they see anything.`
          : "We could not measure your page speed. The site may be blocking automated checks.",
        severity: speedPassed ? 0 : loadMs && loadMs > 5000 ? 5 : 4,
        evidence: loadSec ? `${loadSec}s to first paint on mobile` : undefined,
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: mobilePassed,
        copy: mobilePassed
          ? "Your site is optimised for mobile. Text is readable and buttons are easy to tap. 61% of users won't return to a site that isn't mobile friendly (Google, 2018)."
          : `Your site fails ${mobileFails.length} mobile usability check${mobileFails.length !== 1 ? "s" : ""} (viewport, tap targets or font sizing). 61% of people won't return to a mobile site that's hard to use, and 40% go straight to a competitor (Google, 2018). 78% of local searches on mobile lead to a purchase within 24 hours — that traffic is going elsewhere.`,
        severity: mobilePassed ? 0 : 4,
        evidence: mobilePassed ? "Viewport, tap targets and font size all pass" : `${mobileFails.length} of 3 mobile checks failed`,
      },
    };
  } catch {
    return {
      speed: {
        id: "speed",
        label: "Mobile page speed",
        passed: true,
        copy: "Your page speed looks fine. Keep it under 3 seconds to stay ahead of 53% of visitors who leave slow sites (Google/SOASTA, 2017).",
        severity: 0,
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: true,
        copy: "Your site appears to be mobile friendly. 61% of users say they are unlikely to return to a site that is not mobile friendly (Google, 2018), so this keeps you in the running.",
        severity: 0,
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
      ? `You give customers ${present.length} ways to reach you (${prettyList}). 78% of customers hire the first business that responds (Lead Connect, 2023) — multiple channels means you catch enquiries in the 3-minute window that matters.`
      : `You're missing ${missing.join(" and ")}. 78% of customers hire the first business that responds (Lead Connect, 2023). If a lead can't reach you in the way they prefer, they call the next result on Google — usually within 5 minutes.`,
    severity: passed ? 0 : missing.length >= 2 ? 5 : 3,
    evidence: `${present.length} contact method${present.length !== 1 ? "s" : ""} detected${present.length ? ` (${prettyList})` : ""}`,
    methodCount: present.length,
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
      ? `Real review proof detected on your site (${detected.join(", ")}). 93% of consumers say online reviews influence their buying decisions (Podium, 2021) — this is one of your strongest trust signals.`
      : "No verifiable reviews or testimonials on your homepage — no review schema, no third-party widget, no dedicated testimonial section. 93% of consumers say reviews drive their decision (Podium, 2021) and 47% won't use a business under 4 stars (BrightLocal, 2023). Right now you're asking visitors to take you on faith.",
    severity: passed ? 0 : 4,
    evidence: passed ? `Proof found: ${detected.join(", ")}` : "No review widget, schema or testimonial block found",
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
      ? `Your homepage title (${titleQuote}) names both your trade and your area. 46% of Google searches have local intent (GoGulf, 2023) — you're set up to catch them.`
      : `Your homepage title reads ${titleQuote}. It doesn't include ${missingParts.join(" or ")}. 46% of Google searches have local intent (GoGulf, 2023) and 76% of nearby searches turn into a visit within 24 hours (Google, 2022). Right now Google can't tell what you do or where — so it shows a competitor who spelled it out.`,
    severity: passed ? 0 : 4,
    evidence: `Homepage title: ${titleQuote}`,
    titleText: rawTitle || null,
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
    const snapshot: SiteSnapshot = {
      title: null,
      contactMethodCount: null,
      loadSec: psi.speed.evidence?.match(/^([\d.]+)s/)?.[1] ?? null,
    };

    if (html) {
      const enquiry = checkEnquiryCapture(html);
      const reviews = checkReviews(html);
      const seo = checkLocalSeo(html, trade, location);
      findings.push(enquiry, reviews, seo);
      snapshot.title = seo.titleText;
      snapshot.contactMethodCount = enquiry.methodCount;
    } else {
      findings.push({
        id: "enquiry",
        label: "Enquiry capture",
        passed: true,
        copy: "Your contact setup looks fine. 78% of customers hire the first business that responds (Lead Connect, 2023), so make sure enquiries reach you fast.",
        severity: 0,
      });
      findings.push({
        id: "reviews",
        label: "Reviews and testimonials",
        passed: true,
        copy: "Your reviews setup looks fine. 93% of consumers say online reviews influence their purchase decisions (Podium, 2021), so keep collecting them.",
        severity: 0,
      });
      findings.push({
        id: "seo",
        label: "Local SEO signals",
        passed: true,
        copy: "Your local SEO signals look fine. 46% of all Google searches have local intent (GoGulf, 2023), so keep your trade and location visible in your title and description.",
        severity: 0,
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
