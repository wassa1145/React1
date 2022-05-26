import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from 'src/constants';
interface Article {
  title: string;
  summary: string;
  id: number;
}
interface ArticlesState {
  loading: boolean;
  error: any;
  articles: Article[];
}
const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const response = await fetch(api);
    return await response.json();
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.loading = true;
      state.error = '';
    }),
      builder.addCase(getArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.articles = action.payload;
      }),
      builder.addCase(getArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const articlesReducer = articlesSlice.reducer;
