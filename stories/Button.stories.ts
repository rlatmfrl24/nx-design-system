// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
 
import { Button } from './button.component';
 
const meta = {
  // 👇 The component you're working on
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;
 
export default meta;
// 👇 Type helper to reduce boilerplate 
type Story = StoryObj<typeof meta>;

// 👇 A story named Default that renders `<Button variant="contained" color="primary" label="Button" />`
export const Default: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    label: 'Button',
    disabled: false,
  },
};