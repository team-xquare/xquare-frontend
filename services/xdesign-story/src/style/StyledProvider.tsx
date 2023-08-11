import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './global';
import { theme } from './theme';

export const StyledProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
