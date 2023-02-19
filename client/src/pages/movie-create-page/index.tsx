import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';

type MovieCreatePageProps = {
  mode?: 'create' | 'edit'
};

const HouseCreatePage: React.FC<MovieCreatePageProps> = () => (
  <Styled.Container>
    <Styled.PaperForm elevation={10}>
      <Typography
        variant="h4"
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
        <LocationField />

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

        <ImagesField />

        <IconButton>
          <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
        </IconButton>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="Price" fullWidth variant="filled" />
          <TextField label="Rating" fullWidth variant="filled" />
        </Box>

        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Create

          </Button>
        </Stack>

      </Stack>
    </Styled.PaperForm>
  </Styled.Container>
);

export default HouseCreatePage;
