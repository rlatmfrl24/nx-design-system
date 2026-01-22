import type { ReactNode } from 'react';
import type { TextFieldProps } from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface TextFieldWithLabelProps {
  label: string;
  textFieldProps?: TextFieldProps;
  children?: ReactNode;
}

export type TextWithLabelProps = TextFieldWithLabelProps;

export type SelectWithLabelProps = TextFieldWithLabelProps;

const Root = styled(Stack)(({ theme }) => ({
  minWidth: '200px',
  gap: theme.spacing(0.25),
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 400,
  lineHeight: theme.typography.pxToRem(12),
  letterSpacing: '0.14px',
  color: theme.palette.text.primary,
  padding: theme.spacing(0.25),
  paddingBottom: 0,
}));

export const TextFieldWithLabel = ({
  label,
  textFieldProps,
  children,
}: TextFieldWithLabelProps) => {
  const {
    size = 'small',
    variant = 'outlined',
    fullWidth = true,
    ...rest
  } = textFieldProps ?? {};

  return (
    <Root>
      <Label variant="body2">{label}</Label>
      <TextField
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </TextField>
    </Root>
  );
};

export const TextWithLabel = ({
  textFieldProps,
  ...rest
}: TextWithLabelProps) => (
  <TextFieldWithLabel
    {...rest}
    textFieldProps={{
      ...textFieldProps,
      select: false,
    }}
  />
);

export const SelectWithLabel = ({
  textFieldProps,
  ...rest
}: SelectWithLabelProps) => (
  <TextFieldWithLabel
    {...rest}
    textFieldProps={{
      ...textFieldProps,
      select: true,
    }}
  />
);
