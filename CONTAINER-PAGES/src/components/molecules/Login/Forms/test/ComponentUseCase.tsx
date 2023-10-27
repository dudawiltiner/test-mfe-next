import { ptBR } from '@dictionaries/default-language-collections/default-pt-BR';
import { FieldValues, useForm } from 'react-hook-form';
import Form from '..';

export const ComponentUseCase = ({ submitError }: { submitError: boolean }) => {
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

  const onSubmit = () => {
    return;
  };

  return (
    <Form
      errors={errors}
      submitError={submitError}
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      dictionary={ptBR}
    />
  );
};
