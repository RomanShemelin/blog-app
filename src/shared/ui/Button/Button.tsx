import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

import type { ButtonHTMLAttributes, FC } from 'react'

export enum themeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: themeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props

  return (
      <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
          {children}
      </button>
  )
}
