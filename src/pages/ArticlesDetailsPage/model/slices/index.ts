import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecomendationReducer } from './articleDetailsRecomendationSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recomendations: articleDetailsRecomendationReducer,
  comments: articleDetailsCommentsReducer
})
