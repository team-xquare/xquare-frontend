import { createGlobalStyle } from 'styled-components';

export const globalStyles = createGlobalStyle`
    html, body {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
`