import React from 'react';
import { Body1 } from '@semicolondsm/ui';

interface PropsType {
    isHeader?: boolean;
}

const MainListItem = ({
    isHeader,
}: PropsType) => {
    return (
        <>
            {
                isHeader ? (
                    <>
                        <Body1>호실</Body1>
                        <Body1>학번</Body1>
                        <Body1>이름</Body1>
                        <Body1>상점</Body1>
                        <Body1>벌점</Body1>
                        <Body1>봉사단계</Body1>
                        <Body1>잔류여부</Body1>
                        <Body1>주말급식</Body1>
                        <Body1>상벌점 부여</Body1>
                    </>
                ) : (
                    <>
                        <Body1>306</Body1>
                        <Body1>3310</Body1>
                        <Body1>이재원</Body1>
                        <Body1>6</Body1>
                        <Body1>13</Body1>
                        <Body1>0단계</Body1>
                        <Body1>잔류</Body1>
                        <Body1>신청</Body1>
                        <Body1>버튼</Body1>
                    </>
                )
            }
        </>
    );
}

export default MainListItem;