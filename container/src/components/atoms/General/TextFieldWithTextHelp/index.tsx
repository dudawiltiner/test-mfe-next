import { Alert, Stack, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TextFeildProps } from './types';

export default function TextFieldWithTextHelp({
  error = false,
  control,
  name,
  label,
  type,
  id,
  helpText,
  variant = 'standard',
  size,
  defaultValue,
}: TextFeildProps) {
  return (
    <Stack spacing={1} width={'100%'}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            defaultValue={defaultValue}
            error={error}
            data-cy={id}
            label={label}
            type={type}
            variant={variant}
            color="secondary"
            fullWidth
            size={size}
          />
        )}
      />
      {error && helpText && (
        <Alert severity="error" data-cy={`help-text-${id}`}>
          {helpText}
        </Alert>
      )}
    </Stack>
  );
}
