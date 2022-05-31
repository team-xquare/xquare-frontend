import type { NextPage } from 'next';
import { Subtitle3, Subtitle4, Caption, Button, Botton } from '@semicolondsm/ui';
import MainPageTemplate from '../components/templates/MainPageTemplate';
import { FlexCol, FlexRow } from '../components/Flexbox';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Apply: NextPage = () => {
    const [residualApply, setResidualApply] = useState<string>('잔류');
    const [weekendApply, setWeekendApply] = useState<string>('신청');
    const router = useRouter();
    return (
        <MainPageTemplate title="신청">
            <FlexCol gap={16}>
                <FlexCol gap={12} fullWidth>
                    <FlexCol gap={4}>
                        <Subtitle4>잔류 신청</Subtitle4>
                        <Caption>목요일 10시까지는 잔류 신청을 완료해주세요.</Caption>
                    </FlexCol>
                    <FlexRow gap={8} fullWidth>
                        {['잔류', '금요귀가', '토요귀가', '토요귀사'].map((item, idx) => (
                            <Button
                                onClick={() => setResidualApply(item)}
                                fill={item === residualApply ? 'purple' : 'default'}
                                key={idx}
                                size="sm">
                                {item}
                            </Button>
                        ))}
                    </FlexRow>
                </FlexCol>
                <FlexCol gap={12}>
                    <FlexCol gap={4}>
                        <Subtitle4>주말급식 신청</Subtitle4>
                        <Caption>신청여부는 담임선생님께서 확인 후 전달되요.</Caption>
                    </FlexCol>
                    <FlexRow gap={8}>
                        {['신청', '미신청'].map((item, idx) => (
                            <Button
                                onClick={() => setWeekendApply(item)}
                                fill={item === weekendApply ? 'purple' : 'default'}
                                key={idx}
                                size="sm">
                                {item}
                            </Button>
                        ))}
                    </FlexRow>
                </FlexCol>
                <FlexCol gap={12}>
                    <Subtitle4>추가 신청</Subtitle4>
                    <FlexRow>
                        <Link href="/dormitory-study">
                            <AdditionalApplyCardContainer>
                                <FlexCol gap={12}>
                                    <FlexCol>
                                        <Caption color="gray700">오늘</Caption>
                                        <Botton>자습실 신청</Botton>
                                    </FlexCol>
                                    <FlexRow justify="flex-end" fullWidth>
                                        <IconWrapper></IconWrapper>
                                    </FlexRow>
                                </FlexCol>
                            </AdditionalApplyCardContainer>
                        </Link>
                    </FlexRow>
                </FlexCol>
            </FlexCol>
        </MainPageTemplate>
    );
};

export default Apply;

const AdditionalApplyCardContainer = styled.a`
    background-color: ${({ theme }) => theme.colors.gray50};
    padding: 16px;
    width: 136px;
    height: 126px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray100};
    }
`;

const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 40px;
    border-radius: 50%;
    height: 40px;
    display: flex;
    align-items: center;
`;
