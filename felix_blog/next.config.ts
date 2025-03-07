import { withContentlayer } from 'contentlayer';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/blog',
        destination: '/blog/page/1',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/projects/page/1',
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);