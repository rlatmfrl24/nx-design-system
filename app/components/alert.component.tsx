// alert.component.tsx

'use client';

import type { ChangeEvent } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button } from './button.component';

type AlertType = 'singleButton' | 'doubleButton' | 'typing' | 'radioButton';

interface RadioOption {
    label: string;
    value: string;
}

export interface AlertProps {
    open?: boolean;
    type: AlertType;
    title?: string;
    description?: string;
    primaryActionLabel?: string;
    secondaryActionLabel?: string;
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
    onClose?: () => void;
    textFieldValue?: string;
    textFieldError?: boolean;
    textFieldHelperText?: string;
    onTextFieldChange?: (value: string) => void;
    radioOptions?: RadioOption[];
    radioValue?: string;
    onRadioChange?: (value: string) => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: theme.spacing(48),
        maxWidth: theme.spacing(48),
        borderRadius: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        padding: 0,
        margin: theme.spacing(2),
    },
}));

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
    padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(1)}`,
}));

const DialogBody = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(0, 3, 3),
}));

const ActionsRow = styled(DialogActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 3),
    margin: 0,
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
    gap: theme.spacing(1),
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    '& .MuiFormControlLabel-label': {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 400,
        lineHeight: theme.typography.pxToRem(20),
        letterSpacing: '0.14px',
        color: theme.palette.text.primary,
    },
}));

export const Alert = ({
    open = true,
    type,
    title = 'Title',
    description = 'Description text goes here.',
    primaryActionLabel = 'Confirm',
    secondaryActionLabel = 'Cancel',
    onPrimaryAction,
    onSecondaryAction,
    onClose,
    textFieldValue,
    textFieldError = false,
    textFieldHelperText = 'Helper text',
    onTextFieldChange,
    radioOptions,
    radioValue,
    onRadioChange,
}: AlertProps) => {
    const resolvedRadioOptions: RadioOption[] =
        radioOptions ?? [
            { label: 'Option 01', value: 'option-1' },
            { label: 'Option 02', value: 'option-2' },
        ];

    const showSecondaryAction = type !== 'singleButton';

    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        onTextFieldChange?.(event.target.value);
    };

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        onRadioChange?.(event.target.value);
    };

    return (
        <StyledDialog
            open={open}
            onClose={onClose}
            maxWidth={false}
            fullWidth={false}
        >
            {title && <DialogHeader>{title}</DialogHeader>}
            <DialogBody>
                <Stack gap={1}>
                    {description && <DescriptionText variant="body2">{description}</DescriptionText>}
                    {type === 'typing' && (
                        <TextField
                            size="small"
                            error={textFieldError}
                            helperText={textFieldError ? textFieldHelperText : undefined}
                            value={textFieldValue}
                            onChange={onTextFieldChange ? handleTextFieldChange : undefined}
                        />
                    )}

                    {type === 'radioButton' && (
                        <FormControl>
                            <StyledRadioGroup
                                value={radioValue}
                                defaultValue={resolvedRadioOptions[0]?.value}
                                onChange={onRadioChange ? handleRadioChange : undefined}
                            >
                                {resolvedRadioOptions.map((option) => (
                                    <StyledFormControlLabel
                                        key={option.value}
                                        value={option.value}
                                        control={<Radio />}
                                        label={option.label}
                                    />
                                ))}
                            </StyledRadioGroup>
                        </FormControl>
                    )}
                </Stack>
            </DialogBody>

            <ActionsRow>
                {showSecondaryAction && (
                    <Button label={secondaryActionLabel} variant="outlined" color="primary" onClick={onSecondaryAction} />
                )}
                <Button
                    label={primaryActionLabel}
                    variant={type === 'singleButton' ? 'outlined' : 'contained'}
                    color="primary"
                    onClick={onPrimaryAction}
                />
            </ActionsRow>
        </StyledDialog>
    );
};
