import { ComponentUseCase } from './ComponentUseCase';

describe('<TasksListContainer />', () => {
  it('when this component is assembled it should have the correct title and no task message', () => {
    cy.mount(<ComponentUseCase />);

    cy.getByDataCy('task-list-title')
      .should('be.visible')
      .contains('Lista de tarefas');

    cy.getByDataCy('no-tasks-message').should('be.visible');
  });
});
