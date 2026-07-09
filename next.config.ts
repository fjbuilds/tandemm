import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Only the booking page is built so far — send the root there until
      // the Tandemm home page exists.
      { source: "/", destination: "/book", permanent: false },
    ];
  },
};

export default nextConfig;
