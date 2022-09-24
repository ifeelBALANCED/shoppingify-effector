import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/ui/header';

export const MainLayout = () => (
  <div className="flex bg-slate-200">
    <Header />
    <Outlet />
  </div>
);
