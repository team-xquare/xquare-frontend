import React from 'react';
import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import { wrapper } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </SDSThemeProvider>
    );
}
export default wrapper.withRedux(MyApp);
