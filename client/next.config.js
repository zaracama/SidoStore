/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**img-for-hk.wds168.cn",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
