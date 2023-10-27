import { ComponentUseCase } from './ComponentUseCase';

describe('<Form />', () => {
  it('when the email and password are not filled in and the "ENTER" button is clicked, should show the correct help messages', () => {
    cy.mount(<ComponentUseCase submitError={false} />);

    cy.getByDataCy('button-register').click();

    cy.getByDataCy('help-text-name-register')
      .should('be.visible')
      .contains('Confira se o nome está preenchido.');

    cy.getByDataCy('help-text-email-register')
      .should('be.visible')
      .contains('Confira se o email está preenchido.');

    cy.getByDataCy('help-text-password-register')
      .should('be.visible')
      .contains('Confira se a senha está preenchida.');

    cy.getByDataCy('help-text-confirm-password-register')
      .should('be.visible')
      .contains('Confira se as senhas são iguais.');
  });

  it('when the component receives submitError as true, it should show an error message', () => {
    cy.mount(<ComponentUseCase submitError={true} />);

    cy.getByDataCy('submit-error-message')
      .should('be.visible')
      .contains(
        'Tivemos um problema com o seu cadastro. Tente novamente mais tarde.'
      );
  });
});
