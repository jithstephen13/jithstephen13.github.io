/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: ' **',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig
