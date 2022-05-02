import React, { FC, MouseEventHandler, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { List as ListUI, TextField } from '@mui/material';
import { Button as ButtonUI } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './ChatList.css';

import { Chat } from '../../App';
import { Button } from '../FormFunc/components/Button/Button';

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chats: Chat) => void;
  deleteChat: (
    chatName: string
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  deleteChat,
}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });
      setName('');
    }
  };
  return (
    <div className="chat-list-wrapper" data-testid="chat-list">
      <div>
        <h1>Список чатов</h1>
        <ListUI>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              role="chat"
              className="chat-item"
              secondaryAction={
                <ButtonUI
                  onClick={deleteChat(chat.name)}
                  className="button-delete"
                  role="button-delete"
                >
                  X
                </ButtonUI>
              }
              disablePadding
            >
              <NavLink
                to={`/chats/${chat.name}`}
                className={({ isActive }) =>
                  isActive ? 'chats-link chats-link_active' : 'chats-link'
                }
              >
                <ListItemButton>
                  <ListItemText primary={chat.name} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </ListUI>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          className="form-input"
          placeholder="Введите название чата"
          role="input-chat-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button name="Добавить новый чат" disabled={!name} />
      </form>
    </div>
  );
};
