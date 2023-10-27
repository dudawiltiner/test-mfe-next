import ToDoListProvider from '@context/ToDoListProvider';
import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import FormAddTask from '..';

export const ComponentUseCase = () => {
  return (
    <ToDoListProvider dictionary={ptBR}>
      <FormAddTask />
    </ToDoListProvider>
  );
};
