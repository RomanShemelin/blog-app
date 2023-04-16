import { type Story } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducers } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { articleDetailsPageReducer } from 'pages/ArticlesDetailsPage/model/slices'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducers,
  articlesDetailsPage: articleDetailsPageReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList) => (StoryComponent: Story) => {
  return (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  )
}
