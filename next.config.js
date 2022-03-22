/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    scope: "/",
    register: true,
    skipWaiting: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "./" : "",
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
