import { ComponentUseCase } from './ComponentUseCase';

describe('<TasksList />', () => {
  it('when you dont have any task, it should show a message saying that you dont have any task created', () => {
    cy.mount(<ComponentUseCase noTasks />);

    cy.getByDataCy('no-tasks-message').should('be.visible');
  });

  it('when you have some list of tasks to be rendered, it should show each of the tasks', () => {
    cy.mount(<ComponentUseCase noTasks={false} />);

    cy.getByDataCy('list-item-1').should('be.visible');
    cy.getByDataCy('list-item-2').should('be.visible');
  });
});
