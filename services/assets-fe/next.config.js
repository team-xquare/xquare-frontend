/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/assets-fe' : undefined,
    experimental: {
        externalDir: true,
    },
    async rewrites() {
        return [
            {
                source: '/styles.css',
                destination: '/api/styles.css',
            },
        ];
    },
};
