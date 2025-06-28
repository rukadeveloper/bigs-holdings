import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lxglas.co.kr",
        port: "",
        pathname: "/assets/front/images/common/**",
      },
    ],
  },
};

export default nextConfig;
