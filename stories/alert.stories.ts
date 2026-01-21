// alert.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Alert } from '../app/components/alert.component';

const meta = {
  title: 'Alert/Variants',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['singleButton', 'doubleButton', 'typing', 'radioButton'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryActionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
    textFieldError: { control: 'boolean' },
    textFieldHelperText: { control: 'text' },
    radioOptions: { control: 'object' },
  },
  parameters: {
    controls: {
      exclude: [
        'component',
        'onPrimaryAction',
        'onSecondaryAction',
        'onTextFieldChange',
        'onRadioChange',
        'textFieldLabel' 
      ],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleButton: Story = {
  args: {
    type: 'singleButton',
    title: 'Information',
    description: 'This is a single-button alert.',
    primaryActionLabel: 'Close',
  },
};

export const DoubleButton: Story = {
  args: {
    type: 'doubleButton',
    title: 'Confirm action',
    description: 'Are you sure you want to proceed?',
    primaryActionLabel: 'Confirm',
    secondaryActionLabel: 'Cancel',
  },
};

export const Typing: Story = {
  args: {
    type: 'typing',
    title: 'Enter label',
    description: 'Please enter a label value below.',
    primaryActionLabel: 'Save',
    secondaryActionLabel: 'Cancel',
  },
};

export const RadioButton: Story = {
  args: {
    type: 'radioButton',
    title: 'File upload',
    description:
      'A file with the same name already exists. Choose an option below.',
    primaryActionLabel: 'OK',
    secondaryActionLabel: 'Cancel',
    radioOptions: [
      { label: 'Option 01', value: 'option-1' },
      { label: 'Option 02', value: 'option-2' },
    ],
  },
};
