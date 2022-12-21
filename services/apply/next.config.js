/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/apply' : undefined,
    experimental: {
        externalDir: true,
    },
    images: {
        domains: ['xquare.s3.ap-northeast-2.amazonaws.com'],
    },
};
