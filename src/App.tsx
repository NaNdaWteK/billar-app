import { TitleContextProvider } from "./_layout/_TitleContextProvider";
import { Router } from "./Router";

export function App() {
	return (
		<TitleContextProvider>
			<Router />
		</TitleContextProvider>
	);
}
