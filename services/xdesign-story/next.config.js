/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/xdesign-story' : undefined,
    experimental: {
        externalDir: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
            loader: 'file-loader',
            options: {
                publicPath: 'public',
            },
        });

        return config;
    },
};
