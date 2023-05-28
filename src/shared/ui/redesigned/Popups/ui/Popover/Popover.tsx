import { Popover as HPopover } from '@headlessui/react';
import { type ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
  children: ReactNode
}

export function Popover (props: PopoverProps) {
  const { className, trigger, direction = 'bottom left', children } = props;
  const menuClasses = [mapDirectionClass[direction], popupCls.menu];
  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button as={'div'} className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
