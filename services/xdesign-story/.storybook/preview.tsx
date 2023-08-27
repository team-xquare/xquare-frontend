import React from 'react';
import type { Preview } from '@storybook/react';
import { StyledProvider } from '../src/style/StyledProvider';
import { themes } from '@storybook/theming';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        darkMode: {
            current: 'light',
            dark: { ...themes.dark },
            light: { ...themes.light },
            stylePreview: true,
            darkClass: 'dark',
        },
    },
    decorators: [
        (Story) => (
            <StyledProvider>
                <Story />
            </StyledProvider>
        ),
    ],
};

export default preview;
