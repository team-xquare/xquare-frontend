import { ComponentProps } from 'react';
import { Body2, Body3 } from '@semicolondsm/ui';
import FlexBox from '../Flexbox';
import styled from '@emotion/styled';
import { timeFormatter } from '../../../utils/timeFormatter';

interface ProfileContentProps extends Partial<Pick<ComponentProps<typeof FlexBox>, 'direction'>> {
    name: string;
    createAt: string;
}

const ProfileContent = ({ createAt, name, direction = 'col' }: ProfileContentProps) => {
    return (
        <FlexBox
            direction={direction}
            gap={direction === 'col' ? 0 : 4}
            align={direction === 'col' ? 'flex-start' : 'center'}>
            <Body2 fontWeight="medium">{name}</Body2>
            <Body3 color="gray800">{timeFormatter(createAt)}</Body3>
        </FlexBox>
    );
};

const NameWrapper = styled.strong`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;

export default ProfileContent;
