import { FieldValues, useForm } from 'react-hook-form';
import TextFieldWithTextHelp from '..';

export const ComponentUseCase = ({ error }: { error: boolean }) => {
  const { control } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  return (
    <TextFieldWithTextHelp
      error={error}
      label={'Email'}
      type={'email'}
      id={'email-id'}
      helpText={'Confira se o email está preenchido'}
      name={'email'}
      control={control}
    />
  );
};
