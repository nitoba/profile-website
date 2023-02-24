/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com', 'cdn-icons-png.flaticon.com'],
  },
}

module.exports = nextConfig
