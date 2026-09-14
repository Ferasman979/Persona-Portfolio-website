import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: '/images/**' },
      { pathname: '/api/profile-image' },
      { pathname: '/blog/**' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/api/resume',
      },
      {
        source: '/me.png',
        destination: '/api/profile-image',
      },
    ];
  },
};

export default nextConfig;
