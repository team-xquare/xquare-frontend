import { css } from '@emotion/react';

const GlobalStyles = css`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif !important;
    }

    #__next {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;