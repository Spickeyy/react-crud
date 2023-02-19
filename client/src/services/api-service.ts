import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchMovies = async () => {
  const { data } = await api.get<MovieModel[]>('/movies');

  return data;
};

const fetchMovie = async (id: string | number) => {
  const { data } = await api.get<MovieModel>(`/movies/${id}`);

  return data;
};

const createMovie = async (movieData: Omit<MovieModel, 'id'>) => {
  await api.post('/movies', {
    title: movieData.title,
    location: {
      country: movieData.location,
    },
    images: movieData.images,
    price: movieData.price,
    rating: movieData.rating,
  });
};

const deleteMovie = async (id: string) => {
  await api.delete(`movies/${id}`);
};

const ApiService = {
  fetchMovies,
  fetchMovie,
  deleteMovie,
  createMovie,
};

export default ApiService;
