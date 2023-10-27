import {
  CreateTaskParams,
  UpdateTaskParams,
} from '@context/ToDoListProvider/types';

export interface AddOrUpdateItemProps {
  defaultName?: string;
  defaultDescription?: string;
  handleSave: (value: CreateTaskParams | UpdateTaskParams) => void;
  isToSave?: boolean;
  inputNameLabel: string;
  inputDescriptionLabel: string;
  saveButtonName: string;
  addButtonName: string;
}
