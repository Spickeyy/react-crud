import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [movies, setMovies] = React.useState<MovieModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedMovies = await ApiService.fetchMovies();
      setMovies(fetchedMovies);
    })();
  }, []);

  return (
    <Box>
      <Box component="pre">
        {JSON.stringify(movies, null, 4)}
      </Box>
    </Box>
  );
};

export default HomePage;
