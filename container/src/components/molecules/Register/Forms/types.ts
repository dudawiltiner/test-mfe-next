import { DictionaryResult } from '@dictionaries/default-dictionaries';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from 'react-hook-form';

export interface FormProps {
  control: Control;
  handleSubmit: () => void;
  submitError: boolean;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  dictionary: DictionaryResult;
}
