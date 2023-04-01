import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';

import { type StateSchema } from 'app/providers/StoreProvider';

import { type Article } from 'entities/Article';
import { fetchArticleRecomendation } from '../services/fetchArticleRecomendation/fetchArticleRecomendation';
import { type ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';

const recomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticleRecomendations = recomendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articlesDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
);

const articleDetailsRecomendationSlice = createSlice({
  name: 'articleDetailsRecomendationSlice',
  initialState: recomendationsAdapter.getInitialState<ArticleDetailsRecomendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendation.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecomendation.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false;
        recomendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecomendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsRecomendationReducer } = articleDetailsRecomendationSlice;
