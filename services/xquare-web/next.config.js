/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/xquare-web' : undefined,
    experimental: {
        externalDir: true,
    },
};