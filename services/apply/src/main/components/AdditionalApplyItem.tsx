import Link from 'next/link';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/Flexbox';
import { Botton, Caption } from '@semicolondsm/ui';

interface AdditionalApplyItemProps {
    daliy: string;
    applyKind: string;
    linkTo: string;
}

const AdditionalApplyItem = ({ daliy, applyKind, linkTo }: AdditionalApplyItemProps) => {
    return (
        <Link href={linkTo}>
            <AdditionalApplyCardContainer>
                <FlexCol gap={12}>
                    <FlexCol>
                        <Caption color="gray700">{daliy}</Caption>
                        <Botton>{applyKind}</Botton>
                    </FlexCol>
                    <FlexRow justify="flex-end" fullWidth>
                        <IconWrapper></IconWrapper>
                    </FlexRow>
                </FlexCol>
            </AdditionalApplyCardContainer>
        </Link>
    );
};

export default AdditionalApplyItem;
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
