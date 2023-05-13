/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/school-meal' : undefined,
    experimental: {
        externalDir: true,
    },
};