import { leagues } from '../test_support/mocks';

describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/');

    cy.findByText('Liga 2022 - Bola 8').should('exist');
    cy.findByText('Gestion de Torneos Billar').should('exist');
  });
});
