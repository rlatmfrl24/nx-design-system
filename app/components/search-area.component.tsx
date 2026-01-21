import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { Button } from './button.component';

export interface SearchAreaProps {
  children: ReactNode;
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  padding: `${theme.spacing(3)}`,
  paddingTop: `${theme.spacing(2)}`,
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(1),
  marginLeft: 'auto',
}));

const CircleIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.spacing(12.5),
  border: `1px solid ${theme.palette.divider}`,
}));

export const SearchArea = ({ children }: SearchAreaProps) => (
  <Root>
    {children}
    <ButtonGroup >
      <CircleIconButton aria-label="Filters" size='small'>
        <RefreshRoundedIcon fontSize="small" />
      </CircleIconButton>
      <Button label="Search" variant="contained" color="primary" />
    </ButtonGroup>
  </Root>
);
