'use client';
import TasksList from '@components/molecules/Home/ToDoList/TasksList';
import { ToDoListContext } from '@context/ToDoListProvider';
import { ToDoListContextValues } from '@context/ToDoListProvider/types';
import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';

export default function TasksListContainer() {
  const { tasks, updateTask, deleteTask, dictionary } = useContext(
    ToDoListContext
  ) as ToDoListContextValues;

  return (
    <Stack data-cy={'task-list-container'} spacing={2} margin={2}>
      <Typography data-cy={'task-list-title'} variant="h4">
        {dictionary?.home?.tasksTitle}
      </Typography>
      <TasksList
        tasks={tasks ?? []}
        handleDelete={deleteTask}
        handleEdit={updateTask}
        dictionary={dictionary}
      />
    </Stack>
  );
}
