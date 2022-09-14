import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider mode="light-only">
            <Component {...pageProps} />
        </SDSThemeProvider>
    );
}
export default MyApp;
