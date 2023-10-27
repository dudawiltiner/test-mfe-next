import { ComponentUseCase } from './ComponentUseCase';

describe('<TextFieldWithTextHelp />', () => {
  it('should mount with label and error default false', () => {
    cy.mount(<ComponentUseCase error={false} />);

    cy.getByDataCy('email-id').contains('Email');
  });

  it('when the error is true, should show the help text with the content described in the property', () => {
    cy.mount(<ComponentUseCase error />);

    cy.getByDataCy('help-text-email-id')
      .should('be.visible')
      .contains('Confira se o email está preenchido');
  });
});
