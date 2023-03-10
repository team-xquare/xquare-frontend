import type { AppContext, AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/globalStyles';
import { SearchProvider } from '../contexts/search';
import { Toaster } from 'react-hot-toast';
import cookies, { getCookie } from 'cookies-next';
import { instanceArr } from '../apis';
import axios from 'axios';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 0,
                    },
                },
            }),
    );

    return (
        <>
            <Head>
                <title>XQUARE Admin</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <SDSThemeProvider mode="light-only">
                <Global styles={GlobalStyles} />
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps?.dehydratedState}>
                        <SearchProvider>
                            <Toaster />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </SearchProvider>
                    </Hydrate>
                </QueryClientProvider>
            </SDSThemeProvider>
        </>
    );
}

MyApp.getInitialProps = async ({ ctx, router, Component }: AppContext) => {
    const { req, res } = ctx;
    const accessToken = getCookie('access_token', { req, res });

    if (router.pathname !== '/' && !accessToken) {
        const beforeRefresh = getCookie('refresh_token', { req, res });
        if (beforeRefresh) {
        } else {
            if (res) {
                res?.writeHead(302, {
                    Location: '/',
                });
                res?.end();
            } else {
                router.push('/');
            }
        }
    }
    instanceArr.map(async (instance) => {
        await new Promise((resolve) =>
            resolve((instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`)),
        );
    });
    return Component.defaultProps || { dehydratedState: {} };
};

export default MyApp;
