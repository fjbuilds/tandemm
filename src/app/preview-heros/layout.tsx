import type { Metadata } from "next";

// Design scratchpad. Not linked from the site. Hidden from search engines so
// draft, unverified copy and mock data cannot be indexed as marketing.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PreviewHerosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
