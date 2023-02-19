import React from 'react';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import MovieCard from './movie-card';
import * as Styled from './styled';
import Header from './header';

const HomePage = () => {
  const [movies, setMovies] = React.useState<MovieModel[]>([]);

  const onDelete = async (id: string) => {
    await ApiService.deleteMovie(id);
    const fetchedMovies = await ApiService.fetchMovies();
    setMovies(fetchedMovies);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedMovies = await ApiService.fetchMovies();
      setMovies(fetchedMovies);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Styled.MovieCardGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            onDelete={() => onDelete(movie.id)}
          />
        ))}
      </Styled.MovieCardGrid>
    </Container>
  );
};

export default HomePage;
