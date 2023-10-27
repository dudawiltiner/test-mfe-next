import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import HomeTemplate from '..';

describe('<HomeTemplate />', () => {
  it('when this component is assembled, the title, the form for adding a new task and the list of tasks should appear', () => {
    cy.readFile('public/assets/fundoUhuu.png', null).then((img) => {
      // Intercept requests to Next backend image endpoint and return expected image
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: {
          'Content-Type': 'image/png',
        },
        body: img.buffer,
      });
      cy.mount(<HomeTemplate hasi18n={false} lang="pt-BR" dictionary={ptBR} />);
    });
    cy.getByDataCy('to-do-list-title')
      .should('be.visible')
      .contains('Lista de Tarefas');
    cy.getByDataCy('form-add-task-container').should('be.visible');
    cy.getByDataCy('task-list-container').should('be.visible');
  });
});
