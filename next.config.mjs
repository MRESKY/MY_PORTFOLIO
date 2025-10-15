/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  
  // Development configuration
  allowedDevOrigins: ['192.168.48.1', 'localhost', '127.0.0.1'],
};

export default nextConfig;
