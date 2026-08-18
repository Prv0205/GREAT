/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GREAT',
  assetPrefix: '/GREAT/',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
