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
    :root{
        --white: #FFFFFF;
        --black: #000000;
        /* purple */
        --purple50: #F0E6FF;
        --purple100: #D3B3FF;
        --purple200: #B885FF;
        --purple300: #9F62F5;
        --purple400: #9650FA;
        --purple500: #8335F0;
        --purple600: #6D1BE0;
        --purple700: #5A10C2;
        --purple800: #500EAD;
        --purple900: #420399;

        /* gray */
        --gray50: #FAFAFA;
        --gray100: #F5F5F5;
        --gray200: #EEEEEE;
        --gray300: #E0E0E0;
        --gray400: #BDBDBD;
        --gray500: #9E9E9E;
        --gray600: #757575;
        --gray700: #616161;
        --gray800: #424242;
        --gray900: #212121;

        /* yellow */
        --yellow50: #FFFEE6;
        --yellow100: #FFFCB3;
        --yellow200: #FFFB85;
        --yellow300: #FAF673;
        --yellow400: #FAF450;
        --yellow500: #F0E935;
        --yellow600: #E0DA1B;
        --yellow700: #C2BB10;
        --yellow800: #ADA80E;
        --yellow900: #999403; 

        /* indigo */
        --indigo50: #EAE6FF;
        --indigo100: #C0B3FF;
        --indigo200: #9985FF;
        --indigo300: #7A62F5;
        --indigo400: #684DF0;
        --indigo500: #5133E6;
        --indigo600: #391AD6;
        --indigo700: #2B0FB8;
        --indigo800: #260DA3;
        --indigo900: #1A038E;

        /* red */
        --red50: #FFE6E6;
        --red100: #FFB3B5; 
        --red200: #FF8589;
        --red300: #F56267;
        --red400: #F04D51;
        --red500: #E63338;
        --red600: #D61A20;
        --red700: #B80F13;
        --red800: #A30D11;
        --red900: #8E0306;

        /* green */
        --green50: #E9FFE6;
        --green100: #BBFFB3;
        --green200: #91FF85;
        --green300: #71F562;
        --green400: #5DF04D;
        --green500: #44E633;
        --green600: #2DD61A;
        --green700: #20B80F;
        --green800: #1CA30D;
        --green900: #118E03;

        /* blue */
        --blue50: #E6F2FF;
        --blue100: #B3D6FF;
        --blue200: #85BEFF;
        --blue300: #62A7F5;
        --blue400: #4D99F0;
        --blue500: #3386E6;
        --blue600: #1A72D6;
        --blue700: #0F5EB8;
        --blue800: #0D53A3;
        --blue900: #03448E; 
    }

    @media (prefers-color-scheme: dark) {
        :root{
            --white: #000000;
            --black: #FFFFFF;
            /* purple */
            --purple50: #F0E6FF;
            --purple100: #D3B3FF;
            --purple200: #B885FF;
            --purple300: #9F62F5;
            --purple400: #9650FA;
            --purple500: #8335F0;
            --purple600: #6D1BE0;
            --purple700: #5A10C2;
            --purple800: #500EAD;
            --purple900: #420399;
        
            /* gray */
            --gray50: #FAFAFA;
            --gray100: #F5F5F5;
            --gray200: #EEEEEE;
            --gray300: #E0E0E0;
            --gray400: #BDBDBD;
            --gray500: #9E9E9E;
            --gray600: #757575;
            --gray700: #616161;
            --gray800: #424242;
            --gray900: #212121;
        
            /* yellow */
            --yellow50: #FFFEE6;
            --yellow100: #FFFCB3;
            --yellow200: #FFFB85;
            --yellow300: #FAF673;
            --yellow400: #FAF450;
            --yellow500: #F0E935;
            --yellow600: #E0DA1B;
            --yellow700: #C2BB10;
            --yellow800: #ADA80E;
            --yellow900: #999403; 
        
            /* indigo */
            --indigo50: #EAE6FF;
            --indigo100: #C0B3FF;
            --indigo200: #9985FF;
            --indigo300: #7A62F5;
            --indigo400: #684DF0;
            --indigo500: #5133E6;
            --indigo600: #391AD6;
            --indigo700: #2B0FB8;
            --indigo800: #260DA3;
            --indigo900: #1A038E;
        
            /* red */
            --red50: #FFE6E6;
            --red100: #FFB3B5; 
            --red200: #FF8589;
            --red300: #F56267;
            --red400: #F04D51;
            --red500: #E63338;
            --red600: #D61A20;
            --red700: #B80F13;
            --red800: #A30D11;
            --red900: #8E0306;
        
            /* green */
            --green50: #E9FFE6;
            --green100: #BBFFB3;
            --green200: #91FF85;
            --green300: #71F562;
            --green400: #5DF04D;
            --green500: #44E633;
            --green600: #2DD61A;
            --green700: #20B80F;
            --green800: #1CA30D;
            --green900: #118E03;
        
            /* blue */
            --blue50: #E6F2FF;
            --blue100: #B3D6FF;
            --blue200: #85BEFF;
            --blue300: #62A7F5;
            --blue400: #4D99F0;
            --blue500: #3386E6;
            --blue600: #1A72D6;
            --blue700: #0F5EB8;
            --blue800: #0D53A3;
            --blue900: #03448E; 
        }
    }
`;

export default GlobalStyles;