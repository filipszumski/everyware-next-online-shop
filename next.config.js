/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  images: {
    domains: [
      "naszsklep-api.vercel.app",
      "eu-central-1-shared-euc1-02.graphassets.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
