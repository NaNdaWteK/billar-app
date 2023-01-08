import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { DashboardFactory } from './_dashboard/DashBoardFactory';
import { Layout } from './_layout/Layout';
import { LeaguesDashboardFactory } from './_league/dashboard/LeaguesDashboardFactory';
import { LeaguesDetailFactory } from './_league/league_detail/LeagueDetailFactory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: DashboardFactory.create(),
      },
      {
        path: '/leagues',
        element: LeaguesDashboardFactory.create(),
      },
      {
        path: '/league/:id',
        element: LeaguesDetailFactory.create(),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
