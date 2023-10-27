describe('Home', () => {
  before(function () {
    cy.loadEnvVariables();
  });

  beforeEach(function () {
    cy.fixture('login.json').then(
      (loginData: { rightUser: { email: string; password: string } }) => {
        cy.loginWithUI(loginData.rightUser.email, loginData.rightUser.password);
        cy.visit('/');
        cy.fixture('todolist.json').as('taskData');
      }
    );
  });

  // after(async function () {
  //   await clearUser();
  // });

  it('when adding two tasks in the form, should show both tasks', function () {
    cy.getByDataCy('input-name-task').type(this.taskData.firstTask.name);
    cy.getByDataCy('input-description-task').type(
      this.taskData.firstTask.description
    );

    cy.getByDataCy('button-add-task').click();

    cy.getByDataCy('input-name-task')
      .clear()
      .type(this.taskData.secondTask.name);
    cy.getByDataCy('input-description-task')
      .clear()
      .type(this.taskData.secondTask.description);

    cy.getByDataCy('button-add-task').click();

    cy.getByDataCy('list-item-content-1').within(() => {
      cy.get('span').should(
        'have.text',
        `${this.taskData.firstTask.name} - 🗓️ ${new Date().toLocaleDateString(
          'pt-BR'
        )}`
      );
      cy.get('p').should('have.text', this.taskData.firstTask.description);
    });

    cy.getByDataCy('list-item-content-2').within(() => {
      cy.get('span').should(
        'have.text',
        `${this.taskData.secondTask.name} - 🗓️ ${new Date().toLocaleDateString(
          'pt-BR'
        )}`
      );
      cy.get('p').should('have.text', this.taskData.secondTask.description);
    });
  });

  it('when the check item action button of each task to be use, should work', function () {
    cy.getByDataCy('check-box-action-1').should('be.visible').click().click();

    cy.getByDataCy('check-box-action-2').should('be.visible').click().click();
  });

  // it('when update a task, should show the update task', function () {
  //   cy.getByDataCy('list-item-1').within(() => {
  //     cy.getByDataCy('edit-action-1').click();

  //     cy.getByDataCy('form-task').should('be.visible');

  //     cy.getByDataCy('input-name-task')
  //       .clear()
  //       .type(this.taskData.updateFirstTask.name);

  //     cy.getByDataCy('input-description-task')
  //       .clear()
  //       .type(this.taskData.updateFirstTask.description);

  //     cy.getByDataCy('button-update-task').click();
  //   });

  //   cy.getByDataCy('list-item-content-1').within(() => {
  //     cy.get('span').should(
  //       'have.text',
  //       `${
  //         this.taskData.updateFirstTask.name
  //       } - 🗓️ ${new Date().toLocaleDateString('pt-BR')}`
  //     );
  //     cy.get('p').should(
  //       'have.text',
  //       this.taskData.updateFirstTask.description
  //     );
  //   });
  // });

  it('when delete a task, should not show the task', function () {
    cy.getByDataCy('delete-action-1').should('be.visible').click();
    cy.getByDataCy('delete-action-2').should('be.visible').click();

    cy.getByDataCy('no-tasks-message').should('be.visible');
  });
});
