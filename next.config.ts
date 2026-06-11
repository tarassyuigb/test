import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/locations/enderby",
        destination: "/locations/vernon",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
