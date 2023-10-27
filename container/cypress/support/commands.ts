/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataCy(dataCyValue: string): Chainable<JQuery<HTMLElement>>;
    loadEnvVariables(): Chainable<void>;
    loginWithUI(email: string, password: string): Chainable<void>;
  }
}

Cypress.Commands.add('getByDataCy', (dataCyValue) => {
  return cy.get(`[data-cy="${dataCyValue}"]`);
});

Cypress.Commands.add('loadEnvVariables', () => {
  cy.log('Carregando variáveis de ambiente...');

  const cyEnv = Cypress.env();
  Cypress.config('baseUrl', cyEnv.baseUrl ?? 'http://localhost:3000');
});

Cypress.Commands.add('loginWithUI', (email, password) => {
  cy.session(email, () => {
    cy.visit('/login');
    cy.getByDataCy('email-login').type(email);
    cy.getByDataCy('password-login').type(password);
    cy.getByDataCy('button-login').click();
    cy.wait(500);
  });
});
