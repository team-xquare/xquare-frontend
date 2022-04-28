import React from 'react';
import { Body1 } from '@semicolondsm/ui';
import { StudentType } from '../../../apis/types';

const MainListItem = ({
    num,
    name,
    good_point,
    bad_point,
    penalty_level,
    penalty_training_status,
}: StudentType) => {
    return (
        <>
            <Body1>306</Body1>
            <Body1>{num}</Body1>
            <Body1>{name}</Body1>
            <Body1>{good_point}</Body1>
            <Body1>{bad_point}</Body1>
            <Body1>{penalty_level}단계</Body1>
            <Body1>잔류</Body1>
            <Body1>신청</Body1>
        </>
    );
}

export default MainListItem;