/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/modern-agency-website-liquid-glass' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/modern-agency-website-liquid-glass' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig