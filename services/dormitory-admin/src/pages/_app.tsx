import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SDSThemeProvider>
    )
}

export default MyApp;
