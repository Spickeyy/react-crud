import {
  Stack,
  Box,
  Typography,
} from '@mui/material';
import Img from 'components/ui/img';
import React from 'react';
import * as Styled from './styled';

  type MovieCardProps = MovieModel & {
  };

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  images,
  location,
  price,
  rating,
  title,
}) => (
  <Stack sx={{
    boxShadow: 3,
    borderRadius: 1,
    overflow: 'hidden',
    position: 'absolute',
    borderColor: 'primary.main',
  }}
  >
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1.90', width: 1 }} />
    <Styled.AdminActions />
    <Styled.ContentWrapper>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ float: 'right', textAlign: 'right' }}>
          <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>
            Profit:
            {' '}
            {price}
          </Box>
          <Styled.Rating>
            Rated on Idmb:
            {' '}
            {rating}
          </Styled.Rating>
        </Box>
        <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{title}</Typography>
        <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
          Country:
          {' '}
          {`${location.country}`}
        </Typography>
      </Box>
    </Styled.ContentWrapper>
  </Stack>
);

export default MovieCard;
