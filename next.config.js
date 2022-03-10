/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
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

module.exports = withPWA(nextConfig);
