import { FC } from 'react';
import styled from '@emotion/styled';
import { SwitchButton, Body1 } from '@semicolondsm/ui';
import { MoonIco } from '../../../static/svg';

const ThemeSelector: FC = () => {
    return (
        <ThemeSelectorBlock>
            <MoonIco />
            <Body1 className="theme-selector-title" color="gray700">
                DarkMode
            </Body1>
            <SwitchButton />
        </ThemeSelectorBlock>
    );
};

export default ThemeSelector;

const ThemeSelectorBlock = styled.div`
    box-sizing: border-box;
    height: 56px;
    width: 100%;
    display: flex;
    padding: 0 32px;
    justify-content: space-between;
    align-items: center;
    .theme-selector-title {
        margin-left: 14px;
        flex: 1;
    }
`;
