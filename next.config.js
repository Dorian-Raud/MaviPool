/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: false,
    },
    // Optimisation des images
    images: {
        domains: [],
        formats: ['image/webp'],
    },
    // Compression
    compress: true,
    // Headers pour SEO et sécurité
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
