/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Calendly embeds may require specific CSP headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
