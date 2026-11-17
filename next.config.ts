import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    localPatterns: [
      { pathname: '/images/**' },
      { pathname: '/api/profile-image' },
      { pathname: '/blog/**' },
      { pathname: '/azure-databricks-badge.png' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/api/resume',
      },
      {
        source: '/certificate/azure-databricks',
        destination: '/api/certificate',
      },
      {
        source: '/me.png',
        destination: '/api/profile-image',
      },
    ];
  },
};

export default nextConfig;
