/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/apply' : undefined,
    experimental: {
        externalDir: true,
        outputStandalone: true,
    },
};
