import FormContainerLogin from '@components/organisms/Login/FormContainer';
import FormContainerRegister from '@components/organisms/Register/FormContainer';
import ReactQueryProvider from '@context/ReactQueryProvider';
import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import SignTemplate from '../index';

describe('<SignTemplate />', () => {
  it('when the login form was attached to the template, should show the form', () => {
    cy.readFile('public/assets/fundoUhuu.png', null).then((img) => {
      // Intercept requests to Next backend image endpoint and return expected image
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: {
          'Content-Type': 'image/png',
        },
        body: img.buffer,
      });
      cy.mount(
        <SignTemplate hasi18n={false} lang={'pt-BR'}>
          <ReactQueryProvider>
            <FormContainerLogin dictionary={ptBR} />
          </ReactQueryProvider>
        </SignTemplate>
      );
    });

    cy.getByDataCy('container-form-login').should('be.visible');
  });

  it('when the register form was attached to the template, should show the form', () => {
    cy.mount(
      <SignTemplate hasi18n={false} lang={'pt-BR'}>
        <ReactQueryProvider>
          <FormContainerRegister dictionary={ptBR} />
        </ReactQueryProvider>
      </SignTemplate>
    );

    cy.getByDataCy('container-form-register').should('be.visible');
  });
});
