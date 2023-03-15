import { lazy } from 'react'
export const ArticlesDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error___
  setTimeout(() => { resolve(import('./ArticlesDetailsPage')) }, 1500)
}))
