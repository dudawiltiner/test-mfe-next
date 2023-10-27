import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { ResponseTask } from '@hooks/useListTaks/types';

export interface CreateTaskParams {
  name: string;
  description: string;
}

export interface UpdateTaskParams {
  id: number;
  name: string;
  description: string;
  isDone: boolean;
}

export interface DeleteTaskParams {
  id: number;
}

export interface ToDoListContextValues {
  tasks: ResponseTask[] | undefined;
  addTask: (value: CreateTaskParams) => void;
  updateTask: (value: UpdateTaskParams) => void;
  deleteTask: (value: DeleteTaskParams) => void;
  dictionary: DictionaryResult;
}
