import { classNames } from '@/shared/lib/classNames/classNames'
import './Loader.scss'

import type { PropsWithChildren } from 'react'

interface LoaderProps {
  className?: string
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Loader (props: PropsWithChildren<LoaderProps>) {
  const { className } = props

  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
