import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    args: { symbol: true, wordmark: true, height: 60 },
};
