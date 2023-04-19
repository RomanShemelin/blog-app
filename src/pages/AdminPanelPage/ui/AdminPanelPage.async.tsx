import { lazy } from 'react'
export const AdminPanelPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error___
  setTimeout(() => { resolve(import('./AdminPanelPage')) }, 1500)
}))
