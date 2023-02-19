const MoviePagePath = '/movie/' as const;
const MovieUpdatePagePath = '/movie-update-page/' as const;

const routes = {
  HomePage: '/',
  MoviePage: {
    routePath: `${MoviePagePath}:id`,
    createLink: (id: string | number) => `${MoviePagePath}${id}`,
  },
  MovieUpdatePage: {
    routePath: `${MovieUpdatePagePath}:id`,
    createLink: (id: string | number) => `${MovieUpdatePagePath}${id}`,
  },
  MovieCreatePage: '/movie-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
