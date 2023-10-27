import { Checkbox, Typography } from '@mui/material';
import Item from '..';

describe('<Item />', () => {
  it('when the item receives the properties of name and description, should show the name of the item and the name of the description who created the item.', () => {
    cy.mount(
      <Item
        value={0}
        name={'Nome do Item'}
        description={'Descrição do Item'}
        createdAt="02/02/2023"
      />
    );

    cy.getByDataCy('list-item-content-0').should('be.visible');
    cy.getByDataCy('list-item-content-0').within(() => {
      cy.get('span').contains('Nome do Item - 🗓️ 02/02/2023');
      cy.get('p').contains('Descrição do Item');
    });
  });

  it('when the item has some action to be performed, should show that action', () => {
    cy.mount(
      <Item
        value={0}
        name={'Nome do Item'}
        description={'Descrição do Item'}
        createdAt="02/02/2023"
        actions={<Checkbox data-cy="checkbox-action" />}
      />
    );

    cy.getByDataCy('checkbox-action').should('be.visible');
  });

  it('when showSecondComponent property is true and secondComponent property has an element, should show that element or component', () => {
    cy.mount(
      <Item
        value={0}
        name={'Nome do Item'}
        description={'Descrição do Item'}
        createdAt="02/02/2023"
        showSecondComponent
        secondComponent={
          <Typography data-cy="second-component">
            Um elemento/componente
          </Typography>
        }
      />
    );

    cy.getByDataCy('second-component').should('be.visible');
  });
});
