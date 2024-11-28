const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  images: {
    domains: ['static.gamezop.com', 'www.gamezop.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA(nextConfig);
