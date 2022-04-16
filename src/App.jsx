import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Form } from './components/FormFunc/Form';
import { List } from './components/List/List';
import { CONSTANTS } from './constants';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const listEl = useRef(null);
  const addMessage = (message) => {
    setMessageList([
      ...messageList,
      {
        author: CONSTANTS.USER,
        message,
      },
    ]);
  };
  const scrollList = () => {
    listEl.current.scrollTop = listEl.current.scrollHeight;
  };

  useEffect(() => {
    if (
      messageList.length &&
      !messageList[messageList.length - 1].systemMessage
    ) {
      const timeout = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
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
    <div className="content">
      <List messages={messageList} refEl={listEl} />
      <Form addMessage={addMessage} />
    </div>
  );
};
