import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ToggleButton, Body1 } from '@semicolondsm/ui';
import MainSectionTitle from '../common/MainSectionTitle';
import { useRuleQuery } from '../../apis/points';

const PointRule = () => {
    const [type, setType] = useState<boolean>(true);
    const { data, isLoading, error } = useRuleQuery();

    return (
        <MainContainer>
            <MainSectionTitle>상벌점 목록</MainSectionTitle>
            <MainBlock>
                <ToggleButton items={[
                    {
                        title: "상점",
                        onClick: () => setType(true),
                    },
                    {
                        title: "벌점",
                        onClick: () => setType(false),
                    },
                ]} />
                <MainListWrapper>
                    {
                        data?.map(rule => type === rule.type && <Body1 key={rule.id}>{rule.reason}</Body1>)
                    }
                </MainListWrapper>
            </MainBlock>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.colors.gray200};
`;

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    overflow-y: scroll;
`;

export default PointRule;