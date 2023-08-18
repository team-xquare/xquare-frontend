import path from 'path';

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        path.dirname(require.resolve(path.join('@storybook/addon-links', 'package.json'))),
        path.dirname(require.resolve(path.join('@storybook/addon-essentials', 'package.json'))),
        path.dirname(require.resolve(path.join('@storybook/addon-onboarding', 'package.json'))),
        path.dirname(require.resolve(path.join('@storybook/addon-interactions', 'package.json'))),
    ],
    framework: {
        name: path.dirname(require.resolve(path.join('@storybook/nextjs', 'package.json'))),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['../public'],
    typescript: {
        check: true,
    },
};
export default config;
