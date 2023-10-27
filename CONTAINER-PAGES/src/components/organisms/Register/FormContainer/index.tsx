'use client';
import Form from '@components/molecules/Register/Forms';
import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { useRegisterUser } from '@hooks/useRegisterUser';
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function FormContainerRegister({
  dictionary,
}: {
  dictionary: DictionaryResult;
}) {
  const [error, setError] = useState(false);

  const { mutate, error: errorRequest, isSuccess } = useRegisterUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  const onSubmit = async (data: FieldValues) => {
    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    const values = {
      username: data?.name,
      email: data?.email,
      password: data?.password,
    };

    try {
      await mutate(values);
    } catch {}
  };

  const submitError =
    error &&
    errors?.email?.type !== 'required' &&
    errors?.password?.type !== 'required' &&
    errors?.confirmPassword?.type !== 'required';

  useEffect(() => {
    setError(!!errorRequest);
  }, [errorRequest]);

  return (
    <Stack
      data-cy={'container-form-register'}
      spacing={2}
      padding={3}
      maxWidth={'350px'}
      width={'100%'}
    >
      <Typography color="secondary" data-cy={'title-register'} variant="h3">
        {dictionary?.register?.title}
      </Typography>
      <Form
        errors={errors}
        submitError={submitError}
        handleSubmit={handleSubmit(onSubmit)}
        control={control}
        watch={watch}
        dictionary={dictionary}
      />
      {isSuccess && (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={true}
        >
          <Alert
            data-cy={'success-message-register'}
            variant="filled"
            severity="success"
            sx={{ width: '100%' }}
          >
            {dictionary?.register?.successMessage}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
}
