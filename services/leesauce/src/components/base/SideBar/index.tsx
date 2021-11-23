import styled from '@emotion/styled';
import { FC } from 'react';
import { LogoBlackIco } from '../../../static/svg';
import Navigation from './Navigation';

import ThemeSelector from './ThemeSelector';

const SideBar: FC = () => {
    return (
        <SideBarBlock>
            <Navigation
                title="Category"
                items={[
                    {
                        label: 'Sources',
                        icon: <LogoBlackIco />,
                        url: '/',
                    },
                    {
                        label: 'Icons',
                        icon: <LogoBlackIco />,
                        url: '/icon',
                    },
                    {
                        label: 'Logos',
                        icon: <LogoBlackIco />,
                        url: '/logo',
                    },
                ]}
            />
            <Navigation
                title="Recently used"
                items={[
                    {
                        label: 'Sources',
                        icon: <LogoBlackIco />,
                        onClick: () => alert('test'),
                    },
                    {
                        label: 'Sources',
                        icon: <LogoBlackIco />,
                        url: '',
                    },
                    {
                        label: 'Sources',
                        icon: <LogoBlackIco />,
                        url: '',
                    },
                ]}
            />
            <Bottom>
                <ThemeSelector></ThemeSelector>
            </Bottom>
        </SideBarBlock>
    );
};

export default SideBar;

const SideBarBlock = styled.div`
    width: 280px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;
