import React, { FC, useEffect, useRef } from 'react';
import { Form } from 'src/components/FormFunc/Form';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { List } from 'src/components/List/List';
import { WithClasses } from 'src/HOC/WithClasses';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChat, selectChats } from 'src/store/chats/selectors';
import { StoreState } from 'src/store';
import { onValue, push } from 'firebase/database';
import { getChatsById, getMessageListById } from 'src/services/firebase';
import { CONSTANTS } from 'src/constants';
import { nanoid } from 'nanoid';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(List);

  const messages = useSelector((state: StoreState) =>
    selectChat(state, chatId || '')
  );
  const chats = useSelector(selectChats, shallowEqual);
  const listEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatId) {
      onValue(getChatsById(chatId), (snapshot) => {
        const chat = snapshot.val();

        if (
          Object.entries(chat.messageList)[
            Object.entries(chat.messageList).length - 2
          ]
        ) {
          const lastMessage: any = Object.entries(chat.messageList)[
            Object.entries(chat.messageList).length - 2
          ][1];

          if (lastMessage.author !== 'Mr. Robot') {
            push(getMessageListById(chatId), {
              author: CONSTANTS.BOT,
              id: nanoid(),
              value: CONSTANTS.DEFAULT_MESSAGE,
            });
          }
        }
      });
    }
  }, [chatId]);

  if (chatId && !chats[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="wrapper">
      <ChatList />
      <div className="content">
        <MessageListWithClass
          messages={chatId ? messages : []}
          classes="list"
          listEl={listEl}
        />
        <Form />
      </div>
    </div>
  );
};
