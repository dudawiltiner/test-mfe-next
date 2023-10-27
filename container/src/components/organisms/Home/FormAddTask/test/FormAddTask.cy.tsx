import ReactQueryProvider from '@context/ReactQueryProvider';
import { ComponentUseCase } from './ComponentUseCase';

describe('<FormAddTask />', () => {
  it('when this component is assembled, the correct title and form for adding a task should appear', () => {
    cy.mount(
      <ReactQueryProvider>
        <ComponentUseCase />
      </ReactQueryProvider>
    );

    cy.getByDataCy('add-form-title')
      .should('be.visible')
      .contains('Adicione uma nova tarefa');

    cy.getByDataCy('form-task');
  });
});
