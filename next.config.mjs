/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxrgztsfz/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "s6.ezgif.com",
        port: "",
        pathname: "/tmp/**",
      },
    ],
  },
};

export default nextConfig;
