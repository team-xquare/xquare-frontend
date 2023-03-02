import styled from '@emotion/styled';
import { Caption, Subtitle4 } from '@semicolondsm/ui';
import { FC, PropsWithChildren } from 'react';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';

interface ApplyContainerProps {
    title: string;
    subTitle?: string;
}

const ApplyContainer: FC<PropsWithChildren<ApplyContainerProps>> = ({
    children,
    subTitle,
    title,
}) => {
    return (
        <FlexCol gap={12} fullWidth>
            <FlexCol gap={4}>
                <Subtitle4>{title}</Subtitle4>
                {subTitle && <Caption>{subTitle}</Caption>}
            </FlexCol>
            <ScrollFlex gap={8} fullWidth>
                {children}
            </ScrollFlex>
        </FlexCol>
    );
};

const ScrollFlex = styled(FlexRow)`
    overflow-x: scroll;
`;

export default ApplyContainer;
