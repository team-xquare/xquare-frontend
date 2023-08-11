import { FlexCol } from '@/components/Flex';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import { fontStyle, fontStyleList } from './FontStyle';

const meta: Meta<typeof fontStyle> = {
    title: 'Foundations/Font Style',
};

export default meta;

export const FontWeightTemplate = () => (
    <FlexCol>
        {fontStyleList.map((fontStyle) => (
            <>
                <Text userSelect="none" typograghy={fontStyle} size="Large">
                    {fontStyle} Large
                </Text>
                <Text userSelect="none" typograghy={fontStyle} size="Medium">
                    {fontStyle} Medium
                </Text>
                <Text userSelect="none" typograghy={fontStyle} size="Small">
                    {fontStyle} Small
                </Text>
            </>
        ))}
    </FlexCol>
);

FontWeightTemplate.storyName = 'Font Style';
