'use client';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { styled, type Theme } from '@mui/material/styles';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from './button.component';

export interface DialogProps {
  open?: boolean;
  title?: string;
  content?: ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
  onClose?: () => void;
}

const getBlueGrey100 = (theme: Theme) =>
  (theme.palette.blueGrey as unknown as Record<number, string>)[100];

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: theme.spacing(72),
    maxWidth: theme.spacing(72),
    borderRadius: theme.spacing(2),
    border: `1px solid ${getBlueGrey100(theme)}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: 0,
    margin: theme.spacing(2),
  },
}));

const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${getBlueGrey100(theme)}`,
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)} ${theme.spacing(1)}`,
  ...theme.typography.subtitle1,
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  borderTop: `1px solid ${getBlueGrey100(theme)}`,
  display: 'flex',
  justifyContent: 'flex-end',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  margin: 0,
}));

const defaultContent = (
  <Typography variant="body2" color="text.secondary">
    You can place any UI content here.
  </Typography>
);

export const Dialog = ({
  open,
  title = 'Dialog',
  content = defaultContent,
  actionLabel = 'Close',
  onActionClick,
  onClose,
}: DialogProps) => {
  const [internalOpen, setInternalOpen] = useState(true);
  const isControlled = open !== undefined;
  const resolvedOpen = isControlled ? open : internalOpen;

  const handleClose = () => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onClose?.();
  };

  const resolvedContent =
    typeof content === 'string' ? (
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    ) : (
      content
    );

  return (
    <StyledDialog
      open={resolvedOpen}
      onClose={handleClose}
      maxWidth={false}
      fullWidth={false}
    >
      {title && <StyledDialogTitle>{title}</StyledDialogTitle>}
      <StyledDialogContent>{resolvedContent}</StyledDialogContent>
      {actionLabel && (
        <StyledDialogActions>
          <Button label={actionLabel} variant="outlined" color="inherit" onClick={onActionClick} />
        </StyledDialogActions>
      )}
    </StyledDialog>
  );
};
