import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/globalStyles';
import { SearchProvider } from '../contexts/search';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <SDSThemeProvider mode="light-only">
            <Global styles={GlobalStyles} />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <SearchProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SearchProvider>
                </Hydrate>
            </QueryClientProvider>
        </SDSThemeProvider>
    )
}

export default MyApp;
