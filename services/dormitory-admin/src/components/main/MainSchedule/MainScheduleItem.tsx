import React from 'react';
import styled from '@emotion/styled';
import { Body1, Subtitle3 } from '@semicolondsm/ui';

interface PropsType {

}

const MainScheduleItem = ({
    
}: PropsType) => {
    return (
        <MainContainer>
            <MainHead />
            <MainColumn>
                <Subtitle3>22</Subtitle3>
                <Subtitle3>금</Subtitle3>
            </MainColumn>
            <MainColumn>
                <Body1>의무귀가</Body1>
                <Body1>하루종일</Body1>
            </MainColumn>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    align-items: center;
    background: ${props => props.theme.colors.gray200};
`;

const MainHead = styled.div`
    width: 10px;
    height: 100%;
    background: ${props => props.theme.colors.gray500};
`;

const MainColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default MainScheduleItem;