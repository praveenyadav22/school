import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
