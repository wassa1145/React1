import React, { FC, useRef } from 'react';
import { Form } from 'src/components/FormFunc/Form';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { List } from 'src/components/List/List';
import { WithClasses } from 'src/HOC/WithClasses';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatList, selectChats } from 'src/store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(List);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);
  const listEl = useRef<HTMLInputElement>(null);

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="wrapper">
      <ChatList />
      <div className="content">
        <MessageListWithClass
          messages={chatId ? chats[chatId] : []}
          classes="list"
          listEl={listEl}
        />
        <Form />
      </div>
    </div>
  );
};
