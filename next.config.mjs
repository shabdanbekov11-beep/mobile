/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Игнорировать ошибки типов при сборке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорировать ошибки ESLint при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;