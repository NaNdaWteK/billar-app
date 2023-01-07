import { screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";

import { LeaguesDashboard } from "../src/_league/dashboard/LeaguesDashboard";
import { LeagueDetail } from "../src/_league/league_detail/LeagueDetail";
import { LeagueServiceInterface } from "../src/domain/interfaces/league";
import { leagues } from "./test_support/mocks";
import { renderWithRouter } from "./test_support/RenderWithRouter";

const mockLeagueService = mock<LeagueServiceInterface>();

describe("League Dashboard Component", () => {
	it("show all leagues", async () => {
		mockLeagueService.findAll.mockResolvedValue(leagues);
		renderWithRouter(<LeaguesDashboard service={mockLeagueService} />);

		const bola8 = await screen.findByText("Liga 2022 - Bola 8");
		const carambola = await screen.findByText("Liga 2023 - Carambola");
		const inma = await screen.findByText("Inma");

		expect(bola8).toBeInTheDocument();
		expect(carambola).toBeInTheDocument();
		expect(inma).toBeInTheDocument();
	});
});

describe("League Detail Component", () => {
	it("show league", async () => {
		const route = `/league/${leagues[1].id}`;
		mockLeagueService.findById.mockResolvedValue(leagues[1]);
		renderWithRouter(<LeagueDetail service={mockLeagueService} />, {
			route,
		});

		const bola8 = await screen.findByText("Liga 2023 - Carambola");
		const inma = await screen.findByText("Inma");

		expect(bola8).toBeInTheDocument();
		expect(inma).toBeInTheDocument();
	});
});
