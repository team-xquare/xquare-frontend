import { NextApiHandler } from 'next';
import { colors, ColorScheme } from '@semicolondsm/design-token';

type UserAgentPrefix = 'auto' | 'light' | 'dark';

const getUserAgentThemePrefix = (userAgent: string): UserAgentPrefix => {
    const themes = ['dark', 'light'];
    const theme = userAgent.split(' ').reverse()[0];
    return (themes.includes(theme) ? theme : 'auto') as UserAgentPrefix;
};

const getTabsByIndent = (indent: number) => {
    return Array(indent)
        .fill(-1)
        .map(() => '\t')
        .join('');
};

const generateCssWithScheme = (scheme: ColorScheme, tabIndent: number = 1) => {
    return (
        `${getTabsByIndent(tabIndent - 1)}root: {\n${getTabsByIndent(tabIndent)}` +
        Object.entries(scheme)
            .map(([key, value]) => {
                return `--${key}: ${value}`;
            })
            .join(`\n${getTabsByIndent(tabIndent)}`) +
        `\n${getTabsByIndent(tabIndent - 1)}}`
    );
};

const styleHandler: NextApiHandler = (req, res) => {
    const theme = getUserAgentThemePrefix(String(req.headers['user-agent']));

    res.setHeader('Content-Type', 'text/css');
    if (theme === 'auto') {
        const { dark, light } = colors;
        const lightCss = generateCssWithScheme(light.scheme);
        const darkCss = generateCssWithScheme(dark.scheme, 2);
        res.write(`${lightCss}\n\n@media (prefers-color-scheme: dark) {\n${darkCss}\n}`);
    } else {
        const { scheme } = colors[theme];
        res.write(generateCssWithScheme(scheme));
    }
    res.end();
};

export default styleHandler;
