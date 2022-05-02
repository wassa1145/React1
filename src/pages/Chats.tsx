import React, { FC, useRef } from 'react';
import { Form } from '../components/FormFunc/Form';
import { ChatList } from '../components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { List } from '../components/List/List';
import { WithClasses } from '../HOC/WithClasses';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(List);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);
  const listEl = useRef<HTMLInputElement>(null);
  // const scrollList = () => {
  //   if (listEl.current) listEl.current.scrollTop = listEl.current.scrollHeight;
  // };

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     !messages[chatId][messages[chatId].length - 1].systemMessage
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setMessages({
  //         ...messages,
  //         [chatId]: [
  //           ...messages[chatId],
  //           {
  //             id: nanoid(),
  //             message: CONSTANTS.DEFAULT_MESSAGE,
  //             author: CONSTANTS.BOT,
  //             systemMessage: true,
  //           },
  //         ],
  //       });
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  //   scrollList();
  // }, [chatId, messages, setMessages]);

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
