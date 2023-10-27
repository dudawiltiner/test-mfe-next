import BackgroundImage from '../index';

describe('<BackgroundImage />', () => {
  it('when the component is rendered it should show the image', () => {
    cy.mount(<BackgroundImage />);

    cy.getByDataCy('background-image').should('be.visible');
  });
});
