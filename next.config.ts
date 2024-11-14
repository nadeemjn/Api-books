// next.config.js
module.exports = {
  reactStrictMode: true,
  // optional: for static file handling
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
