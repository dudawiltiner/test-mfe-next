import { Close, Delete, Edit } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { ItemActionsProps } from './types';

export default function ItemActions({
  handleCheck,
  handleDelete,
  handleEdit,
  checked,
  taskId,
  isOnEditing,
}: ItemActionsProps) {
  return (
    <>
      <Checkbox
        data-cy={`check-box-action-${taskId}`}
        color="secondary"
        edge="end"
        onClick={handleCheck}
        checked={checked}
      />
      <IconButton
        data-cy={`edit-action-${taskId}`}
        onClick={handleEdit}
        style={{ marginLeft: '10px' }}
      >
        {isOnEditing ? (
          <Close data-cy={`close-icon-${taskId}`} color="secondary" />
        ) : (
          <Edit data-cy={`edit-icon-${taskId}`} color="secondary" />
        )}
      </IconButton>
      <IconButton data-cy={`delete-action-${taskId}`}>
        <Delete onClick={handleDelete} color="secondary" />
      </IconButton>
    </>
  );
}
