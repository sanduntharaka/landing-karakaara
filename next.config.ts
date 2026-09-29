import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Lets phones on the local network load dev-server JS (e.g. http://192.168.8.115:3000).
  // Dev-only; has no effect on the static export.
  allowedDevOrigins: ["192.168.8.115", "192.168.*.*"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
