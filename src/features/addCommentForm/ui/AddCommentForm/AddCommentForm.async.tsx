import { type FC, lazy } from 'react'
import { type AddCommentFormProps } from './AddCommentForm'
export const addCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await import('./AddCommentForm'))
