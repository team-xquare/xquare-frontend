import { Head, Html, Main, NextScript } from 'next/document';

const styleServerURL = 'https://assets-fe.xquare.app/style.css';

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={styleServerURL} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
