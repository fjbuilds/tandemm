import type { Metadata } from "next";
import "./tandemm.css";

export const metadata: Metadata = {
  title: {
    default: "Tandemm | A straight read on your website",
    template: "%s | Tandemm",
  },
  description:
    "Tandemm tells trades businesses what's stopping enquiries, then only fixes what actually needs fixing.",
};

export default function RootLayout({
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- app/halide has its own separate root layout, so this one owns its own font links */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
