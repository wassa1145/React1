import { Dispatch } from 'react';
import { CONSTANTS } from '../../constants';
import { AddChat, AddMessage, DeleteChat, Message } from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const deleteChat: DeleteChat = (chatName) => ({
  type: DELETE_CHAT,
  chatName,
});

export const addMessage: AddMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply =
  (chatId: string, message: Message) =>
  (dispatch: Dispatch<ReturnType<AddMessage>>) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== CONSTANTS.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            value: 'I bot',
            author: CONSTANTS.BOT,
          })
        );
      }, 1000);
    }
  };
