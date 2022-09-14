import React from 'react';
import styled from '@emotion/styled';
import { Body1, Button } from '@semicolondsm/ui';
import { Student } from '../../../apis/types';
import { useTrainingMutation } from '../../../apis/points';

interface PropsType {
    onClick: (id: string, isCheckbox?: boolean) => void;
    isActive: boolean;
}

const PointListItem = ({
    id,
    num,
    name,
    good_point,
    bad_point,
    stay_apply,
    meal_apply,
    penalty_level,
    is_penalty_required,
    isActive,
    onClick,
}: Student & PropsType) => {
    const { mutate } = useTrainingMutation();
    const createText = (children: React.ReactNode, index?: number) => {
        return (
            <BodyWrapper key={index} isActive={isActive} onClick={() => onClick(id)}>
                <Body1>{children}</Body1>
            </BodyWrapper>
        );
    }

    return (
        <>
            <BodyWrapper isActive={isActive} onClick={() => onClick(id, true)}>
                <input type="checkbox" checked={isActive} />
            </BodyWrapper>
            {createText(num)}
            {createText(name)}
            {createText(good_point)}
            {createText(bad_point)}
            {
                [...Array(5)].map((_v, i) => {
                    if(i < penalty_level - 1) return createText("완료", i);
                    else if(i === penalty_level - 1) {
                        if(is_penalty_required) return (
                            <BodyWrapper isActive={isActive} onClick={() => onClick(id)}>
                                <Button size="sm" onClick={() => mutate({ id, penalty_level })}>봉사완료</Button>
                            </BodyWrapper>
                        );
                        else return createText("완료", i);
                    } else return createText("", i);
                })
            }
        </>
    );
}

const BodyWrapper = styled.div<{ isActive: boolean; }>`
    width: 100%;
    height: 100%;
    background: ${props => props.isActive ? props.theme.colors.gray300 : "transparent"};
    cursor: pointer;
`;

export default React.memo(PointListItem);