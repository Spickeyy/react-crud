import React from 'react';
import {
  Stack,
  Paper,
  Typography,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type MovieCreatePageProps = {
  mode?: 'create' | 'edit'
};

const HouseCreatePage: React.FC<MovieCreatePageProps> = () => (
  <Stack sx={{
    p: 2,
    py: { xs: 2, sm: 4, lg: 6 },

    alignItems: 'center',
  }}
  >
    <Paper
      elevation={10}
      component="form"
      sx={(theme) => ({
        p: { xs: 2, lg: 3 },
        width: { sm: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})` },
      })}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: 'center' }}
      >
        ADD A MOVIE
      </Typography>
      <Stack sx={{ gap: 2, mt: 2 }}>
        <TextField label="Title" fullWidth variant="filled" />
        <Typography
          variant="subtitle1"
          sx={{ pl: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <EditLocationIcon />
          Location

        </Typography>
        <Box sx={{ }}>
          <TextField label="Country" fullWidth variant="filled" />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ pl: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <AddPhotoAlternateIcon />
          Images

        </Typography>
        <Box sx={{ }}>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Image 1"
              fullWidth
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <RemoveIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField label="Image 2" fullWidth variant="filled" />
            <TextField label="Image 3" fullWidth variant="filled" />
          </Stack>
        </Box>
        <IconButton>
          <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
        </IconButton>
      </Stack>
    </Paper>
  </Stack>
);

export default HouseCreatePage;
