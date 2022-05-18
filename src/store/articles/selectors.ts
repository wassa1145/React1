import { StoreState } from '..';

export const selectArticles = (state: StoreState) => state.articles.articles;
export const selectArticlesLoading = (state: StoreState) =>
  state.articles.loading;
export const selectError = (state: StoreState) => state.articles.error;
