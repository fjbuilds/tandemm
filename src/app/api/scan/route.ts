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

// Canonical sources. UK-focused where possible; Google research is global (not US-specific).
const SOURCES = {
  googleSpeed: {
    label: "Google Web Fundamentals: page speed",
    url: "https://developers.google.com/search/docs/appearance/page-experience",
  },
  webDevVitals: {
    label: "web.dev: Core Web Vitals business impact",
    url: "https://web.dev/case-studies/",
  },
  googleMobile: {
    label: "Google Search Central: mobile-friendly guide",
    url: "https://developers.google.com/search/mobile-sites",
  },
  brightLocalReviews: {
    label: "BrightLocal Local Consumer Review Survey 2024",
    url: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  brightLocalLocal: {
    label: "BrightLocal Local Search Behaviour Study",
    url: "https://www.brightlocal.com/research/local-search-behaviour-study/",
  },
  which: {
    label: "Which? Trusted Traders research",
    url: "https://trustedtraders.which.co.uk/",
  },
  googleLocalIntent: {
    label: "Google Search Central: local search",
    url: "https://developers.google.com/search/docs/appearance/site-names",
  },
} satisfies Record<string, Source>;

interface MarketShare {
  lostLow: number;
  lostHigh: number;
  competitorRatioLow: number;
  competitorRatioHigh: number;
}

function marketShareLost(findings: Finding[]): MarketShare | null {
  const totalSeverity = findings.reduce((s, f) => s + (f.passed ? 0 : f.severity), 0);
  if (totalSeverity === 0) return null;
  const lostLow = Math.min(85, Math.max(10, Math.round(totalSeverity * 3.5)));
  const lostHigh = Math.min(90, Math.max(lostLow + 5, Math.round(totalSeverity * 4.5)));
  const competitorRatioLow = Math.max(1, Math.round(lostLow / 10));
  const competitorRatioHigh = Math.min(9, Math.max(competitorRatioLow + 1, Math.round(lostHigh / 10)));
  return { lostLow, lostHigh, competitorRatioLow, competitorRatioHigh };
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
  // WordPress mShots. Free, no key, first hit ~10-20s then cached.
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`;
}

// Fallback checks used when the homepage HTML cannot be fetched. All URL-only, so they always
// return three findings tied to the same "you are losing business" theme.
async function runFallbackChecks(url: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  const isHttps = /^https:/i.test(url);
  const domain = extractDomain(url) ?? "";

  // 1) Enquiry substitute: site reachability. If our fetch failed, real customers on flaky
  // connections likely have the same experience.
  let reachable = false;
  let statusCode: number | null = null;
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    reachable = res.ok;
    statusCode = res.status;
  } catch {
    reachable = false;
  }
  findings.push({
    id: "enquiry",
    label: "Site reachability",
    passed: reachable,
    copy: reachable
      ? `Your site responds to requests (HTTP ${statusCode}). That means Google, review sites and customers on flaky mobile signals can reach it. Good baseline.`
      : "Your site did not respond in time for our HTML fetch. If our request struggled, real customers on 4G or a dodgy signal may see the same thing. Every failed load is a job you never hear about.",
    severity: reachable ? 0 : 5,
    evidence: reachable ? `HTTP ${statusCode} response to HEAD ${url}` : "No response within 8 seconds",
    sources: [SOURCES.googleSpeed],
  });

  // 2) Reviews substitute: trust signals via HTTPS. Non-HTTPS trade sites read as risky.
  findings.push({
    id: "reviews",
    label: "Trust and security signals",
    passed: isHttps,
    copy: isHttps
      ? "Your site uses HTTPS, so browsers show it as secure. That is the baseline trust signal customers look for before they even read your reviews."
      : "Your site is not on HTTPS, which means every mobile browser shows a 'Not secure' warning to visitors. BrightLocal's UK research shows trust signals are one of the top factors in local hiring decisions, and this one is a hard block.",
    severity: isHttps ? 0 : 5,
    evidence: isHttps ? `HTTPS enabled on ${domain}` : `No HTTPS on ${domain}`,
    sources: [SOURCES.brightLocalReviews],
  });

  // 3) SEO substitute: domain naming. Does the domain itself tell Google what you do or where?
  const tradePatterns =
    /plumb|electric|roof|build|landscap|paint|decor|joiner|carpent|heating|boiler|kitchen|bathroom|extension|loft|driveway|garden|fencing|tiling|flooring|guttering|drainage|solar|mechanic|garage|servic|repair|mot|tyre|window|door|clean|removal|scaffold|damp|plaster|handyman/i;
  const locationPatterns =
    /london|manchester|birmingham|leeds|glasgow|liverpool|edinburgh|bristol|sheffield|cardiff|nottingham|leicester|newcastle|brighton|plymouth|reading|kent|essex|surrey|sussex|hampshire|devon|cornwall|norfolk|suffolk|yorkshire|midlands/i;
  const domainHasTrade = tradePatterns.test(domain);
  const domainHasLocation = locationPatterns.test(domain);
  const domainSignals = (domainHasTrade ? 1 : 0) + (domainHasLocation ? 1 : 0);
  findings.push({
    id: "seo",
    label: "Domain naming for local search",
    passed: domainSignals >= 1,
    copy: domainSignals >= 1
      ? `Your domain (${domain}) contains ${domainHasTrade && domainHasLocation ? "both your trade and a UK area" : domainHasTrade ? "your trade" : "a UK area"}. That helps Google connect you to local searches even before the page loads.`
      : `Your domain (${domain}) does not mention your trade or a UK area anywhere. Combined with a homepage we could not read, Google has no strong signal about what you do or where. The competitor whose domain spells it out ranks first for those searches by default.`,
    severity: domainSignals >= 1 ? 0 : 3,
    evidence: `Domain: ${domain}${domainHasTrade ? " (trade keyword present)" : ""}${domainHasLocation ? " (UK location present)" : ""}`,
    sources: [SOURCES.googleLocalIntent, SOURCES.brightLocalLocal],
  });

  return findings;
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
            ? `Your homepage renders in ${loadSec}s on mobile. That is under the 2.5s threshold Google flags as a drop-off point. Nothing to fix here.`
            : `Your homepage takes ${loadSec}s to render on mobile. Google's research shows the probability of a mobile visitor bouncing rises 32% when load time goes from 1s to 3s, and 90% by 5s. At ${loadSec}s, a large share of the people clicking your site never actually see it.`
          : "We could not measure your page speed. Google PageSpeed was unable to reach the site. Worth investigating on its own, as it may mean bots or crawlers are being blocked.",
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
          : `Your site fails ${mobileFails.length} of Google's 3 core mobile usability checks (viewport, tap targets, font sizing). BrightLocal's UK research shows the majority of local trade searches now happen on mobile, so a hard-to-use mobile site sends visitors straight to the next result.`,
        severity: mobilePassed ? 0 : 4,
        evidence: mobilePassed
          ? "All 3 Google Lighthouse mobile audits pass"
          : `${mobileFails.length} of 3 Google Lighthouse mobile audits failed`,
        sources: [SOURCES.googleMobile, SOURCES.brightLocalLocal],
      },
    };
  } catch {
    return psiFallback(url);
  }
}

