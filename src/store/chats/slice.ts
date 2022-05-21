import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message, MessageState } from './types';
import { CONSTANTS } from 'src/constants';
import { nanoid } from 'nanoid';

export interface ChatsState {
  [key: string]: MessageState[];
}

const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: CONSTANTS.USER,
      value: 'Hello geekbrains',
    },
  ],
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    deleteChat(state, action: PayloadAction<{ chatName: string }>) {
      delete state[action.payload.chatName];
    },
    addMessage(
      state,
      action: PayloadAction<{ chatId: string; message: Message }>
    ) {
      const { chatId } = action.payload;
      const { value, author } = action.payload.message;
      state[chatId].push({
        id: nanoid(),
        author,
        value,
      });
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'chats/addMessageWithReply',
  async (
    { chatId, message }: { chatId: string; message: Message },
    { dispatch }
  ) => {
    dispatch(addMessage({ chatId, message }));

    if (message.author !== CONSTANTS.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatId,
            message: {
              author: CONSTANTS.BOT,
              value: CONSTANTS.DEFAULT_MESSAGE,
            },
          })
        );
      }, 1000);
    }
  }
);

export const { addChat, deleteChat, addMessage } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
