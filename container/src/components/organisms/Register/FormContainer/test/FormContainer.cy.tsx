import ReactQueryProvider from '@context/ReactQueryProvider';
import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import FormContainerRegister from '..';

describe('<FormContainer />', () => {
  it('when the form is mount, should show a title Login and the form', () => {
    cy.mount(
      <ReactQueryProvider>
        <FormContainerRegister dictionary={ptBR} />
      </ReactQueryProvider>
    );

    cy.getByDataCy('title-register').contains('Cadastro');

    cy.getByDataCy('form-register').should('be.visible');
  });
});
