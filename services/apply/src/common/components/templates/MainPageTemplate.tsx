import styled from '@emotion/styled';
import { Body2, Subtitle3 } from '@semicolondsm/ui';
import { FC } from 'react';

interface MainPageTemplateProps {
    children?: React.ReactNode;
    title?: string;
    subTitle?: string;
    isShowRight?: boolean;
}
const MainPageTemplate: FC<MainPageTemplateProps> = ({
    title,
    subTitle,
    isShowRight,
    children,
}) => {
    return (
        <MainPageTemplateContainer isShowRight={isShowRight}>
            {title && <SectionTitle fontWeight="bold">{title}</SectionTitle>}
            {subTitle && (
                <SectionDescription fontWeight="medium" color="gray700">
                    {subTitle}
                </SectionDescription>
            )}

            <MainPageContentsContainer>{children}</MainPageContentsContainer>
        </MainPageTemplateContainer>
    );
};

export default MainPageTemplate;

const MainPageTemplateContainer = styled.div<{ isShowRight?: boolean }>`
    position: absolute;
    width: 100%;
    padding: 0 ${({ isShowRight }) => isShowRight && 0} 16px 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MainPageContentsContainer = styled.div`
    margin-top: 16px;
    flex: 1;
    overflow: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const SectionTitle = styled(Subtitle3)`
    width: 100%;
    padding: 10px 0;
`;

const SectionDescription = styled(Body2)``;
