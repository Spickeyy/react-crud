import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page';
import MoviePage from 'pages/movie-page';
import routes from './routes';
import MovieCreatePage from '../pages/movie-create-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.MoviePage.routePath,
        element: <MoviePage />,
      },
      {
        path: routes.MovieCreatePage,
        element: <MovieCreatePage />,
      },
      {
        path: routes.MovieUpdatePage.routePath,
        element: <MovieCreatePage mode="update" />,
      },
    ],
  },
]);

export default router;
