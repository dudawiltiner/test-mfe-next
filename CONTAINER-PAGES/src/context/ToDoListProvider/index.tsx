'use client';
import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { useCreateTask } from '@hooks/useCreateTask';
import { useDeleteTask } from '@hooks/useDeleteTask';
import { useListTasks } from '@hooks/useListTaks';
import { useUpdateTask } from '@hooks/useUpdateTask';
import { createContext } from 'react';
import {
  CreateTaskParams,
  DeleteTaskParams,
  ToDoListContextValues,
  UpdateTaskParams,
} from './types';

export const ToDoListContext = createContext<ToDoListContextValues | null>(
  null
);

export default function ToDoListProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: DictionaryResult;
}) {
  const { data: tasks } = useListTasks();
  const { mutate } = useCreateTask();
  const { mutate: mutateUpdate } = useUpdateTask();
  const { mutate: mutateDelete } = useDeleteTask();

  // TO-DO: GET USERID BEFORE
  const addTask = (value: CreateTaskParams) => {
    mutate({
      userId: 1,
      ...value,
      isDone: false,
    });
  };

  const updateTask = (value: UpdateTaskParams) => {
    mutateUpdate({ ...value });
  };

  const deleteTask = (value: DeleteTaskParams) => {
    mutateDelete(value?.id);
  };

  return (
    <ToDoListContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, dictionary }}
    >
      {children}
    </ToDoListContext.Provider>
  );
}
