import React from 'react';
import { Body1 } from '@semicolondsm/ui';
import { Student } from '../../../apis/types';

const MainListItem = ({
    num,
    name,
    good_point,
    bad_point,
    penalty_level,
    stay_apply,
    meal_apply,
}: Student) => {
    return (
        <>
            <Body1>{num}</Body1>
            <Body1>{name}</Body1>
            <Body1>{good_point}</Body1>
            <Body1>{bad_point}</Body1>
            <Body1>{penalty_level}단계</Body1>
            <Body1>{stay_apply}</Body1>
            <Body1>{meal_apply}</Body1>
        </>
    );
}

export default MainListItem;