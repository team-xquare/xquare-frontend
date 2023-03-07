import { css } from '@emotion/react';

export const globalStyles = css`
    * {
        font-family: 'Noto Sans KR', sans-serif !important;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        user-select: none;
        -webkit-touch-callout: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *::-webkit-scrollbar {
        display: none;
    }
    input,
    textarea {
        outline: none;
    }
`;
