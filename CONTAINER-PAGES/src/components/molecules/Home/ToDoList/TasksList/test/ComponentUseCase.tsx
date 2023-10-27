import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import TasksList from '..';
export const ComponentUseCase = ({ noTasks }: { noTasks: boolean }) => {
  const tasks = noTasks
    ? []
    : [
        {
          id: 1,
          userId: 2,
          name: 'Nome da Task 1',
          description: 'Descrição da task 1',
          isDone: false,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          userId: 2,
          name: 'Nome da Task 2',
          description: 'Descrição da task 2',
          isDone: false,
          createdAt: new Date().toLocaleDateString(),
          updatedAt: new Date().toLocaleDateString(),
        },
      ];

  return (
    <TasksList
      dictionary={ptBR}
      tasks={tasks}
      handleDelete={() => {}}
      handleEdit={() => {}}
    />
  );
};
