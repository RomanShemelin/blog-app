import { Provider } from 'react-redux'

import { type ReducersMapObject } from '@reduxjs/toolkit'
import type { ReactNode } from 'react'
import { type StateSchema } from './config/StateSchema'
import { createReduxStore } from './config/store'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function StoreProvider (props: StoreProviderProps) {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
