import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List as ListUI, TextField } from '@mui/material';
import { Button as ButtonUI } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './ChatList.css';

import { Button } from 'src/components/FormFunc/components/Button/Button';
import { useSelector } from 'react-redux';
import { selectChatList } from 'src/store/chats/selectors';
import { push, remove } from 'firebase/database';
import { chatsRef, getChatsById } from 'src/services/firebase';
import { nanoid } from 'nanoid';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(chatList);

    if (name) {
      const id = nanoid();
      push(chatsRef, {
        id,
        messageList: {
          empty: true,
        },
        name,
      });
      setName('');
    }
  };
  const handleDeleteChat = (id: string) => {
    remove(getChatsById(id));
  };

  return (
    <div className="chat-list-wrapper" data-testid="chat-list">
      <div>
        <h1>Список чатов</h1>
        <ListUI>
          {chatList.map((chat) => (
            <ListItem
              key={chat.id}
              role="chat"
              className="chat-item"
              secondaryAction={
                <ButtonUI
                  onClick={() => handleDeleteChat(chat.id)}
                  className="button-delete"
                  role="button-delete"
                >
                  X
                </ButtonUI>
              }
              disablePadding
            >
              <NavLink
                to={`/chats/${chat.id}`}
                data-testid="chat-link"
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
