import React from 'react';
import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </SDSThemeProvider>
    );
}
export default MyApp;
