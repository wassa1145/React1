import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Form } from './components/FormFunc/Form';
import { List } from './components/List/List';
import { ChatList } from './components/ChatList/ChatList';
import { CONSTANTS } from './constants';

interface Message {
  id: string;
  author: string;
  message: string;
  systemMessage?: boolean;
}
const chats = [
  { id: nanoid(), name: 'First' },
  { id: nanoid(), name: 'Second' },
  { id: nanoid(), name: 'Third' },
];

export const App: FC = () => {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const listEl = useRef<HTMLInputElement>(null);

  const addMessage = useCallback((message: string) => {
    setMessageList((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: CONSTANTS.USER,
        message,
      },
    ]);
  }, []);
  const scrollList = () => {
    if (listEl.current) listEl.current.scrollTop = listEl.current.scrollHeight;
  };

  useEffect(() => {
    if (
      messageList.length &&
      !messageList[messageList.length - 1].systemMessage
    ) {
      const timeout = setTimeout(() => {
        setMessageList((prevMessage) => [
          ...prevMessage,
          {
            id: nanoid(),
            message: CONSTANTS.DEFAULT_MESSAGE,
            author: CONSTANTS.BOT,
            systemMessage: true,
          },
        ]);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
    scrollList();
  }, [messageList.length]);

  return (
    <div className="wrapper">
      <ChatList chats={chats} />
      <div className="content">
        <List messages={messageList} listEl={listEl}/>
        <Form addMessage={addMessage} />
      </div>
    </div>
  );
};
