/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  compiler: {
    reactRemoveProperties: false,
  },
  transpilePackages: ['next-seo'],
};

module.exports = nextConfig;