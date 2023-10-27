import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import { AddOrUpdateItem } from '..';

describe('<AddorUpdateItem />', () => {
  it('when the component is mounted, should show the form, an input and button', () => {
    cy.mount(
      <AddOrUpdateItem
        handleSave={() => {}}
        inputDescriptionLabel={ptBR?.home?.addTaskDescription}
        inputNameLabel={ptBR?.home?.addNameInput}
        addButtonName={ptBR?.home?.addButton}
        saveButtonName={ptBR?.home?.updateButton}
      />
    );

    cy.getByDataCy('form-task').should('be.visible');
    cy.getByDataCy('input-name-task').should('be.visible');
    cy.getByDataCy('input-description-task').should('be.visible');
    cy.getByDataCy('button-add-task').should('be.visible');

    cy.getByDataCy('button-add-task').contains('Adicionar');
  });

  it('when the component has the property isToSave equal to true, the button must contain the word Salvar', () => {
    cy.mount(
      <AddOrUpdateItem
        handleSave={() => {}}
        isToSave
        inputDescriptionLabel={ptBR?.home?.addTaskDescription}
        inputNameLabel={ptBR?.home?.addNameInput}
        addButtonName={ptBR?.home?.addButton}
        saveButtonName={ptBR?.home?.updateButton}
      />
    );

    cy.getByDataCy('button-update-task').contains('Salvar');
  });
});
