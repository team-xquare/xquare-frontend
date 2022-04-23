import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider>
            <Component {...pageProps} />
        </SDSThemeProvider>
    )
}

export default MyApp;
