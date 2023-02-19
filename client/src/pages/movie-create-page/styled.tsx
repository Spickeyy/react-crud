import {
  Paper as MuiPaper,
  PaperProps,
  Stack,
  styled,
} from '@mui/material';
import React from 'react';

export const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Form = (props: Omit<PaperProps<'form'>, 'component'>) => <MuiPaper component="form" {...props} />;

export const PaperForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})`,
  },
}));
