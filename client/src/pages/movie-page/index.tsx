import React from 'react';
import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import useMovie from 'hooks/useMovie';
import routes from 'navigation/routes';

const MoviePage = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(movie, null, 4)}
    </Box>
  );
};

export default MoviePage;
