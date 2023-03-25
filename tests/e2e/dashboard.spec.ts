import { leagues } from '../test_support/mocks';
import { trans } from '../../src/domain/translations';

describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.intercept('/api/v1/league', leagues);
    cy.visit('/');

    cy.findByText('Liga 2022 - Bola 8').should('exist');
    cy.findByText(trans('layout.title')).should('exist');
  });
  it('not found pages', () => {
    cy.visit('/any-not-found-page');

    cy.findByText(trans('page.not.found')).should('exist');
  });
  it('shows a message when there are no leagues', () => {
    cy.intercept('/api/v1/league', []);
    cy.visit('/');

    cy.findByText(trans('leagues.league.noleagues')).should('exist');
  });
});
