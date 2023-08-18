import { FlexCol, FlexRow } from '@/components/Flex';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import { elevationList } from './Elevation';
import { ElevationKeyType } from './Elevation.types';

const meta: Meta = {
    title: 'Foundations/Elevation',
};

export default meta;

export const FontWeightTemplate = () => (
    <FlexCol gap={80}>
        {elevationList.map((elevation) => (
            <FlexRow align="center" gap={30}>
                <Rect elevation={elevation[0]} />
                <FlexCol>
                    <Text userSelect="none" typograghy="Display" size="Small">
                        {elevation[0]}
                    </Text>
                    <Text userSelect="none" typograghy="Body" size="Large">
                        {elevation[1]}px
                    </Text>
                </FlexCol>
            </FlexRow>
        ))}
    </FlexCol>
);

FontWeightTemplate.storyName = 'Elevation';

const Rect = styled.div<{ elevation: ElevationKeyType }>`
    width: 120px;
    height: 120px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.Palette.primary60};
    box-shadow: 0px 0px ${({ theme, elevation }) => theme.elevation[elevation]}px 0px
        rgba(0, 0, 0, 0.25);
`;
