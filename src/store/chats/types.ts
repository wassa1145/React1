import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMessage>;

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT;
  chatName: string;
};

export type DeleteChat = (chatName: string) => {
  type: typeof DELETE_CHAT;
  chatName: string;
};

export type AddMessage = (
  chatId: string,
  message: string
) => {
  type: typeof ADD_MESSAGE;
  chatId: string;
  message: string;
};
