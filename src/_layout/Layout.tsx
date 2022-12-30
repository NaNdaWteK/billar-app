import { Outlet } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";

export function Layout() {
	return (
		<>
			<header>
				<h1>Gestion de Torneos Billar</h1>
			</header>
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		</>
	);
}
