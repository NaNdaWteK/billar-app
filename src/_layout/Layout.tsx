import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<header>
				<h1>Gestion de Torneos Billar</h1>
			</header>
			<Outlet />
		</>
	);
}
