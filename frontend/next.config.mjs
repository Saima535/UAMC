const runtimeMode = process.env.UAMC_NEXT_RUNTIME === "production" ? "production" : "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel expects the default ".next" directory for production deployments.
  distDir: runtimeMode === "production" ? ".next" : ".next-development",
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
