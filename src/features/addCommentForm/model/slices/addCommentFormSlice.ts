import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommnetFormSchema } from '../types/addCommnetForm'

const initialState: AddCommnetFormSchema = {
  text: ''
}

export const assCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginByUsername.pending, (state) => {
//         state.error = undefined
//         state.isLoading = true
//       })
//       .addCase(loginByUsername.fulfilled, (state, action) => {
//         state.error = undefined
//         state.isLoading = false
//       })
//       .addCase(loginByUsername.rejected, (state, action) => {
//         state.error = action.payload
//         state.isLoading = false
//       })
//   }
})

export const { actions: addCommentFormActions } = assCommentFormSlice
export const { reducer: addCommentFormReducers } = assCommentFormSlice
