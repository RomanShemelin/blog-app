import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: ScrollSaveSchema = {
  scroll: {}
}

export const ScrollSaveSlice = createSlice({
  name: 'scrollsave',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const { actions: scrollSaveActions } = ScrollSaveSlice
export const { reducer: scrollSaveReducer } = ScrollSaveSlice
