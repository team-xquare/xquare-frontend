import { Global, css } from '@emotion/react';

const style = css`
    @font-face {
        font-family: 'Noto Sans C JK kr';
        font-weight: 700;
        src: local('Noto Sans C JK kr Bold'), url('/fonts/NotoSansCJKkrBold.otf') format('otf');
    }

    @font-face {
        font-family: 'Noto Sans C JK kr';
        font-weight: 400;
        src: local('Noto Sans C JK kr Medium'), url('/fonts/NotoSansCJKkrMedium.otf') format('otf');
    }

    @font-face {
        font-family: 'Noto Sans C JK kr';
        font-weight: 300;
        src: local('Noto Sans C JK kr Regular'),
            url('/fonts/NotoSansCJKkrRegular.otf') format('otf');
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        line-height: 1.3;
        font-family: 'Noto Sans C JK kr', sans-serif;
    }
`;

export const GlobalStyle = () => {
    return <Global styles={style} />;
};
