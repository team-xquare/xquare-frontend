import Document, { Head, Html, Main, NextScript } from 'next/document';

const styleServerURL = 'https://assets-fe.xquare.app/style.css';

class MyDocumnet extends Document {
    render() {
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
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        );
    }
}

export default MyDocumnet;
