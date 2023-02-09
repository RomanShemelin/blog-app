import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

import type { PropsWithChildren } from 'react'

interface LoaderProps {
  className?: string
}

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
