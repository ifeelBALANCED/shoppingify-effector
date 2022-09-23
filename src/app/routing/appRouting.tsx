import { RouteObject } from 'react-router-dom';

import { MainLayout } from '@/shared/ui/layouts';

import { homeRouting } from './homeRouting';

export const appRouting: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [...homeRouting],
  },
];
