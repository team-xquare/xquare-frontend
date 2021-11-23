import React from 'react';
import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import { Provider } from 'react-redux';
import store from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <SDSThemeProvider>
                <Global styles={globalStyles} />
                <Component {...pageProps} />
            </SDSThemeProvider>
        </Provider>
    );
}
export default MyApp;
