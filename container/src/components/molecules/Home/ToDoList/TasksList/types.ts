import {
  DeleteTaskParams,
  UpdateTaskParams,
} from '@context/ToDoListProvider/types';
import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { ResponseTask } from '@hooks/useListTaks/types';

export interface TasksListProps {
  tasks: ResponseTask[];
  handleDelete: (value: DeleteTaskParams) => void;
  handleEdit: (value: UpdateTaskParams) => void;
  dictionary: DictionaryResult;
}
