'use client';
import TextFieldWithTextHelp from '@components/atoms/General/TextFieldWithTextHelp';
import { Add } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { AddOrUpdateItemProps } from './types';

export function AddOrUpdateItem({
  handleSave,
  defaultName = '',
  defaultDescription = '',
  isToSave = false,
  inputDescriptionLabel,
  inputNameLabel,
  addButtonName,
  saveButtonName,
}: AddOrUpdateItemProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      taskName: defaultName,
      taskDescription: defaultDescription,
    },
  });

  const errorName = errors?.taskName?.type === 'required';
  const errorDescription = errors?.taskDescription?.type === 'required';

  const onSubmit = (data: FieldValues) => {
    const values = {
      name: data?.taskName,
      description: data?.taskDescription,
    };
    handleSave(values);
  };

  return (
    <Box
      data-cy={'form-task'}
      component={'form'}
      display={'flex'}
      gap={3}
      onSubmit={handleSubmit(onSubmit)}
      marginTop={1}
      marginBottom={1}
      alignItems={'center'}
    >
      <Stack flex={1}>
        <TextFieldWithTextHelp
          variant="outlined"
          size="small"
          label={inputNameLabel}
          type={'text'}
          id={'input-name-task'}
          name={'taskName'}
          control={control}
          error={errorName}
        />
      </Stack>

      <Stack flex={2}>
        <TextFieldWithTextHelp
          variant="outlined"
          size="small"
          label={inputDescriptionLabel}
          type={'text'}
          id={'input-description-task'}
          name={'taskDescription'}
          control={control}
          error={errorDescription}
        />
      </Stack>

      <Button
        id={`button-${isToSave ? 'update' : 'add'}-task`}
        data-cy={`button-${isToSave ? 'update' : 'add'}-task`}
        type="submit"
        style={{ width: '150px', height: '38px' }}
        startIcon={!isToSave && <Add />}
        color="secondary"
        variant="contained"
      >
        {isToSave ? saveButtonName : addButtonName}
      </Button>
    </Box>
  );
}
