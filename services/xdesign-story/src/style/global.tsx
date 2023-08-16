import { Global, css } from '@emotion/react';

const style = css`
    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 700;
        src: url('https://xquare-prod-bucket.s3.ap-northeast-2.amazonaws.com/fe/fonts/NotoSansKR-Bold.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        src: url('https://xquare-prod-bucket.s3.ap-northeast-2.amazonaws.com/fe/fonts/NotoSansKR-Medium.woff2')
            format('woff2');
    }

    @font-face {
        font-family: 'Noto Sans KR';
        font-weight: 300;
        src: local('Noto Sans KR Regular'),
            url('https://xquare-prod-bucket.s3.ap-northeast-2.amazonaws.com/fe/fonts/NotoSansKR-Regular.woff2')
                format('woff2');
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        line-height: 1.3;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export const GlobalStyle = () => {
    return <Global styles={style} />;
};
