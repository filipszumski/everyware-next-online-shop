import type { NextConfig } from "next";

import { APP_ROUTES } from "@/shared/constants";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "naszsklep-api.vercel.app" },
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    {
      source: APP_ROUTES.products,
      destination: `${APP_ROUTES.products}/1`,
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
