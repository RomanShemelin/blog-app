import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageInited
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export interface FetchArticleListProps {
  page?: number
}

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (props, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState())
    if (!inited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({ page: 1 }))
    }
  }
);
