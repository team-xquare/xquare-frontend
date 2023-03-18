import { css } from '@emotion/react';

const GlobalStyles = css`
    html,
    body {
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
    *::-webkit-scrollbar {
        width: 8px;
    }
    *::-webkit-scrollbar-thumb {
        height: 30%;
        background: #9e9e9e;
        border-radius: 10px;
    }

    :root {
        --white: #ffffff;
        --black: #000000;
        /* purple */
        --purple50: #f0e6ff;
        --purple100: #d3b3ff;
        --purple200: #b885ff;
        --purple300: #9f62f5;
        --purple400: #9650fa;
        --purple500: #8335f0;
        --purple600: #6d1be0;
        --purple700: #5a10c2;
        --purple800: #500ead;
        --purple900: #420399;

        /* gray */
        --gray50: #fafafa;
        --gray100: #f5f5f5;
        --gray200: #eeeeee;
        --gray300: #e0e0e0;
        --gray400: #bdbdbd;
        --gray500: #9e9e9e;
        --gray600: #757575;
        --gray700: #616161;
        --gray800: #424242;
        --gray900: #212121;

        /* yellow */
        --yellow50: #fffee6;
        --yellow100: #fffcb3;
        --yellow200: #fffb85;
        --yellow300: #faf673;
        --yellow400: #faf450;
        --yellow500: #f0e935;
        --yellow600: #e0da1b;
        --yellow700: #c2bb10;
        --yellow800: #ada80e;
        --yellow900: #999403;

        /* indigo */
        --indigo50: #eae6ff;
        --indigo100: #c0b3ff;
        --indigo200: #9985ff;
        --indigo300: #7a62f5;
        --indigo400: #684df0;
        --indigo500: #5133e6;
        --indigo600: #391ad6;
        --indigo700: #2b0fb8;
        --indigo800: #260da3;
        --indigo900: #1a038e;

        /* red */
        --red50: #ffe6e6;
        --red100: #ffb3b5;
        --red200: #ff8589;
        --red300: #f56267;
        --red400: #f04d51;
        --red500: #e63338;
        --red600: #d61a20;
        --red700: #b80f13;
        --red800: #a30d11;
        --red900: #8e0306;

        /* green */
        --green50: #e9ffe6;
        --green100: #bbffb3;
        --green200: #91ff85;
        --green300: #71f562;
        --green400: #5df04d;
        --green500: #44e633;
        --green600: #2dd61a;
        --green700: #20b80f;
        --green800: #1ca30d;
        --green900: #118e03;

        /* blue */
        --blue50: #e6f2ff;
        --blue100: #b3d6ff;
        --blue200: #85beff;
        --blue300: #62a7f5;
        --blue400: #4d99f0;
        --blue500: #3386e6;
        --blue600: #1a72d6;
        --blue700: #0f5eb8;
        --blue800: #0d53a3;
        --blue900: #03448e;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --white: #000000;
            --black: #ffffff;
            /* purple */
            --purple50: #f0e6ff;
            --purple100: #d3b3ff;
            --purple200: #b885ff;
            --purple300: #9f62f5;
            --purple400: #9650fa;
            --purple500: #8335f0;
            --purple600: #6d1be0;
            --purple700: #5a10c2;
            --purple800: #500ead;
            --purple900: #420399;

            /* gray */
            --gray50: #fafafa;
            --gray100: #f5f5f5;
            --gray200: #eeeeee;
            --gray300: #e0e0e0;
            --gray400: #bdbdbd;
            --gray500: #9e9e9e;
            --gray600: #757575;
            --gray700: #616161;
            --gray800: #424242;
            --gray900: #212121;

            /* yellow */
            --yellow50: #fffee6;
            --yellow100: #fffcb3;
            --yellow200: #fffb85;
            --yellow300: #faf673;
            --yellow400: #faf450;
            --yellow500: #f0e935;
            --yellow600: #e0da1b;
            --yellow700: #c2bb10;
            --yellow800: #ada80e;
            --yellow900: #999403;

            /* indigo */
            --indigo50: #eae6ff;
            --indigo100: #c0b3ff;
            --indigo200: #9985ff;
            --indigo300: #7a62f5;
            --indigo400: #684df0;
            --indigo500: #5133e6;
            --indigo600: #391ad6;
            --indigo700: #2b0fb8;
            --indigo800: #260da3;
            --indigo900: #1a038e;

            /* red */
            --red50: #ffe6e6;
            --red100: #ffb3b5;
            --red200: #ff8589;
            --red300: #f56267;
            --red400: #f04d51;
            --red500: #e63338;
            --red600: #d61a20;
            --red700: #b80f13;
            --red800: #a30d11;
            --red900: #8e0306;

            /* green */
            --green50: #e9ffe6;
            --green100: #bbffb3;
            --green200: #91ff85;
            --green300: #71f562;
            --green400: #5df04d;
            --green500: #44e633;
            --green600: #2dd61a;
            --green700: #20b80f;
            --green800: #1ca30d;
            --green900: #118e03;

            /* blue */
            --blue50: #e6f2ff;
            --blue100: #b3d6ff;
            --blue200: #85beff;
            --blue300: #62a7f5;
            --blue400: #4d99f0;
            --blue500: #3386e6;
            --blue600: #1a72d6;
            --blue700: #0f5eb8;
            --blue800: #0d53a3;
            --blue900: #03448e;
        }
    }
`;

export default GlobalStyles;
