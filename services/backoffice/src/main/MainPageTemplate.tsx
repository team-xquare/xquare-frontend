import { FC, PropsWithChildren } from 'react';
import Header from './header';
import styled from '@emotion/styled';

interface MainPageTemplateProps {}

const MainPageTemplate: FC<PropsWithChildren<MainPageTemplateProps>> = ({ children }) => {
    return (
        <>
            <Header />
            <MainContentsContainer className="main">{children}</MainContentsContainer>
        </>
    );
};

export default MainPageTemplate;

const MainContentsContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 20px;
`;
