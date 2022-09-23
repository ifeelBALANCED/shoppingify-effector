import { RouteObject } from 'react-router-dom';

import { homeRouting } from '@/app/routing/homeRouting';
import { MainLayout } from '@/shared/ui/layouts/main-layout';

export const appRouting: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [...homeRouting],
  },
];
