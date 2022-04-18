import React, { FC } from 'react';
import { List as ListUI } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './ChatList.css';

interface ChatProps {
  id: string,
  name: string,
}
interface ChatListProps {
  chats: ChatProps[],
}

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <ListUI data-testid="chat-list">
      {chats.map((chat) => (
        <ListItem key={chat.id} disablePadding className="chats-item">
          <ListItemButton>
            <ListItemText primary={chat.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </ListUI>
  );
};
