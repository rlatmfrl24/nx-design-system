import type React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export interface FooterProps extends BoxProps {
  leftContent?: React.ReactNode;
  actions?: React.ReactNode;
}

const FooterRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  minHeight: 46,
  padding: theme.spacing(1, 2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.common.white,
}));

const LeftSlot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  flex: 1,
  minWidth: 0,
}));

const ActionsSlot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(1),
}));

export const Footer = ({ leftContent, actions, ...rest }: FooterProps) => (
  <FooterRoot {...rest}>
    <LeftSlot>{leftContent}</LeftSlot>
    <ActionsSlot>{actions}</ActionsSlot>
  </FooterRoot>
);
