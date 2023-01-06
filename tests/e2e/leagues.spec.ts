import { leagues } from "../test_support/mocks";

describe("LeaguesDashboard", () => {
	it("successfully loads", () => {
		cy.intercept("/api/v1/league", leagues);
		cy.visit("/leagues");

		cy.findByText("Liga 2022 - Bola 8").should("exist");
		cy.findByText("Inma").should("exist");
		cy.findByText("Ligas").should("exist");
	});
});

describe("League Detail", () => {
	it("successfully loads", () => {
		cy.intercept(`/api/v1/league/${leagues[1].id}`, leagues[1]);
		cy.visit(`/league/${leagues[1].id}`);

		cy.findByText("Liga 2023 - Carambola").should("exist");
		cy.findByText("Inma").should("exist");
	});
});
