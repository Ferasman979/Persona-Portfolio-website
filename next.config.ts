import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
