import "./layout.css";

import { Outlet } from "react-router-dom";

import { trans } from "../domain/translations";
import { ErrorBoundary } from "./ErrorBoundary";

export function Layout() {
	return (
		<>
			<header>
				<h1>{trans("layout.title")}</h1>
			</header>
			<ErrorBoundary>
				<article className="content">
					<Outlet />
				</article>
			</ErrorBoundary>
		</>
	);
}
