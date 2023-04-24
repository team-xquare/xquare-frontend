import Link from 'next/link';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';
import { Botton, Caption } from '@semicolondsm/ui';
import { sendBridgeEvent } from '@shared/xbridge';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useOnTime, useOnWeek, WeekType } from '../../utils/function/useApplyItem';

interface AdditionalApplyItemProps {
    daliy: string;
    applyKind: string;
    linkTo: string;
    icon: string;
    isDay: WeekType[];
    isTime: [[number, number], [number, number]];
    isEverytime?: WeekType[];
    rightButtonText?: string;
}

const AdditionalApplyItem = ({
    daliy,
    applyKind,
    linkTo,
    icon,
    isDay,
    isTime,
    isEverytime,
    rightButtonText,
}: AdditionalApplyItemProps) => {
    const router = useRouter();
    const isOnDay = useOnWeek(isDay);
    const isOnTime = useOnTime(isTime[0], isTime[1]);
    const isEveryMoment = isEverytime && useOnWeek(isEverytime);

    const isShow = (isOnDay && isOnTime) || isEveryMoment;

    return isShow ? (
        <AdditionalApplyCardContainer
            onClick={(e) => {
                e.preventDefault();
                sendBridgeEvent(
                    'navigate',
                    { title: applyKind, url: linkTo, rightButtonText },
                    ({ data }) => router.push(data.url),
                );
            }}
            href={linkTo}>
            <FlexCol gap={12}>
                <FlexCol>
                    <Caption color="gray700">{daliy}</Caption>
                    <Botton>{applyKind}</Botton>
                </FlexCol>
                <FlexRow justify="flex-end" fullWidth>
                    <IconWrapper src={icon} width={40} height={40} priority />
                </FlexRow>
            </FlexCol>
        </AdditionalApplyCardContainer>
    ) : null;
};

export default AdditionalApplyItem;

const AdditionalApplyCardContainer = styled.a`
    background-color: ${({ theme }) => theme.colors.gray50};
    text-decoration: none;
    padding: 16px;
    width: 136px;
    height: 126px;
    border-radius: 12px;
    transition: 0.3s;
    flex-shrink: 0;
    cursor: pointer;
    &:active {
        background-color: ${({ theme }) => theme.colors.gray100};
    }
`;

const IconWrapper = styled(Image)<{ src: string }>`
    background-color: ${({ theme }) => theme.colors.white};
    width: 40px;
    border-radius: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    /* background-image: url(${({ src }) => src}); */
    background-size: 40px 40px;
`;
