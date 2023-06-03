import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, useMemo, type ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../styles/consts';
import cls from './ListBox.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import popupCls from '../styles/popup.module.scss'
import { Icon } from '../../../Icon/Icon';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem[]
  className?: string
  value?: T
  defaultValue?: string
  onChange?: (value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export function ListBox<T extends string> (props: ListBoxProps<T>) {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom left', label } = props

  const optionClasses = [mapDirectionClass[direction], popupCls.menu]

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value)
  }, [items, value])

  return (
    <HStack gap="4">
      {label && <span className={classNames('', { [cls.label]: readonly })}>{label + '>'}</span>}
      <HListBox
      as={'div'}
      className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
        <HListBox.Button aria-disabled={readonly} className={cls.trigger}>
          <Button
            variant="filled"
            disabled={readonly}
            addonRight={<Icon Svg={ArrowIcon}/>}
          >
            {selectedItem?.content ?? defaultValue}
          </Button>
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
                <li className={classNames(cls.item, {
                  [popupCls.active]: active,
                  [popupCls.disabled]: item.disabled,
                  [popupCls.selected]: selected
                })}>
                  {selected}
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
