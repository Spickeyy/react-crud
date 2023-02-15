import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import React from 'react';
import * as Styled from './styled';

type MovieCardProps = MovieModel;

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  images,
  location,
  price,
  rating,
  title,
}) => (
  <Stack sx={{ boxShadow: 3 }}>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
    <Styled.ContentWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ float: 'right', textAlign: 'right' }}>
          <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
          <Styled.Rating>{rating}</Styled.Rating>
        </Box>

        <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{title}</Typography>
        <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
          {`${location.country}`}
        </Typography>
      </Box>

      <Styled.ButtonContainer>
        <Button color="secondary" variant="outlined">Favorite</Button>
        <Button color="primary" variant="contained">View Info</Button>
      </Styled.ButtonContainer>
    </Styled.ContentWrapper>
  </Stack>
);

export default MovieCard;
