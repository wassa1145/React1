import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Form } from '../components/FormFunc/Form';
import { nanoid } from 'nanoid';
import { CONSTANTS } from '../constants';
import { ChatList } from '../components/ChatList/ChatList';
import { Chat, Messages } from '../App';
import { Navigate, useParams } from 'react-router-dom';
import { List } from '../components/List/List';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  deleteChat: (
    chatName: string
  ) => MouseEventHandler<HTMLButtonElement> | undefined;
}
export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  deleteChat,
  messages,
  setMessages,
}) => {
  const { chatId } = useParams();
  const listEl = useRef<HTMLInputElement>(null);
  const scrollList = () => {
    if (listEl.current) listEl.current.scrollTop = listEl.current.scrollHeight;
  };

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      !messages[chatId][messages[chatId].length - 1].systemMessage
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              message: CONSTANTS.DEFAULT_MESSAGE,
              author: CONSTANTS.BOT,
              systemMessage: true,
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
    scrollList();
  }, [chatId, messages, setMessages]);

  const addMessage = useCallback(
    (message: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author: CONSTANTS.USER,
              message,
            },
          ],
        }));
      }
    },
    [chatId, setMessages]
  );

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="wrapper">
      <ChatList
        chats={chatList}
        onAddChat={onAddChat}
        deleteChat={deleteChat}
      />
      <div className="content">
        <List messages={chatId ? messages[chatId] : []} listEl={listEl} />
        <Form addMessage={addMessage} />
      </div>
    </div>
  );
};
