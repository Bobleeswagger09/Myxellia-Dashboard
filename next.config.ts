/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      fontFamily: {
        euclid: ["var(--font-euclid)"],
        geist: ["var(--font-geist-sans)"],
      },
    },
  },

  images: {
    domains: ["picsum.photos", "images.pexels.com"],
  },
};

module.exports = nextConfig;
