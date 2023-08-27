import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './global';
import { theme } from './theme';
import { useDarkMode } from 'storybook-dark-mode';

export const StyledProvider = ({ children }: { children: React.ReactNode }) => {
    const mode = useDarkMode() ? 'dark' : 'light';

    return (
        <ThemeProvider theme={() => theme(mode)}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
