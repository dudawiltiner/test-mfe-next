import { Context } from 'mocha';
import addContext from 'mochawesome/addContext';
import './commands';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `assets/${Cypress.spec.relative.replace(
      'cypress/e2e/',
      ''
    )}/${runnable?.parent?.title} -- ${test.title} (failed).png`;
    const Test = { test } as Context;
    addContext(Test, screenshot);
  }
});
