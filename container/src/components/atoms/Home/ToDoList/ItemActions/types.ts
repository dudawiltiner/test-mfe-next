export interface ItemActionsProps {
  handleCheck: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  checked?: boolean;
  taskId: number;
  isOnEditing?: boolean;
}
