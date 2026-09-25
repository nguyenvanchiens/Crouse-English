import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is prerendered (content is typed data, progress lives in localStorage),
  // so the site ships as plain static files in `out/` — served by Cloudflare static assets.
  output: "export",
};

export default nextConfig;
