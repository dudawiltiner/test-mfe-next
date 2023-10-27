import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';

export interface FormProps {
  control: Control;
  handleSubmit: () => void;
  submitError: boolean;
  errors: FieldErrors<FieldValues>;
  dictionary: DictionaryResult;
}
