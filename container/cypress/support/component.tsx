/* eslint-disable @typescript-eslint/no-namespace */

import './commands';

import CustomThemeProvider from '@context/CustomThemeProvider';
import { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component) => {
  return mount(
    <CustomThemeProvider options={{ key: 'mui' }} lang="pt-BR">
      {component}
    </CustomThemeProvider>
  );
});
