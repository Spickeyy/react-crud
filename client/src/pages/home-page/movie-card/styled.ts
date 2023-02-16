import { Stack, Box, styled } from '@mui/material';

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
}));

export const AdminActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  gap: theme.spacing(1),
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

export const Rating = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  color: theme.palette.warning.light,
  gap: theme.spacing(0.2),
  fontWeight: 600,
  '&:after': {
    content: '"★"',
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  '&>*': {
    flexGrow: 1,
  },
}));
