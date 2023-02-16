import React from 'react';
import ApiService from 'services/api-service';
import MovieCard from './movie-card';
import * as Styled from './styled';

const HomePage = () => {
  const [movies, setMovies] = React.useState<MovieModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedMovies = await ApiService.fetchMovies();
      setMovies(fetchedMovies);
    })();
  }, []);

  return (
    <Styled.MovieCardGrid>
      {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Styled.MovieCardGrid>
  );
};

export default HomePage;
