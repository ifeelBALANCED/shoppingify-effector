import { RouteObject } from 'react-router-dom';
import { namedLazy } from 'src/shared/lib';

// import { Suspensy } from '@/shared/ui/suspensy';
import routes from './routes';

const HomePage = namedLazy(() => import('src/pages'), 'HomePage');

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME_PAGE,
    index: true,
    element: (
      // <Suspensy>
      <HomePage />
      // </Suspensy>
    ),
  },
];
