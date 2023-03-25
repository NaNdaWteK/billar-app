import { leagues } from '../test_support/mocks';

describe('LeaguesDashboard', () => {
  it('successfully loads', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/leagues');

    cy.findByText('Liga 2022 - Bola 8').should('exist');
    cy.findByText('Inma').should('exist');
    cy.findByText('Ligas').should('exist');
  });
});

describe('League Detail', () => {
  it('successfully loads', () => {
    cy.intercept(`/api/v1/league/${leagues[1].id}`, leagues[1]);
    cy.visit(`/league/${leagues[1].id}`);

    cy.findByText('Liga 2023 - Carambola').should('exist');
    cy.findByText('Inma').should('exist');
  });
});

describe('Create League Form', () => {
  it('can create a league', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/leagues');

    cy.get('.add-form').click();
    cy.get('#leagueName').type('Liga 2024 - Bola 8');
    cy.get('#leagueType').select('Bola 8');
    cy.findByText('Next').click();

    cy.findByText('Liga 2024 - Bola 8').should('exist');
    cy.findByText('del tipo Bola 8').should('exist');

    cy.findByText('Crear').click();

    cy.findByText('Creando tu liga...').should('exist');
    cy.findByText('La Liga ha sido creada.').should('exist');
  });
  it('should be closed when clicking outside', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/leagues');

    cy.get('.add-form').click();
    cy.get('#leagueName').type('Liga 2024 - Bola 8');
    cy.get('#leagueType').select('Bola 8');
    cy.findByText('Next').click();

    cy.findByText('Liga 2024 - Bola 8').should('exist');
    cy.findByText('del tipo Bola 8').should('exist');

    cy.get('.form-background').click();

    cy.findByText('Liga 2024 - Bola 8').should('not.exist');
    cy.findByText('del tipo Bola 8').should('not.exist');
  });
});
