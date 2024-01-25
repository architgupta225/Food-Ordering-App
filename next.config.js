/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',

            },
            {
                protocol: 'https',
                hostname: 'archit-food-ordering.s3.amazonaws.com',
            }
        ]
    },
    webpack(config) {
        config.resolve = {
            ...config.resolve,
            fallback: {
                ...config.resolve.fallback,
                fs: false,
            },
        };

        return config;
    },
}

module.exports = nextConfig