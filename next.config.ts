import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Control4's official marketing CDN — used for a handful of
        // dealer-authorized product/lifestyle shots (see src/lib/images.ts).
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        // ecobee's Contentful-hosted CDN — used for the real ecobee
        // thermostat product shot on the Smart Home page.
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

export default nextConfig;
