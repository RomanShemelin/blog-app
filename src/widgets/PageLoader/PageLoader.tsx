import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'

import type { PropsWithChildren } from 'react'
import { Loader } from '@/shared/ui/deprecated/Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export function PageLoader (props: PropsWithChildren<PageLoaderProps>) {
  const { className } = props

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  )
}
