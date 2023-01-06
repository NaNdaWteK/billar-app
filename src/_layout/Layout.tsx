import "./layout.css";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { trans } from "../domain/translations";
import { useTitleContextProvider } from "./_TitleContextProvider";
import { ErrorBoundary } from "./ErrorBoundary";
import TopBarProgressByLocation from "./TopBarProgresByLocation";

export function Layout() {
	const { title } = useTitleContextProvider();
	useEffect(() => {
		if (title) {
			const element = document.querySelector("h2.title") as unknown as HTMLTitleElement;
			element.style.setProperty("--title-width", `-${title.length}%`);
		}
	}, [title]);

	return (
		<>
			<TopBarProgressByLocation />
			<header>
				<h1>{trans("layout.title")}</h1>
			</header>
			<ErrorBoundary>
				<article className="content">
					<h2 className="title">{title}</h2>
					<Outlet />
				</article>
			</ErrorBoundary>
		</>
	);
}
