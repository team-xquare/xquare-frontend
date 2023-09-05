/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/user-web' : undefined,
    experimental: {
        externalDir: true,
    },
};