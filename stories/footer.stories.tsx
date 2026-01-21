import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CachedIcon from '@mui/icons-material/Cached';
import { Footer } from '../app/components/footer.component';
import { Button } from '../app/components/button.component';

const meta = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['leftContent', 'actions'],
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const createLeftContent = (timestamp: string) => (
  <>
    <CachedIcon sx={{ fontSize: 16, color: 'blueGrey.200' }} />
    <Typography variant="caption" sx={{ color: 'blueGrey.200' }}>
      {timestamp}
    </Typography>
  </>
);

const createActions = (labels: string[]) => (
  <>
    {labels.map((label, index) => (
      <Button
        key={`${label}-${index}`}
        label={label}
        variant={index === labels.length - 1 ? 'contained' : 'outlined'}
        color="primary"
      />
    ))}
  </>
);

export const Default: Story = {
  args: {
    leftContent: createLeftContent('2025-07-23 10:25'),
    actions: createActions(['Button', 'Button', 'Button', 'Button']),
  },
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <Footer {...args} />
    </Box>
  ),
};

export const WithoutLastUpdated: Story = {
  args: {
    leftContent: null,
    actions: createActions(['Cancel', 'Save']),
  },
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <Footer {...args} />
    </Box>
  ),
};

export const SingleAction: Story = {
  args: {
    leftContent: createLeftContent('2025-07-23 10:25'),
    actions: createActions(['Save']),
  },
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <Footer {...args} />
    </Box>
  ),
};
