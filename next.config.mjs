// Deployed as a static site on GitHub Pages at https://<account>.github.io/portfolio
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
