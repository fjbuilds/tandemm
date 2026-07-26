import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export const maxDuration = 30;

interface Finding {
  id: string;
  label: string;
  passed: boolean;
  copy: string;
  severity: number;
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
    const speedPassed = loadMs ? loadMs < 3000 : true;

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
            ? `Your site loads in ${loadSec} seconds on mobile. That is within the range most visitors will wait.`
            : `Your site takes ${loadSec} seconds to load on mobile. Over half of visitors leave a page that takes more than 3 seconds to load (Google).`
          : "We could not measure your page speed. The site may be blocking automated checks.",
        severity: speedPassed ? 0 : loadMs && loadMs > 5000 ? 5 : 4,
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: mobilePassed,
        copy: mobilePassed
          ? "Your site appears to be optimised for mobile. Text is readable and buttons are easy to tap."
          : "Your site is not optimised for mobile. 6 in 10 people will not return to a mobile site that is hard to use, and 4 in 10 go straight to a competitor instead (Google).",
        severity: mobilePassed ? 0 : 4,
      },
    };
  } catch {
    return {
      speed: {
        id: "speed",
        label: "Mobile page speed",
        passed: true,
        copy: "We could not reach your site to test page speed. Check the URL and try again.",
        severity: 0,
      },
      mobile: {
        id: "mobile",
        label: "Mobile usability",
        passed: true,
        copy: "We could not reach your site to check mobile usability.",
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

function checkEnquiryCapture(html: string): Finding {
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
  const missing = Object.entries(methods)
    .filter(([k, v]) => !v && ["phone", "form"].includes(k))
    .map(([k]) => (k === "phone" ? "a visible phone number or click to call link" : "a contact form"));

  const passed = missing.length === 0;

  return {
    id: "enquiry",
    label: "Enquiry capture",
    passed,
    copy: passed
      ? `Your site has ${present.length} way${present.length > 1 ? "s" : ""} for customers to reach you. That covers the basics.`
      : `Your site has no ${missing.join(" or ")}. Customers buy from whoever responds to them first, so every gap in how they can reach you is a job going elsewhere (Lead Response Research).`,
    severity: passed ? 0 : missing.length >= 2 ? 5 : 3,
  };
}

function checkReviews(html: string): Finding {
  const hasReviews =
    /reviews?|testimonials?|★|⭐|star-rating|rating/i.test(html) &&
    !/no.{0,10}reviews/i.test(html);
  const hasSchema = /"@type"\s*:\s*"Review"/i.test(html) || /aggregateRating/i.test(html);
  const hasWidget =
    /trustpilot|google.*review|feefo|reviews\.io|yotpo|birdeye|podium/i.test(html);

  const passed = hasReviews || hasSchema || hasWidget;

  return {
    id: "reviews",
    label: "Reviews and testimonials",
    passed,
    copy: passed
      ? "Your site shows reviews or testimonials. That is one of the strongest trust signals for local customers."
      : "Your site shows no reviews. 97% of people read reviews before choosing a local business, and 47% will not use one without seeing any at all (BrightLocal, 2026).",
    severity: passed ? 0 : 4,
  };
}

function checkLocalSeo(html: string, trade?: string, location?: string): Finding {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ??
    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);

  const title = titleMatch?.[1]?.toLowerCase() ?? "";
  const desc = metaMatch?.[1]?.toLowerCase() ?? "";
  const combined = title + " " + desc;

  let hasLocation = false;
  let hasTrade = false;

  if (location) {
    const locTerms = location.toLowerCase().split(/[,\s]+/).filter((t) => t.length > 2);
    hasLocation = locTerms.some((t) => combined.includes(t));
  } else {
    const locationPatterns =
      /london|manchester|birmingham|leeds|glasgow|liverpool|edinburgh|bristol|sheffield|cardiff|nottingham|leicester|newcastle|brighton|plymouth|reading|kent|essex|surrey|sussex|hampshire|devon|cornwall|norfolk|suffolk/i;
    hasLocation = locationPatterns.test(combined);
  }

  if (trade) {
    const tradeTerms = trade.toLowerCase().split(/[,\s/]+/).filter((t) => t.length > 2);
    hasTrade = tradeTerms.some((t) => combined.includes(t));
  } else {
    const tradePatterns =
      /plumb|electric|roof|build|landscap|paint|decor|joiner|carpent|heating|boiler|kitchen|bathroom|extension|loft|driveway|garden|fencing|tiling|flooring|guttering|drainage|solar|ev.?charg/i;
    hasTrade = tradePatterns.test(combined);
  }

  const passed = hasLocation && hasTrade;
  const missingParts: string[] = [];
  if (!hasLocation) missingParts.push(location || "your town");
  if (!hasTrade) missingParts.push(trade || "your trade");

  return {
    id: "seo",
    label: "Local SEO signals",
    passed,
    copy: passed
      ? "Your title tag and meta description mention your trade and location. That helps you show up in local searches."
      : `Your site does not mention ${missingParts.join(" or ")} in its title or description. Most local searches on mobile lead to a call or visit within a week, so if you are not visible there, that is going to a competitor who is (Google).`,
    severity: passed ? 0 : 3,
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

    if (html) {
      findings.push(checkEnquiryCapture(html));
      findings.push(checkReviews(html));
      findings.push(checkLocalSeo(html, trade, location));
    } else {
      findings.push({
        id: "enquiry",
        label: "Enquiry capture",
        passed: true,
        copy: "We could not fetch your site to check contact methods. Check the URL and try again.",
        severity: 0,
      });
      findings.push({
        id: "reviews",
        label: "Reviews and testimonials",
        passed: true,
        copy: "We could not fetch your site to check for reviews.",
        severity: 0,
      });
      findings.push({
        id: "seo",
        label: "Local SEO signals",
        passed: true,
        copy: "We could not fetch your site to check title and description tags.",
        severity: 0,
      });
    }

    findings.sort((a, b) => b.severity - a.severity);
    const failCount = findings.filter((f) => !f.passed).length;

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

    return Response.json({ scanId, findings, failCount, url });
  } catch (err) {
    console.error("Scan error:", err);
    return Response.json({ error: "Scan failed" }, { status: 500 });
  }
}
