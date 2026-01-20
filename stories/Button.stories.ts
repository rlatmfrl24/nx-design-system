// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
 
import { Button } from '../app/components/button.component';
 
const meta = {
  // 👇 The component you're working on
  title: 'Button/Primary',
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
    label: {
      control: 'text',
    },
  },
  parameters: {
    controls: {
      exclude: ['component'],
    },
  },
} satisfies Meta<typeof Button>;
 
export default meta;
export const Playground: StoryObj<typeof meta>= {
  args: {
    variant: 'contained',
    label: 'Button',
    disabled: false,
  },
};