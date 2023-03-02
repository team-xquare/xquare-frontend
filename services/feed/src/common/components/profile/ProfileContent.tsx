import { ComponentProps } from 'react';
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
            align={direction === 'col' ? 'flex-start' : 'flex-end'}>
            <NameWrapper>{name}</NameWrapper>
            <DateWrapper>{timeFormatter(createAt)}</DateWrapper>
        </FlexBox>
    );
};

const NameWrapper = styled.strong`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;

const DateWrapper = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`;

export default ProfileContent;
