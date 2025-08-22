import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Amazon IVS Player is a browser-only package
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'amazon-ivs-player': false,
      };
    }
    return config;
  },
};

export default nextConfig;
