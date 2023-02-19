import React from 'react';
import ApiService from 'services/api-service';

const useMovie = (id: string | undefined) => {
  const [movie, setMovie] = React.useState<MovieModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedMovie = await ApiService.fetchMovie(id);

        setMovie(fetchedMovie);
      })();
    }
  }, [id]);

  return movie;
};

export default useMovie;
