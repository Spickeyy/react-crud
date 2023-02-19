import React from 'react';
import { Box, TextField } from '@mui/material';

type LocationFieldProps = {
  defaultCountry?: string,
};

const LocationField: React.FC<LocationFieldProps> = ({
  defaultCountry,
}) => (
  <Box sx={{ }}>
    <TextField
      label="Country"
      fullWidth
      variant="filled"
      name="country"
      required
      defaultValue={defaultCountry}
    />
  </Box>
);

export default LocationField;
