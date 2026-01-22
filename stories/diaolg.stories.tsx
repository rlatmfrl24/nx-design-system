import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Dialog } from '../app/components/diaolg.component';
import { Button } from '../app/components/button.component';

const meta = {
  title: 'Dialog/Variants',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: false },
    actionLabel: { control: 'text' },
    onActionClick: { action: 'action click' },
    onClose: { action: 'close' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DialogScenarioStory />,
};

const DialogScenarioStory = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const dialogContent = (
    <Stack gap={1.5}>
      <Typography variant="subtitle1">임시 콘텐츠</Typography>
      <Typography variant="body2" color="text.secondary">
        안내 메시지와 기본 설명을 표시하는 시나리오입니다.
      </Typography>
      <Divider />
      <Typography variant="body2">
        주요 액션 전에 사용자에게 간단한 정보를 제공합니다.
      </Typography>
    </Stack>
  )

  return (
    <Stack gap={2}>
      <Stack direction="row" gap={1} flexWrap="wrap">
        <Button
          label="기본 콘텐츠 열기"
          variant="outlined"
          color="primary"
          onClick={handleOpen}
        />

      </Stack>
      <Dialog
        open={open}
        title="기본 안내"
        content={dialogContent}
        actionLabel="닫기"
        onClose={() => setOpen(false)}
        onActionClick={() => setOpen(false)}
      />
    </Stack>
  );
};
