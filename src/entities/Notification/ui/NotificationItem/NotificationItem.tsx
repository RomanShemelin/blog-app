import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';

import { type Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
  className?: string
  item: Notification
}

export function NotificationItem (props: NotificationItemProps) {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text title={item.tittle} text={item.description}/>
    </Card>
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
