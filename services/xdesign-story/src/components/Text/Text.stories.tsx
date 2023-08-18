import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: { children: '테스트' },
};
