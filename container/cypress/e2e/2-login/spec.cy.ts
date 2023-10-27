describe('Login', () => {
  before(function () {
    cy.loadEnvVariables();
  });

  beforeEach(function () {
    cy.visit('/login');
    cy.fixture('login.json').as('userData');
  });

  it('when the user does NOT enter the email and password correctly, should show error message', function () {
    cy.getByDataCy('email-login').type(this.userData.wrongUser.email);
    cy.getByDataCy('password-login').type(this.userData.wrongUser.password);

    cy.getByDataCy('button-login').click();

    cy.getByDataCy('submit-error-message').should(
      'have.text',
      'Confira se o email e a senha estão corretos.'
    );
  });

  it('when the user enter the email and password correctly, should show the success message', function () {
    cy.getByDataCy('email-login').type(this.userData.rightUser.email);
    cy.getByDataCy('password-login').type(this.userData.rightUser.password);

    cy.getByDataCy('button-login').click();

    cy.getByDataCy('success-message-login').should(
      'have.text',
      'Login realizado com sucesso!'
    );
  });
});

//   cy.getByDataCy('submit-error-message').should(
//     'have.text',
//     'Confira se o email e a senha estão corretos.'
//   );
