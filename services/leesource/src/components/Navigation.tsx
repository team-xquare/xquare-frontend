import styled from '@emotion/styled';
import { FC } from 'react';
import { Botton, Body1 } from '@semicolondsm/ui';
import ActiveLink from './common/ActiveLink';

interface NavigationItem {
    label: string;
    icon: React.ReactNode;
    url?: string;
    onClick?: () => void;
}

interface Props {
    title: string;
    items: NavigationItem[];
}

const Navigation: FC<Props> = ({ title, items }) => {
    const renderItem = (item: NavigationItem, index: number) => {
        const Element = (
            <>
                <SectionItemIco>{item.icon}</SectionItemIco>
                <Body1 color="gray700" className="section-label">
                    {item.label}
                </Body1>
            </>
        );
        return (
            <SectionItemBlock key={index}>
                {item.url ? (
                    <ActiveLink activeClassName="active" href={item.url}>
                        <SectionLink>{Element}</SectionLink>
                    </ActiveLink>
                ) : (
                    <SectionItem onClick={item.onClick}>{Element}</SectionItem>
                )}
            </SectionItemBlock>
        );
    };
    return (
        <NavigationBlock>
            <Botton className="navigation-title" color="gray600">
                {title}
            </Botton>
            <SectionMenu>{items.map(renderItem)}</SectionMenu>
        </NavigationBlock>
    );
};

export default Navigation;

const NavigationBlock = styled.div`
    padding-top: 20px;
    .navigation-title {
        margin-left: 36px;
    }
`;

const SectionItemBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
    cursor: pointer;
    &:hover .section-label {
        color: ${({ theme }) => theme.colors.purple400};
    }
`;

const SectionItemIco = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 24px;
    margin-right: 12px;
`;

const SectionLink = styled.a`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    width: 100%;
    &.active {
        background-color: ${({ theme }) => theme.colors.gray200};
    }
`;

const SectionItem = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    width: 100%;
`;

const SectionMenu = styled.div``;
