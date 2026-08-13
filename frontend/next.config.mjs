const runtimeMode = process.env.UAMC_NEXT_RUNTIME === "production" ? "production" : "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: runtimeMode === "production" ? ".next-production" : ".next-development",
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
