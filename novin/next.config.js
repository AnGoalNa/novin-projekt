/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedForwardedHosts: ['localhost:3000'],
        },
      },
}

module.exports = nextConfig
