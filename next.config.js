// DONE REVIEWING: GITHUB COMMIT 6️⃣
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
}
module.exports = nextConfig
