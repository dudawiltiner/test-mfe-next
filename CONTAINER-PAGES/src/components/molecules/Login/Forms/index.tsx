'use client';
import TextFieldWithTextHelp from '@components/atoms/General/TextFieldWithTextHelp';
import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FormProps } from './types';

export default function Form({
  control,
  handleSubmit,
  errors,
  submitError,
  dictionary,
}: FormProps) {
  const errorEmail = errors?.email?.type === 'required';
  const errorPassword = errors?.password?.type === 'required';

  return (
    <Box
      data-cy={'form-login'}
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextFieldWithTextHelp
        label={dictionary?.login?.emailLabel}
        type={'email'}
        id={'email-login'}
        helpText={'Confira se o email está preenchido'}
        name={'email'}
        control={control}
        error={errorEmail}
      />

      <TextFieldWithTextHelp
        label={dictionary?.login?.passwordLabel}
        type={'password'}
        id={'password-login'}
        helpText={'Confira se a senha está preenchida'}
        name={'password'}
        control={control}
        error={errorPassword}
      />

      <Stack justifyContent={'right'} direction={'row'} width={'100%'}>
        <Link href={'/cadastrar'}>
          <Typography color="secondary" variant="body1">
            {dictionary?.login?.registerLink}
          </Typography>
        </Link>
      </Stack>
      <Button
        data-cy="button-login"
        type="submit"
        color="secondary"
        variant="contained"
      >
        {dictionary?.login?.loginButton}
      </Button>

      {submitError && (
        <Alert severity="error" data-cy={`submit-error-message`}>
          {dictionary?.login?.errorMessage}
        </Alert>
      )}
    </Box>
  );
}
