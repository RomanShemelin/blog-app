import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

import type { PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export function AppLink (props: PropsWithChildren<AppLinkProps>) {
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
}
