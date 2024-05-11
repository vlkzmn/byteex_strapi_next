/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'charming-car-a53a8a9f98.media.strapiapp.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
