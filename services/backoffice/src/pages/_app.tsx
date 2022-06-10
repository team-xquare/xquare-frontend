import type { AppProps } from 'next/app';
import { SDSThemeProvider } from '@semicolondsm/react-emotion-theme';
import { Global } from '@emotion/react';
import { globalStyles } from '../../styles/global';
import styled from '@emotion/styled';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SDSThemeProvider mode="dark-only">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
            <Wrapper>
                <Global styles={globalStyles} />
                <Component {...pageProps} />
            </Wrapper>
        </SDSThemeProvider>
    );
}
export default MyApp;

const Wrapper = styled.div`
    background-color: black;
    position: absolute;
    width: 100%;
    min-height: 100%;
`;
