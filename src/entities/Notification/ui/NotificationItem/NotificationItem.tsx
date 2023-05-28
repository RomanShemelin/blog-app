import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';

import { type Notification } from '../../model/types/notification';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface NotificationItemProps {
  className?: string
  item: Notification
}

export function NotificationItem (props: NotificationItemProps) {
  const { className, item } = props;

  const content = (
    <ToggleFeatures feature="isAppRedesigned"
     on={<Card
      className={classNames(cls.NotificationItem, {}, [className])}
    >
       <Text title={item.tittle} text={item.description}/>
     </Card>}
    off={<CardDeprecated
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <TextDeprecated title={item.tittle} text={item.description}/>
    </CardDeprecated>}/>

  )

  if (item.href) {
    return (
      <a className={cls.link} target={'_blank'} href={item.href} rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    content
  );
}
