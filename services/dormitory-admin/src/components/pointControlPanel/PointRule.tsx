import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ToggleButton, Body1, Button } from '@semicolondsm/ui';
import MainSectionTitle from '../common/MainSectionTitle';
import { useAddPointQuery, useRuleQuery } from '../../apis/points';
import { Rule, SelectedUserIds } from '../../apis/types';

interface PropsType {
    id: SelectedUserIds;
}

const PointRule = ({
    id,
}: PropsType) => {
    const [type, setType] = useState<boolean>(true);
    const { data, isLoading, error } = useRuleQuery();
    const pointsMutation = useAddPointQuery(id);

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
                        data?.map(rule => type === rule.type && (
                            <MainListItem key={rule.id}>
                                <Body1>{rule.point}점</Body1>
                                <div title={rule.reason}>
                                    <Body1>{rule.reason}</Body1>
                                </div>
                                <Button 
                                    disabled={Object.values(id).indexOf(true) === -1} 
                                    size="sm" 
                                    onClick={() => pointsMutation.mutate(rule.id)}
                                >부여하기</Button>
                            </MainListItem>
                        ))
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

const MainListItem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr) max-content;
    grid-template-rows: 1fr;
    grid-gap: 14px;
    align-items: center;
    justify-items: left;
    padding: 10px 4px;

    & div {
        width: 100%;
        min-width: 0;
    }

    & p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export default PointRule;