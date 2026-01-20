// button.component.tsx

import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


type ButtonBaseProps = Omit<MuiButtonProps, "component">;

export interface ButtonProps extends ButtonBaseProps {
    label: string;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
}));

export const Button = ({ label, ...rest }: ButtonProps) => (
    <StyledButton {...rest} size="small">
        {label}
    </StyledButton>
);