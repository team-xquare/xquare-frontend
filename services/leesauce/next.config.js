/** @type {import('next').NextConfig} */
const fs = require('fs');

module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    redirects() {
        return [
            {
                source: '/general',
                destination: '/',
                permanent: true,
            },
            {
                source: '/general/:path+',
                destination: '/:path+',
                permanent: true,
            },
        ];
    },
    rewrites() {
        return [
            ...fs
                .readdirSync('./src/pages/[type]')
                .map((filename) => filename.replace(/^(?:index|(.*))\.tsx$/, '$1'))
                .map((path) => ({
                    source: `/${path}`,
                    destination: `/general/${path}`,
                })),
        ];
    },
};
