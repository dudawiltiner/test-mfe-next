import { ComponentUseCase } from './ComponentUseCase';

describe('<Form />', () => {
  it('when the email and password are not filled in and the "ENTER" button is clicked, should show the correct help messages', () => {
    cy.mount(<ComponentUseCase submitError={false} />);

    cy.getByDataCy('button-login').click();

    cy.getByDataCy('help-text-email-login')
      .should('be.visible')
      .contains('Confira se o email está preenchido');

    cy.getByDataCy('help-text-password-login')
      .should('be.visible')
      .contains('Confira se a senha está preenchida');
  });

  it('when the component receives submitError as true, it should show an error message', () => {
    cy.mount(<ComponentUseCase submitError={true} />);

    cy.getByDataCy('submit-error-message')
      .should('be.visible')
      .contains('Confira se o email e a senha estão corretos');
  });
});
