/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pl",
        destination: '/',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
