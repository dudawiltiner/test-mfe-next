'use client';
import { Task } from '@mui/icons-material';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { ItemProps } from './types';

export default function Item({
  value,
  actions,
  name,
  createdAt,
  showSecondComponent,
  description,
  secondComponent,
}: ItemProps) {
  return (
    <ListItem
      data-cy={`list-item-${value}`}
      disablePadding
      secondaryAction={actions}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <Task />
          </Avatar>
        </ListItemAvatar>
        {showSecondComponent ? (
          secondComponent ?? <></>
        ) : (
          <ListItemText
            data-cy={`list-item-content-${value}`}
            primary={`${name} - 🗓️ ${createdAt}`}
            secondary={description}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
