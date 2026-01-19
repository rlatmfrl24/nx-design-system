import { Button as BaseButton, ButtonProps } from '@mui/material';

export const Button = ({
  ...props
}: ButtonProps) => {
  return <BaseButton {...props} />;
};
