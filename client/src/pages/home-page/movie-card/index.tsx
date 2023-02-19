import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as Styled from './styled';

  type MovieCardProps = MovieModel & {
    onDelete: VoidFunction,
  };

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  images,
  location,
  price,
  rating,
  title,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{
      boxShadow: 3, borderRadius: 1, overflow: 'hidden', position: 'relative', borderColor: 'primary.main',
    }}
    >
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => navigate(routes.MovieUpdatePage.createLink(id))}
        >
          UPDATE
        </Button>
        <Button variant="contained" color="error" size="small" onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </Styled.AdminActions>
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
          <Button color="success" variant="outlined" size="small">
            <FavoriteIcon />
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={() => navigate(routes.MoviePage.createLink(id))}
          >
            View INFO
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default MovieCard;
