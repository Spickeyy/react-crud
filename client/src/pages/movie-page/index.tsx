import React from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from 'pages/home-page/header';
import ApiService from 'services/api-service';
import * as Styled from '../home-page/styled';
import MovieCard from './movie-card';

const MoviePage = () => {
  const { id } = useParams();

  if (!id) throw ('Error');

  const [movie, setMovie] = React.useState<MovieModel | undefined>();

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedMovie = await ApiService.fetchMovie(id);
        setMovie(fetchedMovie);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (movie) {
    return (
      <Container>
        <Header />
        <Styled.MovieCardGrid>
          <MovieCard
            key={movie.id}
            {...movie}
          />
        </Styled.MovieCardGrid>
      </Container>
    );
  }
  return null;
};

export default MoviePage;
