import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ngdex',
  outDir: './dist/static',
  routes: {
    '/pokemon/:id': {
      type: 'json',
      id: {
        url:
          'https://pokemon-apiv2.herokuapp.com/pokemons?page=1&itemsPerPage=807',
        resultsHandler: (response) => response.content,
        property: 'id',
      },
    },
  },
};
