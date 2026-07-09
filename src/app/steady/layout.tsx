import type { Metadata } from "next";
import "./steady.css";

export const metadata: Metadata = {
  title: {
    default: "Steady | A straight read on your website",
    template: "%s | Steady",
  },
  description:
    "Steady tells trades businesses what's stopping enquiries, then only fixes what actually needs fixing.",
};

export default function SteadyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this route tree has no top-level app/layout.tsx, so this layout is itself a root layout */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
