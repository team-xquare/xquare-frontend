import React from 'react';
import type { Preview } from '@storybook/react';
import { StyledProvider } from '../src/style/StyledProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
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
