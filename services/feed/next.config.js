/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/feed' : undefined,
    experimental: {
        externalDir: true,
    },
    images: {
        domains: ['https://t1.daumcdn.net/', 'xquare.s3.ap-northeast-2.amazonaws.com'],
    },
};
