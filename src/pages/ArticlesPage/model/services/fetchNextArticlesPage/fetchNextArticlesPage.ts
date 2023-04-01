import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesIsLoading,
  getArticlesPageHasMore,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export interface FetchArticleListProps {
  page?: number
}

export const fetchNextArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (props, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesIsLoading(getState())
    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  }
);
