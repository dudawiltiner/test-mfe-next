import ItemActions from '..';

describe('<ItemActions />', () => {
  it('when the component is mounted, 3 actions should appear: check, edit and remove the task', () => {
    cy.mount(
      <ItemActions
        taskId={1}
        handleCheck={() => {}}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );

    cy.getByDataCy('check-box-action-1').should('be.visible');
    cy.getByDataCy('edit-action-1').should('be.visible');
    cy.getByDataCy('delete-action-1').should('be.visible');
  });

  it('when a task is being edited (with the isOnEditing property equal to true) using this component, should show the close icon.', () => {
    cy.mount(
      <ItemActions
        taskId={1}
        handleCheck={() => {}}
        handleEdit={() => {}}
        handleDelete={() => {}}
        isOnEditing
      />
    );

    cy.getByDataCy('close-icon-1').should('be.visible');
  });
});
