import { Provider } from 'react-redux'

import type { ReactNode } from 'react'
import { createReduxStore } from './config/store'
import { type StateSchema } from './config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function StoreProvider (props: StoreProviderProps) {
  const { children, initialState, asyncReducers } = props

  const navigate = useNavigate();

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
