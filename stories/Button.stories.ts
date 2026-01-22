// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
 
import { Button } from '../app/components/button.component';
 
const meta = {
  // 👇 The component you're working on
  title: 'Button/Variants',
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
export const Contained: StoryObj<typeof meta>= {
  args: {
    variant: 'contained',
    label: 'Button',
    disabled: false,
  },
};
export const Outlined: StoryObj<typeof meta>= {
  args: {
    variant: 'outlined',
    label: 'Button',
    disabled: false,
  },
};
export const Text: StoryObj<typeof meta>= {
  args: {
    variant: 'text',
    label: 'Button',
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof meta>= {
  args: {
    variant: 'contained',
    label: 'Button',
    disabled: true,
  },
};
export const Inherit: StoryObj<typeof meta>= {
  args: {
    variant: 'outlined',
    label: 'Button',
    color: 'inherit',
    disabled: false,
  },
};