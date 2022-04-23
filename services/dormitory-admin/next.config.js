/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: '/dormitory-admin',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    compiler: {
        styledComponents: true,
    },
};