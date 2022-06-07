/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/xbridge-test' : undefined,
    experimental: {
        externalDir: true,
    },
};
