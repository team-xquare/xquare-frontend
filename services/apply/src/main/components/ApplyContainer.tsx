import { Caption, Subtitle4 } from '@semicolondsm/ui';
import { FC, PropsWithChildren } from 'react';
import { FlexCol, FlexRow } from '../../common/Flexbox';

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
            <FlexRow gap={8} fullWidth>
                {children}
            </FlexRow>
        </FlexCol>
    );
};

export default ApplyContainer;