// Real substitute checks used when Google PageSpeed is unreachable. TTFB + HTTPS are both real
// signals customers experience, tied to real reasons visitors bounce.
async function psiFallback(url: string): Promise<{ speed: Finding; mobile: Finding }> {
  const isHttps = /^https:/i.test(url);
  const domain = extractDomain(url) ?? url;
  let ttfbMs: number | null = null;
  let reachable = false;
  try {
    const t0 = Date.now();
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    ttfbMs = Date.now() - t0;
    reachable = res.ok;
  } catch {
    // stays null / false
  }

  const speedPassed = reachable && ttfbMs !== null && ttfbMs < 800;
  const speedFinding: Finding = {
    id: "speed",
    label: "Server response time",
    passed: speedPassed,
    copy: ttfbMs === null
      ? "Your site did not respond to our request within 8 seconds. If our request struggled, real customers on 4G or a patchy signal are seeing the same thing, and most will just try the next Google result."
      : speedPassed
        ? `Your server responded in ${ttfbMs}ms, which is fast. Anything under 800ms is considered healthy and keeps you off the pile that Google flags as slow.`
        : `Your server took ${ttfbMs}ms to send the first byte. Anything over 800ms starts hurting your Google ranking and pushes mobile visitors to bounce before the page even paints. BrightLocal's UK research shows mobile trade searches are where most trades win or lose the enquiry.`,
    severity: speedPassed ? 0 : ttfbMs === null || ttfbMs > 2000 ? 5 : 4,
    evidence: ttfbMs === null ? "No HTTP response within 8 seconds" : `TTFB: ${ttfbMs}ms via HEAD request`,
    sources: [SOURCES.googleSpeed, SOURCES.webDevVitals],
  };

  const mobileFinding: Finding = {
    id: "mobile",
    label: "Mobile trust signals",
    passed: isHttps,
    copy: isHttps
      ? `Your site uses HTTPS on ${domain}, so mobile browsers show it as secure. That is the baseline trust signal every visitor sees before they even read the page.`
      : `Your site is not on HTTPS. Every modern mobile browser shows visitors a "Not secure" warning before they even see your homepage. BrightLocal's UK research puts trust signals at the top of the local hiring decision, and this one is a hard block that costs you clicks before the customer sees a single word.`,
    severity: isHttps ? 0 : 5,
    evidence: isHttps ? `HTTPS enabled on ${domain}` : `No HTTPS on ${domain}, browsers show "Not secure"`,
    sources: [SOURCES.googleMobile, SOURCES.brightLocalReviews],
  };

  return { speed: speedFinding, mobile: mobileFinding };
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
      ? `You give customers ${present.length} ways to reach you (${prettyList}). BrightLocal's UK research shows the average trades customer contacts 2 or 3 businesses before hiring one, so covering more channels puts you first in the queue.`
      : `You are missing ${missing.join(" and ")}. BrightLocal's UK research shows customers routinely contact 2 or 3 tradespeople and hire the one who responds first in the way they prefer. If they cannot reach you their way, they call the next Google result within minutes.`,
    severity: passed ? 0 : missing.length >= 2 ? 5 : 3,
    evidence: `${present.length} contact method${present.length !== 1 ? "s" : ""} detected on the homepage${present.length ? ` (${prettyList})` : ""}`,
    methodCount: present.length,
    sources: [SOURCES.brightLocalLocal, SOURCES.which],
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
      ? `Real review proof detected (${detected.join(", ")}). BrightLocal's 2024 UK consumer survey found 91% now read reviews before choosing a local business. You have the signal on the page.`
      : "No verifiable review proof on your homepage. No review schema markup, no third-party widget (Google, Trustpilot, Checkatrade, TrustATrader), no dedicated testimonial block. BrightLocal's 2024 UK consumer survey found 91% of people read reviews before choosing a local business, and 43% will not use one under 4 stars. Right now you are asking visitors to take you on faith.",
    severity: passed ? 0 : 4,
    evidence: passed ? `Detected: ${detected.join(", ")}` : "No review widget, schema or testimonial block found in homepage HTML",
    sources: [SOURCES.brightLocalReviews, SOURCES.which],
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
      ? `Your homepage title (${titleQuote}) names both your trade and your area. That is exactly what Google looks for on local intent searches. Nothing to fix here.`
      : `Your homepage title reads ${titleQuote}. It does not name ${missingParts.join(" or ")}. BrightLocal's UK local search research shows the majority of "near me" and local trade searches convert into a visit or call within a day. If your title does not say what you do and where, Google shows the competitor whose title does, and you are not in the running for that traffic at all.`,
    severity: passed ? 0 : 4,
    evidence: `Actual <title> tag: ${titleQuote}`,
    titleText: rawTitle || null,
    sources: [SOURCES.googleLocalIntent, SOURCES.brightLocalLocal],
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

    // Log the URL as a lead the moment it comes in. Any further work is a bonus. This makes
    // /book act as a lead magnet even if the customer never fills in the callback form.
    let scanId: string | null = null;
    if (supabase) {
      try {
        const { data } = await supabase
          .from("scans")
          .insert({
            url,
            trade: trade ?? null,
            location: location ?? null,
            findings: null,
          })
          .select("id")
          .single();
        scanId = data?.id ?? null;
      } catch (e) {
        console.error("Early scan insert failed:", e);
      }
    }

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
      const fallbacks = await runFallbackChecks(url);
      findings.push(...fallbacks);
    }

    findings.sort((a, b) => (a.passed === b.passed ? b.severity - a.severity : a.passed ? 1 : -1));
    const failCount = findings.filter((f) => !f.passed).length;
    const marketShare = marketShareLost(findings);

    // Update the lead row with the full findings once we have them.
    if (supabase && scanId) {
      try {
        await supabase
          .from("scans")
          .update({
            findings,
            snapshot,
            fail_count: failCount,
            market_share: marketShare,
          })
          .eq("id", scanId);
      } catch (e) {
        console.error("Scan findings update failed:", e);
      }
    }

    return Response.json({ scanId, findings, failCount, url, snapshot, marketShare });
  } catch (err) {
    console.error("Scan error:", err);
    return Response.json({ error: "Scan failed" }, { status: 500 });
  }
}
