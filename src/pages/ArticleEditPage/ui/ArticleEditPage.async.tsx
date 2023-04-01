import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error fix
  setTimeout(() => { resolve(import('./ArticleEditPage')); }, 400)
}))
