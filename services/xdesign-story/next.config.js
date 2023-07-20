/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/xdesign-story' : undefined,
    experimental: {
        externalDir: true,
    },
};