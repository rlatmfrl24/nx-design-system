import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MenuItem from '@mui/material/MenuItem';
import {
  SelectWithLabel,
  TextWithLabel,
} from '../app/components/text-field.component';

const meta = {
  title: 'TextWithLabel/Variants',
  component: TextWithLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    textFieldProps: {
      control: 'object',
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof TextWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    textFieldProps: {
      placeholder: 'Please enter text',
    },
  },
  render: (args) => <TextWithLabel {...args} />,
};

export const Select: Story = {
  args: {
    label: 'Label',
    textFieldProps: {
      select: true,
      defaultValue: 'All',
    },
    children: [
      <MenuItem key="all" value="All">
        All
      </MenuItem>,
      <MenuItem key="active" value="Active">
        Active
      </MenuItem>,
    ],
  },
  render: (args) => <SelectWithLabel {...args} />,
};
