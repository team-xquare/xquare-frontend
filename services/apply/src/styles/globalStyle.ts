import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

export const globalStyles = css`
    * {
        font-family: 'Noto Sans KR', sans-serif !important;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        user-select: none;
        -webkit-touch-callout: none;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        display: none;
    }
    ${emotionReset}
`;
