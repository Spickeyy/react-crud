import React from 'react';
import {
  Stack,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import uniqid from 'uniqid';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const initImagesIds: string[] = [uniqid()];

const ImagesField = () => {
  const [imagesIds, setImagesIds] = React.useState<string[]>(initImagesIds);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);
  const removeImageField = (id: string) => setImagesIds(imagesIds.filter((imgId) => imgId !== id));

  return (
    <Box sx={{ }}>
      <Stack sx={{ gap: 2 }}>
        {imagesIds.map((id) => (
          <TextField
            required
            key={id}
            name="images"
            label="Image"
            fullWidth
            variant="filled"
            InputProps={imagesIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImageField(id)}>
                    <RemoveIcon color="error" sx={{ fontSize: 27 }} />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImageField}>
        <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
