import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardFactory } from "./_dashboard/DashBoardFactory";
import { Layout } from "./_layout/Layout";
import { LeaguesDetailFactory } from "./_league/LeagueDetailFactory";
import { LeaguesDashboardFactory } from "./_league/LeaguesDashboardFactory";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: DashboardFactory.create(),
			},
			{
				path: "/leagues",
				element: LeaguesDashboardFactory.create(),
			},
			{
				path: "/league/:id",
				element: LeaguesDetailFactory.create(),
			},
		],
	},
]);

export function Router() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return <RouterProvider router={router} />;
}
