import { render, screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";

import { LeaguesDashboard } from "../src/_league/LeaguesDashboard";
import { LeagueServiceInterface } from "../src/domain/interfaces/league";
import { leagues } from "./test_support/mocks";

const mockLeagueService = mock<LeagueServiceInterface>();

describe("Dashboard Component", () => {
	it("show all leagues", async () => {
		mockLeagueService.findAll.mockResolvedValue(leagues);
		render(<LeaguesDashboard service={mockLeagueService} />);

		const bola8 = await screen.findByText("Liga 2022 - Bola 8");
		const carambola = await screen.findByText("Liga 2023 - Carambola");

		expect(bola8).toBeInTheDocument();
		expect(carambola).toBeInTheDocument();
	});
});
