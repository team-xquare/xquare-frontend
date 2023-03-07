import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { globalStyles } from '../styles/globalStyle';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider mode={'light-only'}>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </SDSThemeProvider>
    );
}
export default MyApp;
