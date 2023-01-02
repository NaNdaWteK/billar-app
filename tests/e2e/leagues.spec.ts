import { leagues } from "../test_support/mocks";

describe("LeaguesDashboard", () => {
	it("successfully loads", () => {
		cy.intercept("/api/v1/league", leagues);
		cy.visit("/leagues");

		cy.findByText("Liga 2022 - Bola 8").should("exist");
	});
});

describe("League Detail", () => {
	it("successfully loads", () => {
		cy.intercept(`/api/v1/league/${leagues[0].id}`, leagues[0]);
		cy.visit(`/league/${leagues[0].id}`);

		cy.findByText("Liga 2022 - Bola 8").should("exist");
	});
});
