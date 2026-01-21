// alert.component.tsx

'use client';

import type React from 'react';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Button } from './button.component';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import theme from '../theme';
import Typography from '@mui/material/Typography';

type AlertType = 'singleButton' | 'doubleButton' | 'typing' | 'radioButton';

interface RadioOption {
    label: string;
    value: string;
}

export interface AlertProps {
    type: AlertType;
    title?: string;
    description?: string;
    primaryActionLabel?: string;
    secondaryActionLabel?: string;
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
    textFieldValue?: string;
    textFieldError?: boolean;
    textFieldHelperText?: string;
    onTextFieldChange?: (value: string) => void;
    radioOptions?: RadioOption[];
    radioValue?: string;
    onRadioChange?: (value: string) => void;
}

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
    maxWidth: 384,
    alignItems: 'stretch',
    borderColor: theme.palette.divider,
    borderRadius: 16,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(0),
    '& .MuiAlert-message': {
        width: '100%',
        padding: 0,
    },
}));

const ActionsRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
}));

export const Alert = ({
    type,
    title = 'Title',
    description = 'Description text goes here.',
    primaryActionLabel = 'Confirm',
    secondaryActionLabel = 'Cancel',
    onPrimaryAction,
    onSecondaryAction,
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

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTextFieldChange?.(event.target.value);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onRadioChange?.(event.target.value);
    };

    return (
        <StyledAlert icon={false} severity="info" variant="outlined">
            <Stack gap={1} padding={3}>
                {title && <Typography variant='subtitle1' color='text.primary'>{title}</Typography>}
                {description && <Typography variant='body2' color='blueGrey.400'>{description}</Typography>}
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
                        <RadioGroup
                            value={radioValue}
                            defaultValue={resolvedRadioOptions[0]?.value}
                            onChange={onRadioChange ? handleRadioChange : undefined}
                            sx={{
                                gap: 1,
                            }}
                        >
                            {resolvedRadioOptions.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                    sx={{
                                        margin: 0,
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                            letterSpacing: '0.14px',
                                            color: 'text.primary',
                                        },
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                )}

            </Stack>

            <ActionsRow sx={{ paddingX: theme.spacing(3), paddingY: theme.spacing(2), marginTop: theme.spacing(0) }}>
                {showSecondaryAction && (
                    <Button label={secondaryActionLabel} variant="outlined" color="primary" onClick={onSecondaryAction} />
                )}
                <Button label={primaryActionLabel} variant={
                    type === 'singleButton' ? 'outlined' : 'contained'
                } color="primary" onClick={onPrimaryAction} />
            </ActionsRow>
        </StyledAlert>
    );
};
