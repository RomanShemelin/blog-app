import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import type React from 'react'
import { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }
  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  )
})
