import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [],
  },
  // Allow legacy scss imports
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ["legacy-js-api", "import", "global-builtin", "color-functions"],
  },
};

export default nextConfig;
