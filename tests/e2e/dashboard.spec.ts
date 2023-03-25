import { leagues } from '../test_support/mocks';

describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/');

    cy.findByText('Liga 2022 - Bola 8').should('exist');
    cy.findByText('Gestión de Torneos Billar').should('exist');
  });
  it('shows a message when there are no leagues', () => {
    cy.intercept('/api/v1/league', []);
    cy.visit('/');

    cy.findByText('No hay ligas creadas').should('exist');
  });
});
