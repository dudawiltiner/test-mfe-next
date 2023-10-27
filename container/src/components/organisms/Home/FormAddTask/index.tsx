'use client';
import { AddOrUpdateItem } from '@components/molecules/Home/ToDoList/AddOrUpdateItem';
import { ToDoListContext } from '@context/ToDoListProvider';
import { ToDoListContextValues } from '@context/ToDoListProvider/types';
import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';

export default function FormAddTask() {
  const { addTask, dictionary } = useContext(
    ToDoListContext
  ) as ToDoListContextValues;
  return (
    <Stack data-cy={'form-add-task-container'} spacing={2} margin={2}>
      <Typography data-cy={'add-form-title'} variant="h4">
        {dictionary?.home?.addDescription}
      </Typography>
      <AddOrUpdateItem
        handleSave={addTask}
        inputDescriptionLabel={dictionary?.home?.addTaskDescription}
        inputNameLabel={dictionary?.home?.addNameInput}
        addButtonName={dictionary?.home?.addButton}
        saveButtonName={dictionary?.home?.updateButton}
      />
    </Stack>
  );
}
