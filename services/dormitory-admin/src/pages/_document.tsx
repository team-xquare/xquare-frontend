import { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ReactNode } from 'react';
import { ServerStyleSheet } from 'styled-components';

const styleServerURL = 'https://assets-fe.xquare.app/style.css';

const Document = ({ styleTags }: { styleTags: ReturnType<ServerStyleSheet["getStyleElement"]> }) => {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={styleServerURL} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                {styleTags as ReactNode[]}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

Document.getInitialProps = (context: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    
    return { ...page, styleTags };
}

export default Document;
