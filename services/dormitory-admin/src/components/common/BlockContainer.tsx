import styled from '@emotion/styled';
import { FC } from 'react';
import { Body1 } from '@semicolondsm/ui';
import { Flex } from './Flex';

interface BlockContainerProps {
    title: string;
    titleRightContent?: React.ReactNode;
    children?: React.ReactNode;
}
const BlockContainer: FC<BlockContainerProps> = ({ title, titleRightContent, children }) => {
    return (
        <MainBlock>
            <Header fullWidth align="center" justify="space-between">
                <Body1 fontWeight="bold">{title}</Body1>
                {titleRightContent}
            </Header>
            {children}
        </MainBlock>
    );
};

export default BlockContainer;

const Header = styled(Flex)`
    padding: 8px 24px;
    min-height: 60px;

    border-bottom: 1px solid ${(props) => props.theme.colors.gray100};
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    border: 1px solid ${(props) => props.theme.colors.gray100};
`;
