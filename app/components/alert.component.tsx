// alert.component.tsx

'use client';

import type React from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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
  textFieldLabel?: string;
  textFieldValue?: string;
  textFieldError?: boolean;
  textFieldHelperText?: string;
  onTextFieldChange?: (value: string) => void;
  radioOptions?: RadioOption[];
  radioValue?: string;
  onRadioChange?: (value: string) => void;
}

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  alignItems: 'stretch',
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(3),
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
  textFieldLabel = 'Label',
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
      <Stack gap={2}>
        <Box>
          {title && <AlertTitle>{title}</AlertTitle>}
          {description}
        </Box>

        {type === 'typing' && (
          <TextField
            size="small"
            label={textFieldLabel}
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
            >
              {resolvedRadioOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      </Stack>

      <ActionsRow>
        {showSecondaryAction && (
          <Button variant="outlined" size="small" onClick={onSecondaryAction}>
            {secondaryActionLabel}
          </Button>
        )}
        <Button variant="contained" size="small" onClick={onPrimaryAction}>
          {primaryActionLabel}
        </Button>
      </ActionsRow>
    </StyledAlert>
  );
};
