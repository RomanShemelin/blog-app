import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecomendationsIsLoading = (state: StateSchema) => {
  return state.articlesDetailsPage?.recomendations.isLoading;
}

export const getArticleRecomendationsError = (state: StateSchema) => {
  return state.articlesDetailsPage?.recomendations.error;
}
