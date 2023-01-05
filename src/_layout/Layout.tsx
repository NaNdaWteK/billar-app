import "./layout.css";

import { Outlet } from "react-router-dom";

import { trans } from "../domain/translations";
import { ErrorBoundary } from "./ErrorBoundary";
import TopBarProgressByLocation from "./TopBarProgresByLocation";

export function Layout() {
	return (
		<>
			<TopBarProgressByLocation />
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
