import { RouteObject } from 'react-router-dom';

import { namedLazy } from '@/shared/lib';
import { Suspensy } from '@/shared/ui';

import routes from './routes';

const HomePage = namedLazy(() => import('@/pages'), 'HomePage');

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME_PAGE,
    index: true,
    element: (
      <Suspensy>
        <HomePage />
      </Suspensy>
    ),
  },
];
