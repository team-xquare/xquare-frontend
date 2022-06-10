import styled from '@emotion/styled';
import { Subtitle4 } from '@semicolondsm/ui';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <Link href="/">
                        <a>
                            <img src="/xquare-logo.png" />
                            <Subtitle4 fontWeight="medium">backoffice</Subtitle4>
                        </a>
                    </Link>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);

    padding: 0px 20px;
    box-sizing: border-box;

    & .header-wrapper {
        height: 100%;
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & a {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
    }
    & .logo-wrapper {
        display: flex;
        align-items: center;
    }
    & img {
        width: 28px;
        border-radius: 3.5px;
        height: 28px;
    }
`;
