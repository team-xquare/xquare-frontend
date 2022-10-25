import Link from 'next/link';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/Flexbox';
import { Botton, Caption } from '@semicolondsm/ui';
import { sendBridgeEvent } from '@shared/xbridge';
import { useRouter } from 'next/router';
import Image from 'next/image';
interface AdditionalApplyItemProps {
    daliy: string;
    applyKind: string;
    linkTo: string;
    icon: string;
}

const AdditionalApplyItem = ({ daliy, applyKind, linkTo, icon }: AdditionalApplyItemProps) => {
    const router = useRouter();
    return (
        <AdditionalApplyCardContainer
            onClick={(e) => {
                e.preventDefault();
                sendBridgeEvent('navigate', { title: applyKind, url: linkTo }, ({ data }) =>
                    router.push(data.url),
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
    );
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
