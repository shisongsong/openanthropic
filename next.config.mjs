/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/claude",
        destination: "/platform",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
