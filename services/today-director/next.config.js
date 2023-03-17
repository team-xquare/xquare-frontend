/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/today-director' : undefined,
    experimental: {
        externalDir: true,
    },
};