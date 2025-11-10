import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  title: "Controls/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button'
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'medium',
  },
};

export const Test: Story = {
  args: {
    variant: 'primary',
    children: "Button",
    size: 'medium',
  }
};
