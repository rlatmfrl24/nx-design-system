import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Dialog } from '../app/components/diaolg.component';

const meta = {
  title: 'Dialog/Default',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: false },
    actionLabel: { control: 'text' },
  },
  parameters: {
    controls: {
      exclude: ['onActionClick'],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'JSON Data',
    actionLabel: 'Close',
  },
};
