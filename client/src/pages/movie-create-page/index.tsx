import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  Rating,
} from '@mui/material';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const country = formData.get('country');

  if (title == null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  if (price == null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  if (rating == null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (country == null || country instanceof File || country.length < 2) throw new Error('incorrect Country');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    title,
    location: {
      country,
    },
    images: images as string[],
    price: `${Number(price).toFixed(2)}€`,
    rating: Number(rating),
  };
};

type MovieCreatePageProps = {
  mode?: 'create' | 'edit'
};

const HouseCreatePage: React.FC<MovieCreatePageProps> = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      console.log(values);
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={10} onSubmit={handleSubmit} ref={formRef}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center' }}
        >
          ADD A MOVIE
        </Typography>

        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Title" fullWidth variant="filled" name="title" required />
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

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          />
          <Box>
            <Typography component="legend">Movie Rating</Typography>
            <Rating name="rating" />
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
};

export default HouseCreatePage;
