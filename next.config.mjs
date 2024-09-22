/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'image.pollinations.ai',
                port: '',
                pathname: '/prompt/**',
            },
            {
                protocol: 'https',
                hostname: 'cdnjs.cloudflare.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'unpkg.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;