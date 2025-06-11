import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: /node_modules/,
      enforce: "pre",
      use: "@dyad-sh/nextjs-webpack-component-tagger",
    });

    return config;
  },
};

export default nextConfig;
