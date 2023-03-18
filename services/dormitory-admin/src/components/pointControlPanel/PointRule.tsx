import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ToggleButton, Body2, Button } from '@semicolondsm/ui';
import {
    useAddPointQuery,
    useAddRuleMutation,
    useDeleteRuleMutation,
    useRuleQuery,
} from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import { useModal } from '../../contexts/modal';
import ModalContainer from '../common/ModalContainer';
import PlusIcon from '../../assets/plus.svg';
import Input from '../common/Input';
import Counter from '../common/Counter';
import BlockContainer from '../common/BlockContainer';
import SelectInput from '../common/SelectInput';
import { Flex } from '../common/Flex';
import KebabMenu from '../common/KebabMenu';

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
    const [reason, setReason] = useState('');
    const [searchText, setSearchText] = useState('');

    const onRuleAddSuccess = () => {
        closeModal();
        setReason('');
        setNumber(0);
    };

    const { mutate: addRuleMutate } = useAddRuleMutation(onRuleAddSuccess, addType);
    const { mutate: deleteRuleMutate } = useDeleteRuleMutation(() => {}, type);

    return (
        <MainContainer>
            <BlockContainer
                title="상벌점 목록"
                titleRightContent={
                    <div
                        style={{
                            width: '150px',
                        }}>
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
                    </div>
                }>
                <MainBlockHeader>
                    <SelectInput
                        placeholder="검색"
                        style={{
                            width: '100%',
                        }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </MainBlockHeader>
                <MainListWrapper>
                    {ruleList
                        ?.filter((rule) => rule.reason.includes(searchText))
                        ?.map((rule) => (
                            <MainListItem key={rule.id}>
                                <Body2>
                                    {rule.reason} ({rule.point}점)
                                </Body2>
                                <Flex gap={8}>
                                    <Button
                                        disabled={!Object.values(id).filter((stu) => !!stu).length}
                                        size="sm"
                                        fill="purpleLight"
                                        onClick={() => pointsMutation.mutate(rule.id)}>
                                        부여하기
                                    </Button>
                                    <KebabMenu
                                        item={['삭제']}
                                        callBack={(item) => {
                                            if (item === '삭제') {
                                                deleteRuleMutate(rule.id);
                                            }
                                        }}
                                    />
                                </Flex>
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
                                        buttonStyle: {
                                            padding: 0,
                                            height: '32px',
                                        },
                                    },
                                    {
                                        title: '벌점',
                                        onClick: () => setAddType(false),
                                        buttonStyle: {
                                            padding: 0,
                                            height: '32px',
                                        },
                                    },
                                ]}
                            />
                        </AddRuleTogle>
                        <Flex gap={8} direction="column" fullWidth>
                            <Body2 fontWeight="medium" color="gray700">
                                사유
                            </Body2>
                            <SelectInput
                                placeholder="사유"
                                onChange={(e) => setReason(e.target.value)}
                                value={reason}
                            />
                        </Flex>
                        <Counter label="부여 점수" setNum={setNumber} num={number} />

                        <CustomButton
                            disabled={reason === ''}
                            fill="purple"
                            fullWidth
                            onClick={() => addRuleMutate({ type: addType, point: number, reason })}>
                            추가하기
                        </CustomButton>
                    </AddRuleModalContainer>
                </ModalContainer>
            </BlockContainer>
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
    padding: 8px 24px;

    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};

    & p {
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const MainBlockHeader = styled.div`
    width: 100%;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
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
    gap: 24px;
`;

const AddRuleTogle = styled.div`
    width: 100%;

    padding: 8px 0;
`;

const CustomButton = styled(Button)`
    border-radius: 4px;
    height: 44px;
    margin-top: 16px;
`;

export default PointRule;
