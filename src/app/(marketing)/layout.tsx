import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ringside.example.com"),
  title: {
    default: "Ringside | Sales enablement for teams who close",
    template: "%s | Ringside",
  },
  description:
    "Ringside gives London sales teams the playbooks, content, and coaching they need to close more deals, faster.",
  openGraph: {
    title: "Ringside | Sales enablement for teams who close",
    description:
      "Ringside gives London sales teams the playbooks, content, and coaching they need to close more deals, faster.",
    url: "/",
    siteName: "Ringside",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ringside | Sales enablement for teams who close",
    description:
      "Ringside gives London sales teams the playbooks, content, and coaching they need to close more deals, faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${GeistSans.variable} ${GeistMono.variable} ${sourceSerif.variable}`}
    >
      <body className="site-body flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
