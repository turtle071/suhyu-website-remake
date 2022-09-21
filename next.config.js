/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  async redirects() {
    return [
      {
        source: '/add',
        destination: 'https://discord.com/oauth2/authorize?client_id=994416355472330772&scope=bot+applications.commands&permissions=1346759886',
        permanent: false,
      },
      {
        source: '/support',
        destination: 'https://discord.gg/jSgVkj3U9b',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/turtle071/Suhyu',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
