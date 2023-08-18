import { FlexCol } from '@/components/Flex';
import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import { fontWeightList } from './FontWeight';
import { FontWeightKeyType } from './FontWeight.types';

const meta: Meta = {
    title: 'Foundations/Font Weight',
};

export default meta;

export const FontWeightTemplate = () => (
    <FlexCol>
        {fontWeightList.map((fontWeightObj) => (
            <Text weight={fontWeightObj[0]}>
                {fontWeightObj[1]} {fontWeightObj[0]}
            </Text>
        ))}
    </FlexCol>
);

FontWeightTemplate.storyName = 'Font Weight';

const Text = styled.span<{ weight: FontWeightKeyType }>`
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight]};
    font-size: 36px;
    user-select: none;
`;
