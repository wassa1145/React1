import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageState } from './types';
import { onValue } from 'firebase/database';
import { chatsRef } from 'src/services/firebase';

export interface ChatState {
  [key: string]: {
    id: string;
    name: string;
    messageList: {
      [key: string]: MessageState;
    };
  };
}

const initialState: ChatState = {};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setState(state, action: PayloadAction<{ state: ChatState }>) {
      return { ...action.payload.state };
    },
  },
});

export const initialMessagesFB = createAsyncThunk(
  'chats/initialMessagesFB',
  (data, { dispatch }) => {
    onValue(chatsRef, (snapshot) => {
      const newState = snapshot.val();
      dispatch(setState({ state: newState }));
    });
  }
);

export const { setState } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
