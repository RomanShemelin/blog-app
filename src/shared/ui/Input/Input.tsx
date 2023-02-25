import { classNames } from 'shared/lib/classNames/classNames'
import type React from 'react'
import { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
          {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
          )}
          <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        {...otherProps}
      />
      </div>
  )
})
