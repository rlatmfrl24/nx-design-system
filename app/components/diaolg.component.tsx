'use client';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled, type Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export interface DialogProps {
  title?: string;
  content?: ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
}

const getBlueGrey100 = (theme: Theme) =>
  (theme.palette.blueGrey as unknown as Record<number, string>)[100];

const DialogRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  border: `1px solid ${getBlueGrey100(theme)}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
  width: '100%',
}));

const DialogHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${getBlueGrey100(theme)}`,
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)} ${theme.spacing(1)}`,
}));

const TitleWrapper = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
}));

const DialogTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const DialogBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: theme.spacing(2),
}));

const JsonContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${getBlueGrey100(theme)}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  width: '100%',
  flex: 1,
  overflowY: 'auto',
}));

const JsonText = styled('pre')(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 400,
  lineHeight: theme.typography.pxToRem(18),
  letterSpacing: '0.14px',
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
}));

const JsonString = styled('span')(({ theme }) => ({
  color: theme.palette.success.light,
}));

const JsonLiteral = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const DialogFooter = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${getBlueGrey100(theme)}`,
  display: 'flex',
  justifyContent: 'flex-end',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
}));

const CloseButton = styled(ButtonBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: theme.spacing(0.75),
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
}));

const CloseButtonText = styled('span')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 500,
  lineHeight: theme.typography.pxToRem(22),
  letterSpacing: '0.46px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
}));

const defaultJsonContent = (
  <JsonText>
    {'{\n'}
    <JsonString>{'  "firstName": "John",\n'}</JsonString>
    <JsonString>{'  "lastName": "Doe",\n'}</JsonString>
    <JsonString>{'  "isAlive": '}</JsonString>
    <JsonLiteral>{'true'}</JsonLiteral>
    <JsonString>{',\n'}</JsonString>
    <JsonString>{'  "age": 27,\n'}</JsonString>
    <JsonString>{'  "address": {\n'}</JsonString>
    <JsonString>{'    "streetAddress": "21 2nd Street",\n'}</JsonString>
    <JsonString>{'    "city": "New York",\n'}</JsonString>
    <JsonString>{'    "postalCode": "10021-3100"\n'}</JsonString>
    {'  },\n'}
    {'  '}
    <JsonString>{'"phoneNumbers"'}</JsonString>
    {': [\n'}
    {'    {\n'}
    <JsonString>{'      "type": "home",\n'}</JsonString>
    <JsonString>{'      "number": "212 555-1234"\n'}</JsonString>
    {'    },\n'}
    {'    {\n'}
    <JsonString>{'      "type": "office",\n'}</JsonString>
    <JsonString>{'      "number": "646 555-4567"\n'}</JsonString>
    {'    }\n'}
    {'  ],\n'}
    {'  '}
    <JsonString>{'"children"'}</JsonString>
    {': [],\n'}
    {'  '}
    <JsonString>{'"spouse"'}</JsonString>
    {': '}
    <JsonLiteral>{'null'}</JsonLiteral>
    {'\n'}
    {'}'}
  </JsonText>
);

export const Dialog = ({
  title = 'JSON Data',
  content = defaultJsonContent,
  actionLabel = 'Close',
  onActionClick,
}: DialogProps) => (
  <DialogRoot>
    <DialogHeader>
      <TitleWrapper>
        {title && <DialogTitle>{title}</DialogTitle>}
      </TitleWrapper>
    </DialogHeader>
    <DialogBody>
      <JsonContainer>
        {typeof content === 'string' ? <JsonText>{content}</JsonText> : content}
      </JsonContainer>
    </DialogBody>
    {actionLabel && (
      <DialogFooter>
        <CloseButton onClick={onActionClick}>
          <CloseButtonText>{actionLabel}</CloseButtonText>
        </CloseButton>
      </DialogFooter>
    )}
  </DialogRoot>
);
