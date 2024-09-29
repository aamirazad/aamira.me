// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/openpgpkey',
        destination: '/api/.well-known/openpgpkey',
      },
    ];
  },
};

module.exports = nextConfig;
