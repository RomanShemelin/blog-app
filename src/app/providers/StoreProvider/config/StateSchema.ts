import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from '@/entities/Article'
import { type CounterSchema } from '@/entities/Counter'
import { type UserSchema } from '@/entities/User'
import { type AddCommnetFormSchema } from '@/features/addCommentForm'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ProfileSchema } from '@/features/editableProfileCard'
import { type ScrollSaveSchema } from '@/features/ScrollSave'
import {
  type ArticleDetailsPageSchema
} from '@/pages/ArticlesDetailsPage'
import { type ArticlesPageSchema } from '@/pages/ArticlesPage'
import { type CombinedState } from 'redux'
import { type rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollsave: ScrollSaveSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommnetFormSchema
  articlesPage?: ArticlesPageSchema
  articlesDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export interface reducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface reduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager
}
export interface ThunkExtraApg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraApg
  state: StateSchema
}
