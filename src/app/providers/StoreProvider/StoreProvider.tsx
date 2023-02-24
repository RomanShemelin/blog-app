import { Provider } from 'react-redux'

import type { ReactNode } from 'react'
import { createReduxStore } from './config/store'
import { type StateSchema } from './config/StateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export function StoreProvider (props: StoreProviderProps) {
  const { children, initialState } = props

  const store = createReduxStore(initialState as StateSchema)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
