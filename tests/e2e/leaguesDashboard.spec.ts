import { leagues } from "../test_support/mocks";

describe("LeaguesDashboard", () => {
	it("successfully loads", () => {
		cy.intercept("/api/v1/league", leagues);
		cy.visit("/leagues");

		cy.findByText("Liga 2022 - Bola 8").should("exist");
	});
});
