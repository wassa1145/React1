import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List as ListUI, TextField } from '@mui/material';
import { Button as ButtonUI } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './ChatList.css';

import { Button } from '../FormFunc/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatList } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('');
    }
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
                  onClick={() => dispatch(deleteChat(chat.name))}
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
