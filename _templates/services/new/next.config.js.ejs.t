---
to: services/<%= name %>/next.config.js
---
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/<%= name %>' : undefined,
    experimental: {
        outputStandalone: true,
        externalDir: true,
    },
};