import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}
type DropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  readonly?: boolean
  direction?: DropDownDirection
  label?: string
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  bottom: cls.optionBottom,
  top: cls.optionsTop
}

export function ListBox (props: ListBoxProps) {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props

  const optionClasses = [mapDirectionClass[direction]]

  return (
    <HStack gap="4">
      {label && <span className={classNames('', { [cls.label]: readonly })}>{label + '>'}</span>}
      <HListBox
      as={'div'}
      className={classNames(cls.ListBox, {}, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
        <HListBox.Button aria-disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                  {selected && '*'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
