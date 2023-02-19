import React from 'react';
import { Box, TextField } from '@mui/material';

const LocationField = () => (
  <Box sx={{ }}>
    <TextField label="Country" fullWidth variant="filled" name="country" required />
  </Box>
);

export default LocationField;
