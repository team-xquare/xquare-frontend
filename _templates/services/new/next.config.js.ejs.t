---
to: services/<%= name %>/next.config.js
---
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: '/<%= name %>',
};