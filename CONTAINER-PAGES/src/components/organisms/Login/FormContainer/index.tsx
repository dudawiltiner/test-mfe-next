'use client';
import Form from '@components/molecules/Login/Forms';
import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function FormContainerLogin({
  dictionary,
}: {
  dictionary: DictionaryResult;
}) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const values = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (values?.error) {
      setError(true);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError(false);
  };

  const submitError =
    error &&
    errors?.email?.type !== 'required' &&
    errors?.password?.type !== 'required';

  return (
    <Stack
      data-cy={'container-form-login'}
      spacing={2}
      padding={3}
      maxWidth={'350px'}
      width={'100%'}
    >
      <Typography color="secondary" data-cy={'title-login'} variant="h3">
        {dictionary?.login?.title}
      </Typography>
      <Form
        errors={errors}
        submitError={submitError}
        handleSubmit={handleSubmit(onSubmit)}
        control={control}
        dictionary={dictionary}
      />

      {success && (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={true}
        >
          <Alert
            data-cy={'success-message-login'}
            variant="filled"
            severity="success"
            sx={{ width: '100%' }}
          >
            {dictionary?.login?.successMessage}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
}
