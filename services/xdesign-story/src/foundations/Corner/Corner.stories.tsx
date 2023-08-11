import { FlexCol, FlexRow } from '@/components/Flex';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import { cornerList } from './Corner';
import { CornerKeyType } from './Corner.types';

const meta: Meta = {
    title: 'Foundations/Corner',
};

export default meta;

export const FontWeightTemplate = () => (
    <FlexCol gap={20}>
        {cornerList.map((corner) => (
            <FlexRow gap={30}>
                <Rect radius={corner[0]} />
                <FlexCol>
                    <Text userSelect="none" typograghy="Display" size="Small">
                        {corner[0]}
                    </Text>
                    <Text userSelect="none" typograghy="Body" size="Large">
                        {corner[1]}px
                    </Text>
                </FlexCol>
            </FlexRow>
        ))}
    </FlexCol>
);

FontWeightTemplate.storyName = 'Corner';

const Rect = styled.div<{ radius: CornerKeyType }>`
    width: 120px;
    height: 120px;
    border-radius: ${({ theme, radius }) => theme.corner[radius]}px;
    // TODO 색상 컬러시스템으로 변경 필요
    background-color: #9650fa;
`;
