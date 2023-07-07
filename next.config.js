const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {},
};

const nextPlugins = [
  withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
];

module.exports = (_phase, { defaultConfig: _ }) => {
  return nextPlugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
