import ReactQueryProvider from '@context/ReactQueryProvider';
import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import FormContainerLogin from '..';

describe('<FormContainer />', () => {
  it('when the form is mount, should show a title Login and the form', () => {
    cy.mount(
      <ReactQueryProvider>
        <FormContainerLogin dictionary={ptBR} />
      </ReactQueryProvider>
    );

    cy.getByDataCy('title-login').contains('Conecte-se');

    cy.getByDataCy('form-login').should('be.visible');
  });
});
