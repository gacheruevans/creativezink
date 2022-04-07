/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`localhost:3000`],
    loader: 'imgix',
    path: '/public',
  },
}

module.exports = nextConfig
