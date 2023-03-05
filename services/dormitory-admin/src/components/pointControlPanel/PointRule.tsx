import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ToggleButton, Body1, Button } from '@semicolondsm/ui';
import MainSectionTitle from '../common/MainSectionTitle';
import { useAddPointQuery, useRuleQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import { useModal } from '../../contexts/modal';
import ModalContainer from '../common/ModalContainer';
import Image from 'next/image';
import PlusIcon from '../../assets/plus.svg';
import Input from '../common/Input';
import Counter from '../common/Counter';

interface PropsType {
    id: SelectedUserIds;
}

const PointRule = ({ id }: PropsType) => {
    const [type, setType] = useState<boolean>(true);
    const [addType, setAddType] = useState<boolean>(true);
    const { data: ruleList } = useRuleQuery(type);
    const pointsMutation = useAddPointQuery(id);
    const { openModal, closeModal } = useModal();
    const [number, setNumber] = useState(0);
    const rule = {
        id: 1,
        point: 1,
        reason: '13',
    };
    useEffect(() => {
        // if(pointsMutation.isLoading) openModal();
        // else closeModal();
    }, [pointsMutation.isLoading]);

    return (
        <MainContainer>
            <MainSectionTitle>상벌점 목록</MainSectionTitle>
            <MainBlock>
                <ToggleButton
                    items={[
                        {
                            title: '상점',
                            onClick: () => setType(true),
                        },
                        {
                            title: '벌점',
                            onClick: () => setType(false),
                        },
                    ]}
                />
                <MainListWrapper>
                    {ruleList?.map((rule) => (
                        <MainListItem key={rule.id}>
                            <Body1>
                                {rule.reason} ({rule.point}점)
                            </Body1>
                            <Button
                                disabled={Object.values(id).indexOf(true) === -1}
                                size="sm"
                                fill="purple"
                                onClick={() => pointsMutation.mutate(rule.id)}>
                                부여하기
                            </Button>
                        </MainListItem>
                    ))}
                </MainListWrapper>

                <RuleCreateButton onClick={openModal}>
                    <PlusIcon></PlusIcon>
                </RuleCreateButton>
                <ModalContainer isCanClose={true}>
                    <AddRuleModalContainer>
                        <AddRuleTogle>
                            <ToggleButton
                                items={[
                                    {
                                        title: '상점',
                                        onClick: () => setAddType(true),
                                    },
                                    {
                                        title: '벌점',
                                        onClick: () => setAddType(false),
                                    },
                                ]}
                            />
                        </AddRuleTogle>
                        <Input label="제목" placeholder="제목" />
                        <Counter label="부여 점수" setNum={setNumber} num={number}></Counter>

                        <CustomButton fill="purple" fullWidth>
                            추가하기
                        </CustomButton>
                    </AddRuleModalContainer>
                </ModalContainer>
            </MainBlock>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    border-radius: 16px;
    padding: 16px 20px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: ${(props) => props.theme.colors.gray200};
`;

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    gap: 8px;
    flex-direction: column;
    overflow: scroll;

    overflow-y: scroll;
`;

const MainListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: left;
    padding: 16px 20px;

    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    & div {
        width: 100%;
        min-width: 0;
    }

    & p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const RuleCreateButton = styled.div`
    position: absolute;
    border-radius: 50%;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.purple500};
`;

const AddRuleModalContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const AddRuleTogle = styled.div`
    width: 100%;
    padding: 8px 0;
`;

const CustomButton = styled(Button)`
    border-radius: 12px;
    height: 44px;
    margin-top: 16px;
`;

export default PointRule;
