import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { SearchArea } from '../app/components/search-area.component';

const meta = {
  title: 'SearchArea',
  component: SearchArea,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof SearchArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const Fields = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  flex: 1,
  gap: theme.spacing(1),
}));

const Field = styled(TextField)(({ theme }) => ({
  minWidth: theme.spacing(28),
}));

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => {
    return (
      <Box sx={{ width: '100%' }}>
        <SearchArea>
          <Field
            label="Search"
            size="small"
            placeholder="Please enter your search term"
          />
        </SearchArea>
      </Box>
    );
  },
};

export const ManyFields: Story = {
  args: {
    children: null,
  },
  render: () => {
    const filterLabels = ['Label', 'Label', 'Label'];
    const filterOptions = ['All'];
    const optionValue = filterOptions[0] ?? '';

    return (
      <Box sx={{ width: '100%' }}>
        <SearchArea>
          <Fields>
            {filterLabels.map((label, index) => (
              <Field key={`${label}-${index}`} label={label} select size="small" defaultValue={optionValue}>
                {filterOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
            ))}
            <Field
              label="Search"
              size="small"
              placeholder="Please enter your search term"
            />
          </Fields>
        </SearchArea>
      </Box>
    );
  },
};

