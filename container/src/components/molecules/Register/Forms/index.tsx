'use client';
import TextFieldWithTextHelp from '@components/atoms/General/TextFieldWithTextHelp';
import { Alert, Box, Button } from '@mui/material';
import { FormProps } from './types';

export default function Form({
  control,
  handleSubmit,
  errors,
  submitError,
  watch,
  dictionary,
}: FormProps) {
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');
  const errorEmail = errors?.email?.type === 'required';
  const errorPassword = errors?.password?.type === 'required';
  const errorName = errors?.name?.type === 'required';
  const errorConfirmPassword =
    errors?.password?.type === 'required' || password !== confirmPassword;

  return (
    <Box
      data-cy={'form-register'}
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
        label={dictionary?.register?.nameLabel}
        type={'text'}
        id={'name-register'}
        helpText={'Confira se o nome está preenchido.'}
        name={'name'}
        control={control}
        error={errorName}
      />

      <TextFieldWithTextHelp
        label={dictionary?.register?.emailLabel}
        type={'email'}
        id={'email-register'}
        helpText={'Confira se o email está preenchido.'}
        name={'email'}
        control={control}
        error={errorEmail}
      />

      <TextFieldWithTextHelp
        label={dictionary?.register?.passwordLabel}
        type={'password'}
        id={'password-register'}
        helpText={'Confira se a senha está preenchida.'}
        name={'password'}
        control={control}
        error={errorPassword}
      />

      <TextFieldWithTextHelp
        label={dictionary?.register?.confirmPasswordLabel}
        type={'password'}
        id={'confirm-password-register'}
        helpText={'Confira se as senhas são iguais.'}
        name={'confirmPassword'}
        control={control}
        error={errorConfirmPassword}
      />

      <Button
        data-cy="button-register"
        type="submit"
        color="secondary"
        variant="contained"
      >
        {dictionary?.register?.registerButton}
      </Button>

      {submitError && (
        <Alert severity="error" data-cy={`submit-error-message`}>
          {dictionary?.register?.errorMessage}
        </Alert>
      )}
    </Box>
  );
}
