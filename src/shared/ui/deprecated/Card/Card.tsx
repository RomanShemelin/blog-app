import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

import type { HTMLAttributes, ReactNode } from 'react';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
  max?: boolean
}

/**
 * устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */
export function Card (props: CardProps) {
  const { className, children, theme = CardTheme.NORMAL, max, ...otherProps } = props;

  return (
    <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>{children}</div>
  );
}
