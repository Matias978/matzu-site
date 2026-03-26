/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Isso ignora erros de TypeScript no build da Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isso ignora erros de linting (formatação) no build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;