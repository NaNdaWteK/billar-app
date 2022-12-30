import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		...render(ui, { wrapper: BrowserRouter }),
	};
};
