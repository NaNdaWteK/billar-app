import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardFactory } from "./_dashboard/DashBoardFactory";
import { Layout } from "./_layout/Layout";
import { LeagueFactory } from "./_league/LeagueFactory";

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
				element: LeagueFactory.create(),
			},
		],
	},
]);

export function Router() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return <RouterProvider router={router} />;
}
