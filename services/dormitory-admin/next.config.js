/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['xquare.s3.ap-northeast-2.amazonaws.com'],
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                module: false,
                process: false,
            };
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    env: {
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
    rewrites() {
        return [
            {
                source: '/dms',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/dms`,
            },
        ];
    },
};
