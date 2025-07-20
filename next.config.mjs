/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'reserved-app-media.s3.eu-central-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
    allowedDevOrigins: ['192.168.170.221'],
};

export default nextConfig;
