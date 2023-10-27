'use client';
import Item from '@components/atoms/Home/ToDoList/Item';
import ItemActions from '@components/atoms/Home/ToDoList/ItemActions';
import { CreateTaskParams } from '@context/ToDoListProvider/types';
import { ListItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { AddOrUpdateItem } from '../AddOrUpdateItem';
import { TasksListProps } from './types';

export default function TasksList({
  tasks,
  handleDelete,
  handleEdit,
  dictionary,
}: TasksListProps) {
  const [showComponetId, setShowComponetId] = useState<number>();

  const handleShowForm = (id: number) => {
    if (showComponetId === id) {
      setShowComponetId(undefined);
    } else {
      setShowComponetId(id);
    }
  };

  return (
    <>
      {tasks && tasks?.length !== 0 ? (
        <ListItem data-cy={'task-list'} style={{ flexDirection: 'column' }}>
          {tasks?.map((task, idx) => (
            <Item
              key={task?.id}
              value={idx + 1}
              name={task?.name}
              description={task?.description}
              createdAt={new Date(task?.createdAt).toLocaleDateString('pt-br')}
              actions={
                <ItemActions
                  taskId={idx + 1}
                  handleCheck={() =>
                    handleEdit({ ...task, isDone: !task?.isDone })
                  }
                  handleEdit={() => handleShowForm(task?.id)}
                  handleDelete={() => handleDelete({ id: task?.id })}
                  checked={task?.isDone}
                  isOnEditing={showComponetId === task?.id}
                />
              }
              showSecondComponent={showComponetId === task?.id}
              secondComponent={
                <Stack width={'75%'}>
                  <AddOrUpdateItem
                    isToSave
                    defaultName={task?.name}
                    defaultDescription={task?.description}
                    handleSave={(value: CreateTaskParams) => {
                      handleEdit({ ...task, ...value });
                      handleShowForm(task?.id);
                    }}
                    inputDescriptionLabel={dictionary?.home?.addTaskDescription}
                    inputNameLabel={dictionary?.home?.addNameInput}
                    addButtonName={dictionary?.home?.addButton}
                    saveButtonName={dictionary?.home?.updateButton}
                  />
                </Stack>
              }
            />
          ))}
        </ListItem>
      ) : (
        <Typography
          data-cy={'no-tasks-message'}
          padding={'8px 16px'}
          variant="h5"
        >
          {dictionary?.home?.noDataMessage}
        </Typography>
      )}
    </>
  );
}
