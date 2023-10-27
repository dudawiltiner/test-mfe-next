describe('Register', () => {
  before(function () {
    cy.loadEnvVariables();
  });

  beforeEach(function () {
    cy.visit('/register');
    cy.fixture('register.json').as('userData');
  });

  it('when the user does NOT enter the same password correctly, should show error message on confirm password', function () {
    cy.getByDataCy('name-register').type(this.userData.errorPassword.name);
    cy.getByDataCy('email-register').type(this.userData.errorPassword.email);
    cy.getByDataCy('password-register').type(
      this.userData.errorPassword.password
    );
    cy.getByDataCy('confirm-password-register').type(
      this.userData.errorPassword.confirmPassword
    );

    cy.getByDataCy('help-text-confirm-password-register').should(
      'have.text',
      'Confira se as senhas são iguais.'
    );
  });

  it('when the user enter the email and password correctly, should show the success message', function () {
    cy.getByDataCy('name-register').type(this.userData.succesRegister.name);
    cy.getByDataCy('email-register').type(this.userData.succesRegister.email);
    cy.getByDataCy('password-register').type(
      this.userData.succesRegister.password
    );
    cy.getByDataCy('confirm-password-register').type(
      this.userData.succesRegister.confirmPassword
    );

    cy.getByDataCy('button-register').click();

    cy.getByDataCy('success-message-register').should(
      'have.text',
      'Cadastro realizado com sucesso!'
    );
  });
});
