import React from 'react';
import {
  Stack,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const ImagesField = () => (
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
                <RemoveIcon color="error" sx={{ fontSize: 27 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Image 2"
        fullWidth
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <RemoveIcon color="error" sx={{ fontSize: 27 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Image 3"
        fullWidth
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <RemoveIcon color="error" sx={{ fontSize: 27 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  </Box>
);

export default ImagesField;
