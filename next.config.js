/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep this for newer compatibility
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Ensure trailing slashes are handled for GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig