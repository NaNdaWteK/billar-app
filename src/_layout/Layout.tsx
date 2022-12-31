import "./layout.css";

import { Outlet } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";

export function Layout() {
	return (
		<>
			<header>
				<h1>Gestion de Torneos Billar</h1>
			</header>
			<ErrorBoundary>
				<article className="content">
					<Outlet />
				</article>
			</ErrorBoundary>
		</>
	);
}
