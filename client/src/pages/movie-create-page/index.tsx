import React from 'react';
import routes from 'navigation/routes';
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
import useMovie from 'hooks/useMovie';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';
import { btnColorMap, btnMap, titleMap } from './data';
import { formatValues } from './helpers';

type MovieCreatePageProps = {
  mode?: 'create' | 'update'
};

const MovieCreatePage: React.FC<MovieCreatePageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const movie = useMovie(id);

  const newMovie = async (movieData: Omit<MovieModel, 'id'>) => {
    try {
      await ApiService.createMovie(movieData);
      navigate(routes.HomePage);
    } catch (error) {
      alert(error);
    }
  };

  const updateMovie = async (movieId: string, movieData: Omit<MovieModel, 'id'>) => {
    try {
      await ApiService.updateMovie(movieId, movieData);
      navigate(routes.HomePage);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
        console.log('Daromas sukurimas');
        console.log(values);
        newMovie(values);
      } else if (id) {
        console.log('upgrade, id:', id);
        console.log(values);
        updateMovie(id, values);
      }
      console.log(values);
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && movie === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={10} onSubmit={handleSubmit} ref={formRef}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center' }}
        >
          {titleMap[mode]}
        </Typography>

        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            name="title"
            required
            defaultValue={movie?.title}
          />
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
          <LocationField defaultCountry={movie?.location.country} />

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

          <ImagesField defaultImages={movie?.images} />

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={movie?.price.slice(0, -1)}
          />
          <Box>
            <Typography component="legend">Movie Rating</Typography>
            <Rating name="rating" defaultValue={movie?.rating} />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}

            </Button>
          </Stack>

        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default MovieCreatePage;
