/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/backoffice' : undefined,
    experimental: {
        externalDir: true,
    },
};