"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ScanInputProps {
  variant?: "light" | "dark";
  className?: string;
}

export function ScanInput({ variant = "light", className }: ScanInputProps) {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    router.push(`/book?url=${encodeURIComponent(url.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("scan-inline-form", `scan-inline-form--${variant}`, className)}>
      <div className="scan-inline-input-wrap">
        <svg className="scan-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
        </svg>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yourwebsite.co.uk"
          className="scan-inline-input"
          required
        />
      </div>
      <button type="submit" className="scan-inline-btn" disabled={!url.trim()}>
        See where I&apos;m losing jobs
      </button>
    </form>
  );
}
