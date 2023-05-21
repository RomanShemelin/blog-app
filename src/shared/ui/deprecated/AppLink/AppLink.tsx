import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

import { memo, type PropsWithChildren, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children: ReactNode
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */

export const AppLink = memo((props: PropsWithChildren<AppLinkProps>) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
