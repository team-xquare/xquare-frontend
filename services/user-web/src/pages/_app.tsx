import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/GlobalStyle';
import { DehydratedState, QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

export default function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
            },
        },
    });

    return (
        <>
            <Head>
                <title>XQUARE</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <meta name="description" content="스퀘어 유저 전용 웹입니다." />
            </Head>
            <SDSThemeProvider mode="light-only">
                <Global styles={globalStyles} />
                <QueryClientProvider client={queryClient}>
                    <Toaster />
                    <Component {...pageProps} />
                </QueryClientProvider>
            </SDSThemeProvider>
        </>
    );
}
