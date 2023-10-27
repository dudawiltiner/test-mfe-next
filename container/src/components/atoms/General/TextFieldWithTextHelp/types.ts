import { TextFieldVariants } from '@mui/material';
import { Control } from 'react-hook-form';

export interface TextFeildProps {
  error?: boolean;
  label: string;
  type: string;
  id: string;
  helpText?: string;
  name: string;
  control: Control;
  variant?: TextFieldVariants | undefined;
  size?: 'small' | 'medium' | undefined;
  defaultValue?: unknown;
}

// Component Testing Type
